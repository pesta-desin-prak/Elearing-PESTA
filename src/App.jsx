/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardStudent from './DashboardStudent';
import Assignment from './Assignment';
import ViewAssignment from './ViewAssignment';
import DetailStudentAssignment from './DetailStudentAssignment'
import InputAssignment from './InputAssignment';
import InputMaterial from './InputMaterial';
import DetailInput from './DetailInput';
import AssignmentStudent from './AssignmentStudent';
import ViewStudent from './ViewStudent';
import Login from './Login';
import './dashboard.css'

function Header({ username }){

  return (
    <>
    <div className='header-container'>
        <div className='logo'>
          <img src="/src/assets/logo-2.png" alt="Pesta Logo"/>
        </div>
      {username && <p className='username' style={{ fontWeight:'bold' }}>{username}</p>}
    </div>
    </>
  );

}

function Navbar(){
  return (
    <>
    <div className='navbar'>
      <ul>
        <div className='menu'>
          <li><a href='#'>A</a></li>
        </div>
        <li className='item'><a href='#' style={{ color: '#FF8E3C' }}>B</a></li>
        <li className='item'><a href='#' style={{ color: '#FF8E3C' }}>C</a></li>
        <li className='item'><a href='#' style={{ color: '#FF8E3C' }}>D</a></li>
        <li className='item'><a href='#' style={{ color: '#FF8E3C' }}>E</a></li>
        <div className='book'>
          <li><a href='#' style={{ color: '#FF8E3C' }}>F</a></li>
        </div>
      </ul>
    </div>

    </>
  );

}

function App() {
  const username = 'Praja Muhammad Purnayuda';
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
          <Route exact path="/student/assignment/view/detail" element={<DetailStudentAssignment/>} />
          <Route exact path="/assignment" element={<Assignment />} />
          <Route exact path="/assignment/add-assignment" element={<InputAssignment />} />
          <Route exact path="/assignment/add-material" element={<InputMaterial />} />
          <Route exact path="/assignment/view-assignment" element={<ViewAssignment />} />
          <Route exact path="/assignment/detail-add-assignment" element={<DetailInput />} />
          <Route exact path="/discussion" element={<Assignment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
