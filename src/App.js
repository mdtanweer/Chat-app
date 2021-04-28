import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import InfoUser from "./InfoUser";
import { BrowserRouter as Router } from "react-router-dom";

import io from "socket.io-client";
function App() {
  useEffect(() => {
    const socket = io();
    socket.emit("example_message", "demo");
  }, []);
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar />
          <Chat />
          <InfoUser />
        </Router>
      </div>
    </div>
  );
}

export default App;
