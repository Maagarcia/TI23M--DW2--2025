function resposta_chat(option){
    let hostil = document.getElementById('hostil')
    let neutro = document.getElementById('neutro')
    let amigavel = document.getElementById('amigavel')
    if(option.name === 'hostil'){
        console.log(hostil.textContent)
        document.body.setAttribute('onkeypress','typing()')

    }
    if(option.name === 'neutro'){
        console.log('neutro')
    }
    if(option.name === 'amigavel'){
        console.log('amigavel')
    }
}


function typing(){
    console.log('teste de escrita')
}