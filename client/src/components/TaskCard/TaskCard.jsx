import React, { Component } from 'react'

const TaskCard =(props)=> {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3 className="float-left">{this.props.title}</h3>
                    <button className="btn btn-danger float-right" onClick={()=>this.props.delete(this.props.uid,this.props.tid)}><i className="fas fa-times"></i></button>
                    <p>due date: {props.dueDate}</p>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
      )
}

export default TaskCard