import "./App.css";
import { io } from "socket.io-client";
import React, { useState,useEffect, useRef, forwardRef } from "react";

import MovingDiv from "./moving-div";
import Drops from "./drops";


const checkCollision = (obj1, obj2) =>{
  if (
    obj1.x < obj2.xEnd &&
    obj1.xEnd > obj2.x &&
    obj1.y < obj2.yEnd &&
    obj1.yEnd > obj2.y
  ) {
    return true; // Collision detected
  }

  return false; 
}
function App() {

  const dropRef = useRef(null);
  const userRef = useRef(null);
  useEffect(() => {
    const socket = io("http://localhost:3000"); // Replace with your server URL
    return () => {
      socket.disconnect();
    };
  }, []);

  const [positionData, setPositionData] = useState(null);

  const handlePositionChange = (position) => {
    setPositionData(position);    
  };

  useEffect (function userDropCollide(){
    if (dropRef.current && userRef.current){
      if (checkCollision(userRef.current.getBoundary() , dropRef.current.getBoundary())){
        console.log("takra gyae")
        // Handle collision her
      }

    }
    
  })



  return (
    <div className="App">
      <MovingDiv ref={userRef} onPositionChange={handlePositionChange}></MovingDiv>
      <Drops ref={dropRef} />
    </div>
  );
}

export default App;
