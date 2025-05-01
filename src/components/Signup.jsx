import React from "react";
import "../App.css";

function Signup() {
    const goToDashboard = (event) => {
        event.preventDefault();             // Prevent default form submission
        // Perform any necessary validation or authentication here
        window.location.href = "/dashboard";
    };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Create your PopX account</h1>

        <form className="signup-form">
          <div className="input-group">
            <label className="input-label" htmlFor="fullName">Full Name*</label>
            <input type="text" id="fullName" className="input-field" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="phone">Phone number*</label>
            <input type="text" id="phone" className="input-field" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="email">Email address*</label>
            <input type="email" id="email" className="input-field" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password">Password*</label>
            <input type="password" id="password" className="input-field" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="company">Company name</label>
            <input type="text" id="company" className="input-field" placeholder="Marry Doe" />
          </div>

          <div className="input-group">
            <p className="input-label">Are you an Agency?*</p>
            <div className="radio-group">
              <label className="radio-option">
                <input type="radio" name="agency" value="yes" />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input type="radio" name="agency" value="no" />
                <span>No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="signup-button" onClick={goToDashboard}>Create Account</button>
        </form>
      </div>
    </div>
  );
}


export default Signup;
