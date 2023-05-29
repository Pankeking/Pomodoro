import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer, stopTimer, resetTimer, resetTimerFinished } from "../redux/reducers";

function ControlButtons() {

    const dispatch = useDispatch();
    const { isWorking, isPausing } = useSelector((state) => state.timer);

    const handleStart = () => {
        dispatch(startTimer());
    }
    const handleStop = () => {
        dispatch(stopTimer());
    }
    const handleReset = () => {
        dispatch(resetTimer());
        const audio = document.getElementById("beep");
        dispatch(resetTimerFinished());
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    useEffect(() => {
        dispatch(resetTimer());
    }, [dispatch])

    return (
        <>
        
        <div className="mt-4 font-mono text-sm">
                {!isWorking && !isPausing && (
                    <button
                        id="start_stop"     
                        className="mx-2 px-2 m:mx-4 m:px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-700"
                        onClick={handleStart}
                    >
                    Play
                    </button>
                )} 
                {(isWorking || isPausing) && (
                    <button 
                        id="start_stop"
                        className="mx-2 px-2 m:mx-4 m:px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                        onClick={handleStop}
                        >
                    Stop
                    </button>
                )}
            <button 
                id="reset" 
                className="mx-2 px-2 m:mx-4 m:px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                onClick={handleReset}
                >
                Reset
            </button>
            </div>
        </>
    )
}
export default ControlButtons;