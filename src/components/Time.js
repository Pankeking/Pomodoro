import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer, resetTimer,
     tickTimer, tickPause, workIncrease, workDecrease,
      pauseDecrease, pauseIncrease,
       confirmSettings } from '../redux/reducers';


function Time() {

    const dispatch = useDispatch();
    const { workTime, isWorking, isPausing, pauseTime, workSetting, pauseSetting} = useSelector((state) => state.timer);

    const handleStart = () => {
        dispatch(startTimer());
    }
    const handleStop = () => {
        dispatch(stopTimer());
    }
    const handleReset = () => {
        dispatch(resetTimer());
    }
    const increaseWorkHandler = () => {
        dispatch(workIncrease());
    }
    const decreaseWorkHandler = () => {
        dispatch(workDecrease());
    }
    const increasePauseHandler = () => {
        dispatch(pauseIncrease());
    }
    const decreasePauseHandler = () => {
        dispatch(pauseDecrease());
    }
    const confirmSettingsHandler = () => {
        dispatch(confirmSettings());
    }
    

    useEffect(()=> {
        let timerId;

        if(isWorking) {
            timerId = setInterval(() => {
                dispatch(tickTimer());
            }, 1000)
        } else if (isPausing) {
            timerId = setInterval(() => {
                dispatch(tickPause());
            }, 1000)
        }
        return () => clearInterval(timerId);
    }, [dispatch, isWorking, isPausing])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainSeconds.toString().padStart(2, '0')}`;
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
            {/*
            <div>{isWorking ? "working":"not Working"}</div>
            <div>{isPausing ? "pausing":"not pausing"}</div>
            */}
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
            <h2>Settings</h2>
            <div>
                <div id="session-label">
                    Work length
                </div>
                <div className="flex justify-center">
                   <button id="session-increment" onClick={increaseWorkHandler}>+</button>
                   <div className="mx-4" id="session-length">{workSetting}</div>
                   <button id="session-decrement" onClick={decreaseWorkHandler}>-</button>
                </div>
            </div>
            <div>
                <div id="break-label">
                    Pause length
                </div>
                <div className="flex justify-center px-4">
                    <button id="break-increment" onClick={increasePauseHandler}>+</button>
                     <div className="mx-4" id="break-length">{pauseSetting}</div>
                    <button id="break-decrement" onClick={decreasePauseHandler}>-</button>
                </div>
            </div>
            <button className="mt-5 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-700"
                    onClick={confirmSettingsHandler}>
                Confirm Settings
            </button>
        </>
    );
}

export default Time