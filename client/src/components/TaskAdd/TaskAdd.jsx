import React from 'react'

const TaskAdd=(props) => {
  return (
    <div>
      <div className="card" onClick={props.onClick}>
        <div className="card-body">
            <h1><i className="fas fa-plus-square"></i></h1>
        </div>
      </div>
    </div>
  )
}


export default TaskAdd