let cookie = 0
let lugarcursor = document.getElementById("cursorcontainer").innerHTML
var mouse = {
    valorclique: 100 ,
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
let cookiepersecond = (cursorinfo.qntcursor*cursorinfo.cookiesec)+(vovoinfo.qntvovo * vovoinfo.cookiesec)
var upgrades = {
    upgrademouse :{
        custo:500,
        setappair: false,
        lugarhtml: document.getElementById('upgradeclick'),
        setUpgradeTrue:false,
        infos:{
            title: 'Mouse de Plastico',
            description: 'Clicar te da 10% dos seus CpS'
        },
        
    },
    upgradegradma :{
        additional: vovoinfo.cookiesec * 2,
        custo:1000,
        setappair: false,
        lugarhtml: document.getElementById('upgradevovo'),
        nomehtml: document.getElementsByName('upgradevovo1'),
        infos:{
            title:'Rolo de Massa',
            description:'Vovós são duas vezes mais eficientes'
        }

    }
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
    let lucroperclick = mouse.valorclique

    if(upgrades.upgrademouse.setUpgradeTrue){
        lucroperclick += cookiepersecond * 0.1
    }
    console.log(lucroperclick, ' isso é quanto voce ganha por clique')
    cookie += lucroperclick
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
            upgrades.upgradegradma.lugarhtml.removeAttribute('disabled')
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
    if(legal.name === 'upgrade1'){
        const janelaflutuante = document.getElementById('janelaflutuante')
        const mouse1 = document.getElementById('upgradeclick')

        mouse1.remove()
        janelaflutuante.style.display = 'none'
        cookie -= upgrades.upgrademouse.custo
        upgrades.upgrademouse.setUpgradeTrue = true
        
    }
    
    if(legal.name ==='upgradevovo1'){
        const vovo1 = document.getElementById('upgradevovo')
        cookie -= upgrades.upgradegradma.custo
        vovoinfo.cookiesec = upgrades.upgradegradma.additional
        cookiepersecond = (
            cursorinfo.qntcursor * cursorinfo.cookiesec +
            vovoinfo.qntvovo * vovoinfo.cookiesec
        )
        janelaflutuante.style.display = 'none'
        atualizarvalor()
        vovo1.remove()


    }
}

function showupgrade(insano){
    if(insano.name === "upgrade1"){
        const janelaflutuante = document.getElementById('janelaflutuante')
        
        // janelaflutuante.style.left = event.clientX + 'px'
        // janelaflutuante.style.top = event.clientY +'px'
        janelaflutuante.style.display = 'block'
        document.getElementById('title-upgrade').innerHTML = upgrades.upgrademouse.infos.title
        document.getElementById("preco-upgrade").innerHTML = upgrades.upgrademouse.custo
        document.getElementById("bodyupgrade").innerHTML = upgrades.upgrademouse.infos.description
        document.getElementById('image-upgrade').src = './imagens/cursor.png'
    }
    if(insano.name ==='upgradevovo1'){
        const janelaflutuante = document.getElementById('janelaflutuante')
        
        // janelaflutuante.style.left = event.clientX + 'px'
        // janelaflutuante.style.top = event.clientY +'px'
        janelaflutuante.style.display = 'block'
        document.getElementById('title-upgrade').innerHTML = upgrades.upgradegradma.infos.title
        document.getElementById("preco-upgrade").innerHTML = upgrades.upgradegradma.custo
        document.getElementById("bodyupgrade").innerHTML = upgrades.upgradegradma.infos.description
        document.getElementById('image-upgrade').src = './imagens/rolling-pin-clipart-hand-drawn-wooden-dough-rolling-pin-illustration_585376_wh860.png'
    }
}

function showoutupgrade(){
    const janelaflutuante = document.getElementById('janelaflutuante')
    // janelaflutuante.style.left = event.clientX + 'px'
    // janelaflutuante.style.top = event.clientY +'px'
    janelaflutuante.style.display = 'none' 
}

verificar()

lucro()

