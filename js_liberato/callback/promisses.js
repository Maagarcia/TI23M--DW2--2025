// const tarefa1 = new Promise((resolve,reject) =>{
//     console.log('fabricio')
// })

//qualquer um dos dois funciona

const verification = true
function tarefa2(){
    const promessa = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log('hello world')  
            if(verification){
                resolve()//minha promessa funciona
            }else{
                reject()//minha promessa não funciona
            }
        },2000)
        
    })
    return promessa
}


// function tarefa3(){
//     const promessa = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log('diana')
//         },1000)
//     })
//     return promessa
// }

async function tarefa3(){
    console.log('rafael')
}

// tarefa2().then(tarefa3).catch(()=>{console.log('error')})
// tarefa3().then( setTimeout(()=>{
//     console.log('liberato')
// },1000)
// )
// .then(tarefa2)


function tarefaAssincrona(sucesso = true) {
  console.log("Executando tarefa");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sucesso) resolve("Tarefa concluída com sucesso");
      else reject("Erro na tarefa");      
    }, 2000);
  });
}

async function executar() {
  console.log('Antes do await');
  const resultado = await tarefaAssincrona()
  console.log('Depois do await');
  console.log(resultado);
}

executar();
// Saída:
// "Antes do await"
// "Executando tarefa"
// (2 segundos de espera)
// "Depois do await"
// "Tarefa concluída com sucesso"


