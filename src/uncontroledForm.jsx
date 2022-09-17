import React from "react";

const UncontroledForm = () => {
  const loginRef = React.useRef();
  const passwordRef = React.useRef();

  const handlerFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="App">
      <h1>Uncontroled Form</h1>
      <form onSubmit={handlerFormSubmit}>
        <label>
          Login {"  "}
          <input type="text" name="login" ref={loginRef} />
        </label>
        <br />
        <label>
          Password {"  "}
          <input type="text" name="password" ref={passwordRef} />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UncontroledForm;
