let container = document.getElementById('container')
let descripto = document.getElementById('descripto')

let tentativas = 0
let ip = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)]
let full_tentavia = Math.floor(Math.random()* (600-100 + 1) + 100)

let arr_mensagens = ['Inicializando Script...', '[ESTADO DA GATEWAY] Analisando...', '[ESTADO DA GATEWAY] Redefinindo...', '[HANDSHAKE TCP/IP] Iniciado...', '[PACOTE LSDCC/WRAT] Em operação...', '[ROTA DE REDE] <span style="color: red; ">Comprometida</span>', '[DNS_SPOOFING] <span style="color: red; ">Detectado</span>', '[CONEXÃO SEGURA TLS] <span style="color: red; ">Quebrada</span>', `[SOCKETS ANALISADOS] <span style="color: red; ">Socket aberto na porta ${(full_tentavia)-17}</span>`,'[SISTEMAS DE SEGURANÇA DO MOCKLER] Sobrepostos',"[DDOS IN KERNEL'S FRAME] Em execução",'[PROTOCOLOS DE PRIVACIDADE DO MOCKLER] <span style="color: red; ">Adulterados</span>','[RELAÇÃO TABELA_IP --> PUBLIC_STATIC_SQL] <span style="color: red; ">Publico</span>']

async function escrita() {
    for (i = 0; i < arr_mensagens.length; i++) {
        switch (i) {
            case 1:
                await sleep(1000)
                console.log('oii')
                

            default:
                await writtermachine(arr_mensagens[i], 10)
        }

    }
    window.close()
}

function writtermachine(texto, tempo) {

    return new Promise((resolve) => {
        const newp = document.createElement('p')
        container.appendChild(newp)
        let arr = texto.split('')
        let arr_count = 0
        let newarr = []
        let mensagem = setInterval(() => {
            newarr.push(arr[arr_count])
            arr_count++
            x= newarr.join('')
            newp.innerHTML = x
            // console.log(texto)
            // console.log(arr)
            // console.log(arr_count)
            if (arr_count >= arr.length) {
                clearInterval(mensagem)
                resolve()
            }
        }, tempo);
    })

}


console.log(full_tentavia)
let acha_ip = setInterval(() => {
    let ip_tentativa = [`${Math.floor(Math.random() * 255)}`,`${Math.floor(Math.random() * 255)}`,`${Math.floor(Math.random() * 255)}`,`${Math.floor(Math.random() * 255)}`]
    descripto.innerHTML = `Comparativo de IP:${ip_tentativa.join('.')} : <span style="color: red; ">xxx.xxx.xxx.xxx</span> 
    <p>[PORTAS DESCARTADAS] ${tentativas}</p>`
    tentativas++
    console.log('esse é o ip certo',ip)
    console.log('esse é o que ta sendo chutado', ip_tentativa)
    if(tentativas == (full_tentavia + 1)){
        descripto.innerHTML = `Comparativo de IP:${ip.join('.')} : <span style="color: red; ">xxx.xxx.xxx.xxx</span> 
    <p>[PORTAS DESCARTADAS] ${tentativas}</p>`
        writtermachine(`[PORTA ENCONTRADA] ${ip.join('.')}`)
        writtermachine(`[PORTA BINÁRIA ENCONTRADA] ${(ip[0]).toString(2).padStart(8,0)}.${(ip[1]).toString(2).padStart(8,0)}.${(ip[3]).toString(2).padStart(8,0)}.${(ip[3]).toString(2).padEnd(8,0)}`)

        clearInterval(acha_ip)

    }
}, 10)

escrita()

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve,ms))
}
