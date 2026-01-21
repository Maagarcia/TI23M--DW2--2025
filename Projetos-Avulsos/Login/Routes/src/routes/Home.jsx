import React, { useEffect } from "react";
import { supabase } from "./Supabase";

const Home = () => {
  useEffect(() => {
    showTasks();
  });

  const [tarefa, setTarefa] = React.useState(null);

  const [data, setData] = React.useState(null);

  const [tarefarray,setTarefarray] = React.useState(["odds"," dsfnjsdk"])

  const [elemento,setElemento] = React.useState(null)

  const showTasks = async () => {
    const { data, error } = await supabase.from("Tarefa").select();
    setData(data);
  };

  const insertTask = async () => {
    const { error } = await supabase
    .from("Tarefa")
      
      .insert([
      {
        tarefa: `${tarefa}`,
      },
    ]);
    setTarefa("")
  };

  const insertTaskArray = async()=>{
    for(const element of tarefarray){

      const{ error } = await supabase
      .from("Tarefa")
      .insert([{
        tarefa: `${element}`
      }])
    }

  }


  return (
    <>
      <h1>hello</h1>
      {data && data.map((data) => <p>{data.tarefa}</p>)}

      {/* <input
        type="text"
        value={tarefa}
        onChange={(e) => {
          setTarefa(e.target.value);
        }}
      />
      <button onClick={insertTask}>inserir tarefa</button> */}
    <input type="text" value={elemento} onChange={(e)=>{setElemento(e.target.value)}} />
    <button onClick={()=>setTarefarray([...tarefarray, elemento])}>inserir</button>
      <p>{tarefarray}</p>
      <button onClick={insertTaskArray}>inserir array</button>
    </>
  );
};

export default Home;
