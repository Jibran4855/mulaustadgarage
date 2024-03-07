import React from "react";
import norvido from "../assets/images/s2.png";
const General2 = () => {
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
        <img src={norvido} />
      </div>
    </>
  );
};
export default General2;
