import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer, resetTimer,
     tickTimer, tickPause, setTimerFinished, resetTimerFinished
     } from '../redux/reducers';


function Time() {

    const dispatch = useDispatch();
    const { workTime, isWorking, isPausing, pauseTime } = useSelector((state) => state.timer);


    const handleStart = () => {
        dispatch(startTimer());
    }
    const handleStop = () => {
        dispatch(stopTimer());
    }
    const handleReset = () => {
        dispatch(resetTimer());
        const audio = document.getElementById("beep");
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
        dispatch(resetTimerFinished());
    }
    

    useEffect(() => {
        let timerId;

        if (isWorking) {
            timerId = setInterval(() => {
                dispatch(tickTimer());
                if (workTime === 0) {
                    //dispatch(setTimerFinished());
                    
                }
            }, 1000)
        } else if (isPausing) {
            timerId = setInterval(() => {
                dispatch(tickPause());
                if (pauseTime === 0) {
                    //dispatch(setTimerFinished());
                    
                }
            }, 1000)
        }
        return () => {
            clearInterval(timerId)
        };
    }, [dispatch, isWorking, isPausing, workTime, pauseTime])

    useEffect(() => {
        dispatch(resetTimer());
    }, [dispatch])

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
            <div>{(isWorking || (!isPausing && workTime > 0)) 
            ? (<div className="flex justify-center">
                <div id="timer-label" className="mx-4">Work Left</div>
                <div id="time-left">{formatTime(workTime)}</div>
               </div>)
            : (isPausing || (!isWorking && pauseTime > 0)) 
            ? (<div className="flex justify-center">
                <div id="timer-label" className="mx-4">Pause Left</div>
                <div id="time-left">{formatTime(pauseTime)}</div>
               </div>) 
            : (<div id="time-left">{formatTime(workTime)}</div>) } </div>
            <div className="flex justify-center mt-4">
                {!isWorking && !isPausing && (
                    <button
                        id="start_stop"     
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        onClick={handleStart}>
                        Play
                    </button>
                )} 
                {(isWorking || isPausing) && (
                    <button 
                        id="start_stop"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        onClick={handleStop}>
                        Stop
                    </button>
                )}
            </div>
            <button id="reset" className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={handleReset}>
                Reset
            </button>
        </>
    );
}

export default Time