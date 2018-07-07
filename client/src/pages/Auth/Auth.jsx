import React from 'react'
import Super from '../../components/Super/Super'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import Alert from '../../components/Alert/Alert'

const Auth=()=> {
    return (
      <div>
          <div className="container">
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


export default Auth