import { useState } from "react";
import { supabase } from "./Supabase";
import { useEffect } from "react";

import styles from './Agenda.module.css'

export default function Agenda() {
  const [nome, setNome] = useState("");

  const [numero, setNumero] = useState("");

  const [contato, setContato] = useState([]);

  const [editandoId, setEditandoId] = useState(null);

  const [novoNome, setNovoNome] = useState("");

  const [novoNumero, setNovoNumero] = useState("");

  const mostrar_data = async () => {
    const { data } = await supabase
      .from("contatos")
      .select("*")
      .order("created_at", { ascending: true });
      setContato(data);
    console.log(contato)
      
  };

  useEffect(() => {
    mostrar_data();
  }, []);

  const handleNumber = (e) => {
    setNumero(e.target.value);
  };

  const inserir_data = async () => {
    if (nome == "" || numero == "") {
      alert("preencha os campos!");
      return;
    } else {
      const { error } = await supabase
        .from("contatos")
        .insert({ nome: `${nome}`, numero: `${numero}` });
      if (error) {
        console.error(error);
      } else {
        mostrar_data();
        setNome("");
        setNumero("");
      }
    }
  };

  const deletar_data = async (id) => {
    const { error } = await supabase.from("contatos").delete().eq("id", id);
    if (error) {
      console.error(error);
    } else {
      setContato(contato.filter((u) => u.id !== id));
    }
  };

  const atualizar_data = async (id) => {
    const { error } = await supabase
      .from("contatos")
      .update({ nome: novoNome, numero: novoNumero })
      .eq("id", id);

    if (error) {
      console.error(error);
    } else {
      setContato(
        contato.map((c) =>
          c.id === id ? { ...c, nome: novoNome, numero: novoNumero } : c
        )
      );
      setEditandoId(null); // sai do modo edição
    }
  };
  return (
    <>
      <div >
        <h1>cds</h1>
        <input
          type="text"
          value={nome}
          placeholder="nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          value={numero}
          placeholder="numero"
          onChange={handleNumber}
        />

        <button onClick={inserir_data}>show</button>
        <ul>
        {contato.map((elemento) => (
            <li key={elemento.id}>
              {editandoId === elemento.id ? (
                <>
                  <input
                    type=""
                    value={novoNome}
                    onChange={(e) => setNovoNome(e.target.value)}
                  />
                  <input
                    type="text"
                    value={novoNumero}
                    onChange={(e) => setNovoNumero(e.target.value)}
                  />

                  <button onClick={() => atualizar_data(elemento.id)}>
                    salvar
                  </button>
                  <button onClick={() => setEditandoId(null)}>cancelar</button>
                </>
              ) : (
                <>
                  {elemento.nome} - {elemento.numero}
                  <button onClick={() => deletar_data(elemento.id)}>
                    deletar
                  </button>
                  <button
                    onClick={() => {
                      setEditandoId(elemento.id);
                      setNovoNome(elemento.nome);
                      setNovoNumero(elemento.numero);
                    }}
                  >
                    Atualizar
                  </button>
                </>
              )}
            </li>
        ))}
        </ul>
      </div>
    </>
  );
}
