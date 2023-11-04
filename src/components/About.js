import React from "react";
import "../assets/styles/About.css";
import programmer from "../assets/images/p.jpg";

const About = (props) => {
  return (
    <div id="about" className="About-class">
      <div className="container">
        <div className="left">
          <img src={programmer} width="300" height="450" />
        </div>
        <div className="right">
          <div className="top">
            <h1>About Us</h1>
          </div>
          <div className="mid">
            Mula Ustad is a prominent and trusted name in the auto services
            industry, based in Quetaa, Pakistan. 📍
          </div>
          <div className="bottom">
            <p>
              We provide complete electric and mechanic services, we possess an
              impressive arsenal of skills in{" "}
              <span className="skill-span">Hybrid Battery Repairing</span>,{" "}
              <span className="skill-span">Computerized Tuning</span>,{" "}
              <span className="skill-span">ABS Repairing</span>,{" "}
              <span className="skill-span">Suspension Repairing</span>,{" "}
              <span className="skill-span">BCM ECM Coding</span>,{" "}
              <span className="skill-span">Gear Learning</span>,{" "}
              <span className="skill-span">Fuel Injection</span>,{" "}
              <span className="skill-span">AC Services & Gas Charging</span>,
              and <span className="skill-span">ETS Throttle Adaptation</span>.
              We have been providing auto services since 2005. Our history is
              proof of quality services and trustworthiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
