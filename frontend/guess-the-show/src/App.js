import "./App.css";
import { io } from "socket.io-client";
import { useEffect } from "react";
import MovingDiv from "./moving-div";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:3000"); // Replace with your server URL
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <MovingDiv></MovingDiv>
    </div>
  );
}

export default App;
