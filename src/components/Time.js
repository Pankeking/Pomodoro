import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer, resetTimer, tickTimer } from '../redux/reducers';


function Time() {

    const dispatch = useDispatch();
    const { time, isRunning} = useSelector((state) => state.timer);

    const handleStart = () => {
        dispatch(startTimer());
    }
    const handleStop = () => {
        dispatch(stopTimer());
    }
    const handleReset = () => {
        dispatch(resetTimer());
    }
    const handleTick = () => {
        dispatch(tickTimer());
    }

    useEffect(()=> {
        let timerId;

        if(isRunning) {
            timerId = setInterval(() => {
                dispatch(tickTimer());
            }, 1000)
        }
        return () => clearInterval(timerId);
    }, [dispatch, isRunning])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainSeconds.toString().padStart(2, '0')}`;
    }

    return (
        <>
            <div>{formatTime(time)}</div>
            <div className="flex justify-center mt-4">
                {!isRunning ? (
                    <button     
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                        onClick={handleStart}>
                        Play
                    </button>
                ) : (
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
        </>
    );
}

export default Time