import React from "react";
import { Checkbox } from "antd";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};

const options = [
  { label: "Tree planting", value: "Tree planting" },
  { label: "Beach clean-up", value: "Beach clean-up" },
  { label: "Educational workshop", value: "Educational workshop" },
  { label: "Wildlife conservation", value: "Wildlife conservation" },
  { label: "Event organization", value: "Event organization" },
  {
    label: "Social media content creation",
    value: "Social media content creation",
  },
];

const App = () => (
  <Checkbox.Group onChange={onChange}>
    {options.map((opt) => (
      <Checkbox
        key={opt.value}
        value={opt.value}
        style={{
          color: "#000",
          opacity: "1",
          padding: "1rem 2rem",
          fontSize: "1.5rem",
          margin: "0",
        }}
      >
        {opt.label}
      </Checkbox>
    ))}
  </Checkbox.Group>
);

export default App;
