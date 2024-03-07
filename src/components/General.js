import newmethods from "../assets/images/s1.png";
const General = () => {
  return (
    <>
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
        <img src={newmethods} />
      </div>
    </>
  );
};
export default General;
