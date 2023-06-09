import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Tomato() {

    const { pausePercentage, workPercentage } = useSelector((state) => state.timer)

    const tomatoHeight = 100;
    const tomatoWidth = 100;
    const redFillColor = "#D13834";
    const greenFillColor = "#88C057";

    useEffect(() => {
        console.log("pause perc:", pausePercentage, " work perc", workPercentage);
      }, [pausePercentage, workPercentage]);
    
    return (
        <>
            <svg 
                height={tomatoHeight} 
                width={tomatoWidth} 
                viewBox="0 0 51.679 51.679" 
                fill="" 
                transform="matrix(1, 0, 0, 1, 0, 0)" 
                stroke="">
                <defs>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset={`${100 - workPercentage}%`} stopColor="transparent" />
                        <stop offset={`${100 - workPercentage}%`} stopColor={redFillColor} />
                    </linearGradient>
                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset={`${100 - pausePercentage}%`} stopColor="transparent" />
                        <stop offset={`${100 - pausePercentage}%`} stopColor={greenFillColor} />
                    </linearGradient>
                </defs>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                    <path style={{ fill: `url(#greenGradient)`, stroke: greenFillColor, strokeWidth: 1 }} d="M40.47,8.458c-2.562-1.642-7.374-3.93-11.997-1.816c-0.445,0.204-0.952-0.117-0.952-0.607V1.786 C27.522,0.804,26.855,0,26.04,0h-2.223c-0.815,0-1.482,0.804-1.482,1.786v4.501c0,0.425-0.385,0.747-0.802,0.661 c-1.877-0.387-6.751-0.989-11.412,1.795c-0.638,0.381-0.268,1.381,0.464,1.247c2.17-0.397,5.026-0.67,6.956,0.092 c0.506,0.199,0.579,0.891,0.124,1.189c-1.371,0.895-3.9,2.953-5.557,6.737c-0.282,0.644,0.51,1.221,1.053,0.774 c2.117-1.744,5.6-4.107,8.554-3.726c0.348,0.045,0.612,0.329,0.607,0.68c-0.03,1.982-0.005,8.716,1.632,11.265 c0.258,0.402,0.836,0.422,1.117,0.035c1.043-1.433,3.304-5.233,3.211-11.167c-0.006-0.39,0.307-0.707,0.697-0.694 c1.49,0.048,5.008,0.469,7.798,3.194c0.457,0.447,1.214,0.061,1.134-0.573c-0.219-1.735-1.174-4.359-4.631-6.394 c-0.525-0.309-0.436-1.095,0.155-1.24c1.194-0.293,3.252-0.572,6.644-0.46C40.768,9.723,41.049,8.829,40.47,8.458z"></path>
                    <path style={{ fill: `url(#redGradient)`,stroke: redFillColor, strokeWidth: 1 }} d="M41.248,9.99c-0.093-0.065-0.201-0.106-0.314-0.12c-0.4-0.049-0.801-0.095-1.201-0.149 c-0.143-0.014-0.287-0.025-0.429-0.039c-2.914-0.048-4.743,0.206-5.846,0.474c-0.599,0.146-0.707,0.931-0.175,1.244 c3.457,2.035,4.411,4.659,4.63,6.393c0.08,0.634-0.677,1.02-1.134,0.573c-2.79-2.724-6.308-3.145-7.798-3.194 c-0.39-0.013-0.704,0.304-0.697,0.694c0.092,5.934-2.168,9.734-3.211,11.167c-0.282,0.387-0.859,0.367-1.117-0.035 c-1.637-2.549-1.662-9.283-1.632-11.265c0.005-0.35-0.259-0.635-0.607-0.68c-2.954-0.382-6.437,1.982-8.554,3.726 c-0.543,0.447-1.335-0.13-1.053-0.774c1.655-3.779,4.18-5.836,5.552-6.733c0.457-0.299,0.381-0.994-0.128-1.19 c-0.371-0.143-0.776-0.249-1.203-0.324c-0.076-0.014-0.157-0.015-0.234-0.004c-2.425,0.33-4.807,0.791-7.119,1.411 c-0.102,0.027-0.197,0.076-0.278,0.144c-5.103,4.246-8.307,10.359-8.307,17.156c0,12.821,11.393,23.214,25.446,23.214 s25.446-10.393,25.446-23.214C51.286,20.928,47.348,14.23,41.248,9.99z"></path>
                    <path style={{ fill: '#ED7161' }} d="M5.791,34.636c-0.342,0-0.675-0.175-0.861-0.49C4.182,32.883,3.692,31.488,3.473,30 C3.393,29.453,3.772,28.947,4.318,28.867c0.556-0.086,1.055,0.298,1.135,0.844c0.178,1.213,0.593,2.395,1.199,3.418 c0.281,0.475,0.125,1.089-0.351,1.37C6.14,34.591,5.965,34.636,5.791,34.636z"></path>
                    </g>
                </g>
            </svg>
        </>
    )
}

export default Tomato;