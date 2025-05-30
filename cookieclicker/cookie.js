let cookie = 0
let lugarcursor = document.getElementById("cursorcontainer").innerHTML
let cookiepersecond = 0
let upgrades = {
    upgrademouse :{
        setappair: false,
        additional: cookiepersecond * 2,
        custo:500,

    }
}
let mouse = {
    valorclique: 10
}
let cursorinfo = {
    custo: 10,
    cookiesec: 0.1,
    qntcursor: 0
}

let vovoinfo = {
    custo: 100,
    cookiesec: 25,
    qntvovo: 0,
    verificavovo:false
    
}

function atualizarvalor(){
    document.getElementById("custovovo").innerHTML = `<p><span>${Math.round(vovoinfo.custo)}`
    document.getElementById("custocursor").innerHTML = `<p><span>${Math.round(cursorinfo.custo)}`
    if (cookie > 1){
        document.getElementById('contador').innerHTML = `<p> voce tem ${(Math.round(cookie))} cookies`
        
    }else if(cookie = 1){
        document.getElementById('contador').innerHTML = `<p> voce tem ${(Math.round(cookie))} cookie`
    
    }


    if (cursorinfo.qntcursor >= 1){
        document.getElementById('contadorcursor').innerHTML = `${cursorinfo.qntcursor}`
    }
    
    if (cookiepersecond > 0){
        document.getElementById('cookiepersec').innerHTML = `<p id="cookiepersec"><span>cookies por segundo: ${cookiepersecond.toFixed(1)} </span></p>`

    }if (vovoinfo.qntvovo > 0){
        document.getElementById('contadorvovo').innerHTML = `${vovoinfo.qntvovo}`
    }
}
function clicar(){
    console.log(mouse.valorclique, ' isso é quanto voce ganha por clique')
    cookie += mouse.valorclique
    console.log('isso é seu adicional caso vc compre o upgrade',upgrades.upgrademouse.additional)
    atualizarvalor()
    verificar()
    
} 


function verificar(){
    let cursor = document.getElementById('cursor')
    let vovo = document.getElementById('vovo')
    let upgradeclick = document.getElementById('upgradeclick')

    if(cookie >= cursorinfo.custo){
        cursor.removeAttribute('disabled')
    }else{
        cursor.setAttribute('disabled',true)
    }
    
    if(cookie < (vovoinfo.custo - 50) && (vovoinfo.qntvovo === 0) && (vovoinfo.verificavovo === false)){
        vovo.style.display = 'none'
    } 
    else{
        vovo.style.display = 'flex'
        vovoinfo.verificavovo = true
        
    }
    if (cookie <=(vovoinfo.custo)){
        vovo.setAttribute('disabled',true)
    } else{
        vovo.removeAttribute('disabled')
    }
    if (cookie <= 250 && upgrades.upgrademouse.setappair === false){
        upgradeclick.style.display = 'none'
    } else{
        upgradeclick.style.display = 'inline'
        upgrades.upgrademouse = true
    } if(cookie >= 500){
        upgradeclick.removeAttribute('disabled')
    } else{
        upgradeclick.setAttribute('disabled', true)
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

function lucro(){
    
    setInterval(() => {
        cookie += (cookiepersecond/100);
        atualizarvalor() 
        verificar()
    }, 10);
}

function vovotrue(){
    cookiepersecond += vovoinfo.cookiesec
    vovoinfo.qntvovo = vovoinfo.qntvovo + 1
    cookie -= vovoinfo.custo
    vovoinfo.custo += (vovoinfo.custo * 0.1)
    verificar()    
    atualizarvalor()
    console.log(vovoinfo.qntvovo)
    if(vovoinfo.qntvovo > 0){
        const vovoses = document.getElementById("vovocontainer")
        const divovo = document.createElement('div')  
        
        divovo.className = 'vovoses2'
        vovoses.appendChild(divovo)
    
    }
}

function buyupgrade(){
    if(document.getElementsByName('upgrade1')){
        cookie -= upgrades.upgrademouse.custo
        mouse.valorclique += upgrades.upgrademouse.additional
    }
}

verificar()

lucro()

