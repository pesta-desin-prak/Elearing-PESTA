/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './dashboard.css'

function Content(){
  return (
    <div className='content-container'>
      <h1 className='page-title' style={{ color:'#058ED9' }}>Dashboard</h1>

      <div className='content-layout'>
        <div className='content-layout-1'>
          <div className='recently'>
            <div className='recently-header'>Recently accessed classes</div>
            <div className='recently-container'>
              <div className='recently-class'>
                <div className='recently-img'>
                  <img className='image-recently' src='/src/assets/class-1.jpeg' alt='class-image' />
                </div>
                <div className='recently-detail'>
                  <h3 style={{ color:'#058ED9', fontWeight:'bold' }}>Mathematics</h3>
                  <p style={{ fontWeight:'bold' }}>XI MIPA 6</p>
                  <p>Pengajar Siti Nur</p>
                </div>
                <div className='recently-btn'>
                  <Link to="/student/assignment"><button className='button-recently'>Go To Class</button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className='news'>
            <div className='news-header'>
              <p style={{ flex:'1' }}>News discussion</p>
              <p>Sort: Newest to Latest</p>
            </div>
            <div className='news-container'>
              <div className='news-list'>
                <div className='news-item'>
                  <img className='image-news' src='/src/assets/class-1.jpeg' alt='news-image' />
                  <div style={{ flex:'3', marginLeft:'20px', marginRight:'5px' }} className='news-text'>
                    <h3>Project UTS Biology</h3>
                    <p>Bu Siti: Pengumuman untuk Kelas Biology XI MIPA 6 ...</p>
                  </div>
                  <div className='news-info'>
                    <p>Tuesday, 24 October 2023</p>
                    <h3 className='notif'>3</h3>
                  </div>
                </div>
              </div>
              <div className='news-list'>
                <div className='news-item'>
                  <img className='image-news' src='/src/assets/class-1.jpeg' alt='news-image' />
                  <div style={{ flex:'3', marginLeft:'20px', marginRight:'5px' }} className='news-text'>
                    <h3>Project UTS Biology</h3>
                    <p>Bu Siti: Pengumuman untuk Kelas Biology XI MIPA 6 ...</p>
                  </div>
                  <div className='news-info'>
                    <p>Tuesday, 24 October 2023</p>
                    <h3 className='notif'>3</h3>
                  </div>
                </div>
              </div>
              <div className='news-list'>
                <div className='news-item'>
                  <img className='image-news' src='/src/assets/class-1.jpeg' alt='news-image' />
                  <div style={{ flex:'3', marginLeft:'20px', marginRight:'5px' }} className='news-text'>
                    <h3>Project UTS Biology</h3>
                    <p>Bu Siti: Pengumuman untuk Kelas Biology XI MIPA 6 ...</p>
                  </div>
                  <div className='news-info'>
                    <p>Tuesday, 24 October 2023</p>
                    <h3 className='notif'>3</h3>
                  </div>
                </div>
              </div>
              <div className='news-list'>
                <div className='news-item'>
                  <img className='image-news' src='/src/assets/class-1.jpeg' alt='news-image' />
                  <div style={{ flex:'3', marginLeft:'20px', marginRight:'5px' }} className='news-text'>
                    <h3>Project UTS Biology</h3>
                    <p>Bu Siti: Pengumuman untuk Kelas Biology XI MIPA 6 ...</p>
                  </div>
                  <div className='news-info'>
                    <p>Tuesday, 24 October 2023</p>
                    <h3 className='notif'>3</h3>
                  </div>
                </div>
              </div>
              <div className='news-list'>
                <div className='news-item'>
                  <img className='image-news' src='/src/assets/class-1.jpeg' alt='news-image' />
                  <div style={{ flex:'3', marginLeft:'20px', marginRight:'5px' }} className='news-text'>
                    <h3>Project UTS Biology</h3>
                    <p>Bu Siti: Pengumuman untuk Kelas Biology XI MIPA 6 ...</p>
                  </div>
                  <div className='news-info'>
                    <p>Tuesday, 24 October 2023</p>
                    <h3 className='notif'>3</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='content-layout-2'>
          <div className='assignment'>
            <div className='assignment-header'>New Assigment</div>
            <div className='assignment-container'>
              <div className='assignment-list'>
                <div className='assignment-date'>
                  <p>Tuesday, 24 October 2023</p>
                </div>
                <div className='assignment-info'>
                  <p style={{ fontWeight:'bold' }}>Project UTS Biology is due</p>
                  <p style={{ fontWeight:'bold', color:'#058ED9' }}>Biology</p>
                </div>
              </div>
              <div className='assignment-list'>
                <div className='assignment-date'>
                  <p>Tuesday, 24 October 2023</p>
                </div>
                <div className='assignment-info'>
                  <p style={{ fontWeight:'bold' }}>Project UTS Biology is due</p>
                  <p style={{ fontWeight:'bold', color:'#058ED9' }}>Biology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );

}

function DashboardStudent() {
  return (
    <div>
      <Content/>
    </div>
  )
}

export default DashboardStudent
