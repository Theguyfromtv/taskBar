import React, { Component } from 'react'
import Logout from '../../components/Logout/Logout'
import API from '../../utils/API/API'

export default class componentName extends Component {
    state={
        currentUser:{}
    }
    componentDidMount(){
        //when the page loads, we set the current user from the props
        API.getUser().then((res)=>{
            console.log(res)
            //if we get a user, we redirect them to the tasklist page
            console.log(res.data.user)
            this.setState({currentUser:res.data.user})            
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
