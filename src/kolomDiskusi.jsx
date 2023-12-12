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
          <div className="chat1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            laboriosam voluptatibus, quo in quam facere sit sequi ut quia
            explicabo illo. Architecto quisquam deleniti aliquam alias iste est
            reprehenderit repellat?
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
