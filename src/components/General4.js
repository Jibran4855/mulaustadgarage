import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import portfolio2 from "../assets/images/s4.jpg";

const General4 = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1058320936351991";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1058320936351991"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div style={{ backgroundColor: "#f9f5f2", padding: "30px" }}>
        <h1 style={{ color: "black" }}>Computerized Tuning</h1>
        <p style={{ color: "black", fontSize: "45px", textAlign: "justify" }}>
          Car tuning is the modification of a car to optimise it for a different
          set of performance requirements from those it was originally designed
          to meet. Most commonly this is higher engine performance and dynamic
          handling characteristics but cars may also be altered to provide
          better fuel economy, or smoother response.
        </p>
      </div>

      <div style={{ backgroundColor: "#f9f5f2", width: "100%" }}>
        <img src={portfolio2} alt="example" />
      </div>
    </>
  );
};

export default General4;
