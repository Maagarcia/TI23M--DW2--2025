

let score = 0
let codX = []
let codY = []

let num_testes = 0

function Coordenada(){
    document.getElementById('CoordenadaX').innerHTML = `Coordenada X:${event.clientX}`
    document.getElementById('CoordenadaY').innerHTML = `Coordenada Y:${event.clientY}`
}

function contagem(nome){
    if(nome.name === "treino-normal"){
        document.getElementById('target').style.display = 'none'
        document.getElementById('target_valorant').style.display = 'none'
        let tempo = 3
        console.log(tempo)
        const contagem_regressiva = setInterval(()=>{
            let title_contador = document.getElementById('contador')
            title_contador.style.display = 'flex'
            title_contador.textContent = `${tempo}...`
            tempo -=1
            console.log(tempo)
            if(tempo < 0){
                clearInterval(contagem_regressiva)
                title_contador.style.display = 'none'
                target()
            }
        },1000)
        tempo = 3
        console.log('teste')
    }
    if(nome.name === "treino-valorant"){
        document.getElementById('target').style.display = 'none'
        document.getElementById('target_valorant').style.display = 'none'
        let tempo = 3
        console.log(tempo)
        const contagem_regressiva = setInterval(()=>{
            let title_contador = document.getElementById('contador')
            title_contador.style.display = 'flex'
            title_contador.textContent = `${tempo}...`
            tempo -=1
            console.log(tempo)
            if(tempo < 0){
                clearInterval(contagem_regressiva)
                title_contador.style.display = 'none'
                treino_valorant()
            }
        },1000)
        tempo = 3
        console.log('teste')
    }
}



function target(){
    num_testes +=1
    console.log('numteste', num_testes)
    const alvo = document.createElement('button')
    const showestatistica = document.getElementById('show-estatisticas')
    showestatistica.style.display = 'none'
    document.getElementById('estatisticas').style.display = 'none'
    
    
    alvo.setAttribute('id',true)
    alvo.id = 'mosca'
    alvo.setAttribute('class',true)
    alvo.classList = 'ph'
    alvo.setAttribute('onclick', 'game()')
    const body_container = document.getElementById("body-container")
    
    body_container.appendChild(alvo)
    alvo.style.top = `${parseInt(Math.random() * 700)}px`
    alvo.style.left = `${parseInt(Math.random() * 1000)}px`
    setTimeout(()=>{
        document.getElementById('target').style.display = 'block'
        showestatistica.style.display = 'flex'
        alvo.style.top =` 354px;`
        alvo.style.left = '654px;'
        alert(`tempo esgotado: sua pontuação foi de ${score}!`)
        
        var coordenadas_marcadas =  document.getElementById('coordenadas-marcadas')
        var num_testes_container = document.createElement('div')
        var title_shot = document.createElement('h1')
        title_shot.className = 'title-shot'
        title_shot.textContent = `Teste ${num_testes}`
        
        coordenadas_marcadas.appendChild(title_shot)
        
        for(i=0; i < score; i++){
            codExato = [codX[i],codY[i]]
            console.log(`tiro ${i+1} foi dado em (${codExato})`)
            var estatistica_shot = document.createElement('div')
            estatistica_shot.textContent = (`tiro ${i+1} foi dado em (${codExato})`)
            
            num_testes_container.appendChild(estatistica_shot)
            coordenadas_marcadas.appendChild(num_testes_container)
            
        }
        
        
        codX = []
        codY=[]
        end_game()
        
    },10000)
    
}

function game(){
    score +=1
    document.getElementById('score').textContent = `Pontuação:${score}`
    let new_mosca = document.getElementById('mosca')
    
    new_mosca.style.top = `${parseInt(Math.random() * 600)}px`
    new_mosca.style.left = `${parseInt(Math.random() * 1000)}px`
    
    codX.push(event.clientX)
    codY.push(event.clientY)
    
}

function valorant_alvo(){
    score +=1
    // num_alvos +=1
    document.getElementById('mosca').remove()
    console.log('esse é o numero de alvos atirados',score)
    document.getElementById('score').textContent = `Pontuação: ${score}`

}

function end_game(){
    score = 0
    document.getElementById('score').textContent = `Pontuação:${score}`
    let new_mosca = document.getElementById('mosca')
    new_mosca.remove()

}

function show_estatistica(){
    document.getElementById('estatisticas').style.display = 'block'
    

}

function fecha_estatistica(){
    document.getElementById('estatisticas').style.display = 'none'
}

function treino_valorant(){
    let num_alvos = 0
    num_testes +=1
    console.log('numteste', num_testes)
    const game_valorant = setInterval(() => {
        num_alvos +=1
        const alvo = document.createElement('button')
        const showestatistica = document.getElementById('show-estatisticas')
        showestatistica.style.display = 'none'
        document.getElementById('estatisticas').style.display = 'none'
        
        
        alvo.setAttribute('id',true)
        alvo.id = 'mosca'
        alvo.setAttribute('class',true)
        alvo.classList = 'ph'
        alvo.setAttribute('onclick', 'valorant_alvo()')
        const body_container = document.getElementById("body-container")
        
        body_container.appendChild(alvo)
        alvo.style.top = `${parseInt(Math.random() * 600)}px`
        alvo.style.left = `${parseInt(Math.random() * 1000)}px`


        setTimeout(() => {
                console.log('esse é o numero de alvos passados',num_alvos)
                alvo.remove()
            
                if(num_alvos >= 10){
                    clearInterval(game_valorant)
                     document.getElementById('target').style.display = 'block'
                     document.getElementById('target_valorant').style.display = 'block'
                }
        }, 1000);
    }, 1500);

    // for(i=)
}