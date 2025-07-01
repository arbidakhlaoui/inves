// src/components/Layout.js
import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
import HeaderBar from "./HeaderBar1"; // si HeaderBar contient aussi le header et non tout le contenu

const Layout = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-section">
        <HeaderBar />
        <div className="main-content">
          <Outlet /> {/* ← Ici s'affichera le body de la page selon la route */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
