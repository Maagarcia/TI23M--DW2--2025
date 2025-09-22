import { useState } from "react";

import { useEffect } from "react";

import styles from "./Caixa.module.css";

const palavrasArray = ["hello", "hi", "popsicle"];

import Container from "./Container";
import { useRef } from "react";

let palavraDoArray =
  palavrasArray[Math.floor(Math.random() * palavrasArray.length)];

export default function Caixa() {
  const [numerodepalavras, setNumeroDePalavras] = useState(0);

  const [percentagem, setPercentagem] = useState(0);

  const [palavra, setPalavra] = useState("");

  const [count, setCount] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    setPercentagem(count / numerodepalavras);
  }, [count, numerodepalavras]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPalavra("");
    console.log("log");
  };

  const handleChange = (e) => {
    
    
   
    // console.log(palavra)
    setPalavra(e.target.value);
    if (e.target.value.length == palavraDoArray.length) {
      if (e.target.value == palavraDoArray) {
        // palavraDoArray = palavrasArray[Math.floor((Math.random())*palavrasArray.length)]
        // setPalavra('')
        console.log(percentagem, "isso é a percentagem de acerto");
        console.log(count, "isso é quanto eu acertei");
        console.log(numerodepalavras, "isso é o numero de poalavras");
        setNumeroDePalavras((num) => num + 1);
        setCount((num) => num + 1);
      } else {
        setNumeroDePalavras((num) => num + 1);
      }
      palavraDoArray =
        palavrasArray[Math.floor(Math.random() * palavrasArray.length)];
      setPalavra("");
    }
  };
  return (
    <div className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={styles.input_caixa}
          type="text"
          placeholder="Digite Sua Palavra"
          value={palavra}
          onChange={handleChange}
        />
        {/* <button type="submit"></button> */}
      </form>
      {/* <p>{count}</p>
        <p>{palavraDoArray}</p>
        <p>Porcentagem de acerto:{numerodepalavras==0 && count==0 ? `0`: Math.floor((percentagem * 100).toFixed(1))}%</p>
        <p>Numero de palavras:{numerodepalavras}</p>
        <h1>{palavra}</h1> */}
      <div className={styles.container_infos}>
        <Container
          palavra={palavra}
          proxPalavra={palavraDoArray}
          numerodepalavras={numerodepalavras}
          percentagem={percentagem}
          count={count}
        />
      </div>
    </div>
  );
}
