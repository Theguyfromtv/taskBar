import React, { Component } from 'react'
import Super from '../../components/Super/Super'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import Alert from '../../components/Alert/Alert'

class Auth extends Component {
  state={
    loggedIn:false,
    alert:false,
    alertMessage:""
  }
  render() {
    return (
      <div>
          <div className="container">
            <div className="row">
              <div className="col-12 super">
                <Super/>
              </div>
            </div>
            <div className="row" >

            </div>
          </div>
      </div>
    )
  }
}

export default Auth