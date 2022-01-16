import React from "react";
import CountUp from "react-countup";
const Process = () => {
  const processItems = [
    { number: "275", firstTitle: "Current ", secondTitle: "Fixings" },
    { number: "6325", firstTitle: "Happy ", secondTitle: "Client" },
    { number: "22", firstTitle: "Years ", secondTitle: "Experience" },
    { number: "5750", firstTitle: "Devices ", secondTitle: "Fixing" },
  ];
  return (
    <div className="process-part">
      <div className="container my-5 pt-5 ">
        <div className="header-process text-center text-white">
          <h1>Our Statistics</h1>
          <p style={{ fontFamily: "arial" }}>
            We’re experienced and award winning repair company. We’ve
            successfully fixed thousands of computer device over the last couple
            of years with our customer satisfaction.
          </p>
        </div>
        <div className="row py-5">
          {processItems.map((item) => (
            <div key={item.number} className="col-md-3 text-center pb-5 ">
              <h1
                style={{
                  fontSize: "47px",
                  fontWidth: "700",
                  color: "white",
                }}
              >
                <CountUp end={item.number} duration={10} />
              </h1>
              <h2
                style={{ fontSize: "30px", fontWidth: "600p", color: "white" }}
              >
                {item.firstTitle}{" "}
                <span style={{ color: "#f69323" }}>{item.secondTitle}</span>{" "}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
