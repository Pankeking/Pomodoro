import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import beepSound from "./beepSound.wav"
import { resetTimerFinished } from "../redux/reducers";

function Sound() {

    const dispatch = useDispatch();
    const { timerFinished } = useSelector((state) => state.timer);

    useEffect(() => {
        const audio = document.getElementById("beep");
        if (timerFinished) {
            if(audio) {
                console.log(audio);
                console.log("playing audio");
                audio.play().catch((error) => {
                    console.error("failed to play audio", error);
                })
            }
        } 
    }, [timerFinished]);
    
    useEffect(() => {
        const audio = document.getElementById("beep");
        const handleAudioEnded = () => {
            audio.pause()
            audio.currentTime = 0;
            dispatch(resetTimerFinished())
        };
        audio.addEventListener("ended", handleAudioEnded);

        return () => {
            audio.removeEventListener("ended", handleAudioEnded);
        }
    }, [dispatch])

    

    return (
        <>
            <audio id="beep" 
                    preload="auto" 
                    src={beepSound}
                    
            />
        </>
    );
}

export default Sound