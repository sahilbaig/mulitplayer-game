import { useState, useEffect , useRef } from "react";
import mySound from "./assests/sounds/audio2.mp3";
const Timer = () => {
  const [count, setCount] = useState(3);
  const [isRunning, setRunning] = useState(false)
  const audioRef = useRef()
  
  const [options, setOptions] = useState([])  
  useEffect(() => {
    let interval;
    if(isRunning){
      interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

    }

    if(count<=0){
      clearInterval(interval)
      handlePlay()
    }
    return () => {
      clearInterval(interval);
    };
  
  }, [isRunning, count]);


  const handlePlay = () => {
    const audioElement = audioRef.current;
    audioElement.currentTime = 20; // Set the starting position to 2 seconds
    audioElement.play();

    setTimeout(() => {
      audioElement.pause();
    }, 30000); // Stop playback after 30 seconds
  };

  const startTimer =  () =>{
    setRunning(true)
  }

  useEffect(()=>{

    setOptions([
      {"answer": "A" , "is_answer": false},
      {"answer": "B" , "is_answer": false},
      {"answer": "C" , "is_answer": false},
      {"answer": "D" , "is_answer": true}

    ])
  },[])

  const checkAnswer = (is_answer) =>{
   if(is_answer){
    console.log("correct Answers")
    // handle points system 
   }
  }
  return (
    <div>
      <audio ref={audioRef} src={mySound} autoPlay />
      <h2>Countdown: {count}</h2>
      <button onClick={startTimer}> Play </button >

      {options.map((user, index) => (
        <button key = {index} className="user" onClick={()=>{checkAnswer(user.is_answer)}}>{user.answer}</button>
      ))}
    </div>
  );
};

export default Timer;
