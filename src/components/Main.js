import React from "react";
import Time from "./Time"
import Settings from "./Settings";

function Main() {
    return (
        <div className="flex flex-col items-center justify-center
                        text-teal-300 text-6xl font-bold">
            <h1 className="text-teal-300 text-6xl font-bold">Pomodoro Timer</h1>
            <Time />
            <Settings />
        </div>
    );
}

export default Main