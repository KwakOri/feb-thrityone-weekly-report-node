// TODO:
// 1. 먼저 node에서 15초 간격으로 API 요청을 하는 상황 구현 (setTimeout)
// 2. front와 back websocket 연결
// 3. back에서 front로 progress data 전송
// 4. front에서 progress bar 구현

const { Server } = require("socket.io");
const io = new Server(server);
