import React, { Component } from "react";
import "./App.css";
import  {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Auth from './pages/Auth/Auth'
import Tasklist from "./pages/Tasklist/Tasklist"
import AuthProvider from './components/AuthProvider/AuthProvider'
import AuthContext from './components/AuthContext/AuthContext'


class App extends Component {


  render() {
    return (
      <AuthProvider>
        <div className="App">
        <AuthContext.Consumer>
          {context=> 
          <Router>
            <Switch>
              <Route path='/'component={context.state.isAuthenticated?Tasklist:Auth}/>
            </Switch>
          </Router>}
        </AuthContext.Consumer>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
