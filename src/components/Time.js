import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { tickTimer, tickPause } from '../redux/reducers';


function Time() {

    const dispatch = useDispatch();
    const { workTime, isWorking, isPausing, pauseTime } = useSelector((state) => state.timer);

    useEffect(() => {
        let timerId;

        if (isWorking) {
            timerId = setInterval(() => {
                dispatch(tickTimer());
                if (workTime === 0) {
                    
                }
            }, 1000)
        } else if (isPausing) {
            timerId = setInterval(() => {
                dispatch(tickPause());
                if (pauseTime === 0) {
                    
                }
            }, 1000)
        }
        return () => {
            clearInterval(timerId)
        };
    }, [dispatch, isWorking, isPausing, workTime, pauseTime])


    //useEffect(() => {
    //    console.log("Time Left:", document.getElementById("time-left").textContent);
    //  }, [workTime, pauseTime]);

    const formatTime = (seconds) => {
        if (seconds <= 0) {
            return "00:00";
        } else {
            const minutes = Math.floor(seconds / 60);
            const remainSeconds = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainSeconds.toString().padStart(2, '0')}`;
        }
    }

    return (
        <>
            <div className="my-3 font-mono" >{(isWorking || (!isPausing && workTime > 0)) 
            ? (<div className="flex justify-center">
                <div id="timer-label" className="mx-4">Focused</div>
                <div className="text-white" id="time-left">{formatTime(workTime)}</div>
               </div>)
            : (isPausing || (!isWorking && pauseTime > 0)) 
            ? (<div className="flex justify-center">
                <div id="timer-label" className="mx-4">Relaxed</div>
                <div className="text-white" id="time-left">{formatTime(pauseTime)}</div>
               </div>) 
            : (<div className="text-white" id="time-left">{formatTime(workTime)}</div>) } </div>
        </>
    );
}

export default Time