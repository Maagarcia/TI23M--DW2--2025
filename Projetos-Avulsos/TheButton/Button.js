let clicadas = 0



let insultos = ['Espera... você fez...', 'Não, espera, tipo, POR QUE???',"O nome do site já não é altoexplicativo??","Não, sério o que que deu em você???",'Qual o seu problema irmao??','Por um acaso você sabe a trampeira que foi fazer tudo isso pra voce vir aqui e simplesmente clicar no botão?']
let mensagem = document.getElementById('mensagem')
let botao = document.getElementById('botao')

function teste(){
    botao.removeAttribute('onclick')
    newarr = []
    mensagem.textContent = ''
    let contador = 0
    clicadas++
    if(clicadas <= 50){
        let texto = insultos[(Math.random()*5).toFixed()]
        let arr = texto.split('')
        const verifica = setInterval(()=>{
            newarr.push(arr[contador])
            console.log(newarr)
            contador++
            mensagem.textContent = newarr.join('')

        if(contador >= arr.length){
        clearInterval(verifica)
        botao.setAttribute('onclick','teste()')
    }
        },15)
    }
    
}



// const verifica = setInterval(()=>{
//     newarr.push(arr[contador])
//     console.log(newarr.join(''))
//     contador++

//     if(contador >= arr.length){
//         clearInterval(verifica)
//     }
// },55)




