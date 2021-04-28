import { Avatar, IconButton } from "@material-ui/core";

import CallIcon from "@material-ui/icons/Call";
import InfoIcon from "@material-ui/icons/Info";
import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import { Cancel, InsertEmoticonOutlined } from "@material-ui/icons";

function Chat() {
  const messageEl = useRef(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed >>>", input);

    setInput("");
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
      <div className="chat_body" ref={messageEl}>
        <p className={`chat_message ${true && "chat_reciver"}`}>
          <span className="chat_name">Any Name</span>
          Hey Guys
          <span className="chat_timestamp">9:30pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <InsertEmoticonOutlined />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message here ..."
          />
          <button onClick={sendMessage} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
