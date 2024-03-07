import React from "react";

import { Link } from "react-router-dom";
const PortfolioProject = (props) => {
  return (
    <>
      {props.websiteDetails.map((itm, index) => (
        <div key={index} className="bottom">
          <Link to={`/mulaustadgarage/${itm.id}`}>
            <div className="containerb" style={{ flexDirection: itm.row }}>
              <div className="leftb">
                <img src={itm.picture} />
              </div>
              <div className="rightb">
                <div className="topb">
                  <h3>{itm.name}</h3>
                </div>
                <div className="midb">
                  <p>{itm.paragraph}</p>
                  <div className="midbtn">
                    {itm.technologies.map((tech) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default PortfolioProject;
