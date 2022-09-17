import React from "react";
import UncontroledForm from "./uncontroledForm";
import "./App.css";
import ControledForm from "./controledForm";
import ReactHookForms from "./reactHookForms";

function App() {
  return (
    <div>
      <UncontroledForm /> <br />
      <ControledForm /> <br />
      <ReactHookForms />
    </div>
  );
}

export default App;
