import React from "react";
import "./Sidebar.css";

import gearIcon from "../assets/buttonsidebar1.png";
import chartIcon from "../assets/image2.png";
import dollarIcon from "../assets/buttonsb3.png";
import plusIcon from "../assets/buttonsb4.png";
import upIcon from "../assets/buttonsb5.png";
import jeuIcon from "../assets/buttonsb6.png";
import calculIcon from "../assets/buttonsb7.png";
import chatIcon from "../assets/buttonsb8.png";
import namoulaIcon from "../assets/image1.png";
import outIcon from "../assets/buttonsb9.png";
import fleshIcon from "../assets/flesh.png";

const icons = [
  { icon: gearIcon, page: "gear" },
  { icon: chartIcon, page: "chart" },
  { icon: dollarIcon, page: "finance" },
  { icon: plusIcon, page: "plus" },
  { icon: upIcon, page: "up" },
  { icon: jeuIcon, page: "jeu" },
  { icon: calculIcon, page: "calcul" },
  { icon: chatIcon, page: "chat" },
  { icon: outIcon, page: "logout" }
];

const Sidebar = ({ onChangePage }) => {
  return (
    <div className="sidebar">
      <img src={namoulaIcon} alt="Namoula" className="namoula" />

      {icons.map(({ icon, page }, index) => (
        <div className="sidebar-button-wrapper" key={index}>
          <button
            className="sidebar-button"
            onClick={() => onChangePage(page)}  // <-- Appelle la fonction passée en props
          >
            <img src={icon} alt={`icon-${index}`} className="sidebar-icon" />
          </button>
          <div className="arrow-hover">
            <img src={fleshIcon} alt="Arrow" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
