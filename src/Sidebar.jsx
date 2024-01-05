import React from 'react';
import './Sidebar.css'; // Make sure the path is correct relative to this file

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="side-slide-bar-wrapper">
        <div className="side-slide-bar">
          <div class="overlap">
            <div class="class-list">
              <div class="overlap-group-wrapper">
                <div class="overlap-group">
                  <div class="text-wrapper">Chemistry</div>
                  <img class="img" src0="img/image-7.png" />
                </div>
              </div>
              <div class="overlap-wrapper">
                <div class="div">
                  <div class="rectangle"></div>
                  <div class="text-wrapper">Physics</div>
                  <img class="img" src="img/image-6.png" />
                </div>
              </div>
              <div class="div-wrapper">
                <div class="overlap-group">
                  <div class="text-wrapper">Biology</div>
                  <img class="img" src="img/image-5.png" />
                </div>
              </div>
              <div class="class-list-2">
                <div class="overlap-group">
                  <div class="text-wrapper-2">Mathematics</div>
                  <img class="img" src="img/math-bg.png" />
                </div>
              </div>
            </div>
            <img class="line" src="img/line-17.svg" />
            <img class="line-2" src="img/line-18.svg" />
            <div class="text-wrapper-3">Classes</div>
            <div class="menu-list">
              <div class="menu-list-2">
                <div class="overlap-group">
                  <div class="text-wrapper">Settings</div>
                  <img class="group" src="img/group.png" />
                </div>
              </div>
              <div class="menu-list-3">
                <div class="overlap-group">
                  <div class="text-wrapper">Discussion</div>
                  <img class="messages-icon" src="img/messages-icon.png" />
                </div>
              </div>
              <div class="menu-list-4">
                <div class="overlap-group">
                  <div class="text-wrapper">Profile</div>
                  <img class="person-icon" src="img/person-icon.png" />
                </div>
              </div>
              <div class="menu-list-5">
                <div class="overlap-2">
                  <div class="text-wrapper-2">Dashboard</div>
                  <img class="dashboad-icon" src="img/dashboad-icon.png" />
                </div>
              </div>
            </div>
            <img class="line-3" src="img/line-16.svg" />
            <div class="text-wrapper-4">Menu</div>
            <img class="menu-icon" src="src\assets\menu-icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
