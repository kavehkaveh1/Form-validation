import React, { useState } from "react";
import "./inputFormStyle.css";
function InputForm(props) {
  const { onChange, errorMassage, lable, ...others } = props;
  const [focused, setFocused] = useState(false);
  const handleChange = (e) => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{lable} : </label>
      <input
        onChange={onChange}
        {...others}
        onBlur={handleChange}
        focused={focused.toString()}
      />
      <span>{errorMassage}</span>
    </div>
  );
}

export default InputForm;
