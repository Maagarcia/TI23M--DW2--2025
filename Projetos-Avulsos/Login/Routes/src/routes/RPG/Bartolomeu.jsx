import React, { useEffect } from "react";
import { supabase } from "../Supabase";

const Bartolomeu = () => {
  const [item, setItem] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [data, setData] = React.useState([]);

  const [vida, setVida] = React.useState(0);
  const [dados, setDados] = React.useState(6);
  const [sequela, setSequela] = React.useState(0);
  const [tensao, setTensao] = React.useState(0);
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Item:", item);
    console.log("Descrição:", descricao);
    if (item !== "" && descricao !== "") {
      const { error } = await supabase
        .from("RPG")
        .insert([{ item: `${item}`, descrição: `${descricao}` }]);
      if (error) {
        console.log(error);
        alert("Erro ao inserir dados: ", error.message);
      } else {
        setItem("");
        setDescricao("");
        fetchData();
      }
    } else {
    }
  };

  const fetchData = async () => {
    const { data, error } = await supabase.from("RPG").select("*");
    setData(data);
  };
  const deleteItem = async (id) => {
    e.preventDefault();
    const { error } = await supabase.from("RPG").delete().eq("id", id);
    if (error) {
      console.log(error);
      alert("Erro ao deletar dados: ", error.message);
    } else {
      fetchData();
    }
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Bartolomeu</h1>
        <h2 style={{ fontWeight: 100 }}>
          "Ninguem precisa de sapatos quando se está nos céus"
        </h2>
      </div>

      <div>
        <h4>
          Desejo Obscuro:{" "}
          <span style={{ fontWeight: "100" }}>Desejar a morte do pai</span>{" "}
        </h4>
        <h4>
          Objeto iconico:{" "}
          <span style={{ fontWeight: "100" }}>Medalha de OBA</span>{" "}
        </h4>
        <h4>
          Relação : <span style={{ fontWeight: "100" }}>Com o papagaio</span>{" "}
        </h4>
        <form
          action=""
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            style={{
              border: "1px solid black ",
              padding: "5px",
              color: "#ffdb89",
              outline: "none",
              borderRadius: "7px",
            }}
            type="text"
            placeholder="Item"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <input
            style={{
              border: "1px solid black",
              padding: "5px",
              color: "#ffdb89",
              outline: "none",
              borderRadius: "7px",
            }}
            type="text"
            placeholder="descrição"
            value={descricao}
            onChange={(e) => {
              setDescricao(e.target.value);
            }}
          />
          <button
            style={{
              width: "100px",
              backgroundColor: "black",
              color: "#ffdb89",
              borderRadius: "7px",
              border: "1px solid black ",
              cursor: "pointer",
            }}
            type="submit"
          >
            +
          </button>
        </form>

        <table style={{ borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#121312", color: "#ffdb89" }}>
            <th
              style={{
                width: "500px",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Item
            </th>
            <th
              style={{
                width: "500px",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Descrição
            </th>
          </thead>
          <tbody>
            {data.map((itens) => {
              return (
                <tr key={itens.id}>
                  <td style={{ border: "1px solid black" }}>{itens.item}</td>
                  <td style={{ border: "1px solid black" }}>
                    {itens.descrição}
                  </td>
                  <button
                    onClick={(e) => deleteItem(itens.id)}
                    style={{
                      width: "20px",
                      backgroundColor: "#121312",
                      border: "1px solid black",
                      color: "#ffdb89",
                    }}
                  >
                    -
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <h1>
            Pontos de Ferir: <span style={{ color: "#3D0000" }}>{vida}</span>
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setVida(vida - 1)}
            >
              -
            </button>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setVida(vida + 1)}
            >
              +
            </button>
          </div>
          <h1>
            Quantidade de dados:{" "}
            <span style={{ color: "#3D0000" }}>{dados}/6</span>
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setDados(dados - 1)}
            >
              -
            </button>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setDados(dados + 1)}
            >
              +
            </button>
          </div>
          <h1>
            Sequela: <span style={{ color: "#3D0000" }}>{sequela}/6</span>
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setSequela(sequela - 1)}
            >
              -
            </button>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setSequela(sequela + 1)}
            >
              +
            </button>
          </div>
          <h1>
            Tensão: <span style={{ color: "#3D0000" }}>{tensao}/6</span>
          </h1>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{  
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}

              onClick={() => setTensao(tensao - 1)} 
            >
              -
            </button>
            <button
              style={{
                cursor: "pointer",
                width: "20px",
                backgroundColor: "#121312",
                border: "1px solid black",
                color: "#ffdb89",
              }}
              onClick={() => setTensao(tensao + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bartolomeu;
