let clicadas = 0



let insultos = ['Espera... você fez...', 'Não, espera, tipo, POR QUE???',"O nome do site já não é altoexplicativo??","Não, sério o que que deu em você???",'Qual o seu problema irmao??','Por um acaso você sabe a trampeira que foi fazer tudo isso pra voce vir aqui e simplesmente clicar no botão?','PARA DE CLICAR NO BOTÃO E ME ESCUTA', 'GRRRRRRRRRRRRRRR', 'FAZ ISSO MAIS UMA VEZ PRA VOCÊ VE','beleza voce que pediu','Ce ta me zoando né?', 'Tenta agora bundao kk','NÃO ','Quer saber? Vai mais uma ce voce for o fodão agr','DU-VI-DO VOCE CONSEGUIR AGORA','Cê é engraçado hein zé','O que voce ganha em testar a minha paciencia?','VOCÊ NÃO TEM UMA LOUÇA PRA LAVA NÃO?', 'Ta ok... liga ai hehehehehhehe',"AH PARA NEH",'Por que que voce é tão persistente em me irritar???','faz assim então...caso voce toque na parede, TUDO AQUI VAI SER RESETADO, O SITE INTEIRO',"beleza então espertinho",'usa teu botão direito do mouse agora']
let mensagem = document.getElementById('mensagem')
let botao = document.getElementById('botao')
let position = 0

let reset_verification = false

function teste(){

    if(reset_verification === true && clicadas === 0){
        let texto = 'espera...voce denovo??'
        let tempo = 15

        writtermachine(texto,tempo)
        
    }
    
    // mensagem.textContent = ''
    clicadas++
    console.log(clicadas)

    if(clicadas> 0 && clicadas < 10){
        let texto = insultos[position]
        let tempo = 15
        position += 1
        // console.log(clicadas)
        writtermachine(texto,tempo)
        
    }if (clicadas >= 10 && clicadas < 12){
        let texto = insultos[position]
        let tempo = 15
        position ++
        botao.style.width = '10px'
        botao.style.height = '10px'
        writtermachine(texto,tempo)
    }
    if (clicadas >=12 && clicadas < 14){
        let texto = insultos[position]
        let tempo = 15
        position ++
        botao.style.width = '1px'
        botao.style.height = '1px'
        writtermachine(texto,tempo)
    }
    if(clicadas === 14){
        let texto = insultos[position]
        let tempo = 15
        position ++
        botao.style.width = '1px'
        botao.style.height = '1px'
        botao.style.position = 'absolute'
        botao.style.top = `${(Math.random()*300).toFixed()}`
        botao.style.left = `${(Math.random()*300).toFixed()}`
        botao.style.border = '1px solid black'
        writtermachine(texto,tempo)
    }

    if (clicadas === 15){
        console.log('teste')
        let tempo2 = 500
        let texto2 = '....'
        let texto = insultos[position]
        let tempo = 15
        writtermachine(texto2,tempo2)
        writtermachine(texto,tempo)
        position++
        // botao.style.position = 'absolute'
        botao.style.top = '10px'
        botao.style.left = '10px'

    }
    if(clicadas ===16){
        console.log('camada 16')
        progression(position)
        // botao.style.position = 'absolute'
        botao.style.top = `${(Math.random()*300).toFixed()}px`
        botao.style.left = `${(Math.random()*300).toFixed()}px`
        position++

    }
    if(clicadas === 17){
        progression(position)
        // botao.style.position = 'absolute'
        botao.style.top = `${(Math.random()*300).toFixed()}px`
        botao.style.left = `${(Math.random()*300).toFixed()}px`
        position++
    }
    if(clicadas === 18){
        progression(position)
        botao.style.top = ``
        botao.style.left = ``
        position++

    }
    if(clicadas ===19){
        console.log('camada 19')
        progression(position)
        botao.style.width =  '45px'
        botao.style.height = '45px'
        botao.style.border = '2px solid black'
        position++

        let titulo = document.getElementById('title')

        titulo.innerHTML = `<h1>Não aperte <span onclick="teste()">o<span/> Botão</h1>`

        const area = document.createElement('div')
        area.className = 'area'
        area.id = 'area'
        const container = document.getElementById('container')
        container.appendChild(area)
        
        
        area.appendChild(botao)
        area.setAttribute('onmouseover','fuga()')
    }
    if(clicadas === 20){

        let titulo = document.getElementById('title')

        titulo.innerHTML = `<h1>Não aperte o Botão</h1>`

        fuga_settimeout = true
        progression(position)
        position ++ 
        container.appendChild(botao)

        place.remove()


        }
        if(clicadas === 21){
            progression(position)
            position++

        } if(clicadas === 22){
            progression(position)
            position++

            document.getElementById('mensagem').style.left ='30px'
            botao.style.right = '45px'

            let danger = document.createElement('div')
            danger.className = 'danger'
            danger.id = 'danger'
            danger.setAttribute('onmouseover','reset()')
            container.appendChild(danger)

        }
        if(clicadas === 23){
            progression(position)
            position++

            danger.style.top = '200px'
            danger.style.width = '100vw'
            danger.style.height = '100px'
            botao.style.top ='30px'
            danger.style.right = '0px'

        }if(clicadas === 24){
            progression(position)
            position++
            const barreira1 = document.createElement('div')
            barreira1.className = 'danger'
            barreira1.id = 'barreira1'
            barreira1.setAttribute('onmouseover','reset()')
            barreira1.style.width = '100vw'
            barreira1.style.height = '100px'
            barreira1.style.top = '500px'
            barreira1.style.right = '0px'
            container.appendChild(barreira1)

            botao.style.top = '350px'
            botao.style.left = '50%'

            window.addEventListener("contextmenu", function(e){
  e.preventDefault();
}, false);
        
        }

   
    
}

function writtermachine(texto,tempo){
    botao.removeAttribute('onclick')
    let contador = 0
    newarr = []
    let arr = texto.split('')
    const verifica = setInterval(()=>{
        newarr.push(arr[contador])
            contador++
            mensagem.textContent = newarr.join('')
            
            if(contador >= arr.length){
                clearInterval(verifica)
                botao.setAttribute('onclick','teste()')
            }
        },tempo)
    }
    
function progression(x){
    let tempo = 15
    let texto = insultos[x]
    writtermachine(texto,tempo)
}


fuga_verification = false
fuga_bigger_than_700 = false
fuga_settimeout = false

function fuga(){
    
    console.log('teste')
    let place = document.getElementById('area')
    place.style.position = 'absolute'
    place.style.top = `${event.clientY}px`
    place.style.right = `${event.clientX}px`
    console.log(place.style.top)
    
    if(fuga_verification === false){
        let tempo = 15
        let texto = 'só nao vai descuida e joga o botão pra fora da tela....ou joga também, assim ninguem mais clica nele'
        
        writtermachine(texto,tempo)
        fuga_verification = true
    }
    if(parseInt(place.style.top) > 650 && fuga_bigger_than_700 === false){
        let tempo = 15 
        let texto = 'boaaaaaaa, to gostando de veeerrrr'
        fuga_bigger_than_700 = true
        writtermachine(texto,tempo)


    if(fuga_bigger_than_700 === true){
        setTimeout(()=>{
            if(fuga_settimeout === false)
                setTimeout(()=>{
            let texto = 'bem, agora não sobrou nada aqui... pelo menos você não pode me encher o saco agora'
            let tempo = 15
            fuga_settimeout = true
            writtermachine(texto,tempo)
            
        },1000)
    },4000)
    }
    }


}

function reset(){
    clicadas = 0
    position = 0
    fuga_verification = false
    fuga_bigger_than_700 = false
    fuga_settimeout = false
    document.getElementById('danger').remove()

    botao.style.top = ''
    botao.style.right = ''

    mensagem.style.position = 'absolute'
    mensagem.style.left = '1000px'
    // location.reload(true)
    reset_verification = true

    mensagem.textContent = 'Ola! Bem vindo e aproveite do site onde voce não pode apertar o botão'
    // teste()
}




// const verifica = setInterval(()=>{
//     newarr.push(arr[contador])
//     console.log(newarr.join(''))
//     contador++

//     if(contador >= arr.length){
//         clearInterval(verifica)
//     }
// },55)




