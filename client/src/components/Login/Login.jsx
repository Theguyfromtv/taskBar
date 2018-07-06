import React, { Component } from 'react'
import API from "../../utils/API/API"

 class Login extends Component {
   state={
    username:"",
    password:"",
    submit:false
   }
   //once tehre's a change, we register it to the state
   onPassChange=(event)=>{
     this.setState({password:event.target.value}) 
      //check if we can submit
     this.timeToSubmit()    
   }
   onUserChange=(event)=>{
     this.setState({username:event.target.value})
     //check if we can submit
     this.timeToSubmit()
   }
   timeToSubmit=()=>{
    //once we have a username and password, we allow the user to submit the form, but only after a short time out to avoid sync issues
    setTimeout(() => {
      if(this.state.username.length>0&&this.state.password.length>0){
        this.setState({submit:true})
      }
      }, 100);
   }
   clickSubmit=()=>{
     //once all is well, we send the info to the backend
     API.logIn(this.state.password, this.state.username).then((res)=>{
       console.log("submitting")
       if(res.user){
         //if the data is correct, we redirect to the tasks page
         window.location.href="/tasks"
         //if there's an error we find the error and set it to display it
       }else if(res.error){
         if(res.error==="can't find that username"){
           const message="can't find that username"
           this.props.onError(message)
         }else if(res.error==="wrong password"){
           const message="wrong password"
           this.props.onError(message)
         }
       }
     })
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
                  <input type="username" className="form-control" id="exampleInputUsername1" placeholder="Enter email" onChange={this.onUserChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onPassChange}/>
                </div>
                <button type="submit" disabled={!this.state.submit?true:false} className="btn btn-primary" onClick={this.clickSubmit}>Submit</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}


export default Login