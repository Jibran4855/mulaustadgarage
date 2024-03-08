import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import norvido from "../assets/images/s2.png";

const General2 = () => {
  useEffect(() => {
    // Create and append the AdSense script element
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1058320936351991";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Create and append the AdSense ins element
    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", "ca-pub-1058320936351991");
    ins.setAttribute("data-ad-slot", "6828621820");
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    document.body.appendChild(ins);

    // Push the AdSense script
    const pushScript = document.createElement("script");
    pushScript.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
    document.body.appendChild(pushScript);

    // Clean up function to remove added elements
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(ins);
      document.body.removeChild(pushScript);
    };
  }, []);

  return (
    <>
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
