import React from 'react'

const Logout=(props) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={props.onClick}>Log Out</button>
    </div>
  )
}


export default Logout