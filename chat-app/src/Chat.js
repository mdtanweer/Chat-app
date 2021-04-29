import { Avatar, IconButton } from "@material-ui/core";

import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import { Cancel, InsertEmoticonOutlined } from "@material-ui/icons";

import io from "socket.io-client";
function Chat() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();
  useEffect(() => {
    state.name = prompt("enter your name");
  }, []);

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <p
        key={index}
        className={`chat_message ${name === state.name && "chat_reciver"}`}
      >
        <span className="chat_name">{name}</span>
        {message}
        <span className="chat_timestamp">9:30pm</span>
      </p>
    ));
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Any Name</h3>
          <p>Last seen:-12:30pm</p>
        </div>

        <div className="chat_headerRight"></div>
        <IconButton>
          <Cancel />
        </IconButton>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton>
          <InfoIcon />
        </IconButton>
      </div>
      <div className="chat_body">{renderChat()}</div>
      <div className="chat_footer">
        <InsertEmoticonOutlined />
        <form onSubmit={onMessageSubmit}>
          <input
            name="message"
            value={state.message}
            onChange={(e) => onTextChange(e)}
            type="text"
            placeholder="Type your message here ..."
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
