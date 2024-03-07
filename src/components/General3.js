import portfolio from "../assets/images/s3.jpg";

const General3 = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f9f5f2", padding: "30px" }}>
        <h1 style={{ color: "black" }}>AC Services & Gas Charging</h1>
        <p style={{ color: "black", fontSize: "45px", textAlign: "justify" }}>
          Gas charging is an essential maintenance procedure for your air
          conditioner that helps you optimise its cooling performance. This
          involves adding or replenishing refrigerant gas in the AC system to
          ensure efficient heat exchange and proper cooling.
        </p>
      </div>

      <div style={{ backgroundColor: "#f9f5f2", width: "100%" }}>
        <img src={portfolio} />
      </div>
    </>
  );
};
export default General3;
