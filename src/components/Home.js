import React from "react";
import img from "../assets/images/programmer.png";
import civic from "../assets/images/civic.png";
import html5 from "../assets/images/m1.png";
import css from "../assets/images/m2.png";
import js from "../assets/images/m3.png";
import react from "../assets/images/m4.png";
import nodejs from "../assets/images/m5.png";
import "../assets/styles/Home.css";

const Home = (props) => {
  return (
    <div id="home" className="Home-class">
      <div className="top">
        <div className="profile-desc">
          <h1>Mullah Ustad Motor Garage (Since 2005) </h1>
          <p>Mullah Ustaad</p>
          <p>0306-3875002</p>
          <p>0333-2788339</p>
          <p>0313-8897702</p>
          <p>Karner Pul Double Road, Quetta 📍</p>
        </div>
        <div className="profile-pic">
          <img src={civic} width="600" height="350" />
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>HYBRID SERVICES</h2>
          <span className="borderright"></span>
        </div>
        <div className="right">
          <div>
            <img src={html5} width="50" height="50" />
          </div>
          <div>
            <img src={css} width="50" height="50" />
          </div>
          <div>
            <img src={js} width="50" height="50" />
          </div>
          <div style={{ backgroundColor: "white" }}>
            <img src={react} width="50" height="50" />
          </div>
          <div>
            <img src={nodejs} width="50" height="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
