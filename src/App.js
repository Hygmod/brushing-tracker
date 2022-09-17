import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import StartButton from "./components/StartButton"
import ProgressBar from "./components/ProgressBar"

function App() {
  const [complete, setComplete] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function toggle() {
    console.log("click")
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setComplete((complete) => complete + 1)
      }, 1000)
    } else if (!isActive && complete !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <StartButton isActive={isActive} onClick={toggle} />
      <ProgressBar bgcolor="#fcba03" complete={complete} />
    </div>
  )
}

export default App
