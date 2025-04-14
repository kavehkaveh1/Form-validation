import React from "react";
import "./inputFormStyle.css";
function InputForm(props) {
  const { onChange, errorMassage, lable, ...others } = props;
  return (
    <div className="formInput">
      <label>{lable} : </label>
      <input onChange={onChange} {...others} />
      <span>{errorMassage}</span>
    </div>
  );
}

export default InputForm;
