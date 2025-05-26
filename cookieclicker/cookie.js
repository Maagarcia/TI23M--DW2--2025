let cookie = 0
const cursor = document.getElementById('cursor')
let qntcursor = 0
let preçocursor = 10
let lugarcursor = document.getElementById("cursorcontainer").innerHTML

function atualizarvalor(){

    if (cookie > 1){
        document.getElementById('contador').innerHTML = `<p> voce tem ${(cookie)} cookies`
        
    }else if(cookie = 1){
        document.getElementById('contador').innerHTML = `<p> voce tem ${(cookie)} cookie`
    
    }


    if (qntcursor >= 1){
        document.getElementById('contadorcursor').innerHTML = `<p>quantidade de cursor: ${qntcursor}</p>`
    }
}
function clicar(){
    console.log(cookie)
    cookie++
    Math.floor(cookie)
    // console.log(lugarcursor)
    atualizarvalor()
    verificar()
    arredonda()
    
} 

function arredonda(){
    cookie = Math.round(cookie)
}

function verificar(){
    if(cookie < 10){
        cursor.setAttribute('hidden','hidden')
    }else if(cookie >= preçocursor){
        cursor.removeAttribute('hidden')
    }
}

function cursortrue(){
    qntcursor++
    cookie -= preçocursor
    preçocursor += preçocursor*0.1
    verificar()
    atualizarvalor()
    if (qntcursor > 0){
        console.log("oi")
        console.log(qntcursor)
        // let lugarcursor = document.getElementById("cursorcontainer").innerHTML
        lugarcursor = lugarcursor + `<div class="cursores"></div>`
        document.getElementById('cursorcontainer') = lugarcursor
    }
    arredonda()

}

function teste(){
    console.log('oi')
}

verificar()
arredonda()