/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './viewAssignment.css'


function Content(){
    return(
        <>
            <div className='content-container'>
                <div className='view-content'>
                    <div className='title-class'>
                        <h1 style={{ color:'#058ED9' }}><Link to='/teacher' style={{ textDecoration:'none', color:'#058ED9'}}>Project UTS Math</Link></h1>
                    </div>
                    <nav>
                    <Link to = "/">Home</Link>
                    <Link to = "/teacher">Dashboard</Link>
                    <Link to = "/assignment">Assignment</Link>
                    </nav>

                    <div className='view-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className='view-detail'>
                        <div className='view-detail-title'>Attached Files: template_penugasan.docx</div>
                        <div className='view-detail-description'>
                            <p>Submission Status: 28/32</p>
                            <p>Due Date: Sunday, 18 Oktober 2023, 11:59 PM</p>
                            <p>Time Remaining: 1 days</p>
                        </div>
                    </div>

                    <div className='view-btn'>
                        <Link to="/assignment/add-assignment"><button className='button-view'>Edit</button></Link>
                    </div>

                </div>

            </div>
            
        </>
    )
}

function ViewAssignment(){
    return (
        <div>
          <Content/>
        </div>
    )
}

export default ViewAssignment