import React from 'react'

function ClockInfo({currentTime}) {
    return (
        <div className="info">
            <div className="time">
                {currentTime.hour}:
                {currentTime.minute < 10 ? "0" + currentTime.minute : currentTime.minute}
            </div>
            <div className="day">{currentTime.day}, {currentTime.month} 
                <span className="date">{currentTime.date}</span>
            </div>
        </div>
    )
}
   
export default ClockInfo
 