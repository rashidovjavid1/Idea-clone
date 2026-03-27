import React from "react";
import { Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const App = () => (
  <Checkbox onChange={onChange}>Agree to receive updates</Checkbox>
);
export default App;
