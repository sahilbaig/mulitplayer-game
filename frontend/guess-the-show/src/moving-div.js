import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

const MovingDiv = forwardRef((props, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const maxX = window.innerWidth;
    const maxY = window.innerHeight;

    const handleKeyDown = (event) => {
      const { key } = event;
      const movementAmount = 5; // Adjust this value to change the movement speed

      if (key === 'ArrowUp') {
        if (position.y - movementAmount > 0) {
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y - movementAmount,
          }));
        }
      } else if (key === 'ArrowDown') {
        if (position.y + movementAmount + 50 < maxY) {
          setPosition((prevPosition) => ({
            ...prevPosition,
            y: prevPosition.y + movementAmount,
          }));
        }
      } else if (key === 'ArrowLeft') {
        if (position.x - movementAmount > 0) {
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x - movementAmount,
          }));
        }
      } else if (key === 'ArrowRight') {
        if (position.x + movementAmount < maxX) {
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

  useImperativeHandle(ref, () => ({
    getPosition: () => {
      return position;
    },
    getBoundary : () =>{
      const boundary = { ...position, xEnd:position.x+50, yEnd: position.y+50};
      return boundary 
    }
  }));

  useEffect(() => {
    if (props.onPositionChange) {
      props.onPositionChange(position);
    }
  }, [position, props, props.onPositionChange]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '50px',
        height: '50px',
        backgroundColor: 'red',
        ref :{ref}
      }}
    ></div>
  );
});

export default MovingDiv;
