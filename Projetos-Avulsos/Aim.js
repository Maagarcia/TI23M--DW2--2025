let score = 0
let codX = []
let codY = []

function Coordenada(){
    document.getElementById('CoordenadaX').innerHTML = `Coordenada X:${event.clientX}`
    document.getElementById('CoordenadaY').innerHTML = `Coordenada Y:${event.clientY}`
}




function target(){
    console.log('teste')
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
        showestatistica.style.display = 'flex'
        alvo.style.top =` 354px;`
        alvo.style.left = '654px;'
        alert(`tempo esgotado: sua pontuação foi de ${score}!`)
        end_game()
    
    },5000)
    
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
