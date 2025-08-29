// block_function()


let chat_bar = document.getElementById('resposta_escrita')
let buttons = document.querySelectorAll('button')
let membros_onlines = document.getElementById('online_members')
let console_input = document.getElementById('console')
let horario = document.getElementById('horario')

let audio_digito = document.getElementById('audio-digito')
let audio_enter = document.getElementById('audio-enter')
let audio_mensagem_recebida = document.getElementById('audio-mensagem-recebida')
let audio_entrarchat = document.getElementById('audio_entrarchat')
let audio_saidachat = document.getElementById('audio_left_chat')

let input_do_console = document.getElementById('input_console')
let container_input_respostas = document.getElementById('input_respostas')

// let ip = [`<span3 class='wave'><span style='--i:0'>${Math.floor(Math.random() * 255)}</span><span style='--i:1'>x</span><span style='--i:2'>x</span><span style='--i:3'>.</span><span style='--i:4'>x</span><span style='--i:5'>x</span><span style='--i:6'>x</span><span style='--i:7'>.</span><span style='--i:8'>x</span><span style='--i:9'>x</span><span style='--i:10'>x</span><span style='--i:11'>.</span><span style='--i:12'>x</span><span style='--i:13'>x</span><span style='--i:14'>x</span>`]
let ip = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 256), Math.floor(Math.random() * 255)]
let ip_bin = [ip[0].toString(2).padStart(8, '0'), ip[1].toString(2).padStart(8, '0'), ip[2].toString(2).padStart(8, '0'), ip[3].toString(2).padStart(8, '0')]

let array_answers = []

let mensagem
let array_mensagens

let enter_verification = false
if (enter_verification == false) {
    audio_entrarchat.play()
    enter_verification = true
}

function resposta_chat(option) {
    let hostil = document.getElementById('hostil')
    let neutro = document.getElementById('neutro')
    let amigavel = document.getElementById('amigavel')
    buttons.forEach(elemement => {
        elemement.setAttribute('disabled', 'disabled')
    })
    if (option.name === 'hostil') {
        console.log(hostil.textContent)
        document.body.setAttribute('onkeypress', 'typing()')
        let texto = hostil.textContent
        array_answers.push(texto)
        console.log(array_answers)
        chat_bar.setAttribute('disabled', 'disabled')
    }

    if (option.name === 'neutro') {
        console.log('neutro')
        console.log(hostil.textContent)
        document.body.setAttribute('onkeypress', 'typing()')
        let texto = neutro.textContent
        array_answers.push(texto)
        console.log(array_answers)
        chat_bar.setAttribute('disabled', 'disabled')

    }
    if (option.name === 'amigavel') {
        console.log('amigavel')
        console.log(hostil.textContent)
        document.body.setAttribute('onkeypress', 'typing()')
        let texto = amigavel.textContent
        array_answers.push(texto)
        console.log(array_answers)
        chat_bar.setAttribute('disabled', 'disabled')

    }
}

let count_array_text = 0
let count_array_position = 0

function typing() {
    audio_digito.cloneNode().play()
    let newtexto = array_answers[count_array_position]
    let arraw = newtexto.split('')
    // console.log('teste de escrita')
    chat_bar.value += arraw[count_array_text]
    count_array_text += 1

    if (count_array_text >= newtexto.length) {
        count_array_text = 0
        count_array_position += 1
        document.body.removeAttribute('onkeypress')
        document.body.setAttribute('onkeypress', 'if(event.keyCode == 13){ sending() }')
        // chat_bar.removeAttribute('disabled')
    }
}

let count_interval_messagen = 0
let number_messagen = 0
function messagem() {
    let chat_principal = document.getElementById('chat-principal')
    let newp = document.createElement('p')
    buttons.forEach(elemement => {
        elemement.setAttribute('disabled', 'disabled')
    })
    // console.log('teste')
    number_messagen += 1
    switch (true) {
        case (number_messagen == 1):
            // console.log('case')
            mensagem = setInterval(() => {
                newp.innerHTML = `<span3>m24xc is typing...`
                chat_principal.appendChild(newp)
                if (count_interval_messagen === 1) {
                    newp.innerHTML = `<span2> > <l style="font-weight: bolder;">m24xc:</l> Quem seria?`
                    audio_mensagem_recebida.play()
                    hostil.textContent = 'Não te interessa'
                    neutro.textContent = 'Depende'
                    amigavel.textContent = 'Eu nao sei se posso dizer, desculpa'
                    buttons.forEach(elemento => { elemento.removeAttribute('disabled') })
                    clearTimeout(mensagem)
                }
                count_interval_messagen++
            }, 3000)
            // console.log('bdsjbsk')
            break;
        case (number_messagen == 2):
            // console.log('case')
            mensagem = setInterval(() => {
                newp.innerHTML = `<span3>m24xc is typing...`
                chat_principal.appendChild(newp)
                if (count_interval_messagen === 1) {
                    audio_mensagem_recebida.play()
                    newp.innerHTML = `<span2> > <l style="font-weight: bolder;">m24xc:</l> O que voce faz aqui?`
                    hostil.textContent = 'Não te interessa'
                    neutro.textContent = 'Eu...não sei'
                    amigavel.textContent = 'Xeretando'

                    buttons.forEach(elemement => {
                        elemement.removeAttribute('disabled')
                    })
                    clearTimeout(mensagem)
                }
                count_interval_messagen++
            }, 3000)
            // console.log('bdsjbsk2')
            break;
        case (number_messagen == 3):
            let newp2 = document.createElement('p')
            mensagem = setInterval(() => {
                console.log('primeiro is typing')
                newp.innerHTML = "<span3>m24xc is typing..."
                chat_principal.appendChild(newp)
                if (count_interval_messagen == 1) {
                    audio_mensagem_recebida.play()
                    newp.innerHTML = `<span2> > <l style="font-weight: bolder;">m24xc</l> Não era pra voce estar aqui`
                    console.log('primeira mensagem')
                    let mensagem2 = setInterval(() => {
                        console.log('iniciando a segunda mensagem')
                        chat_principal.appendChild(newp2)
                        newp2.innerHTML = '<span3> m24xc is typing...'
                        if (count_interval_messagen == 3) {
                            audio_mensagem_recebida.play()
                            newp2.innerHTML = '<span2> > <l style="font-weight: bolder;">m24xc:</l> Vai embora'
                            hostil.textContent = 'Me obriga.'
                            neutro.textContent = 'Olha eu nao quero confusão, eu só quero saber o que seria tudo isso'
                            amigavel.textContent = "Aaah mas eu cheguei agora :'("
                            buttons.forEach(elemement => {
                                elemement.removeAttribute('disabled')
                            })
                            clearInterval(mensagem2)
                        }
                        count_interval_messagen++
                    }, 3000)
                    clearInterval(mensagem)
                    // clearInterval(mensagem)
                }
                count_interval_messagen++
            }, 6000)
            break;
            case (number_messagen == 4):
                mensagem = setInterval(()=>{
                    newp.innerHTML = '<span3>m24xc is typing...'
                    chat_principal.appendChild(newp)
                    if(count_interval_messagen == 1){
                        audio_mensagem_recebida.play()
                        newp.innerHTML = '<span2> > <l style="font-weight: bolder;">m24xc:</l> IP.'
                        buttons.forEach(ellement => {ellement.removeAttribute('disabled')})
                        hostil.textContent = 'Não sei e nao vou te passar, babaca'
                        neutro.textContent = 'Eu não sei qual é, está bloqueado'
                        amigavel.textContent = 'Eu nao consigo saber'
                        clearInterval(mensagem)
                    }
                    count_interval_messagen++
                },2000)
                break;
                case(number_messagen == 5):
                mensagem = setInterval(()=>{
                    newp.innerHTML = '<span3>m24xc is typing...'
                    chat_principal.appendChild(newp)
                    if(count_interval_messagen == 1){
                        audio_mensagem_recebida.play()
                        newp.innerHTML = '<span2 onclick="teste()"> > <l style = "font-weight: bolder;">m24xc:</l> <a href="../hacking.html" target="_blank" rel="noopener noreferrer">niex.ist</a>'
                        buttons.forEach(ellement => {ellement.removeAttribute('disabled')})
                        buttons.forEach(ellement =>{ ellement.textContent = 'O que é isso?'})
                        clearInterval(mensagem)
                    }
                    count_interval_messagen++
                },2000)
                break;
            case(number_messagen == 6):
                mensagem = setInterval(()=>{
                    audio_saidachat.play()
                    membros_onlines.textContent = 'online: 1/16'
                    newp.innerHTML = '<span3>m24xc left</span3>'
                    chat_principal.appendChild(newp)

                    clearInterval(mensagem)
                },1000)
                break;
        default:
            // console.log('default')
            break;
    }
    count_interval_messagen = 0
}

function sending() {
    messagem()
    // console.log('oiteste')
    audio_enter.cloneNode().play()
    let chat_principal = document.getElementById('chat-principal')
    let newp = document.createElement('p')
    newp.innerHTML = `> <l style="font-weight: bolder;">pf98x:</l> ${chat_bar.value}`
    chat_principal.appendChild(newp)
    // buttons.forEach(elemento => {
    //     elemento.removeAttribute('disabled')
    // })
    document.body.removeAttribute('onkeypress')
    chat_bar.value = ''
}


let footer = document.getElementById('footer')
document.addEventListener('keydown', (event) => {
    if (event.code === 'F2') {
        if (console_input.style.display === 'block') {
            console_input.style.display = 'none'
        } else {
            console_input.style.display = 'block'
            footer.style.display = 'none'
        }
    }
})



let info_verification = false
let ip_verification = true
function resposta_input() {
    audio_enter.cloneNode().play()
    switch (true) {
        case (input_do_console.value == '/info'):
            info_verification = true
            input_do_console.value = '~h '
            break;
        case (input_do_console.value == '~h ip' && info_verification == true && ip_verification == true):
            let ip_to_writer = ip.join('.')
            input_do_console.value = ''
            info_verification = false
            writtermachine(`IP_ADDRESS: ${ip_to_writer}`)
            break;
        case (input_do_console.value == '~h ip-bin' && info_verification == true && ip_verification == true):
            let ip_bin_to_writer = ip_bin.join('.')
            input_do_console.value = ''
            info_verification = false
            writtermachine(`IP_BIN_ADDRESS: ${ip_bin_to_writer}`)
            break;

        case (input_do_console.value == '~h ip' && info_verification == true && ip_verification == false):
            input_do_console.value = ''
            info_verification = false
            writtermachine(`IP_ADDRESS: <span3 class='wave'><span style='--i:0'>x</span><span style='--i:1'>x</span><span style='--i:2'>x</span><span style='--i:3'>.</span><span style='--i:4'>x</span><span style='--i:5'>x</span><span style='--i:6'>x</span><span style='--i:7'>.</span><span style='--i:8'>x</span><span style='--i:9'>x</span><span style='--i:10'>x</span><span style='--i:11'>.</span><span style='--i:12'>x</span><span style='--i:13'>x</span><span style='--i:14'>x</span>`, 1)
            break
        case (input_do_console.value == '~h ip-bin' && info_verification == true && ip_verification == false):
            input_do_console.value = ''
            info_verification = false
            writtermachine(`IP_BIN_ADDRESS: <span3 class='wave'><span style='--i:0'>x</span><span style='--i:1'>x</span><span style='--i:2'>x</span><span style='--i:3'>.</span><span style='--i:4'>x</span><span style='--i:5'>x</span><span style='--i:6'>x</span><span style='--i:7'>.</span><span style='--i:8'>x</span><span style='--i:9'>x</span><span style='--i:10'>x</span><span style='--i:11'>.</span><span style='--i:12'>x</span><span style='--i:13'>x</span><span style='--i:14'>x</span>`, 1)
            break

        case (input_do_console.value == '/start.sh'):
            input_do_console.value = ''
            writtermachine('Testando conexão...')
            mensagem = setTimeout(() => {
                writtermachine('Conexão funcional.....1ms')
                clearTimeout(mensagem)
            }, 300)
            break;
        default:
            writtermachine('Comando não encontrado')
            input_do_console.value = ''
            break;
    }
}


function writtermachine(texto, tempo = 15) {
    console.log('teste da maquina de escever')
    let newline = document.createElement('p')
    container_input_respostas.appendChild(newline)
    let newarr = texto.split('')
    let contador = 0
    let x = []
    let escrita = setInterval(() => {
        x.push(newarr[contador])
        content_answer = x.join('')
        newline.innerHTML = content_answer
        contador++

        if (contador >= newarr.length) {
            clearInterval(escrita)
        }
    }, tempo)
}

function block_function() {
    window.addEventListener("contextmenu", function (e) {
        writtermachine('CMD_BIOS ACCESS: <span>NEGADO', 5)
        e.preventDefault();
    }, false);
}

function typing_normal() {
    audio_digito.cloneNode().play()
}

function teste(){
    console.log('funcionando')
}

let double_dots = true

function relógio(){
    const now = new Date()

    let minutos = now.getMinutes()
    let horas = now.getHours()

    horas = horas.toString().padStart(2,'0')
    minutos = minutos.toString().padStart(2,'0')
    if(double_dots == true){
        horario.textContent = `${horas}:${minutos}`
        double_dots = !double_dots
    }else{
        horario.textContent = `${horas} ${minutos}`
        double_dots = !double_dots

    }
}

setInterval(relógio,1000)

relógio()