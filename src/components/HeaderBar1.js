// src/components/HeaderBar.js
import React from "react";
import "./HeaderBar.css";

import arrowIcon from "../assets/arrow-icon.png";
import coupeIcon from "../assets/coupe.png";
import timeIcon from "../assets/time.png";
import recycleIcon from "../assets/recycle.png";
import calendarIcon from "../assets/calendarIcon.png";
import sunIcon from "../assets/sunIcon.png";
import personIcon from "../assets/personIcon.png";
import tIcon from "../assets/tIcon.png";

let classement = 7;
let actuel = 6;
const total = 12;
let recycleCount = 50;
let tempsRestant = "04:56:03";

const HeaderBar1 = () => {
  return (
    <div className="header-wrapper">
      <div className="header-bar">
        <div className="left-section">
          <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
          <div className="header-path">
            <span className="path-jeux">Jeux</span>
            <span className="path-separator">></span>
            <span className="path-hr">Human-resources</span>
          </div>
        </div>

        <div className="right-section">
          <div className="right-section1">
            <img src={coupeIcon} alt="Coupe" className="arrow-icon" />
            <span className="classement">Classement : {classement}</span>
          </div>
          <div className="right-section2">
            <img src={timeIcon} alt="Time" className="arrow-icon" />
            <div className="time-container">
              <span className="Trimestre no-wrap">Passage du trimestre</span>
              <span className="temps">{tempsRestant}</span>
            </div>
          </div>
          <div className="right-section3">
            <img src={recycleIcon} alt="Recycle" className="recycle" />
            <span className="recycle-count">{recycleCount}%</span>
            <div className="trimestre-container">
              <div className="inline-container">
                <span className="Ttri1">
                  <span className="actuel-value">{actuel}</span>
                  <span className="total-value">/{total}</span>
                </span>
              </div>
              <span className="Trimestre">Trimestres</span>
            </div>
          </div>
        </div>

        <div className="extra-section">
          <button className="events-button">
            <img src={calendarIcon} alt="Calendar" className="button-icon" />
            <span>Events</span>
          </button>
          <img src={sunIcon} alt="Sun" className="extra-icon" />
          <img src={personIcon} alt="Person" className="extra-icon" />
          <img src={tIcon} alt="T Icon" className="extra-icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderBar1;
