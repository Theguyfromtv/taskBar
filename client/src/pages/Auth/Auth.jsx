import React, { Component } from 'react'
import Super from '../../components/Super/Super'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import Alert from '../../components/Alert/Alert'
import API from "../../utils/API/API"

class Auth extends Component {
  state={
    alert:false,
    alertMessage:""
  }
  componentDidMount(){
    //when the page loads, we make an axios call to the server to check if there's an active session, if there is, we redirect to the 
    API.getUser().then((res)=>{
      console.log(res)
      //if we get a user, we redirect them to the tasklist page
      if(res.data.user){
        console.log(res.data.user)
        window.location.href="/tasks"
      }
    })
  }
  render() {
    return (
      <div>
          <div className="container">
          {this.state.alert&&<Alert text={this.state.alertMessage}/>}
            <div className="row">
              <div className="col-12 super">
                <Super/>
              </div>
            </div>
            <div className="row">
                <div className="col-6">
                  <Login/>
                </div>
                <div className="col-6">
                  <SignUp/>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Auth