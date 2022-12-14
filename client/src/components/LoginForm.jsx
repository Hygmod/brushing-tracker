import React from "react"

const LoginForm = (props) => {
  return (
    <div>
      <div>
        <h1>Signup Form</h1>
        <input type="email" placeholder="Email" onChange={(e) => props.onChangeSignupEmail(e.target.value)} />
        <input type="text" placeholder="Username" onChange={(e) => props.onChangeSignupUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => props.onChangeSignupPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" onChange={(e) => props.onChangeSignupConfirmPassword(e.target.value)} />
        <button onClick={props.onClickSignup}>Submit</button>
      </div>
      <div>
        <h1>Login Form</h1>
        <input type="email" placeholder="Email" id="exampleInputEmail1" name="email" onChange={(e) => props.onChangeLoginUsername(e.target.value)} />
        <input type="password" placeholder="Password" id="password" name="password" onChange={(e) => props.onChangeLoginPassword(e.target.value)} />
        <button onClick={props.onClickLogin}>Submit</button>
      </div>
    </div>
  )
}

export default LoginForm
