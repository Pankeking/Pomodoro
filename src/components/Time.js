import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer, resetTimer, tickTimer, tickPause } from '../redux/reducers';


function Time() {

    const dispatch = useDispatch();
    const { workTime, isWorking, isPausing, pauseTime} = useSelector((state) => state.timer);

    const handleStart = () => {
        dispatch(startTimer());
    }
    const handleStop = () => {
        dispatch(stopTimer());
    }
    const handleReset = () => {
        dispatch(resetTimer());
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
            <div id="time-left">{(isWorking || workTime > 0) ? `Work left  ${formatTime(workTime)}` : (isPausing || pauseTime > 0) ? `Pause left ${formatTime(pauseTime)}` : "Finished" }</div>
            {/*
            <div>{isWorking ? "working":"not Working"}</div>
            <div>{isPausing ? "pausing":"not pausing"}</div>
            */}
            <div className="flex justify-center mt-4">
                {!isWorking && !isPausing && (
                    <button     
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        onClick={handleStart}>
                        Play
                    </button>
                )} 
                {(isWorking || isPausing) && (
                    <button 
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        onClick={handleStop}>
                        Stop
                    </button>
                )}
            </div>
            <button className="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={handleReset}>
                Reset
            </button>
            {workTime}
            <div></div>
            {pauseTime}
        </>
    );
}

export default Time