import React from 'react'

const CompleteButton = (props) => {
  return (
    <button onClick={props.onClick} disabled={props.disabled}> FINSHED! </button>
  )
}

export default CompleteButton