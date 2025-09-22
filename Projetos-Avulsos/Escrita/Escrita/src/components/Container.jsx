import { useEffect, useRef } from "react";
import styles from "./Container.module.css";

export default function Container({  palavra,  proxPalavra,  percentagem,  numerodepalavras,  count,}) {
  const palavraRef = useRef(null);
  const proxpalavraRef = useRef(null)

  useEffect(() => {
    if (palavraRef.current) {
      palavraRef.current.classList.remove(styles.bounce);
      void palavraRef.current.offsetWidth; // força reinício
      palavraRef.current.classList.add(styles.bounce);
    }
  }, [palavra]);

  
  useEffect(() => {
    if (proxpalavraRef.current) {
      proxpalavraRef.current.classList.remove(styles.bounce);
      void proxpalavraRef.current.offsetWidth; // força reinício
      proxpalavraRef.current.classList.add(styles.bounce);
    }
  }, [numerodepalavras]);

  return (
    <div className={styles.container}>
      <h6 ref={proxpalavraRef}>{proxPalavra}</h6>
      <h1 ref={palavraRef}>{palavra}</h1>
      <h3>numero de palavras:{numerodepalavras}</h3>
      <h5>numero de acertos:{count}</h5>
      <h6>
        Sua porcentagem de acertos é de:
        {numerodepalavras == 0 && count == 0
          ? `0`
          : Math.floor((percentagem * 100).toFixed(1))}
        %
      </h6>
    </div>
  );
}
