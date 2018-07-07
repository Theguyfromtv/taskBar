import React, { Component } from 'react'
import AuthContext from '../../components/AuthContext/AuthContext'
import TaskAdd from '../../components/TaskAdd/TaskAdd';
import TaskForm from '../../components/TaskForm/TaskForm'
import TaskCard from '../../components/TaskCard/TaskCard'
import DoneTaskCard from '../../components/DoneTaskCard/DoneTaskCard'

class Tasklist extends Component {
 
    render() {
        return (
      
                <div>
                <div>
                    <AuthContext.Consumer>
                        {context=>
                            <React.Fragment>
                                <div className="container">
                                    <div className="row" style={{padding:"10px"}}>
                                        <div className="col-12">
                                            <h3 className="float-left">{context.state.currentUser.username}'s Tasks</h3>
                                            <button className="btn btn-primary float-right" onClick={context.logOut}>Log Out</button> 
                                        </div>  
                                    </div>
                                        <div className="row">
                                            <div className="col-12">
                                                {context.state.addingTask?<TaskForm/>:<TaskAdd onClick={context.addTaskToggle}/>}
                                                {context.state.currentUser.tasks.length>0?context.state.currentUser.tasks.map(task=>(
                                                <TaskCard 
                                                key={task._id}
                                                tid={task._id}
                                                uid={context.state.currentUser._id}
                                                title={task.title}
                                                dueDate={task.dueDate}
                                                desc={task.description}
                                                delete={context.deleteTask}/>
                                                )):
                                                <h3 style={{padding:"10px"}}>No tasks here! Go have a drink!</h3>}
                                            </div>
                                        </div>   
                                    </div>
                            </React.Fragment>
                        }
                    </AuthContext.Consumer>
                </div>
            </div>

        )
    }
}

export default Tasklist