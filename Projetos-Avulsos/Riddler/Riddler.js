teste()
block_function()

let container_writter = document.getElementById('pog')
let answer = document.getElementById('answer')


let help_arr = [`<span>DEFAULT.TEMPLATE.................FALSE`, '<span>DEFAULT.EVENT....................FALSE', '<span>DEFAULT.CONNECTION...............FALSE', '<span>DEFAULT.STABILIZATION............FALSE', '<span>DEFAULT.DATABASE.CONNECTION......FALSE']
let help_arr_verificador = [false, false, false, false, false]
let ip1 = [`${(Math.random() * 255)}`, `${(Math.random() * 255).toFixed()}`, `${(Math.random() * 255).toFixed()}`, `${(Math.random() * 255).toFixed()}`]
let ip = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)]
let ip_bin = [ip[0].toString(2).padStart(8, '0'), ip[1].toString(2).padStart(8, '0'), ip[2].toString(2).padStart(8, '0'), ip[3].toString(2).padStart(8, '0')]
let set_help = false
let config = false
let config_data = false
let audio = document.getElementById('audio')
let audio_help = document.getElementById('audio-templates')
let audio_digito = document.getElementById('audio-digito')
let pedido_casamento = false
let casado = false


function block_function() {
    window.addEventListener("contextmenu", function (e) {
        writtermachine('CMD_BIOS ACCESS: <span>NEGADO', 5)
        e.preventDefault();
    }, false);
}

function resposta() {
    audio.cloneNode().play()
    console.log(answer.value)
    container_writter.style.color = 'green'
    switch (true) {
        case (answer.value === '/help'):
            let contador_help = 0
            let instrucoes = setInterval(() => {
                switch (contador_help) {
                    case 0:
                        writtermachine(`>'/help': Exibe comandos disponiveis`, 1)
                        break;
                    case 1:
                        writtermachine(`>'/info': Inicia modo de fiscalização de informações do sistema`, 1)
                        break;
                    case 2:
                        writtermachine(`>'/start.sh': Inicia conexão entre a estação e o servidor`, 1)
                        break;
                    case 3:
                        writtermachine(`>'~h. ls': Mostra o estado dos nós de conexão entre a maquina e o servidor`, 1)
                        break;
                    case 4:
                        writtermachine(`>'~h. ip': Mostra o Ip da maquina operante`, 1)
                        break;
                    case 5:
                        writtermachine(`>'~h. ip-bin': Mostra o Ip da maquina operante em base binario`, 1)
                        break;
                    case 6:
                        writtermachine(`>'/sudo.fig': Inicia modo de edição de nós de conexão`, 1)
                        break;
                    case 7:
                        writtermachine(`>'/sudo.database': Inicia modo de permissão da gateway do servidor`, 1)
                        break;
                    case 8:
                        writtermachine(`>'~sys.config:    ('nome_do_nó',valor_booleano_do_nó)': Edita o comportamento do nó escolhido`, 1)
                        break;
                    case 8:
                        writtermachine(`>'~sys.gateway:    ('database',Estado_da_gateway_do_banco_de_dados)': Edita o estado da gateway do banco de dados`, 1)
                        break;
                    case 9:
                        writtermachine(`>'/nct': Limpa o terminal`, 7)
                        break
                    case 10:
                        clearInterval(instrucoes)
                }
                contador_help += 1

            }, 500)
            answer.value = ''
            break;

        case (answer.value === '/info'):
            console.log('teste45')
            set_help = true
            answer.value = '~h. '
            break;

        case (answer.value === '~h. ls' && set_help === true):
            clear()
            audio_help.playbackRate = 0.7
            audio_help.play()
            // container_writter.style.color = 'red'
            answer.value = ''
            set_help = false
            console.log('funfando')

            contador_arr = 0

            let defaults = setInterval(() => {
                writtermachine(help_arr[contador_arr])
                contador_arr++
                console.log('teste')

                if (contador_arr >= help_arr.length) {
                    clearInterval(defaults)
                }
            }, 1000)
            break;

        case (answer.value === '/nct'):
            clear()
            break;

        case (answer.value === '/sudo.fig'):
            config = true
            writtermachine('CMD CONFIG SET:')
            answer.value = '~sys.config:    ()'
            break;

        case (answer.value === `~sys.config:    ('template',TRUE)` && config === true):
            help_arr[0] = 'DEFAULT.TEMPLATE.................TRUE'
            help_arr_verificador[0] = true
            writtermachine('sys.TEMPLATE alterado')
            answer.value = ''
            break;
        case (answer.value === `~sys.config:    ('event',TRUE)` && config === true):
            help_arr[1] = 'DEFAULT.EVENT....................TRUE'
            help_arr_verificador[1] = true
            writtermachine('sys.EVENT alterado')
            answer.value = ''
            break;
        case (answer.value === `~sys.config:    ('connection',TRUE)` && config === true):
            help_arr[2] = 'DEFAULT.CONNECTION...............TRUE'
            help_arr_verificador[2] = true
            writtermachine('sys.CONNECTION alterado')
            answer.value = ''
            break;
        case (answer.value === `~sys.config:    ('stabilization',TRUE)` && config === true):
            help_arr[3] = 'DEFAULT.STABILIZATION............TRUE'
            help_arr_verificador[3] = true
            writtermachine('sys.STABILIZATION alterado')
            answer.value = ''
            break;

        case (answer.value === '/sudo.database'):
            answer.value = `~sys.gateway:    ()`
            config_data = true
            writtermachine('CMD GATEWAY | WAITING EVENT USER...')
            break;

        case (answer.value === `~sys.gateway:    ('database',OPEN)` && config_data === true):
            answer.value = ``
            config_data = false
            help_arr[4] = `DEFAULT.DATABASE.CONNECTION......TRUE`
            help_arr_verificador[4] = true
            writtermachine('CMD GATEWAY | DATABASE.GATEWAY OPENED')
            break;

        case (answer.value === '~h. ip' && set_help === true):
            newip = ip.join('.')
            console.log(newip)
            writtermachine(`IP_ADDRESS: ${newip}`)
            console.log(ip)
            answer.value = ''
            set_help = false
            break

        case (answer.value === '~h. ip-bin' && set_help === true):
            // console.log(newip)
            new_ip_bin = ip_bin.join('.')
            writtermachine(`IP_BIN_ADDRESS: ${new_ip_bin}`)
            answer.value = ''
            set_help = false
            break;

        case (answer.value === '/lau'):
            container_writter.style.color = 'purple'
            answer.value = ''
            let contador_declaração = 0
            let declaração = setInterval(() => {
                if (contador_declaração === 0) {
                    writtermachine('Laura, se voce se visse como eu te vejo, nunca mais se viria de outra forma senao como uma anja...')
                    // contador_declaração++
                } else if (contador_declaração === 1) {
                    writtermachine('eu te amo meu amor, cada dia que passa eu creio mais de que o fim da minha vida será ao seu lado')
                    // contador_declaração++
                } else if (contador_declaração === 2) {
                    writtermachine('é isso que eu desejo, ter uma vida com voce, ter uma vida ao lado de quem eu amo...')
                    // contador_declaração++
                } else if (contador_declaração === 4) {
                    writtermachine('eu te amo meu amor, pra sempre', 70)
                    // contador_declaração++
                } else if (contador_declaração === 5) {
                    clearInterval(declaração)
                    answer.value = 'casa comigo?(s/n):'
                }
                contador_declaração += 1
            }, 2000)
            pedido_casamento = true
            break

        case (answer.value === 'casa comigo?(s/n):s' && pedido_casamento === true):
            container_writter.style.color = 'purple'
            answer.value = ''
            let contador_casamento = 0
            let casamento = setInterval(() => {
                if (contador_casamento == 0) {
                    writtermachine('SERIO? SERIO MESMO???')
                } else if (contador_casamento == 1) {
                    writtermachine('YUUUPIIIIIIII :3 :3 >W<')
                } else if (contador_casamento == 2) {
                    writtermachine('eu sabia que estava com a mulher certa, minha princesa')
                } else if (contador_casamento == 2) {
                    writtermachine('eu sempre vou te amar meu amor')
                } else if (contador_casamento == 3) {
                    writtermachine('ou melhor...minha noiva :3 vulgo a mulher mais linda do universo ')
                } else if (contador_casamento == 4) {
                    clearInterval(casamento)
                    answer.value = 'te amo lau'
                }
                contador_casamento++
            }, 2000)
            casado = true
            break;

        case (answer.value === '/start.sh' && help_arr_verificador.every(elem => elem === true)):
            clear()
            writtermachine('>Initializing system...')
            let contador_inicializacao = 0
            console.log('todos falsos')
            let inicializador = setInterval(() => {
                switch (contador_inicializacao) {
                    case 0:
                        writtermachine('>Conexão alocada com DataBase:    [ OK ]', 10)
                        break;
                    case 1:
                        writtermachine('>Conexão by Templates:    [ OK ]', 10)
                        break;
                    case 2:
                        writtermachine('>Conexão por Serviço SSH:    [ OK ]', 10)
                        break;
                    case 3:
                        writtermachine('>Conexão por Serviço HTTP:  [ OK ]', 10)
                        break;
                    case 4:
                        writtermachine('>Conexão por Serviço HTTPS:     [ OK ]', 10)
                        break;
                    case 5:
                        writtermachine(">Conexão por Kernel's Lapse:    [ OK ]", 10)
                        break;
                    case 10:
                        writtermachine('>Host do Servidor: <a href="./fase2/NewFase.html">srv-main-01.local</a>', 1)
                        break;
                    case 11:
                        clearInterval(inicializador)
                }

                contador_inicializacao++
            }, 1000)
            answer.value = ''
            break;

        case (answer.value === '/start.sh'):
            writtermachine('Falha na conexão, Por favor verifique os estado de aplicação dos nós necessários...')
            answer.value = ''
            break

        default:
            writtermachine('Comando não encontrado')
            answer.value = ''
            set_help = false
            config = false
            config_data = false
    }

}





function writtermachine(texto, tempo = 15) {
    answer.removeAttribute('onkeypress')
    newline = document.createElement('p')
    newline.textContent = answer.value
    container_writter.appendChild(newline)
    let arr = texto.split('')
    let newarr = []
    let contador = 0

    let escrita = setInterval(() => {
        newarr.push(arr[contador])
        contador++
        x = newarr.join('')
        newline.innerHTML = x

        if (contador >= arr.length) {
            clearInterval(escrita)
            answer.setAttribute('onkeypress', `if(event.keyCode == 13){ resposta() }`)
        }
    }, tempo)

}

function teste() {
    let arr_teste = ['oii', 'DEFAULT.DATABASE.CONNECTION......FALSE', 'DEFAULT.CONNECTION...............FALSE']


    let string_teste = arr_teste[2].split(' ')

    console.log(arr_teste[2].length)
    console.log(arr_teste[1].length)

}

let set_teste = false

function resposta2() {
    console.log('teste do switch')

    switch (true) {
        case (answer.value === 'coco'):
            console.log('teste do case1')
            set_teste = true
            break;
        case (answer.value === 'conexao' && set_teste === true):
            console.log('teste do case2')
            break;
        default:
            console.log('ddefault')
    }
}

function clear() {
    container_writter.innerHTML = ''
    answer.value = ''
}

function digito() {
    if (event.keyCode == 13) { }
    else {
        audio_digito.cloneNode().play()

    }
    console.log('teste de digito')
}