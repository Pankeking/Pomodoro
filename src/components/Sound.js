import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import beepSound from "./beepSound.wav"
//import { resetTimerFinished } from "../redux/reducers";

function Sound() {

    const { timerFinished } = useSelector((state) => state.timer);

    useEffect(() => {
        if (timerFinished) {
            const audio = document.getElementById("beep");
            if(audio) {
                audio.play().catch((error) => {
                    console.error("failed to play audio", error);
                })
            }
        } 
    }, [timerFinished]);



    

    return (
        <>
            <audio id="beep" 
                    autoPlay={true} 
                    src={beepSound}
                    
            />
        </>
    );
}

export default Sound