import React from "react";
const PortfolioProject = (props) => {
  return (
    <>
      {props.websiteDetails.map((itm) => (
        <div className="bottom">
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
                    <span key={itm.technologies[tech]}>{tech}</span>
                  ))}
                </div>
              </div>
              {/* <div className="bottomb">
                <a
                  style={{ textDecoration: "none" }}
                  href={itm.livewebsitelink}
                  target="_blank"
                >
                  <div className="livebtn">
                    Live Demo <i class="fa fa-play-circle"></i>
                  </div>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href={itm.githublink}
                  target="_blank"
                >
                  <div className="gitbtn">
                    Code <i class="fa fa-github"></i>
                  </div>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioProject;
