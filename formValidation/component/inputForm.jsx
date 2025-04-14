import React, { useState } from "react";
import "./inputFormStyle.css";
function InputForm(props) {
  const { onChange, errorMassage, lable, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleChange = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{lable} : </label>
      <input
        onChange={onChange}
        {...inputProps}
        onBlur={handleChange}
        onFocus={() =>
          inputProps.name === "confrimPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMassage}</span>
    </div>
  );
}

export default InputForm;
