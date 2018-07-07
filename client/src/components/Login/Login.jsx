import React, { Component } from 'react'
import AuthContext from '../../components/AuthContext/AuthContext'

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
  render() {
    return (
      <AuthContext.Consumer>
        {context=>
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
                 <button type="button" disabled={!this.state.submit?true:false} className="btn btn-primary" onClick={()=>context.logIn(this.state.password,this.state.username)}>Log In</button>
               </form>
             </div>
           </div>
       </div>
        }
      </AuthContext.Consumer>

    )
  }
}


export default Login