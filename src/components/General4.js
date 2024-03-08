import React, { useEffect } from "react";
import portfolio2 from "../assets/images/s4.jpg";
const General4 = () => {
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
