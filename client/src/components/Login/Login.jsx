import React, { Component } from 'react'

 class Login extends Component {
   state={
    username:"",
    password:"",
    submit:false
   }
  render() {
    return (
      <div>
         <div className="card login">
            <div className="card-body">
              <div className="text-center">
                Log In
              </div>
              <hr/>
              <form>
                <div className="form-group">
                  <input type="username" className="form-control" id="exampleInputUsername1" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" disabled={!this.state.submit?true:false} className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}


export default Login