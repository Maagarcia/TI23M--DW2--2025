import React, { useEffect } from "react";
import { supabase } from "../Supabase";
import { useState } from "react";

import styles from "./Estagio.module.css";

export const Estagio = () => {
  const [info, setInfo] = useState([]);

  const [total, setTotal] = useState(0);

  const [dia, setDia] = useState("");

  const [hora, setHora] = useState("");

  const [descricao, setDescricao] = useState("");

  const [acumulado,setAcumulado] = useState(0)

  useEffect(() => {
    fetchEstagios();
  }, []);

  const fetchEstagios = async () => {
    try {
      const { data, error } = await supabase
        .from("Estagio")
        .select("*")
        .order("dia", { ascending: true });

      setInfo(data);
      if (error) throw error;
      else {
        const soma = data.reduce((acc, item) => acc + item.Hora, 0);
        setTotal(soma);
      }
    } catch (error) {
      console.log(error);
      alert("erro ao buscar estagios", error.message);
    }
  };

  const inserir_data = async (e) => {
    e.preventDefault();
    if (dia === "" || hora === "") {
      alert("preencha os campos obrigatórios!");
      return;
    }
    const{ error } = await supabase
    .from("Estagio")
    .insert([
      { dia:`${dia}`, Hora: `${hora}`, descrição: `${descricao}` },
    ]);
    if (error) {
      console.log(error);
      alert("Erro ao inserir dados: ", error.message);
    } else {
      // alert("Dados inseridos com sucesso!");
      setDia("");
      setHora("");
      setDescricao("");
      fetchEstagios();
    }
  }
    const deletar_data = async (id) => {
      const { error } = await supabase
        .from("Estagio")
        .delete()
        .eq("id", id);
      if (error) {
        console.log(error);
        alert("Erro ao deletar dados: ", error.message);
      } else {
        fetchEstagios();

      }
    }
  ;

  const teste = (x,y) =>{
    let total = x[0].Hora
    let tamanho = y
    for(let i = 0; i<tamanho; i++){
      total += x[i].Hora
    }

    return total
  }

  const diadehoje = () => {
    const hoje = new Date();
    const ano = hoje.getFullYear()
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const diaDoMes = String(hoje.getDate()).padStart(2, '0');
    setDia(`${ano}-${mes}-${diaDoMes}`);
    console.log(dia)
  }
  return (
    <>
      <div className={styles.titulo}>
        <h1 >Estagio</h1>
      </div>
      <div>

      <form action="" onSubmit={inserir_data} className={styles.form}>
      {/* <button onClick={fetchEstagios}>mostrar data</button> */}
      <input className={styles.inputs} type="date" value={dia} onChange={(e)=> setDia(e.target.value)}/>
      <input className={styles.inputs} type="number" placeholder="Numero de horas" value={hora} onChange={(e)=> setHora(e.target.value)}/>
      <input className={styles.inputs} type="text" placeholder="Descrição (Opcional)" value={descricao} onChange={(e)=> setDescricao(e.target.value)}/>

      <button className={styles.button}> Submitar</button>

      </form>
      </div>
      <button onClick={diadehoje} className={styles.button}>Usar o dia de hoje</button>
      <table className={styles.tabela}>
        <thead>
          <tr className={styles.cabecalho}>
            <th className={styles.itemCabecalho} >Dia</th>
            <th className={styles.itemCabecalho} >Horas</th>
            <th className={styles.itemCabecalho} >Horas Acumuladas</th>
            <th className={styles.itemCabecalho} >Descrição</th>
          </tr>
        </thead>
        <tbody className={styles.lista}>
          {info.map((estagio,index) => (
            <tr key={estagio.id} className={styles.linha}>
              <td className={styles.item}>{estagio.dia}</td>
              <td className={styles.item}>{estagio.Hora}</td>
              <td className={styles.item}>{teste(info, index)}</td>
              <td className={styles.item}>{estagio.descrição}</td>
              <td><button className={styles.button} onClick={()=> deletar_data(estagio.id)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Tempo de estágio: {total}</h3>
      <h3>Tempo restante: {400 - total}</h3>

    <button onClick={()=>console.log(info)}>ver infos</button>
    </>
  );
};
