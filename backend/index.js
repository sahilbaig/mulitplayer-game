import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const httpServer = createServer(app);
app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

function areClientsInSameRoom(client1Id) {
  console.log(`Sockets in room : ${io.sockets.adapter}`)
  
  // return roomsOfClient1.some(room => roomsOfClient2.includes(room));
}

const clients =[]
io.on('connection', socket => {
  socket.on("join-room", (room)=>{
    
    if (room.room){
      socket.join(room.room)
    }

    console.log(io.sockets.adapter.rooms.get('RoomName'));
  })
});



httpServer.listen(3000, () => {
  console.log('Socket.IO server listening on port 3000');
});