// const express = require("express");
// const app = express();
// const http = require("http").createServer(app);

// const socketIO = require("socket.io")(http, {
//   cors: {
//     origin: "*",
//   },
// });

// module.exports = socketIO;

// let socketIO;
// class SocketServer {
//   static setConnect(http) {
//     socketIO = require("socket.io")(http, {
//       cors: {
//         origin: "*",
//       },
//     });
//   }
//   static getConnect() {
//     setTimeout(() => {
//       // console.log(socketIO);
// return socketIO;
//     }, 2000);
//   }
// }

class SocketServer {
  static setConnect(http) {
    const socketIO = require("socket.io")(http, {
      cors: {
        origin: "*",
      },
    });
    return socketIO; // Return the Socket.IO instance
  }
}

module.exports = SocketServer;


module.exports = SocketServer;
