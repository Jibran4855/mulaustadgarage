import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import norvido from "../assets/images/s2.png";

const General2 = () => {
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
        <h1 style={{ color: "black" }}>Hybrid Battery Repairing</h1>
        <p style={{ color: "black", fontSize: "45px", textAlign: "justify" }}>
          Hybrid battery reconditioning is restoring a hybrid battery&#39;s
          performance to its original state after it has been damaged or
          degraded over time due to wear and tear. You can do this by replacing
          degraded cells with new ones, recharging the battery pack, or
          resetting the BMS (battery management system).
        </p>
      </div>
      <div style={{ backgroundColor: "#f9f5f2", width: "100%" }}>
        <img src={norvido} alt="example" />
      </div>
    </>
  );
};

export default General2;
