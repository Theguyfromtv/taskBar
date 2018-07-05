import React, { Component } from 'react'
import API from "../../utils/API/API"

 class SignUp extends Component {
     state={
       //taking in all the values- both the length and composition of the username and password are validated, as well as the ability to submit and making sure helpertext doesn't appear until field is clicked
        username:"",
        userVal:false,
        userlength:false,
        userClicked:false,
        password:"",
        passVal:false,
        passlength:false,
        passClicked:false,
        confPassword:"",
        confVal:false,
        confClicked:false,
        submit:false
     }
     onUserChange=(event)=>{
       //Making sure the username only contains letters and numbers and is atleast 5 charecters long
       this.setState({username: event.target.value})
       const letterNumber = /^[0-9a-zA-Z]+$/;
       //settingtimeout to avoid sync issues
        setTimeout(()=>{
          if(this.state.username.match(letterNumber)&&this.state.username!==""){
            this.setState({userVal:true})
          }else{
            this.setState({userVal:false})
          }
          if(this.state.username.length>=5){
            this.setState({userlength:true})
          }else if(this.state.username.length<5){
            this.setState({userlength:false})
          }
          this.timeToSubmit()
        }, 100)

     }
     onUserClick=()=>{
       //making sure the helpertext only appears on click
       this.setState({userClicked:true})
     }
     onPassChange=(event)=>{
             //Making sure the password only contains letters and numbers and is atleast 8 charecters 
             this.setState({password: event.target.value})
             const letterNumber = /^[0-9a-zA-Z]+$/;
             //settingtimeout to avoid sync issues
              setTimeout(()=>{
                if(this.state.password.match(letterNumber)&&this.state.password!==""){
                  this.setState({passVal:true})
                }else{
                  this.setState({passVal:false})
                }
                if(this.state.password.length>=8){
                  console.log("long enough")
                  this.setState({passlength:true})
                }else if(this.state.password.length<8){
                  this.setState({passlength:false})
                }
                this.timeToSubmit()
              }, 100)
    }
    onPassClick=()=>{
      //making sure helpertext only appears on click
      this.setState({passClicked:true})
    }
    onConfChange=(event)=>{
      //Making sure the password and password confirmation match
      this.setState({confPassword: event.target.value})
      //settingtimeout to avoid sync issues
      setTimeout(()=>{
        if(this.state.password===this.state.confPassword){
          this.setState({confVal:true})
        }else{
          this.setState({confVal:false})
        }
        //check for submit
        this.timeToSubmit()
      }, 100)
    }
    onConfClick=()=>{
      this.setState({confClicked:true})
    }
    timeToSubmit=()=>{
      //this function allows users to submit the form once all the fields are validated
      if(this.state.userlength&&this.state.userVal&&this.state.passlength&&this.state.passVal&&this.state.confVal){
        this.setState({submit:true})
      }
    }
    clickSubmit=()=>{
      API.signUp(this.state.password,this.state.username).then(res=>{
        if(res.user){
          window.location.href="/tasks"
        }
      })
    }
  render() {
    return (
      <div>
        <div className="card login">
            <div className="card-body">
              <div className="text-center">
                Sign up
              </div>
              <hr/>
              <form>
                <div className="form-group">
                  <input type="Username" className={this.state.userClicked?this.state.userVal?this.state.userlength?"form-control is-valid":"form-control is-invalid 1":"form-control is-invalid 2":"form-control"} id="exampleInputUsername2" placeholder="Username" onChange={this.onUserChange} onFocus={this.onUserClick}/>
                <div className="invalid-feedback">
                  {this.state.userVal?this.state.userlength?"":"must be at least 5 characters":"must consist of only letters and numbers"}
                </div>
                </div>
                <div className="form-group">
                  <input type="password" className={this.state.passClicked?this.state.passVal?this.state.passlength?"form-control is-valid":"form-control is-invalid 1":"form-control is-invalid 2":"form-control"}  id="exampleInputPassword2" placeholder="Password" onChange={this.onPassChange} onFocus={this.onPassClick}/>
                  <div className="invalid-feedback">
                  {this.state.passVal?this.state.passlength?"":"must be at least 8 characters":"must consist of only letters and numbers"}
                </div>
                </div>
                <div className="form-group">
                  <input type="password" className={this.state.confClicked?this.state.confVal?"form-control is-valid":"form-control is-invalid":"form-control"} id="exampleInputPassword3" placeholder="Confirm Password"onChange={this.onConfChange} onFocus={this.onConfClick}/>
                  <div className="invalid-feedback">
                  {this.state.confVal?"":"passwords don't match"}
                </div>
                </div>
                <button type="submit" disabled={!this.state.submit?true:false} className="btn btn-primary" onClick={this.clickSubmit}>Submit</button>
              </form>
            </div>
          </div>
      </div>
    )
  }
}


export default SignUp