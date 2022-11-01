import React, { useState, useEffect } from "react"
import "./App.css"
import axios from "axios"
import StartButton from "./components/StartButton"
import ProgressBar from "./components/ProgressBar"
import CompleteButton from "./components/CompleteButton"
import LoginForm from "./components/LoginForm"


function App() {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [bgColor, setBgColor] = useState({ r: 255, g: 0, b: 0, a: 1 })
  const [complete, setComplete] = useState(0)

  const [signupUsername, setSignupUsername] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")


  const signup = () => {
    console.log(`http://localhost:2121/signup`)
    axios({
      method: "post",
      url: `http://localhost:2121/signup`,
      data: {
        username: signupUsername,
        password: signupPassword,
        confirmPassword: signupConfirmPassword,
      },
      withCredentials: true,
    }).then((res) => console.log(res))
  }
  const login = () => {
    axios({
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
              },
      withCredentials: true,
      url: `http://localhost:${process.env.PORT}/login`,
    }).then((res) => console.log(res))
  }

  const totalTime = 120

  function toggleActive() {
    setIsActive(!isActive)
  }

  function changeColor() {
    let redChange = -5
    let greenChange = 0
    let blueChange = 0
    if (timer >= (totalTime * 3) / 4 - 1) {
      if (timer === (totalTime * 3) / 4 - 1) {
        bgColor.r = 0
        bgColor.g = 100
        bgColor.b = 0
      }
      redChange = 0
      greenChange = 5
      blueChange = 0
    } else if (timer >= (totalTime * 2) / 4 - 1) {
      if (timer === (totalTime * 2) / 4 - 1) {
        bgColor.r = 255
        bgColor.g = 50
        bgColor.b = 0
      }
      redChange = 0
      greenChange = 5
      blueChange = 0
    } else if (timer >= (totalTime * 1) / 4 - 1) {
      if (timer === (totalTime * 1) / 4 - 1) {
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
    if (timer >= totalTime) {
      setComplete(true)
    }
  }, [timer])

  useEffect(() => {
    let interval = null

    const newColor = changeColor()

    if (isActive && timer < totalTime) {
      interval = setInterval(() => {
        setBgColor((bgColor) => ({ ...bgColor, ...newColor }))
        setTimer((complete) => complete + 1)
      }, 1000)
    } else if (!isActive && timer !== 0) {
      clearInterval(interval)
    } else if (timer >= totalTime) {
      setIsActive(false)
    }
    return () => clearInterval(interval)
  }, [isActive, timer])

  return (
    <div className="App">
      <LoginForm onClickSignup={signup} onClickLogin={signup} onChangeSignupUsername={setSignupUsername} onChangeSignupPassword={setSignupPassword} onChangeSignupConfirmPassword={setSignupConfirmPassword} onChangeLoginUsername={setLoginUsername} onChangeLoginPassword={setLoginPassword} />
      <StartButton isActive={isActive} onClick={toggleActive} />
      <ProgressBar bgColor={bgColor} timer={timer} />
      <CompleteButton disabled={!complete} />
    </div>
  )
}

export default App
