
import { Link } from "react-router-dom";

import styles from './Projetos.module.css'
import { ProjetoBlock } from "./ProjetoBlock";

export const Projetos = () => {
  return (
    <>
    <section className={styles.container}>

      <h1 className={styles.title}>Projetos</h1>
      <ul>
        <li>
          <ProjetoBlock>
            <p>amominha namorada</p>
          <Link to="1">OIOi</Link>
          </ProjetoBlock>
        </li>
        <li>
          <Link to="2">Contato 2</Link>
        </li>
        <li>
          <Link to="3">Contato 3</Link>
        </li>
      </ul>
    </section>
    </>
  );
};
