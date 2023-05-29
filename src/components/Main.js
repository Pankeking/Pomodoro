import React from "react";
import Time from "./Time"
import Settings from "./Settings";
import Sound from "./Sound";
import Tomato from "./Tomato";
import ControlButtons from "./ControlButtons";

function Main() {
    return (
        <div className="flex flex-col items-center justify-center mt-6
                        text-teal-300 xl:text-5xl lg:text-3xl md:text-2xl text-xl font-bold">
            <h1 className="text-teal-300 text-center xl:text-8xl lg:text-7xl md:text-6xl text-3xl font-bold">Pomodoro Timer</h1>
            <Time />
            <div className="flex justify-center w-full">
                <div className="justify-start text-center">
                    <Settings />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex mb-6 items-start justify-start">
                        <Tomato className="w-32 h-auto sm:w-25" />
                    </div>
                    <div className="flex items-center justify-center">
                        <ControlButtons />
                    </div>
                </div>
            </div>
            <Sound />
        </div>
    );
}

export default Main