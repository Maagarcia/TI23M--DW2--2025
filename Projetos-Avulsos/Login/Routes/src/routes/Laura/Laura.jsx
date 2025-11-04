import React from "react";
import styles from "./Laura.module.css";

export const Laura = () => {
  return (
    <>
      <section className={styles.container}>
        <div>
          <div className={styles.imagem}></div>
        </div>
        <div className={styles.texto}>
            <h1>Por quem você segue?</h1>
            <li>Lembra por quem voce segue todos os dias...</li>
            <li>Para ve-la feliz assim como voce se sente quando ela esta por perto</li>
            <li>Para ser alguem melhor em vida por ela</li>
            <li>Para a pessoa mais importante da sua vida</li>
            <li>Sua princesa</li>
        </div>
      </section>
    </>
  );
};
