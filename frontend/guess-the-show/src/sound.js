import useSound from 'use-sound'
import mySound from './assests/sounds/audio.mp3'
function MyButton(){
    const [playSound] = useSound(mySound)
    
    return (
      <button onClick={() => 
      {
        playSound()    }}>
         Play Sound
         
      </button>
    )
  }

export default MyButton