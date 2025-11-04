import { Link } from "react-router-dom";

import styles from "./Projetos.module.css";
import { ProjetoBlock } from "./ProjetoBlock";

export const Projetos = () => {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.title}>Projetos</h1>
        <section className={styles.colunas}>
          
          <ProjetoBlock>
            <Link to="1">projeto 1</Link>
          </ProjetoBlock>
          <ProjetoBlock>
            <Link to="2">Projeto 2</Link>
          </ProjetoBlock>
          <ProjetoBlock>
            <Link to="3">projeto 3</Link>
          </ProjetoBlock>
          <ProjetoBlock>
            <Link to="3">projeto 3</Link>
          </ProjetoBlock>
        </section>
      </section>
    </>
  );
};
