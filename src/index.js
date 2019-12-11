import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var versao = "Versão 1.2";

// Jogo simples onde escolhemos um numero
// e o computador tem que acertar o numero que escolhemos
// usando busca binaria

// regras:
// 3 estados= ENTRADA, RODANDO, FIM
// numeros tem um range de 0 a 300
// guardar o numero de palpites que a maquina deu

function App() {
  //Estado inicial
  const [estado, setEstado] = useState("ENTRADA");
  //define o palpite inicial e proximo palpite
  const [palpite, setPalpite] = useState(150);
  //armazena quantos palpites foram feitos
  const [numPalpites, setNumPalpites] = useState(1);
  //define os valores min/max
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  //função que muda o estado para RODANDO quando
  //usuário clicar no botão 'Iniciar o Jogo!'
  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumPalpites(1);
    setPalpite(150);
  };
  //Se estado inicial for ENTRADA aguarda usuario iniciar jogo
  if (estado === "ENTRADA") {
    return (
      <div className="App">
        <p>
          <br />
          Jogo simples e divertido de advinha! <br />
          A regra basica é:
          <br />
          <br />
          -> Primeiro: pense em um número entre 0 e 300
          <br />
          <br />
          -> Segundo: o computador tentará adivinhar o número baseado nas dicas
          que <br />
          você dará, ou seja, se o valor é menor ou maior do que o palpite que
          ele mostra.
          <br />
          clique no botão 'Maior!' ou 'Menor!' para ajuda-lo a descobrir! <br />
          <br />
          -> Terceiro: quando ele acertar, clique no botão 'Acertei!' e o jogo
          termina.
          <br /> <br />
          Jogue quantas vezes quiser! Basta clicar no botão 'Jogar novamente!'
          <br /> <br />
          Quando estiver pronto para o desafio clique em 'Iniciar o jogo!'
          <br />
          Divirta-se!
          <br />
          <br />
        </p>
        <button onClick={iniciarJogo}>Iniciar o Jogo!</button>
      </div>
    );
  }

  //função se o valor for menor que o palpite
  const menor = () => {
    //incremento o numero de palpites
    setNumPalpites(numPalpites + 1);
    //defino o valor máximo para o ultimo palpite
    setMax(palpite);
    //defino valor do proximo palpite dividindo por 2
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    //atribuo valor do palpite com proxPalpite
    //direciona automaticamente para fim do jogo ao
    //acertar valor
    var checkZero = parseInt((max - palpite) / 2);
    if (checkZero === 0) {
      setPalpite(proxPalpite);
      setEstado("FIM");
    } else {
      setPalpite(proxPalpite);
    }
  };

  //função se o valor for maior que o palpite
  const maior = () => {
    //incremento o numero de palpites
    setNumPalpites(numPalpites + 1);
    //defino o valor máximo para o ultimo palpite
    setMin(palpite);
    //defino valor do proximo palpite dividindo por 2
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    //atribuo valor do palpite com proxPalpite
    //Evita valor maior ficar travado e direciona
    //automaticamente para fim do jogo ao acertar valor
    var checkZero = parseInt((max - palpite) / 2);
    if (checkZero === 0) {
      setPalpite(proxPalpite + 1);
      setEstado("FIM");
    } else {
      setPalpite(proxPalpite);
    }
  };

  const acertou = () => {
    //Ao acertar, finaliza o jogo
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div className="App">
        <p>
          Acretou o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={iniciarJogo}>Jogar novamente!</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Seu número é {palpite}?</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
      <br /> <br />
      <h5>{versao}</h5>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
