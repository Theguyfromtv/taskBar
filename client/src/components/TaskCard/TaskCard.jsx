import React from 'react'

const TaskCard =(props)=> {
    return (
        <div>
            <div className="card text-left" style={{marginTop:"5px"}}>
                <div className="card-body">
                    <h4>{props.title}</h4>
                    <button className="btn btn-danger float-right" onClick={()=>props.delete(props.uid,props.tid)}><i className="fas fa-times"></i></button>
                    <p>due date: {props.dueDate}</p>
                    <p>description: {props.desc}</p>
                </div>
            </div>
        </div>
      )
}

export default TaskCard