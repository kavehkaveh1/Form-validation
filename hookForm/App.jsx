import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
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
            })}
            id="userName"
          />
          {errors.userName && <div> {errors.userName.message} </div>}
        </div>
        <div>
          <label htmlFor="password">passwordf : </label>
          <input
            type="password"
            {...register("password", {
              required: "password is required",
            })}
            id="password"
          />
          {errors.password && <div> {errors.password.message} </div>}
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
