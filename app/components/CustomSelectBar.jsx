import React from "react";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(value);
};
const App = () => (
  <Select
    className="custom-select"
    labelInValue
    defaultValue={{ value: "select", label: "Select" }}
    style={{
      width: "100%",
      borderColor: "#BBDCE6",
      height: "5.7rem",
      borderRadius: "10rem",
      padding: "2rem",
    }}
    onChange={handleChange}
    options={[
      {
        value: "baku",
        label: "Baku",
      },
      {
        value: "ganja",
        label: "Ganja",
      },
      {
        value: "sumgayit",
        label: "Sumgayit",
      },
      {
        value: "shaki",
        label: "Shaki",
      },
    ]}
  />
);
export default App;
