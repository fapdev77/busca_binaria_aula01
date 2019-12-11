import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// elemento
//JSX
const elemento = (
  <div>
    <h2>Olá Fabio!</h2>
  </div>
);
//REACT normal
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Olá Fabio (elemento2)")
);

function App(props) {
  return (
    <div className="App">
      <h1>Hello {props.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento2}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Aula01" />, rootElement);
