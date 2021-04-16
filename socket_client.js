var socket = require("socket.io-client")
('https://f8265b297e91.ngrok.io',{
  serveClient: false,
  reconnectionDelay: 2200,
  reconnection:true,
  reconnectionAttempts: 10,
  secure:true,
  transports: ["websocket","polling"],
  agent: false, // [2] Please don't set this to true
  upgrade: false,
  rejectUnauthorized: false
});


// var socket = io();
// 'http://omnicode.tech/wego/socket:3000'
// console.log('Io Instance:',io());
// var socket = io('http://www.omnicode.tech/wego/socket',{
//     serveClient: false,
//     reconnectionDelay: 2200,
//     reconnection:true,
//     reconnectionAttempts: 10,
//     secure:true,
//      transports: ["websocket"],
//     agent: false, // [2] Please don't set this to true
//     upgrade: false,
//     rejectUnauthorized: false
// });

console.log('socket:',socket)
//'http://www.omnicode.tech/wego/socket/node_modules/socket.io/dist/socket.js

// const socket = io.connect('http://www.omnicode.tech/wego/socket',{
//     secure:true,
//     reconnectionDelay: 1000,
//     reconnection:true,
//     reconnectionAttempts: 10,
//     secure:true,
//     transports: ['websocket'],
//     agent: false, // [2] Please don't set this to true
//     upgrade: false,
//     rejectUnauthorized: false
// });

socket.on('connect_failed', (err) => {
  console.log(`connect_failed Error ${err.message}`);
});
socket.on('disconnect', (err) => {
  console.log(`disconnect Error ${err.message}`);
});

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});


socket.on("connect", () => {
    console.log(`client connected`);

    socket.emit("hello_conect",()=>{
      console.log('hello_conect fired');
    });

    socket.on("server_emit",()=>{
      console.log('Hello from Server.');
    });
  });
  