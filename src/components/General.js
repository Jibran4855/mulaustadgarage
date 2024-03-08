import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import newmethods from "../assets/images/s1.png";

const General = () => {
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
        <h1 style={{ color: "black" }}>Electric and Mechanic Services</h1>
        <p style={{ color: "black", fontSize: "45px", textAlign: "justify" }}>
          An Auto Mechanic fixes vehicles and replaces their parts for
          customers. Their duties include repairing the vehicle's mechanical
          components, diagnosing problems with cars/ trucks and performing
          maintenance work on them as well.
        </p>
      </div>

      <div style={{ backgroundColor: "#f9f5f2", width: "100%" }}>
        <img src={newmethods} alt="example" />
      </div>
    </>
  );
};

export default General;
