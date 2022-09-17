import React, { useState, useEffect } from "react"

const StartButton = (props) => {

// const toggle = () => {
//   console.log('click')
//   //props.isActive=!props.isActive
// }
  return (
    <div>
        <p>Hello World</p>
        <button onClick={props.onClick}>
        {props.isActive ? 'Pause' : 'Begin'}
        </button>
    </div>
  )
}

export default StartButton