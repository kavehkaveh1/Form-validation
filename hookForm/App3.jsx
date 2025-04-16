import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
function App() {
  const schema = z.object({
    userName: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(16, "Username must be at most 16 characters")
      .regex(/^[A-Za-z0-9]+$/, "No special characters allowed!"),

    password: z.string().min(8, "Password must be at least 8 characters"),
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    console.log(watch());
    reset();
  };
  return (
    <div>
      <form action="/" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="userName">userName : </label>
          <input type="text" {...register("userName")} id="userName" />
          {errors.userName && (
            <div className="error"> {errors.userName.message} </div>
          )}
        </div>
        <div>
          <label htmlFor="password">password : </label>
          <input type="password" {...register("password")} id="password" />
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
