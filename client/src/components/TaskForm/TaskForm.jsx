import React, { Component } from 'react'
import AuthContext from '../AuthContext/AuthContext'


class TaskForm extends Component {
  state={
    title:"",
    description:"",
    dueDate:"",
    day:"",
    dayBool:false,
    month:"",
    monthBool:false,
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
  onDayChange=(event)=>{
    this.setState({day:event.target.value})
    this.dueChange()
  }
  onMonthChange=(event)=>{
    this.setState({month:event.target.value})
    this.dueChange()
  }
  dueChange=()=>{
    setTimeout(() => {
      if(this.state.day>0&&this.state.month>0){
        const newDueDate= this.state.month+"/"+this.state.day
        this.setState({dueDate:newDueDate})
        this.timeToSubmit()
      }
    }, 100);
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
             <label htmlFor="dueDate">Due Date:</label>
             <div className="form-row align-items-left" id="dueDate"style={{marginBottom:"10px"}}>
              <div className="col-auto">
                  <label htmlFor="monthSelect">Month</label>
                  <select className="form-control" id="monthSelect" onChange={this.onMonthChange}>
                    <option>Choose a month</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>
                <div className="col-auto">
                  <label htmlFor="daySelect">Date</label>
                  <select className="form-control" id="day" onChange={this.onDayChange}>
                    <option>Choose a day</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>             
              </div>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Description" onChange={this.onDescChange}></textarea>
               <button style={{margin:"10px"}} disabled={!this.state.submit?true:false} type="submit float-right" className="btn btn-primary" onClick={()=>context.newTask(context.state.currentUser._id,this.state.title,this.state.description, this.state.dueDate)}>Submit</button>
           </div>
       </div>
     </div>
    }
  </AuthContext.Consumer>
  )
  }
}


export default TaskForm