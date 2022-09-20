import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import StartButton from "./components/StartButton"
import ProgressBar from "./components/ProgressBar"

function App() {
  const [complete, setComplete] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [bgColorRed, setBgColorRed] = useState(255)
  const [bgColorGreen, setBgColorGreen] = useState(0)
  const [bgColorBlue, setBgColorBlue] = useState(0)

  const totalTime = 120

  function toggle() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = null
    if (isActive && complete < totalTime) {
      interval = setInterval(() => {
        if (complete >= totalTime-1) {
          setBgColorRed((bgColorRed) => 0)
          setBgColorGreen((bgColorGreen) => 255)
          setBgColorBlue((bgColorBlue) => 0)
        } else if (complete > 90) {
          setBgColorRed((bgColorRed) => 50)
          setBgColorGreen((bgColorGreen) => 150)
          setBgColorBlue((bgColorBlue) => 100)
        } else if (complete > 60) {
          setBgColorRed((bgColorRed) => 100)
          setBgColorGreen((bgColorGreen) => 100)
          setBgColorBlue((bgColorBlue) => 175)
        } else if (complete > 30) {
          setBgColorRed((bgColorRed) => 200)
          setBgColorGreen((bgColorGreen) => 50)
          setBgColorBlue((bgColorBlue) => 100)
        } else {
          setBgColorRed((bgColorRed) => 255)
          setBgColorGreen((bgColorGreen) => 0)
          setBgColorBlue((bgColorBlue) => 0)
        }

        setComplete((complete) => complete + 1)
      }, 1000)
    } else if (!isActive && complete !== 0) {
      clearInterval(interval)
    } else if (complete >= totalTime) {
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, complete, bgColorRed])

  return (
    <div className="App">
      <StartButton isActive={isActive} onClick={toggle} />
      <ProgressBar bgColorRed={bgColorRed} bgColorGreen={bgColorGreen} bgColorBlue={bgColorBlue} complete={complete} />
    </div>
  )
}

export default App
