/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './inputAssignment-Material.css'


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
                <div className='view-content'>
                    <div className='title-class'>
                        <h1 style={{ color:'#058ED9' }}>Add Assignment</h1>
                    </div>
                    <form action=''>
                    <div className='add-assignment-material-container'>
                        <div className='add-assignment-material-header'>Assignment Detail</div>
                        <div className='add-assignment-material-content'>
                            <div className='add-assignment-material-title'>
                                <div className='add-assignment-material-title-input'>
                                    <label>Assignment Title:</label>
                                    <input className='input-box' type='text' name='' id='' placeholder='Assignment Title...*' />
                                </div>
                                <div className='add-assignment-material-title-select'>
                                    <label>Submit Format:</label>
                                    <select className='select-box' name="" id="">
                                        <option value="">.pdf</option>
                                        <option value="">.doc</option>
                                        <option value="">.xlsx</option>
                                    </select>
                                </div>
                            </div>
                            <div className='add-assignment-material-text'>
                                <div className='add-assignment-material-text-header'>Online Text</div>
                                <div className='add-assignment-material-text-detail'>
                                    <div className='online-text-1'>A</div>
                                    <div className='online-text-2'>B</div>
                                    <div className='online-text-3'>C</div>
                                </div>
                                <div className='online-text'>
                                    <textarea name="" id="" placeholder='Text Here...'></textarea>
                                </div>
                            </div>
                            <div className='add-assignment-material-file'>
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

                    <div className='add-assignment-material-btn'>
                        <Link to='/assignment/detail-add-assignment'><button className='button-add-assignment-material'>Save</button></Link>
                        <Link to='/assignment'><button className='button-add-assignment-material'>Cancel</button></Link>
                    </div>
                    </form>

                </div>

            </div>
            
        </>
    )
}

function InputAssignment(){
    return (
        <div>
          <Content/>
        </div>
    )
}

export default InputAssignment;