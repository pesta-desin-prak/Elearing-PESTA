/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./kolomDiskusi.css";

function Content() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <div className="row">
      {/* <div className='title-class'>
            <h1 className='pageAssignment-title' style={{ color:'#058ED9' }}><Link to='/teacher' style={{ textDecoration:'none',color:'#058ED9' }}>Mathematics</Link></h1>
            <button className='button-discussion' onClick={togglePopup}>+ Create</button>
            {isPopupVisible && (
                <div className="popup">
                    <Link to="/assignment/add-assignment" style={{ textDecoration:'none' }}><p style={{marginBottom:'6px' }}>Add Assignment</p></Link>
                    <Link to="/assignment/add-material" style={{ textDecoration:'none' }}><p>Add Material</p></Link>
                </div>
            )}
        </div> */}

      <div className="leftbox">
        <div className="leftHeader">Diskusi</div>
        <div className="leftMain">
          <div className="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="Search Discussion"
            />
            {/* <button type="submit" class="searchButton">
                             <i class="fa fa-search"></i>
                             </button> */}
          </div>
          <div className="chat">
            <h3>Project UTS Biologi</h3>
            <p>Bu Siti: Pengumuman untuk Kelas..</p>
          </div>
          <div className="chat">
            <h3>Project UTS Biologi</h3>
            <p>Bu Siti: Pengumuman untuk Kelas..</p>
          </div>
          <div className="chat">
            <h3>Project UTS Biologi</h3>
            <p>Bu Siti: Pengumuman untuk Kelas..</p>
          </div>
        </div>
      </div>
      <div className="rightbox">
        <div className="rightHeader">Tugas 3</div>
        <div className="rightMain">
          <div className="time">
            <div className="waktuChat">07.26</div>
          </div>
          {/* <div className="bubblechat">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          </div> */}
          <div class="speech-wrapper">
            <div class="bubble">
              <div class="txt1">
                <p class="name">Bu siti Guru</p>
                <p class="message">Pagi, Bolo..</p>
                <span class="timestamp">10:20 pm</span>
              </div>
              <div class="bubble-arrow"></div>
            </div>
            {/* <!--  Speech Bubble alternative --> */}
            <div class="bubble alt">
              <div class="txt2">
                <p class="name alt">
                  {/* +353 87 1234 567<span> ~ John</span> */}
                </p>
                <p class="message">pagi juga bolooo</p>
                <span class="timestamp">10:22 pm</span>
              </div>
              <div class="bubble-arrow alt"></div>
            </div>
          </div>

          <div className="wrappedInput">
              <div className="textInput">lorem</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KolomDiskusi() {
  return (
    <div>
      <Content />
    </div>
  );
}

export default KolomDiskusi;
