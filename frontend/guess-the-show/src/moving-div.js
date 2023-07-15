import React, { useEffect, useState } from 'react';


const validPosition =(maxLimit , currentPos , movementAmount) =>{
    if ((currentPos - movementAmount ) < maxLimit  ){
        return currentPos
    } 
    return (currentPos - movementAmount ) 
}
const MovingDiv = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      const movementAmount = 10; // Adjust this value to change the movement speed

      if (key === 'ArrowUp' ) {
        if (position.y-movementAmount>0){
            setPosition((prevPosition) => ({
                ...prevPosition,
                y: prevPosition.y - movementAmount,
              }));
        }
        
      } else if (key === 'ArrowDown') {

        if(position.y + movementAmount + 50 < 500){
            setPosition((prevPosition) => ({
                ...prevPosition,
                y: prevPosition.y + movementAmount,
              }));
        }
        
      } else if (key === 'ArrowLeft') {
        if (position.x - movementAmount  > 0){
            setPosition((prevPosition) => ({
                ...prevPosition,
                x: prevPosition.x - movementAmount,
              }));
        }
        
      } else if (key === 'ArrowRight') {
        if(position.x + movementAmount < 1000){
            setPosition((prevPosition) => ({
                ...prevPosition,
                x: prevPosition.x + movementAmount,
              }));
        }
        
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [position]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
      }}
    ></div>
  );
};

export default MovingDiv;
