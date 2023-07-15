import React, { useEffect, useState } from 'react';

const MovingDiv = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      const movementAmount = 10; // Adjust this value to change the movement speed

      if (key === 'ArrowUp') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - movementAmount,
        }));
      } else if (key === 'ArrowDown') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + movementAmount,
        }));
      } else if (key === 'ArrowLeft') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x - movementAmount,
        }));
      } else if (key === 'ArrowRight') {
        setPosition((prevPosition) => ({
          ...prevPosition,
          x: prevPosition.x + movementAmount,
        }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '100px',
        height: '100px',
        backgroundColor: 'red',
      }}
    ></div>
  );
};

export default MovingDiv;
