/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardStudent from './DashboardStudent';
import Assignment from './Assignment';
import ViewAssignment from './ViewAssignment';
import InputAssignment from './InputAssignment';
import InputMaterial from './InputMaterial';
import DetailInput from './DetailInput';
import AssignmentStudent from './AssignmentStudent';
import ViewStudent from './ViewStudent';
import KolomDiskusi from './kolomDiskusi';
import Login from './Login';
import './dashboard.css'
import "./Sidebar.css";
import "./Navbar.css";
import DetailAssignment from './DetailAssignment';


function Header({ username }){

  return (
    <>
    <div className='header-container'>
        <div className='logo'>
          <a href="student"><img src="/src/assets/logo-2.png" alt="Pesta Logo"/></a>
        </div>
      {username && <p className='username' style={{ fontWeight:'bold' }}>{username}</p>}
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
            <a href="#" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\person-icon.png" alt="person" />
            </a>
          </li>
          <li className="item">
            <a href="discussion" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\messages-icon.png" alt="messages" />
            </a>
          </li>
          <li className="item">
            <a href="#" style={{ color: "#FF8E3C" }}>
              <img src="src\assets\settings-icon.png" alt="settings" />
            </a>
          </li>
          <li className="item">
            <a href="/" style={{ color: "#FF8E3C" }}>
              <img style={{ height:"26px", width:"27px" }} src="src\assets\out.png" alt="logout" />
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
            <div className="overlap">
              <div className="class-list">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper">Chemistry</div>
                    <img className="img" src="src/assets/chemistry.png" />
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="div">
                    <div className="rectangle"></div>
                    <div className="text-wrapper">Physics</div>
                    <img className="img" src="src/assets/physics.png" />
                  </div>
                </div>
                <div className="div-wrapper">
                  <div className="overlap-group">
                    <div className="text-wrapper">Biology</div>
                    <img className="img" src="src/assets/biology.png" />
                  </div>
                </div>
                <div className="class-list-2">
                  <div className="overlap-group">
                    <div className="text-wrapper">Mathematics</div>
                    <img className="img" src="src/assets/math.jpeg" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-3">Classes</div>
              <div className="menu-list">
                <div className="menu-list-2">
                <a href="/" style={{ textDecoration:'none', color:'#058ED9' }}>
                  <div className="overlap-group">
                    <div className="text-wrapper">Log Out</div>
                    <img className="group" src="src/assets/out.png" />
                  </div>
                  </a>
                </div>
                <div className="menu-list-3">
                  <div className="overlap-group">
                    <div className="text-wrapper">Settings</div>
                    <img className="messages-icon" src="src/assets/settings-icon.png" />
                  </div>
                </div>
                <div className="menu-list-4">
                <a href="discussion" style={{ textDecoration:'none', color:'#058ED9' }}>
                  <div className="overlap-group">
                    <div className="text-wrapper">Discussions</div>
                    <img className="person-icon" src="src/assets/messages-icon.png" />
                  </div>
                </a>
                </div>
                <div className="menu-list-5">
                  <div className="overlap-2">
                    <div className="text-wrapper-2">Profile</div>
                    <img className="dashboad-icon" src="src/assets/person-icon.png" />
                  </div>
                </div>
              </div>
              <div className="menu-2">Menu</div>
              <a href="#"></a>
              <img className="menu-icon" onClick={toggleSidebar} src="src/assets/menu-icon.png" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

function App() {
  const username = 'Praja Muhamamd Purnayuda';
  const path = window.location.pathname;
  const isLoginPage = path === '/';
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
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/teacher" element={<Dashboard />} />
          <Route exact path="/student" element={<DashboardStudent />} />
          <Route exact path="/student/assignment" element={<AssignmentStudent />} />
          <Route exact path="/student/assignment/view" element={<ViewStudent />} />
          <Route exact path="/student/assignment/view/detail" element={<DetailAssignment />} />
          <Route exact path="/assignment" element={<Assignment />} />
          <Route exact path="/assignment/add-assignment" element={<InputAssignment />} />
          <Route exact path="/assignment/add-material" element={<InputMaterial />} />
          <Route exact path="/assignment/view-assignment" element={<ViewAssignment />} />
          <Route exact path="/assignment/detail-add-assignment" element={<DetailInput />} />
          <Route exact path="/discussion" element={<KolomDiskusi />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
