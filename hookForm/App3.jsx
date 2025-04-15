import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(data);
  };
  return (
    <div>
      <form action="/" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">userName : </label>
          <input
            type="text"
            {...register("userName", {
              required: "username is required",
              pattern: {
                value: /^[A-Za-z0-9]{3,16}$/,
                message:
                  "Username should be 3-16 characters and shouldn't include any special characters!",
              },
            })}
            id="userName"
          />
          {errors.userName && (
            <div className="error"> {errors.userName.message} </div>
          )}
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 8,
                message: "password must have at leaste 8 charachters",
              },
            })}
            id="password"
          />
          {errors.password && (
            <div className="error"> {errors.password.message} </div>
          )}
        </div>
        <div>
          <button disabled={isSubmitting} type="submit">
            {isSubmitting ? "...loading" : "submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
