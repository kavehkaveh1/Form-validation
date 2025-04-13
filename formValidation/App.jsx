import React, { useState } from "react";
import InputForm from "./component/inputForm";
import "./style.css";
function App() {
  const [values, setValues] = useState({
    userName: "",
    birthDay: "",
    Email: "",
    password: "",
    confrimPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "userName",
      lable: "userName",
    },
    {
      id: 2,
      name: "birthDay",
      type: "date",
      placeholder: "birthDay",
      lable: "birthDay",
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "Email",
      lable: "Email",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      lable: "password",
    },
    {
      id: 5,
      name: "confrimPassword",
      type: "password",
      placeholder: "confrimPassword",
      lable: "confrimPassword",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefualt();
  };
  console.log(values);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form action="/" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <InputForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default App;
