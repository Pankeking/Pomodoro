import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { workIncrease, workDecrease,
     pauseIncrease, pauseDecrease, confirmSettings } 
     from "../redux/reducers";

function Settings() {
    
    const dispatch = useDispatch();
    const { workSetting, pauseSetting } = useSelector((state) => state.timer);

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

    return (
        <>
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
                Testing Settings
            </button>
        </>
    );
}

export default Settings