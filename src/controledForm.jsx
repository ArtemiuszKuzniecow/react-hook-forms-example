import React from "react";

const ControledForm = () => {
  const [formData, setFormData] = React.useState({
    values: {
      login: "",
      password: "",
    },
    errors: {
      login: "",
      password: "",
    },
  });

  const validateFormInput = (value) => {
    return value.length > 5;
  };

  const handlerFormInputChange = (e) => {
    const { name, value } = e.target;
    if (!validateFormInput(value)) {
      setFormData((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: "Необходимо ввести больше пяти символов",
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        errors: {
          ...prev.errors,
          [name]: "",
        },
      }));
    }
    setFormData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData.values);
  };

  return (
    <div className="App">
      <h1>Controled Form</h1>
      <form onSubmit={handlerFormSubmit}>
        <label>
          Login {"  "}
          <input
            type="text"
            name="login"
            value={formData.login}
            onChange={handlerFormInputChange}
          />
        </label>
        <br />
        <span>{formData.errors.login && formData.errors.login}</span>
        <br />
        <label>
          Password {"  "}
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handlerFormInputChange}
          />
        </label>
        <br />
        <span>{formData.errors.password && formData.errors.password}</span>
        <br />
        <input
          type="submit"
          disabled={
            !formData.values.login ||
            !formData.values.password ||
            formData.errors.login ||
            formData.errors.password
          }
        />
      </form>
    </div>
  );
};

export default ControledForm;
