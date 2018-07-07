import React, { Component } from 'react'
import API from '../../utils/API/API'
import AuthContext from '../AuthContext/AuthContext'

class AuthProvider extends Component {
  state={
    currentUser:{},
    isAuthenticated:false,
    alert:false,
    alertMessage:"",
  }
  logIn=(password, username)=>{
    //once all is well, we send the info to the backend
    API.logIn(password,username).then((res)=>{
      console.log(res)
        //if a user we set the state
        if(res.data.user){
        this.setState({currentUser:res.data.user})
        this.setState({isAuthenticated:true})
       }else{
         //here we handle errors
       }
       })
  }
  signUp=(password, username)=>{
    //our sign up function also logs in the user
    API.signUp(password,username).then(res=>{
      if(res.data.user){
        //if everything works we set the state
        this.setState({currentUser:res.data.user})
        this.setState({isAuthenticated:true})
      }else{
        //here we handle errors

      }
    })
  }
  logOut=()=>{
      //logging out of the app
      API.logOut().then(()=>{
        //reset the user and set authentication to false
        this.setState({currentUser:{}})
        this.setState({isAuthenticated:false})
      })
  }
  userUpdate=()=>{

  }
  checkUser=()=>{
  //when the page loads, we make an axios call to the server to check if there's an active session, if there is, we add that to the state 
  API.getUser().then((res)=>{
    console.log(res)
    //if we get a user, we set that in the state
    if(res.data.user){
      console.log(res.data.user)
      this.setState({currentUser:res.data.user})
      this.setState({isAuthenticated:true})
      }
  })
  }
  checkError=()=>{

  }
  componentDidMount(){
    this.checkUser()
    this.checkError()
  }
  render() {
    return (
        <AuthContext.Provider value={{
          state:this.state,
          logIn:this.logIn,
          signUp:this.signUp,
          logOut:this.logOut}}>
          {this.props.children}
        </AuthContext.Provider>
    )
  }
}


export default AuthProvider
