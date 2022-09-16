import React,{ useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import StartButton from "./components/StartButton"
import ProgressBar from "./components/ProgressBar"

function App() {
  const [complete, setComplete] = useState(0);

  useEffect(() => {
    setInterval(() => {setComplete(complete => complete + 1)}, 1000);
  }, []);

  return (
    <div className="App">
      <StartButton />
      <ProgressBar complete={complete} />
    </div>
  )
}

export default App
