// const net = require("net");

// const {connect} = require('./play');

// const conn = net.createConnection({
//   host: '165.227.47.243',
//   port: 50541
// });

// conn.on('connect', () => {
//   conn.write("Name: FEI");
//   setTimeout(() => {conn.write('Move: up')}, 500);
//   setTimeout(() => {conn.write('Move: left')}, 1000);
//   setTimeout(() => {conn.write('Move: down')}, 1500);
//   setTimeout(() => {conn.write('Move: right')}, 2000);
//   setInterval(() => {conn.write('Move: right')}, 1000);
//   setInterval(() => {conn.write('Move: left')}, 500);
//   setInterval(() => {conn.write('Move: down')}, 500);

// });

// // setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };


const {connect} = require('./client');
const {setupInput} = require('./input')




console.log("Connecting....");
//  connect(); // calling the connect function which has everything inside

connect();
// let connectResult = connect(); 
setupInput(connect()); // calling the setUpInput function