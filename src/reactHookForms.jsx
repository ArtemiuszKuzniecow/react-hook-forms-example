import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const handlerFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>React Hook Forms</h1>
      <form onSubmit={handleSubmit(handlerFormSubmit)}>
        <label>
          Login{"  "}
          <input
            type="text"
            {...register("login", {
              required: { value: true, message: "Login is required" },
              minLength: {
                value: 6,
                message: "Login must at least be 5 symbols",
              },
              validate: {
                isFieldNonQwerty: (str) => {
                  return str !== "qwerty";
                },
              },
            })}
          />
        </label>
        <br />
        <span>
          {errors.login && errors.login.message}
          {errors.login?.type === "isFieldNonQwerty" && "Too simple"}
        </span>
        <br />
        <label>
          Password{"  "}
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: {
                value: 6,
                message: "Password must at least be 5 symbols",
              },
            })}
          />
        </label>
        <br />
        <span>{errors.password && errors.password.message}</span>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookForms;
