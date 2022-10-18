import React from "react"

const LoginForm = (props) => {
  return (
    <div>
      <div>
        <h1>Signup Form</h1>
        <input type="email" placeholder="Email" onChange={(e)=>props.onChangeSignupUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => props.onChangeSignupPassword(e.target.value)} />
        <button onClick={props.onClickSignup}>Submit</button>
      </div>
      <div>
        <h1>Login Form</h1>
        <input type="email" placeholder="Email" onChange={(e)=>props.setLoginUsername(e)} />
        <input type="password" placeholder="Password" onChange={(e) => props.setLoginPassword(e.target.value)} />
        <button onClick={props.onClickLogin}>Submit</button>
      </div>
    </div>
  )
}

export default LoginForm
