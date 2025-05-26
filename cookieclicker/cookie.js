let cookie = 0
let lugarcursor = document.getElementById("cursorcontainer").innerHTML
let cookiepersecond = 0
let cursorinfo = {
    custo: 10,
    cookiesec: 0.1,
    qntcursor: 0
}

function atualizarvalor(){
    if (cookie > 1){
        document.getElementById('contador').innerHTML = `<p> voce tem ${(Math.round(cookie))} cookies`
        
    }else if(cookie = 1){
        document.getElementById('contador').innerHTML = `<p> voce tem ${(Math.round(cookie))} cookie`
    
    }


    if (cursorinfo.qntcursor >= 1){
        document.getElementById('contadorcursor').innerHTML = `<p>quantidade de cursor: ${cursorinfo.qntcursor}</p>`
        document.getElementById('cookiepersec').innerHTML = `<p id="cookiepersec"><span>cookies por segundo: ${cookiepersecond.toFixed(1)} </span></p>`
    }
}
function clicar(){
    console.log(cookie)
    cookie = cookie +10
    atualizarvalor()
    verificar()
    
} 


function verificar(){
    let cursor = document.getElementById('cursor')
    if(cookie >= cursorinfo.custo){
        cursor.removeAttribute('disabled')
    }else if(cookie < cursorinfo.custo){
        cursor.setAttribute('disabled',true)
    }
}
function cursortrue(){
    cookiepersecond += (cursorinfo.cookiesec)
    cursorinfo.qntcursor++
    cookie -= cursorinfo.custo
    cursorinfo.custo += cursorinfo.custo*0.1
    console.log(cookiepersecond)
    verificar()
    atualizarvalor()
    if (cursorinfo.qntcursor > 0){
        const cursores = document.getElementById("cursorcontainer")
        const novocursor = document.createElement("div")

        novocursor.className = 'cursores'
        cursores.appendChild(novocursor)

}
}

function lucrocursor(){
    
      setInterval(() => {
        cookie += (cookiepersecond/100);
        atualizarvalor() 
        verificar()
    }, 10);
}

verificar()
lucrocursor()

