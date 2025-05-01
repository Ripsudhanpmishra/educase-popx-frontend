// AccountSettings.jsx
import React from 'react';
import '../App.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Account Settings</h2>
      <div className="account-card">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <img
              src="https://th.bing.com/th/id/OIP.PKlD9uuBX0m4S8cViqXZHAHaHa?rs=1&pid=ImgDetMain"
              alt="Profile"
              className="profile-image"
            />
            <div className="camera-icon">📷</div>
          </div>
          <div className="profile-info">
            <h3 className="profile-name">Marry Doe</h3>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
