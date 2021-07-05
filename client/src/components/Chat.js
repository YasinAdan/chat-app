import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./infoBar";

import "../styles/styles.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);

    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    console.log(socket);

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div>
      <div>
        <InfoBar room={room}/>
        {/* <input
        className='bg-blue-100'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        /> */}
      </div>
    </div>
  );
};

export default Chat;
