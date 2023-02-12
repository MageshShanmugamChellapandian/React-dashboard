import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Layout.css";
import { useState } from "react";

const Layout = ({ children }: any) => {
  const [sidebarClose, setSidebarclose] = React.useState<boolean>(
    window.innerWidth <= 768 ? true : false
  );

  return (
    <div className="layout_wrapper">
      <Sidebar toggleState={sidebarClose} />
      <div className="layout_content_wrapper">
        <Navbar toggleState={sidebarClose} toggleFunc={setSidebarclose} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
