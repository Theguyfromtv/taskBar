import React, { Component } from 'react'
import API from '../../utils/API/API'
import AuthContext from '../AuthContext/AuthContext'

class AuthProvider extends Component {
  state={
    currentUser:{},
    isAuthenticated:false,
    alert:false,
    alertMessage:"",
    //this is to make sure we don't render before completeing the check user call
    userChecked:false,
    //this is to determine the interface mode of the tasklist page
    addingTask:false
  }
  addTaskToggle=()=>{
    if(this.state.addingTask){
      this.setState({addingTask:false})
    }else if(!this.state.addingTask){
      this.setState({addingTask:true})
    }
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
         if(res.data.error==="username"){
           console.log("username")
          this.setState({alert:true})
          this.setState({alertMessage:"Wrong Username!"})
        }else if(res.data.error==="password"){
          console.log("password")
          this.setState({alert:true})
          this.setState({alertMessage:"Wrong Password!"})
        }
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
      }else if(res.data.error){
        if(res.data.error==="usernameExists"){
          console.log("usernameExists")
          this.setState({alert:true})
          this.setState({alertMessage:"That Username is Taken, pick another one!"})
          setTimeout(() => {
            this.setState({userChecked:true})
          }, 10);
        }
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
  //create a new task
  newTask=(uid,tid,title, description,dueDate)=>{
    API.newTask(uid,tid,title,description,dueDate).then((res)=>{
      console.log(res)
      //once it's created, we push the updated user object to the state
      this.setState({currentUser:res.data.user})
      this.addTaskToggle()
    })
  }
  //delete task
  deleteTask=(uid,tid)=>{
    API.deleteTask(uid,tid).then((res)=>{
      console.log(res)
      //once it's deleted, we push the updated user object to the state
      this.setState({currentUser:res.data.user})
    })
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
      //making sure to set the state that user is checked, after we set the state of the current user
      setTimeout(() => {
        this.setState({userChecked:true})
      }, 10);
      }else{
        this.setState({userChecked:true})
      }
  })
  }
  componentDidMount(){
    this.checkUser()
  }
  render() {
    return (
        <AuthContext.Provider value={{
          state:this.state,
          logIn:this.logIn,
          signUp:this.signUp,
          logOut:this.logOut,
          newTask:this.newTask,
          editTask:this.editTask,
          doneTask:this.doneTask,
          deleteTask:this.deleteTask,
          addTaskToggle:this.addTaskToggle
          }}>
          {this.props.children}
        </AuthContext.Provider>
    )
  }
}


export default AuthProvider
