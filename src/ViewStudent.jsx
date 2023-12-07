/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './viewAssignment.css'
import './viewStudent.css'



function Content(){
    const [dragging, setDragging] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = e.dataTransfer.files;

        const fileName = files[0].name;
        setSelectedFileName(fileName);
    };
    const handleFileInputChange = (e) => {
        const fileName = e.target.files[0].name;
        setSelectedFileName(fileName);

    };

    const handleClearFile = () => {
        setSelectedFileName('');
    };
    return(
        <>
            <div className='content-container'>
                <div className='view-content-student'>
                    <div className='title-class'>
                        <h1 style={{ color:'#058ED9' }}><Link to='/student' style={{ textDecoration:'none', color:'#058ED9' }}>Project UTS Math</Link></h1>
                    </div>

                    <div className='view-description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className='view-detail-student'>
                        <div className='view-detail-title'>Attached Files: template_penugasan.docx</div>
                        <div className='view-detail-description'>
                            <p>Submission Status: 28/32</p>
                            <p>Due Date: Sunday, 18 Oktober 2023, 11:59 PM</p>
                            <p>Time Remaining: 1 days</p>
                        </div>
                    </div>

                    <div className='add-assignment-material-file-student'>
                        <div className='add-assignment-material-file-header'>Choose File</div>
                        <div className={`file-file ${dragging ? 'dragging' : ''}`}
                            onDragOver={handleDragOver}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            >
                            <div className='file-icon'>
                                <label className='icon-upload' htmlFor="fileInput"> V</label>
                            </div>
                                {selectedFileName ? (
                                <div className="selected-file">
                                    <span>{selectedFileName}</span>
                                    <button  className='clear-upload-btn' onClick={handleClearFile}>X</button>
                                </div>
                                ) : (
                                <label htmlFor='fileInput'>Drag/Choose File Here</label>
                            )}
                            <input id="fileInput" type="file"  onChange={handleFileInputChange}/>
                        </div>
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