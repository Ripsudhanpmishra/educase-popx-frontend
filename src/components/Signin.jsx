import React from "react";
import "../App.css";

function Signin() {
    const goToDashboard = (event) => {
        event.preventDefault();           // Prevent default form submissio
        // Perform any necessary validation or authentication here
        window.location.href = "/dashboard";
    };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h1 className="signin-title">Signin to your PopX account</h1>
        <p className="signin-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="signin-form">
          <div className="input-group">
            <label className="input-label" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
            //   required
              className="input-field"
              placeholder="Enter password"
            />
          </div>

          <button className="signin-button" onClick={goToDashboard}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
