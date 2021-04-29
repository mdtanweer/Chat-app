import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import InfoUser from "./InfoUser";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
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
