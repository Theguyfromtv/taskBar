import React, { Component } from "react";
import "./App.css";
import  {BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Auth from './pages/Auth/Auth'
import Tasklist from "./pages/Tasklist/Tasklist"
import API from './utils/API/API'

class App extends Component {
  state={
    
    isAuthenticated:false
  }
  //this component ensures only authenticated users can access the tasks page
  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      this.state.isAuthenticated ? <Component {...props} />: <Redirect to='/' />
    )} />
  )
  //this component ensures a logged in user will be immdietly redirected to the tasks
  PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      this.state.isAuthenticated ? <Redirect to='/tasks' />: <Component {...props} />
    )} />
  )
  checkUser=()=>{
    //we check to see if there's a session cookie locally, if there is, we set the state to authenticated otherwise, we check with the server if there's a session
    if(document.cookie){
      const cookieArr=document.cookie.split("=")
      const cookey=cookieArr[0]
      console.log(cookey)
      if(cookey==="connect.sid"){
        this.setState({isAuthenticated:true})
        console.log(this.state.isAuthenticated)
      }
    }else {
      API.getUser().then((res)=>{
        if(res.user){
          this.setState({isAuthenticated:true})
        }
      })
    }
  }
  componentDidMount() {
    console.log(document.cookie)
    this.checkUser()
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <this.PublicRoute exact path='/'component={Auth}/>
            <this.PrivateRoute exact path='/tasks'component={Tasklist}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
