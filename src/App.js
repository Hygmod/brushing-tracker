import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import StartButton from "./components/StartButton"
import ProgressBar from "./components/ProgressBar"

function App() {
  const [complete, setComplete] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [bgColor, setBgColor] = useState({ red: 255, green: 0, blue: 0, alpha: 1 })

  function toggle() {
    setIsActive(!isActive)
  }

  useEffect(() => {
console.log(bgColor)
    let interval = null
    if (isActive && complete < 180) {
      interval = setInterval(() => {
        setBgColor((bgColor) => `{ red: ${bgColor.red}, green: 0, blue: 0, alpha: 1 }`)
        setComplete((complete) => complete + 1)
      }, 1000)
    } else if (!isActive && complete !== 0) {
      clearInterval(interval)
    } else if (complete >= 180) {
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, complete, bgColor])

  return (
    <div className="App">
      <StartButton isActive={isActive} onClick={toggle} />
      <ProgressBar bgColor={bgColor} complete={complete} />
    </div>
  )
}

export default App
