import React from 'react'

function ClockApp() {
    return (
        <div className="clock-app app-container">
            <div className="app">
                <div className="clock">
                    <div className="hour-hand"></div>
                    <div className="minute-hand"></div>
                    <div className="second-hand"></div>
                </div>
                <div className="info">
                    <div className="time">05:57</div>
                    <div className="day">FRIDAY, JAN <span class="date">2</span></div>
                </div>
            </div>
        </div>
    )
}

export default ClockApp
