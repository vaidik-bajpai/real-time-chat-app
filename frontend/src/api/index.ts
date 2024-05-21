let socket: WebSocket | null = null;

let connect = (cb: (msg: MessageEvent) => void) => {
  console.log("connecting");

  socket = new WebSocket("ws://localhost:3000/ws");

  socket.onopen = () => {
    console.log("success");
  };

  socket.onmessage = (msg) => {
    console.log("Message from Websocket", msg);
    cb(msg);
  };

  socket.onclose = (event) => {
    console.log("socket closed connection:", event);
  };

  socket.onerror = (err) => {
    console.log("socket error: ", err);
  };
};

let sendMsg = (msg: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    console.log("sending message: ", msg);
    socket.send(msg);
  } else {
    console.log("Socket is not open. Ready state: ", socket?.readyState);
  }
};

export { connect, sendMsg };