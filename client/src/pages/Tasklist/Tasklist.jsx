import React, { Component } from 'react'
import AuthContext from '../../components/AuthContext/AuthContext'

class Tasklist extends Component {
    state={
        currentUser:{},
    }
    render() {
        return (
      
                <div>
                <div>
                    <AuthContext.Consumer>
                        {context=>
                            <React.Fragment>
                                <h3>{context.state.currentUser.username}'s Tasks</h3>
                                <button className="btn btn-primary" onClick={context.logOut}/>
                            </React.Fragment>
                        }
                    </AuthContext.Consumer>
                </div>
            </div>

        )
    }
}

export default Tasklist