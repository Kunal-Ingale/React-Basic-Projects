import React, { useState } from 'react'


const Timer = ({hour,minutes,seconds,handleReset,handlePause,isPaused,handleResume}) => {
    
    return (
        <div className='show-contaienr'>
            <div className='timer-box'>
                <div>{hour<10 ?  `0${hour}`: `${hour}`}</div>
                <span>:</span>
                <div>{minutes<10 ?  `0${minutes}`: `${minutes}`}</div>
                <span>:</span>
                <div>{seconds<10 ?  `0${seconds}`: `${seconds}`}</div>
            </div>

            <div className='action-box'>
                {   !isPaused &&
                    <button className='timer-button'onClick={handlePause}>Pause</button>
                }
                {   isPaused &&
                    <button className='timer-button' onClick={handleResume}>Resume</button>
                }
                <button className='timer-button' onClick={handleReset} >Reset</button>
            </div>
        </div>
    )
}


export default Timer;
