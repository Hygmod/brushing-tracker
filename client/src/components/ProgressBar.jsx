import React, { useState, useEffect } from "react"

const ProgressBar = (props) => {
  const containerStyles = {
    height: 50,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    display: "flex",
    transition: "width 0.5s ease-in-out",
    height: "100%",
    width: `${props.timer/1.2}%`,
    backgroundColor: `rgba(${props.bgColor.r},${props.bgColor.g},${props.bgColor.b},1)`,
    borderRadius: "inherit",
    textAlign: "right",
    justifyContent: "right",
    alignItems: "center"
  }

  const labelStyles = {

    padding: 5,
    color: "white",
    fontWeight: "bold",
      }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${props.timer}`}</span>
      </div>{" "}
    </div>
  )
}

export default ProgressBar
