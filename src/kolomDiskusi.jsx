/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./kolomDiskusi.css";
import { Plus,Smile, Send } from "react-feather";

function Content() {
  return (
    <div className="row">


      <div className="leftbox">
        <div className="leftHeader">Diskusi </div>
        <div className="leftMain">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search Discussion"
            />
            {/* <button type="submit" class="searchButton">
                             <i class="fa fa-search"></i>
                             </button> */}
          </div>
          <div className="chat" >
            <h3 style={{ marginTop:'10px' }}>Project UTS Biologi</h3>
            <p>Bu Siti: Pengumuman untuk Kelas..</p>
          </div>
          <div className="chat">
            <h3 style={{ marginTop:'10px' }}>Project UTS Biologi</h3>
            <p>Bu Siti: Pengumuman untuk Kelas..</p>
          </div>
          <div className="chat">
            <h3 style={{ marginTop:'10px' }}>Project UTS Biologi</h3>
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
          <div className="speech-wrapper">
            <div className="bubble">
              <div className="txt1">
                <p className="name">Bu siti Guru</p>
                <p className="message">Pagi, nak..</p>
                <span className="timestamp">10:20 pm</span>
              </div>
              <div className="bubble-arrow"></div>
            </div>
            {/* <!--  Speech Bubble alternative --> */}
            <div className="bubble alt">
              <div className="txt2">
                <p className="name alt">
                  {/* +353 87 1234 567<span> ~ John</span> */}
                </p>
                <p className="message">pagi juga bu</p>
                <span className="timestamp">10:22 pm</span>
              </div>
              <div className="bubble-arrow alt"></div>
            </div>
          </div>

          <div className="wrappedInput">
            <div className="textInput">
              <Smile></Smile>
              <Plus></Plus>
              <input type="text" />
              <Send></Send>
            </div>
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