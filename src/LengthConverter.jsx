import React, { useState } from "react";

const LengthConverter = () => {
  const [meter, setMeter] = useState("");
  const [centimeter, setCentimeter] = (useState = "");
  const [kilometer, setKilometer] = useState("");

  const handleMeterChange = (e) => {
    const value = e.target.value;
    setMeter(value);
    setCentimeter(value !== "" ? parseFloat(value) * 100 : "");
    setKilometer(value !== "" ? parseFloat(value) / 1000 : "");
  };

  const handleCentimeterChange = (e) => {
    const value = e.target.value;
  };

  return (
    <>
      <div className="container">
        <h2 text-center fw-bold>
          Length Converter
        </h2>

        <div className="row mt-5 card shadow-lg border-0 rounded">
          <div className="col-md-5 card shadow-lg border rounded">
            <div className="card-body p-4"></div>
            <div className="mb-3">
              <label htmlFor="meter" className="form-label fw-bold"></label>
              <input
                type="number"
                id="celcius"
                className="form-control border primary"
                value={meter}
                onChange={handleMeterChange}
                placeholder="Enter in Meter"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LengthConverter;
