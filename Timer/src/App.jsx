
import './App.css';
import { useEffect, useState } from 'react';
import Input from './Input.jsx';
import Timer from './Timer.jsx';

function App() {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);


  const handleStart = () => {
    if (hour < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input");
      return;
    } else {
      setIsStart(true);
    }
  }

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === 'hours') {
      setHour(value);
    } else if (id === 'minutes') {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  }
 

  const runTimer = (sec, min, hr, tid) => {
    if (sec === 0 && min === 0 && hr === 0) {
      alert('Timer is finished');
      clearInterval(tid);
      return
    }

    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHour((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hour, tid);
      }, 1000)
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    }
  }, [isStart, hour, minutes, seconds])
  console.log(hour, minutes, seconds)

  const handlePause=()=>{
    setIsPaused(true)
    clearInterval(timerId)
    }

    const handleResume=()=>{
      setIsPaused(false);
      runTimer(hour, minutes, seconds)
    }
    const handleReset =()=>{
      setIsStart(false);
      }
 

  return ( 
    <div className="App">
      <h1>Countdown Timer</h1>
      {
        !isStart && <Input
          handleStart={handleStart}
          handleInput={handleInput} />
      }

      {
        isStart &&
        <Timer
        hour={hour}
          minutes={minutes}
          seconds={seconds}
          setIsStart={setIsStart}
          isPaused={isPaused}
          handlePause={handlePause}
          handleReset={handleReset}
          handleResume={handleResume}
        />
      }

    </div>
  );
}

export default App;