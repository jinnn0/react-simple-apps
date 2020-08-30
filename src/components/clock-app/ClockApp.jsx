import React, {useEffect, useState} from 'react'
import Clock from './Clock';
import ClockInfo from './ClockInfo';

const days = [ "Sunday", "Monday",  "Tuesday",  "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

function ClockApp() {
    const [isBodyLoaded, setIsBodyLoaded] = useState(false)
    const [currentTime, setCurrentTime] = useState({
        hour : "",
        minute : undefined ,
        second : "",
        day : "",
        month : "",
        date : ""
    })

    useEffect(()=>{
        setTimeout(() => {
            setIsBodyLoaded(true)
        }, 1000);
    })

    useEffect(() => {
      let interval =  setInterval(updateTime,1000)

        return () => {
            window.clearInterval(interval)
        }

    }, [currentTime])
  
    const updateTime = () => {
        const d = new Date()
        const day = days[d.getDay()].toUpperCase()
        const month = months[d.getMonth()].toUpperCase()
        const date = d.getDate()
        const second = d.getSeconds()
        const minute = Number(d.getMinutes())
        const hour = d.getHours()
  
        const newTime = {
            day: day, 
            month: month,
            date: date,
            second: second,
            minute: minute,
            hour: hour
        }

        setCurrentTime({...currentTime, ...newTime})
    }
  

    const today = new Date()
    const todayName = today.toLocaleString('default', { month: 'long' })
    console.log(todayName)

    return (
        <div className="clock-app app-container"
             style={{visibility: isBodyLoaded ? "visible" : "hidden"}}
        >
            <div className="app"> 
                <Clock currentTime={currentTime}/>
                <ClockInfo currentTime={currentTime}/>
            </div> 
        </div>
    ) 
}  


export default ClockApp
