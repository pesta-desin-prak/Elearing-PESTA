/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import DashboardStudent from "./DashboardStudent";
import Assignment from "./Assignment";
import ViewAssignment from "./ViewAssignment";
import InputAssignment from "./InputAssignment";
import InputMaterial from "./InputMaterial";
import DetailInput from "./DetailInput";
import AssignmentStudent from "./AssignmentStudent";
import ViewStudent from "./ViewStudent";
import Login from "./Login";
import "./dashboard.css";
import "./Sidebar.css";
import "./Navbar.css";

function Header({ username }) {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src="/src/assets/logo-2.png" alt="Pesta Logo" />
        </div>
        {username && (
          <p className="username" style={{ fontWeight: "bold" }}>
            {username}
          </p>
        )}
      </div>
    </>
  );
}

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarClose, setSidebarClose] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setSidebarClose(!sidebarClose);
  };

  return (
    <>
      <div className="navbar">
        <ul>
          <div className="menu" onClick={toggleSidebar}>
            <li>
              <a href="#">
                <img src="src/assets/menu-icon.png" alt="burger-menu" />
              </a>
            </li>
          </div>
          <li className="item">
            <a href="student" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\dashboard-icon.png" alt="dashboard" />
            </a>
          </li>
          <li className="item">
            <a href="#" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\person-icon.png" alt="person" />
            </a>
          </li>
          <li className="item">
            <a href="#" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\messages-icon.png" alt="messages" />
            </a>
          </li>
          <li className="item">
            <a href="#" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\settings-icon.png" alt="settings" />
            </a>
          </li>
          <div className="book">
            <li>
              <a href="#" style={{ color: "#FF8E3C" }}>
                <img src="src\assets\classes-icon.png" alt="classes" />
              </a>
            </li>
          </div>
        </ul>
      </div>
      <div className={`Sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="side-slide-bar-wrapper">
          <div className="scrollable-content">
            <div className="side-slide-bar">
            <div class="overlap">
              <div class="class-list">
                <div class="overlap-group-wrapper">
                  <div class="overlap-group">
                    <div class="text-wrapper">Chemistry</div>
                    <img class="img" src="src/assets/chemistry.png" />
                  </div>
                </div>
                <div class="overlap-wrapper">
                  <div class="div">
                    <div class="rectangle"></div>
                    <div class="text-wrapper">Physics</div>
                    <img class="img" src="src/assets/physics.png" />
                  </div>
                </div>
                <div class="div-wrapper">
                  <div class="overlap-group">
                    <div class="text-wrapper">Biology</div>
                    <img class="img" src="src/assets/biology.png" />
                  </div>
                </div>
                <div class="class-list-2">
                  <div class="overlap-group">
                    <div class="text-wrapper">Mathematics</div>
                    <img class="img" src="src/assets/math.jpeg" />
                  </div>
                </div>
              </div>
              <div class="text-wrapper-3">Classes</div>
              <div class="menu-list">
                <div class="menu-list-2">
                  <div class="overlap-group">
                    <div class="text-wrapper">Settings</div>
                    <img class="group" src="src/assets/settings-icon.png" />
                  </div>
                </div>
                <div class="menu-list-3">
                  <div class="overlap-group">
                    <div class="text-wrapper">Discussions</div>
                    <img class="messages-icon" src="src/assets/messages-icon.png" />
                  </div>
                </div>
                <div class="menu-list-4">
                  <div class="overlap-group">
                    <div class="text-wrapper">Profile</div>
                    <img class="person-icon" src="src/assets/person-icon.png" />
                  </div>
                </div>
                <div class="menu-list-5">
                  <div class="overlap-2">
                    <div class="text-wrapper-2">Dashboard</div>
                    <img class="dashboad-icon" src="src/assets/dashboard-icon.png" />
                  </div>
                </div>
              </div>
              <div class="menu-2">Menu</div>
              <a href="#"></a>
              <img class="menu-icon" onClick={toggleSidebar} src="src/assets/menu-icon.png" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

function App() {
  const username = "Praja Muhammad Purnayuda";
  const path = window.location.pathname;
  const isLoginPage = path === "/";
  return (
    <>
      {!isLoginPage && (
        <>
          <div>
            <Navbar />
          </div>

          <div>
            <Header username={username} />
          </div>
        </>
      )}

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/teacher" element={<Dashboard />} />
          <Route exact path="/student" element={<DashboardStudent />} />
          <Route
            exact
            path="/student/assignment"
            element={<AssignmentStudent />}
          />
          <Route
            exact
            path="/student/assignment/view"
            element={<ViewStudent />}
          />
          <Route exact path="/assignment" element={<Assignment />} />
          <Route
            exact
            path="/assignment/add-assignment"
            element={<InputAssignment />}
          />
          <Route
            exact
            path="/assignment/add-material"
            element={<InputMaterial />}
          />
          <Route
            exact
            path="/assignment/view-assignment"
            element={<ViewAssignment />}
          />
          <Route
            exact
            path="/assignment/detail-add-assignment"
            element={<DetailInput />}
          />
          <Route exact path="/discussion" element={<Assignment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
