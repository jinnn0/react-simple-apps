import React from 'react'

function Clock({currentTime}) {

    const secondDeg = ((currentTime.second / 60) * 360) + 90;
    const minuteDeg= ((currentTime.minute / 60) * 360) + 90;
    const hourDeg = ((currentTime.hour / 12) * 360) + 90;

    return (
        <div className="clock">
            <div className="hour-hand"
                style={{transform: `rotate(${hourDeg}deg)`}}
            ></div>
            <div className="minute-hand"
                style={{transform: `rotate(${minuteDeg}deg)`}}
            ></div>
            <div className="second-hand"
                style={{transform: `rotate(${secondDeg}deg)`}}
            ></div>
        </div>
    )
}

export default Clock
 