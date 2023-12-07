/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './detailInput.css'


function Content(){
    const [selectedDate, setSelectedDate] = useState(null);

    const handleScheduleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [clickedItems, setClickedItems] = useState([]);

    const handleItemClick = (index) => {
        const newClickedItems = [...clickedItems]; 
        const itemIndex = newClickedItems.indexOf(index);

        if (itemIndex === -1) {
            newClickedItems.push(index);
        } else {
            newClickedItems.splice(itemIndex, 1);
        }

        setClickedItems(newClickedItems);
    };

    return(
        <>
            <div className='content-container'>
                <div className='detail-add-date'>
                    <div className='detail-add-schedule'>
                        <div className='detail-add-schedule-header'>Assignment Scheduling</div>
                        <div className='detail-add-schedule-content'>
                            <Calendar onChange={handleScheduleDateChange} value={selectedDate} />
                        </div>
                    </div>
                    <div className='detail-add-due'>
                        <div className='detail-add-due-header'>Assignment Due Date</div>
                        <div className='detail-add-due-content'>
                            <Calendar
                                tileDisabled={({ date }) => selectedDate && date < selectedDate}
                                tileClassName={({ date }) =>
                                selectedDate && date < selectedDate ? 'disabled' : ''
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className='detail-add-classes'>
                    <div className='detail-add-classes-header'>Assign to Multiple Classes</div>
                    <div className='detail-add-classes-content'>
                    {[...Array(15)].map((_, index) => (
                    <div className='detail-add-classes-item' key={index}>
                        <img
                            src="/src/assets/class-1.jpeg"
                            alt="class-img"
                            onClick={() => handleItemClick(index)}
                            style={{
                                borderColor: clickedItems.includes(index) ? '#FF8E3C' : 'initial',
                            }}
                        />
                        <label
                            htmlFor={`class-label-${index}`}
                            onClick={() => handleItemClick(index)}
                            style={{
                                color: clickedItems.includes(index) ? '#058ED9' : 'initial',
                            }}
                        >Class Name
                        </label>
                    </div>
                    ))}
                    </div>
                </div>
                
                <div className='reminder-me'>
                    <input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked"/>
                    <label htmlFor='myCheckbox'>Reminder Me</label>
                </div>

                <div className='add-assignment-material-btn'>
                    <Link to='/assignment'><button className='button-add-assignment-material'>Input</button></Link>
                    <Link to='/assignment/add-assignment'><button className='button-add-assignment-material'>Cancel</button></Link>
                </div>

            </div>
        </>
    )
}

function DetailInput(){
    return (
        <div>
          <Content/>
        </div>
    )
}

export default DetailInput