import React, { useState } from "react";
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
  // definindo um hook
  // i é a variavel que vou usar
  // setI e a funcao que fara a operacao desejada
  // useState(x) onde x é o valor inicial atribuido a i
  const [i, setI] = useState(1);

  // funcao para incrementar
  const increment = () => {
    //usando o hook setI para incrementar
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>
        Hello {props.name} - i={i}
      </h1>
      <button onClick={increment}>Incrementar</button>
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento2}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Aula01" />, rootElement);
