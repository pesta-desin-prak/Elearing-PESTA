/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './assignment.css'


function Content(){

    return(
    <div className='content-container'>
        <div className='title-class'>
            <h1 className='pageAssignment-title' style={{ color:'#058ED9' }}><Link to='/student' style={{ textDecoration:'none', color:'#058ED9' }}>Mathematics</Link></h1>
        </div>
        <nav>
        <Link to = "/">Home</Link>
        <Link to = "/student">Dashboard</Link>
        </nav>

        <div className='class-detail'>
            <div className='class-header'>Assignment Detail</div>
            <div className='class-list'>
                <div className='class-item'>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                    <div className='images-img'>
                        <img className='images-item' src="/src/assets/class-1.jpeg" alt="list" />
                    </div>
                    </Link>
                    <div className='class-text' style={{ flex:'2' }}>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                        <p style={{ fontWeight:'bold' }}>Project UTS</p>
                        <p>UTS berisi masukan yg sudah dilaku..</p>
                    </Link>
                    </div>
                    <div className='class-deadline' style={{ flex:'2', fontWeight:'bold' }}>
                        <p>Friday, 27 October 2023</p>
                    </div>
                    <div className='class-discussion'>
                        <img className='images-discussion' src="/src/assets/class-1.jpeg" alt="discussion-img" />
                        <p>Discussion</p>
                    </div>
                </div>
                <div className='class-item'>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                    <div className='images-img'>
                        <img className='images-item' src="/src/assets/class-1.jpeg" alt="list" />
                    </div>
                    </Link>
                    <div className='class-text' style={{ flex:'2' }}>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                        <p style={{ fontWeight:'bold' }}>Project UTS</p>
                        <p>UTS berisi masukan yg sudah dilaku..</p>
                    </Link>
                    </div>
                    <div className='class-deadline' style={{ flex:'2', fontWeight:'bold' }}>
                        <p>Friday, 27 October 2023</p>
                    </div>
                    <div className='class-discussion'>
                        <img className='images-discussion' src="/src/assets/class-1.jpeg" alt="discussion-img" />
                        <p>Discussion</p>
                    </div>
                </div>
                <div className='class-item'>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                    <div className='images-img'>
                        <img className='images-item' src="/src/assets/class-1.jpeg" alt="list" />
                    </div>
                    </Link>
                    <div className='class-text' style={{ flex:'2' }}>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                        <p style={{ fontWeight:'bold' }}>Project UTS</p>
                        <p>UTS berisi masukan yg sudah dilaku..</p>
                    </Link>
                    </div>
                    <div className='class-deadline' style={{ flex:'2', fontWeight:'bold' }}>
                        <p>Friday, 27 October 2023</p>
                    </div>
                    <div className='class-discussion'>
                        <img className='images-discussion' src="/src/assets/class-1.jpeg" alt="discussion-img" />
                        <p>Discussion</p>
                    </div>
                </div>
                <div className='class-item'>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                    <div className='images-img'>
                        <img className='images-item' src="/src/assets/class-1.jpeg" alt="list" />
                    </div>
                    </Link>
                    <div className='class-text' style={{ flex:'2' }}>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                        <p style={{ fontWeight:'bold' }}>Project UTS</p>
                        <p>UTS berisi masukan yg sudah dilaku..</p>
                    </Link>
                    </div>
                    <div className='class-deadline' style={{ flex:'2', fontWeight:'bold' }}>
                        <p>Friday, 27 October 2023</p>
                    </div>
                    <div className='class-discussion'>
                        <img className='images-discussion' src="/src/assets/class-1.jpeg" alt="discussion-img" />
                        <p>Discussion</p>
                    </div>
                </div>
                <div className='class-item'>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                    <div className='images-img'>
                        <img className='images-item' src="/src/assets/class-1.jpeg" alt="list" />
                    </div>
                    </Link>
                    <div className='class-text' style={{ flex:'2' }}>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                        <p style={{ fontWeight:'bold' }}>Project UTS</p>
                        <p>UTS berisi masukan yg sudah dilaku..</p>
                    </Link>
                    </div>
                    <div className='class-deadline' style={{ flex:'2', fontWeight:'bold' }}>
                        <p>Friday, 27 October 2023</p>
                    </div>
                    <div className='class-discussion'>
                        <img className='images-discussion' src="/src/assets/class-1.jpeg" alt="discussion-img" />
                        <p>Discussion</p>
                    </div>
                </div>
                <div className='class-item'>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                    <div className='images-img'>
                        <img className='images-item' src="/src/assets/class-1.jpeg" alt="list" />
                    </div>
                    </Link>
                    <div className='class-text' style={{ flex:'2' }}>
                    <Link to="/student/assignment/view" style={{ textDecoration: 'none', color:'black'}}>
                        <p style={{ fontWeight:'bold' }}>Project UTS</p>
                        <p>UTS berisi masukan yg sudah dilaku..</p>
                    </Link>
                    </div>
                    <div className='class-deadline' style={{ flex:'2', fontWeight:'bold' }}>
                        <p>Friday, 27 October 2023</p>
                    </div>
                    <div className='class-discussion'>
                        <img className='images-discussion' src="/src/assets/class-1.jpeg" alt="discussion-img" />
                        <p>Discussion</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

function Assigment(){
    return (
        <div>
          <Content/>
        </div>
    )
}

export default Assigment