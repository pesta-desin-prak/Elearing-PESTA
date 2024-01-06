// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Make sure the path is correct relative to this file

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="side-slide-bar-wrapper">
        <div className="side-slide-bar">
          <div className="overlap">
            <div className="class-list">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="text-wrapper">Chemistry</div>
                  <img className="img" src="img/image-7.png" />
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="div">
                  <div className="rectangle"></div>
                  <div className="text-wrapper">Physics</div>
                  <img className="img" src="img/image-6.png" />
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap-group">
                  <div className="text-wrapper">Biology</div>
                  <img className="img" src="img/image-5.png" />
                </div>
              </div>
              <div className="class-list-2">
                <div className="overlap-group">
                  <div className="text-wrapper-2">Mathematics</div>
                  <img className="img" src="img/math-bg.png" />
                </div>
              </div>
            </div>
            <img className="line" src="img/line-17.svg" />
            <img className="line-2" src="img/line-18.svg" />
            <div className="text-wrapper-3">Classes</div>
            <div className="menu-list">
            <Link to="/">
              <div className="menu-list-2">
                <div className="overlap-group">
                  <div className="text-wrapper">Log Out</div>
                  <img className="group" src="img/group.png" />
                </div>
              </div>
            </Link>
              <div className="menu-list-2">
                <div className="overlap-group">
                  <div className="text-wrapper">Settings</div>
                  <img className="group" src="img/group.png" />
                </div>
              </div>
              <div className="menu-list-3">
                <div className="overlap-group">
                  <div className="text-wrapper">Discussion</div>
                  <img className="messages-icon" src="img/messages-icon.png" />
                </div>
              </div>
              <div className="menu-list-4">
                <div className="overlap-group">
                  <div className="text-wrapper">Profile</div>
                  <img className="person-icon" src="img/person-icon.png" />
                </div>
              </div>
              <div className="menu-list-5">
                <div className="overlap-2">
                  <div className="text-wrapper-2">Dashboard</div>
                  <img className="dashboad-icon" src="img/dashboad-icon.png" />
                </div>
              </div>
            </div>
            <img className="line-3" src="img/line-16.svg" />
            <div className="text-wrapper-4">Menu</div>
            <img className="menu-icon" src="src\assets\menu-icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;