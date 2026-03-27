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
  <>
    <Checkbox.Group options={options} defaultValue={[""]} onChange={onChange} />
  </>
);
export default App;
