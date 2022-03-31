import { useState, useEffect } from 'react'
import './App.css'

export default() => {
    
    const [timeSec, setTimeSec] = useState(1500);
    const [clockMin, setClockMin] = useState("25");
    const [clockSec, setClockSec] = useState("00");

    let timer;
    useEffect(()=> {
        
        timer = setInterval(() => {
            setTimeSec(timeSec-1)
            let minutes = parseInt(timeSec / 60, 10);
            let seconds = parseInt(timeSec % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" +seconds : seconds;

            setClockMin(minutes);
            setClockSec(seconds);
            
        },1000)
        
        

        return () => clearInterval(timer);
    });


    return (
        <div className="pomodoro">
            <div className="pomodoro--timer">
                <div className="timer--bar">
                    {/* <div className="timer--clock">{clockMin}:{clockSec}</div> */}
                </div>
            </div>
        </div>
    )
    }
