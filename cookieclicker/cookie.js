let cookie = 0
let lugarcursor = document.getElementById("cursorcontainer").innerHTML
let cookiepersecond = 0
var upgrades = {
    upgrademouse :{
        additional: cookiepersecond * 2,
        custo:500,
        setappair: false,
        lugarhtml: document.getElementById('upgradeclick'),
        
    },
    upgradegradma :{
        additional: cookiepersecond * 2,
        custo:1000,
        setappair: false,
        lugarhtml: document.getElementById('upgradevovo1'),
        nomehtml: document.getElementsByName('upfradevovo1')
    }
}
var mouse = {
    valorclique: 100
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
    atualizarvalor()
    verificar()
    
} 


function verificar(){
    let cursor = document.getElementById('cursor')
    let vovo = document.getElementById('vovo')
    let upgradeclick = document.getElementById('upgradeclick')
    let upgradevovo1 = document.getElementById('upgradevovo1')

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
    if(document.getElementById('upgradeclick')){

        if (cookie <= 250 && upgrades.upgrademouse.setappair === false){
            upgradeclick.style.display = 'none'
        } else{
            upgradeclick.style.display = 'inline'
            upgrades.upgrademouse.setappair = true
        } if(cookie >= 500){
            upgradeclick.removeAttribute('disabled')
        } else{
            upgradeclick.setAttribute('disabled', true)
        }
    }

    if(upgrades.upgradegradma.lugarhtml){

        if (cookie <= 750 && upgrades.upgradegradma.setappair === false){
            upgrades.upgradegradma.lugarhtml.style.display = 'none'
        }else{
            upgrades.upgradegradma.lugarhtml.style.display = 'inline'
            upgrades.upgradegradma.setappair = true
        } if (cookie >= 1000){
            upgradevovo1.removeAttribute('disabled')
        } else{
            upgrades.upgradegradma.lugarhtml.setAttribute('disabled',true)
        }
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

function buyupgrade(legal){
    const lojaupgrades = document.getElementsByClassName('upgrades') 
    if(legal.name == 'upgrade1'){
        const mouse1 = document.getElementById('upgradeclick')

        mouse1.remove()
        upgrades.upgrademouse.additional = cookiepersecond * 2
        cookie -= upgrades.upgrademouse.custo
        mouse.valorclique += upgrades.upgrademouse.additional
    }
    if(legal.name =='upgradevovo1'){
        const vovo1 = document.getElementById('upgradevovo1')

        vovo1.remove()

    }
}

verificar()

lucro()

