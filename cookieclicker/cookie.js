let cookie = 0
let others = {
    numero_cliques: 0,
    numero_cookies_caseiros: 0,
    numero_all_cookies: 0,

}
let lugarcursor = document.getElementById("cursorcontainer").innerHTML
var mouse = {
    valorclique: 100 ,
    info_valor_clique: 100
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

let fazendainfo = {
    custo: 1000,
    cookiesec:20,
    qntfazenda:0,
    verificafazenda: false,

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
            description:'Vovós são duas vezes mais eficientes',
        }

    },
    upgradefarm:{
        custo: 5000,
        setappair: false,
        infos:{
            title:'Foices de ferro',
            description: 'Fazendas são duas vezes mais eficientes'
        }
    }
}

function atualizarvalor(){
    document.getElementById("custovovo").innerHTML = `<p><span>${Math.round(vovoinfo.custo)}`
    document.getElementById("custocursor").innerHTML = `<p><span>${Math.round(cursorinfo.custo)}`
    document.getElementById("custofazenda").innerHTML = `<p><span>${Math.round(fazendainfo.custo)}`
    document.getElementById('info-cookie').innerHTML = `<p><span>Cookies no banco: ${cookie.toFixed(1)}`
    document.getElementById('info-cookie-all').innerHTML = `<p><span>Cookies em toda ascensão: ${others.numero_all_cookies.toFixed(1)}`
    document.getElementById('info-cookie-persec').innerHTML = `<p><span>Cookies por segundo: ${cookiepersecond.toFixed(1)}`
    document.getElementById('info-cliques').innerHTML = `<p><span>Cliques em cookies: ${others.numero_cliques}`
    document.getElementById('info-cookie-caseiro').innerHTML = `<p><span>Cookies caseiros: ${others.numero_cookies_caseiros.toFixed(1)}`
    document.getElementById('info-cookie-perclick').innerHTML = `<p><span>Cookies caseiros por clique: ${mouse.info_valor_clique.toFixed(1)}`

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
    }if (fazendainfo.qntfazenda > 0){
        document.getElementById('contadorfazenda').innerHTML = `${fazendainfo.qntfazenda}`
    }
}

function clicar(event){
    let lucroperclick = mouse.valorclique

    if(upgrades.upgrademouse.setUpgradeTrue){
        lucroperclick += cookiepersecond * 0.1
    }
    console.log(lucroperclick, ' isso é quanto voce ganha por clique')
    cookie += lucroperclick
    others.numero_cliques += 1
    others.numero_all_cookies += lucroperclick
    others.numero_cookies_caseiros += lucroperclick
    atualizarvalor()
    verificar()


    if(event){
        animacaotexto(lucroperclick,event.clientX, event.clientY)
    }
    mouse.info_valor_clique = lucroperclick
} 

function verificar(){
    let cursor = document.getElementById('cursor')
    let vovo = document.getElementById('vovo')
    let fazenda = document.getElementById('fazenda')
    let upgradeclick = document.getElementById('upgradeclick')
    let upgradevovo1 = document.getElementById('upgradevovo1')
    let upgradefazenda = document.getElementById('upgradefazenda')

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
    if(cookie <= (fazendainfo.custo -500) && fazendainfo.verificafazenda === false){
        fazenda.style.display = 'none'
    } else{
        fazenda.style.display = 'flex'
        fazendainfo.verificafazenda = true
    }
    if (cookie <=(vovoinfo.custo)){
        vovo.setAttribute('disabled',true)
    } else{
        vovo.removeAttribute('disabled')
    }
    
    if(cookie <=(fazendainfo.custo)){
        fazenda.setAttribute('disabled',true)
    } else{
        fazenda.removeAttribute('disabled')
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
    if (upgradefazenda){
        if((cookie <= upgrades.upgradefarm.custo - 1000) && (upgrades.upgradefarm.setappair === false)){
            upgradefazenda.style.display = 'none'
        }else{
            upgradefazenda.style.display = 'inline'
            upgrades.upgradefarm.setappair = true
        }if(cookie >= upgrades.upgradefarm.custo){
            upgradefazenda.removeAttribute('disabled')
        }else{
            upgradefazenda.setAttribute('disabled',true)
        }
    }
}

function cursortrue(event){
    cookiepersecond += (cursorinfo.cookiesec)
    cursorinfo.qntcursor++
    cookie -= cursorinfo.custo
    console.log(cookiepersecond)
    verificar()
    atualizarvalor()
    if (cursorinfo.qntcursor > 0){
        const cursores = document.getElementById("cursorcontainer")
        const novocursor = document.createElement("div")
        
        novocursor.className = 'cursores'
        cursores.appendChild(novocursor)
        
    }
    
    if(event){
        
        spend(cursorinfo.custo, event.clientX, event.clientY)
    }
    cursorinfo.custo += cursorinfo.custo*0.1
}

function lucro(){
    
    setInterval(() => {
        cookie += (cookiepersecond/100);
        others.numero_all_cookies += (cookiepersecond/100)
        atualizarvalor() 
        verificar()
    }, 10);
}

function vovotrue(event){
    cookiepersecond += vovoinfo.cookiesec
    vovoinfo.qntvovo = vovoinfo.qntvovo + 1
    cookie -= vovoinfo.custo
    verificar()    
    atualizarvalor()
    console.log(vovoinfo.qntvovo)
    if(event){
        console.log('event funcionando')
        spend(vovoinfo.custo,event.clientX, event.clientY)
    }
    vovoinfo.custo += (vovoinfo.custo * 0.1)
    if(vovoinfo.qntvovo > 0){
        const vovoses = document.getElementById("vovocontainer")
        const divovo = document.createElement('div')  
        
        divovo.className = 'vovoses2'
        vovoses.appendChild(divovo)
        
        
    }
}

function fazendatrue(event){
    cookiepersecond += fazendainfo.cookiesec
    fazendainfo.qntfazenda++
    cookie -= fazendainfo.custo
    
    const fazenda_place = document.getElementById('fazendacontainer')
    const difazenda = document.createElement('div')
    
    difazenda.className = 'fazendas'
    
    fazenda_place.appendChild(difazenda)
    
    if(event){
        spend(fazendainfo.custo, event.clientX, event.clientY)
    }
    fazendainfo.custo += (fazendainfo.custo *0.1)
}

function buyupgrade(legal,event){
    console.log('teste')
    const lojaupgrades = document.getElementsByClassName('upgrades') 
    if(legal.name === 'upgrade1'){
        const janelaflutuante = document.getElementById('janelaflutuante')
        const mouse1 = document.getElementById('upgradeclick')

        mouse1.remove()
        
        const cursor_upgrade_container = document.getElementById('cursores-upgrades-container')
        const increment_bag_upgrade = document.createElement('div')
        const increment_bag_upgrade_image = document.createElement('img')


        increment_bag_upgrade.className = 'default-upgrade'
        increment_bag_upgrade_image.src = './imagens/cursor.png'

        increment_bag_upgrade_image.setAttribute('onmouseenter', "showupgrade(this)")
        increment_bag_upgrade_image.setAttribute('onmouseout', "showoutupgrade()")
        increment_bag_upgrade_image.setAttribute('name','upgrade1')
        
        increment_bag_upgrade.appendChild(increment_bag_upgrade_image)

        cursor_upgrade_container.appendChild(increment_bag_upgrade)
        
        janelaflutuante.style.display = 'none'
        cookie -= upgrades.upgrademouse.custo
        upgrades.upgrademouse.setUpgradeTrue = true
        
        if(event){
            spend(upgrades.upgrademouse.custo, event.clientX, event.clientY)
        }
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
        
        const vovo_upgrade_container = document.getElementById('vovos-upgrades-container')
        const increment_bag_upgrade = document.createElement('div')
        const increment_bag_upgrade_image = document.createElement('img')
        
        increment_bag_upgrade.className = 'default-upgrade'
        increment_bag_upgrade_image.src = './imagens/090f197a-449c-47ef-acd4-73efdb43ba56.png'
        increment_bag_upgrade_image.setAttribute('onmouseenter', "showupgrade(this)")
        increment_bag_upgrade_image.setAttribute('onmouseout', "showoutupgrade()")
        increment_bag_upgrade_image.setAttribute('name','upgradevovo1')
        
        increment_bag_upgrade.appendChild(increment_bag_upgrade_image)

        vovo_upgrade_container.appendChild(increment_bag_upgrade)

                if(event){
            spend(upgrades.upgradegradma.custo, event.clientX, event.clientY)
        }


    }
    if(legal.name === 'upgradefazenda'){
        console.log('teste')
        const fazenda_remove = document.getElementById('upgradefazenda')
        fazenda_remove.remove()
        janelaflutuante.style.display = 'none'

        cookie -= upgrades.upgradefarm.custo
        fazendainfo.cookiesec *= 2

        cookiepersecond =   (
            cursorinfo.qntcursor * cursorinfo.cookiesec +
            vovoinfo.qntvovo * vovoinfo.cookiesec + fazendainfo.qntfazenda*fazendainfo.cookiesec
        )

        if(event){
            spend(upgrades.upgradefarm.custo, event.clientX, event.clientY)
        }

        const fazenda_upgrade_container = document.getElementById('fazenda-upgrade-container')
        const increment_bag_upgrade = document.createElement('div')
        const increment_bag_upgrade_image = document.createElement('img')
        
        increment_bag_upgrade.className = 'default-upgrade'
        increment_bag_upgrade_image.src = './imagens/Foice com Cabo de Madeira.png'
        increment_bag_upgrade_image.setAttribute('onmouseenter', "showupgrade(this)")
        increment_bag_upgrade_image.setAttribute('onmouseout', "showoutupgrade()")
        increment_bag_upgrade_image.setAttribute('name','upgradefazenda')
        
        increment_bag_upgrade.appendChild(increment_bag_upgrade_image)

        fazenda_upgrade_container.appendChild(increment_bag_upgrade)

    }
}

function showupgrade(insano){
    if(insano.name === "upgrade1"){
        const janelaflutuante = document.getElementById('janelaflutuante')
        
        // janelaflutuante.style.left = event.clientX + 'px'
        // janelaflutuante.style.top = event.clientY + 'px'
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
        document.getElementById('image-upgrade').src = './imagens/090f197a-449c-47ef-acd4-73efdb43ba56.png'
    }
    if(insano.name === 'upgradefazenda'){
        const janelaflutuante = document.getElementById('janelaflutuante')

        // janelaflutuante.style.left = (event.clientX -565) + 'px'
        // janelaflutuante.style.top = (event.clientY -  75)+'px'
        janelaflutuante.style.display = 'block'
        document.getElementById('title-upgrade').innerHTML = upgrades.upgradefarm.infos.title
        document.getElementById("preco-upgrade").innerHTML = upgrades.upgradefarm.custo
        document.getElementById("bodyupgrade").innerHTML = upgrades.upgradefarm.infos.description
        document.getElementById('image-upgrade').src = './imagens/Foice com Cabo de Madeira.png'

    }
}

function showoutupgrade(){
    const janelaflutuante = document.getElementById('janelaflutuante')
    // janelaflutuante.style.left = event.clientX + 'px'
    // janelaflutuante.style.top = event.clientY +'px'
    janelaflutuante.style.display = 'none' 
}

function animacaotexto(valor,x,y){
    
    const animation = document.createElement('div')
    animation.className = 'texto-ganho'

    animation.textContent = `+${valor.toFixed(1)}`

    const container_animation = document.getElementById('animacao-ganho')

    animation.style.left = (x - 70) + 'px' 

    animation.style.top = (y - 310) + 'px'

    container_animation.appendChild(animation)

    setTimeout(() =>{
        animation.remove()
    },1000)

}

function showestatistica(){
    const informacoes = document.getElementById('container-infos-id')
    const cointainer_buyed = document.getElementById('container-comprados-id')

    informacoes.style.display = 'flex'
    cointainer_buyed.style.display = 'none'

}

function fecharestatistica(){
    const informacoes = document.getElementById('container-infos-id')
    const cointainer_buyed = document.getElementById('container-comprados-id')

    informacoes.style.display = 'none'
    cointainer_buyed.style.display = 'flex'

}

function spend(custo, x, y){
    const animation_perda_container = document.getElementById('spend')
    const animation_perda = document.createElement('div')
    
    animation_perda_container.appendChild(animation_perda)

    console.log('spend funcionando')

    animation_perda.className ='texto-perda'
    
    animation_perda.textContent = `-${custo.toFixed()}`

    animation_perda.style.left = (x) + 'px'
    animation_perda.style.top = (y)+ 'px'

    setTimeout(() =>{
        animation_perda.remove()
    },1000)

}

verificar()

lucro()