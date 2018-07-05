import React, { Component } from 'react'

export default class componentName extends Component {
    componentDidMount(){
        //when the page loads, we make an axios call to the server to check if there's an active session, if there is, we redirect to the 
        /*API.getUser().then((res)=>{
            //if we get a user, we save the user to the state
            if(res.user){
                this.setState({currentUser:res.user})
                this.setState({user:true})
            }else if(!res.user){
                //otherwise make sure they go to the login page
                window.location.href="/"
            }
            })*/
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
