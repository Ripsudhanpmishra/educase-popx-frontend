import React from 'react'
import '../App.css'

export default function Welcome() {
  const goToSignup = () => {
    window.location.href = '/signup'
  }

  const goToSignin = () => {
    window.location.href = '/signin'
  }

  return (
    <div className="container">
    <div className="content">
      <h1 className="title">Welcome to PopX</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className="button-group">
        <button className="create-account" onClick={goToSignup}>Create Account</button>
        <button className="login" onClick={goToSignin}>Already Registered? Login</button>
      </div>
    </div>
  </div>
  )
}
