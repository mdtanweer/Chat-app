import { SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <h2>All Chats</h2>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input placeholder="search chats" type="text" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
