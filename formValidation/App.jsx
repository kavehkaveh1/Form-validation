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
      errorMassage:
        " Username should be 3-16 characters and shouldn't include any special charachters! ",
      pattern: "^[A-Za-z0-9]{3,16}$",
      lable: "userName",
      required: true,
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
      errorMassage: "It should be a valid email address! ",
      lable: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMassage:
        " Password should be 8-20 characters at least 1 letter, 1 number and 1 special characters",
      lable: "password",
      pattern:
        "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confrimPassword",
      type: "password",
      placeholder: "confrimPassword",
      errorMassage: " Password don't match!",
      lable: "confrimPassword",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values);
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="app">
      <form action="/" onSubmit={handleSubmit}>
        <h1>register</h1>
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
//`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-zA-Z0!@#$%^&*]{8-20}$`
