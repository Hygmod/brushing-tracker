import React, { useState, useEffect } from "react"

const ProgressBar = (props) => {

  const containerStyles = {
    height: 20,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    transition: "width 0.5s ease-in-out",
    height: "100%",
    width: `${props.complete/1.2}%`,
    backgroundColor: `rgba(${props.bgColorRed},${props.bgColorGreen},${props.bgColorBlue},1)`,
    borderRadius: "inherit",
    textAlign: "right",
  }

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${props.complete}`}</span>
      </div>{" "}
    </div>
  )
}

export default ProgressBar
