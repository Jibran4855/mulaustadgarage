import React, { useState } from "react";
import "../assets/styles/Portfolio.css";
import newmethods from "../assets/images/s1.png";
import norvido from "../assets/images/s2.png";
import PortfolioProject from "./PortfolioProject";
import portfolio from "../assets/images/s3.jpg";
import portfolio2 from "../assets/images/s4.jpg";

const Portfolio = (props) => {
  const [websiteDetails, setWebsiteDetail] = useState([
    {
      id: 1,
      name: "Electric and Mechanic Services",
      paragraph:
        "An Auto Mechanic fixes vehicles and replaces their parts for customers. Their duties include repairing the vehicle's mechanical components, diagnosing problems with cars/ trucks and performing maintenance work on them as well.",
      technologies: [],
      picture: newmethods,
      githublink: "https://github.com/Jibran4855/LearningNewMethods",
      livewebsitelink: "https://jibran4855.github.io/LearningNewMethods/",
      row: "row",
    },
    {
      id: 2,
      name: "Hybrid Battery Repairing",
      paragraph:
        "Hybrid battery reconditioning is restoring a hybrid battery&#39;s performance to its original state after it has been damaged or degraded over time due to wear and tear. You can do this by replacing degraded cells with new ones, recharging the battery pack, or resetting the BMS (battery management system).",
      technologies: [],
      picture: norvido,
      githublink: "https://nordivo.com/",
      livewebsitelink: "https://nordivo.com/",
      row: "row-reverse",
    },
    {
      id: 3,
      name: "AC Services & Gas Charging",
      paragraph:
        "Gas charging is an essential maintenance procedure for your air conditioner that helps you optimise its cooling performance. This involves adding or replenishing refrigerant gas in the AC system to ensure efficient heat exchange and proper cooling.",
      technologies: [],
      picture: portfolio,
      githublink: "https://github.com/Jibran4855/portfolio",
      livewebsitelink: "https://jibran4855.github.io/portfolio/",
      row: "row",
    },
    {
      id: 4,
      name: "Computerized Tuning",
      paragraph:
        "Car tuning is the modification of a car to optimise it for a different set of performance requirements from those it was originally designed to meet. Most commonly this is higher engine performance and dynamic handling characteristics but cars may also be altered to provide better fuel economy, or smoother response.",
      technologies: [],
      picture: portfolio2,
      githublink: "https://github.com/Jibran4855/portfolio",
      livewebsitelink: "https://jibran4855.github.io/portfolio/",
      row: "row-reverse",
    },
  ]);

  return (
    <div id="portfolio" className="Portfolio-class">
      <div className="container">
        <div className="top">
          <h1>Services</h1>
          <h2>Which we provide to our Customers:</h2>
        </div>
        <PortfolioProject websiteDetails={websiteDetails} />
      </div>
    </div>
  );
};

export default Portfolio;
