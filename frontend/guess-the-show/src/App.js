import logo from "./logo.svg";
import "./App.css";
import { io } from "socket.io-client";
import Timer from "./timer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const socket = io("http://localhost:3000"); // Replace with your server URL
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => {
            const socket = io("http://localhost:3000");
            socket.emit("join-room" , {room: "RoomName"});
          }}
        >
          Join room (user 2)
        </button>

        <button
          onClick={() => {
            const socket = io("http://localhost:3000");
            socket.emit("join-room" , {room: "RoomName"});

          }}
        >
         Join room (user1)
        </button>
        <Timer />
      </header>
    </div>
  );
}

export default App;
