import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import portfolio from "../assets/images/s3.jpg";

const General3 = () => {
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
        <h1 style={{ color: "black" }}>AC Services & Gas Charging</h1>
        <p style={{ color: "black", fontSize: "45px", textAlign: "justify" }}>
          Gas charging is an essential maintenance procedure for your air
          conditioner that helps you optimize its cooling performance. This
          involves adding or replenishing refrigerant gas in the AC system to
          ensure efficient heat exchange and proper cooling.
        </p>
      </div>

      <div style={{ backgroundColor: "#f9f5f2", width: "100%" }}>
        <img src={portfolio} alt="example" />
      </div>
    </>
  );
};

export default General3;
