/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';


function Content({ handleLogin }) {
  const [userType, setUserType] = useState('student');

  return (
    <>
    <div className='login-content'>
      <div className="login-container">
        <div className='login-header'>
          <h1>Login As</h1>
        </div>
        <div className='login-body'>
        <div className="image-selection">
          <label>
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === 'student'}
              onChange={() => setUserType('student')}
            />
            <Link to='/student'>
              <img src="/src/assets/student.png" alt="Student" />
            </Link>
            <h3>Student</h3>
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="teacher"
              checked={userType === 'teacher'}
              onChange={() => setUserType('teacher')}
            />
            <Link to='/teacher'>
              <img src="/src/assets/teacher.png" alt="Teacher" />
            </Link>
            <h3>Teacher</h3>
          </label>
          </div>
        </div>

        
      </div>
      </div>
    </>
  );
}

function Login() {
  const handleLogin = (userType) => {
    alert(`Logged in as ${userType}`);
    // Tambahkan logika login sesuai kebutuhan Anda
  };

  return (
    <div>
      <Content handleLogin={handleLogin} />
    </div>
  );
}

export default Login;