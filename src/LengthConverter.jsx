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
      <div className="lengthConverterWrapper max-w-screen-2xl bg-white rounded-lg p-3 m-5">
        <label htmlFor="LengthMeasure" className="m-3">
          Enter length
        </label>
        <input
          type="number"
          name="inputValue"
          id="inputValue"
          className="w-full p-2 rounded-lg border border-gray-300"
          onChange={(e) => {
            setInputvalue(e.target.value);
          }}
        />
        <label htmlFor="lengthUnit" className=" m-3">
          Unit
        </label>
        <select
          name="units"
          id="inputLengthUnit"
          defaultValue="default"
          // value={inputLengthUnit}
          onChange={handleInputUnitChange}
          className=" m-2 rounded-lg"
        ></select>

        <option disabled value="default">
          select unit
        </option>
        <option value="km">Kilometer (km)</option>
        <option value="m">Meter (m)</option>
        <option value="cm">Centimeter (cm)</option>
        <option value="mi">Miles (mi)</option>
        <option value="ft">Feet (ft)</option>
        <option value="in">Inches (in)</option>

        <div>
          <label htmlFor="outputLengthUnit" className=" m-3">
            Convert To
          </label>
          <select
            name="units"
            id="outputLengthUnit"
            defaultValue="default"
            onChange={handleOutputUnitChange}
            className=" rounded-lg"
          >
            <option disabled value="default">
              select unit
            </option>
            <option value="km">Kilometer (km)</option>
            <option value="m">Meter (m)</option>
            <option value="cm">Centimeter (cm)</option>
            <option value="mi">Miles (mi)</option>
            <option value="ft">Feet (ft)</option>
            <option value="in">Inches (in)</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleConversion}
        >
          Convert
        </button>

        <label htmlFor="outputLengthMeasure" className="text-white m-3">
          Converted length
        </label>
        <input
          value={outputValue}
          type="text"
          name="outputValue"
          id="outputValue"
          disabled
          className="w-full p-2 rounded-lg border border-gray-300"
        />
      </div>
    </>
  );
};

export default LengthConverter;
