import React, { useState, useEffect } from "react"
import "./App.css"
import StartButton from "./components/StartButton"
import ProgressBar from "./components/ProgressBar"

function App() {
  const [complete, setComplete] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [bgColor, setBgColor] = useState({ r: 255, g: 0, b: 0, a: 1 })

  const totalTime = 120

  function toggle() {
    setIsActive(!isActive)
  }

  function changeColor(){
    let redChange = -5
    let greenChange = 0
    let blueChange = 0
    if (complete >= (totalTime * 3) / 4 - 1) {
      if (complete === (totalTime * 3) / 4 - 1) {
        bgColor.r = 0
        bgColor.g = 100
        bgColor.b = 0
      }
      redChange = 0
      greenChange = 5
      blueChange = 0
      
    } else if (complete >= (totalTime * 2) / 4 - 1) {
      if (complete === (totalTime * 2) / 4 - 1) {
        bgColor.r = 255
        bgColor.g = 50
        bgColor.b = 0
      }
      redChange = 0
      greenChange = 5
      blueChange = 0
    } else if (complete >= (totalTime * 1) / 4 - 1) {
      if (complete === (totalTime * 1) / 4 - 1) {
        bgColor.r = 0
        bgColor.g = 0
        bgColor.b = 100
      }
      redChange = 0
      greenChange = 0
      blueChange = 5
    }

    return { r: bgColor.r + redChange, g: bgColor.g + greenChange, b: bgColor.b + blueChange, a: 1 }
  }

  useEffect(() => {
    let interval = null

    const newColor = changeColor()

    if (isActive && complete < totalTime) {
      interval = setInterval(() => {
        setBgColor((bgColor) => ({ ...bgColor, ...newColor }))
        setComplete((complete) => complete + 1)
      }, 1000)
    } else if (!isActive && complete !== 0) {
      clearInterval(interval)
    } else if (complete >= totalTime) {
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
