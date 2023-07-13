
import { useState, useEffect } from "react";
import useSound from "use-sound";
import mySound from './assests/sounds/audio.mp3'

const Timer = () =>{
    const [playSound] = useSound(mySound)
    const  [count, setCount] = useState(3);
    useEffect (()=>{
        const interval = setInterval(() => {
            setCount(prevCount => prevCount - 1);
          }, 1000);

          return () => {
            clearInterval(interval);
          };
    },[])

    useEffect(() => {
        if (count === 0) {
            playSound()  
        }
      }, [count]);
    

      return (
        <div>
          <h2>Countdown: {count}</h2>
        </div>
      );

}

export default Timer