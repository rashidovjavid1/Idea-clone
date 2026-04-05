import React from "react";
import { Checkbox } from "antd";

const CustomCheckbox = ({ options, onChange }) => (
  <Checkbox.Group onChange={onChange} className="checkBoxGroup">
    {options.map((opt) => (
      <Checkbox
        key={opt.value}
        value={opt.value}
        style={{
          color: "#000",
          opacity: "1",
          fontSize: "1.5rem",
          margin: "0",
        }}
      >
        {opt.label}
      </Checkbox>
    ))}
  </Checkbox.Group>
);

export default CustomCheckbox;
