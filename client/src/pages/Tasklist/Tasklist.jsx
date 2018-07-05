import React, { Component } from 'react'
import Logout from '../../components/Logout/Logout'
import API from '../../utils/API/API'

export default class componentName extends Component {
    state={
        currentUser:{}
    }
    componentDidMount(){
        //when the page loads, we make an axios call to the server to check if there's an active session, if there is, we redirect to the 
        API.getUser().then((res)=>{
            //if we get a user, we save the user to the state
            if(res.data.user){
                this.setState({currentUser:res.data.user})
            }else{
                //otherwise make sure they go to the login page
                window.location.href="/"
            }
            })
    }
    logOut=()=>{
        API.logOut().then(()=>{
            window.location.href="/"
        })
    }
  render() {
    return (
      <div>
        <h3>{this.state.currentUser.username}'s Tasks</h3>
        <Logout onClick={this.logOut}/>
      </div>
    )
  }
}
