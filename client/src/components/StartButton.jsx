import React, { useState, useEffect } from "react"

const StartButton = (props) => {

  return (
    <div>
        <p>Hello World</p>
        <button onClick={props.onClick}>
        {props.logout === 'logout' ? 'Log Out' : props.isActive ? 'Pause' : 'Begin'}
        </button>
    </div>
  )
}

export default StartButton