import React from "react";
import "./inputFormStyle.css";
function InputForm(props) {
  const { onChange, lable, ...others } = props;
  return (
    <div className="formInput">
      <label>{lable} : </label>
      <input onChange={onChange} {...others} />
    </div>
  );
}

export default InputForm;
