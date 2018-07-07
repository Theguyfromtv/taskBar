import React, { Component } from 'react'
import AuthContext from '../AuthContext/AuthContext'


class TaskForm extends Component {
  state={
    title:"",
    description:"",
    dueDate:"",
    submit:false
  }
  onTitleChange=(event)=>{
    this.setState({title:event.target.value})
    this.timeToSubmit()
  }
  onDescChange=(event)=>{
    this.setState({description:event.target.value})
    this.timeToSubmit()
  }
  onDueChange=(event)=>{
    this.setState({dueDate:event.target.value})
    this.timeToSubmit()
  }
  timeToSubmit=()=>{
    setTimeout(() => {
    if(this.state.title.length>0&&this.state.description.length>0&&this.state.dueDate.length>0){
        this.setState({submit:true})
      }
    }, 10);
  }
  render() {
  return (
  <AuthContext.Consumer>
    {context=>
       <div>
       <div className="card">
         <div className="card-header">
               <h5 className="float-left">Add a new task</h5>
               <button className="btn btn-danger float-right" onClick={context.addTaskToggle}><i className="fas fa-times"></i></button>
           </div>
           <div className="card-body">
             <div className="form-group">
               <input type="text" className="form-control" id="exampleInputTitle" placeholder="Title" onChange={this.onTitleChange}/>
             </div>
             <div className="form-group">
               <input type="text" className="form-control" id="exampleInputDueDate" placeholder="Due Date" onChange={this.onDueChange}/>
             </div>
             <div className="form-group"></div>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" onChange={this.onDescChange}></textarea>
               <button disabled={!this.state.submit?true:false} type="submit float-right" className="btn btn-primary" onClick={()=>context.newTask(context.state.currentUser._id,this.state.title,this.state.description, this.state.dueDate)}>Submit</button>
           </div>
       </div>
     </div>
    }
  </AuthContext.Consumer>
  )
  }
}


export default TaskForm