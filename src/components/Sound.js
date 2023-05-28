import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import beepSound from "./beepSound.wav"
import { resetTimerFinished } from "../redux/reducers";

function Sound() {

    const dispatch = useDispatch();
    const timerFinished = useSelector((state) => state.timer.timerFinished)

    useEffect(() => {
        if (timerFinished) {
            const audio = new Audio(beepSound);
            audio.play()
        }
    }, [timerFinished]);

    useEffect(() => {
        dispatch(resetTimerFinished());
    }, [dispatch])

    return (
        <>
            <audio id="beep"
				    src={beepSound}
			/>
        </>
    );
}

export default Sound