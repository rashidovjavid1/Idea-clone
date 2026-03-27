import React from "react";
import { Select } from "antd";
const handleChange = (value) => {
  console.log(value);
};
const App = () => (
  <Select
    labelInValue
    defaultValue={{ value: "select", label: "Select" }}
    style={{ width: 120 }}
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
