import portfolio2 from "../assets/images/s4.jpg";
const General4 = () => {
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
        <img src={portfolio2} />
      </div>
    </>
  );
};
export default General4;
