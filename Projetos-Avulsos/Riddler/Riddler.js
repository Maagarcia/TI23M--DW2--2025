teste()

let container_writter = document.getElementById('pog')
let answer = document.getElementById('answer')



let help_arr = ['DEFAULT.TEMPLATE.................FALSE','DEFAULT.EVENT....................FALSE','DEFAULT.CONNECTION...............FALSE','DEFAULT.STABILIZATION............FALSE','DEFAULT.DATABASE.CONNECTION......FALSE']
let set_help = false
let config = false

function resposta(){
    console.log(answer.value)
    document.body.style.color = 'green'

    if(answer.value === '/help'){
        console.log('teste45')
        set_help = true
        answer.value = '~h. '
    }

    else if(answer.value == '~h. ls' && set_help == true){
        answer.setAttribute('placeholder' , '')
        document.body.style.color = 'red'
        answer.value = ''
        set_help = false
        console.log('funfando')
       
            contador_arr = 0

            let defaults = setInterval(()=>{
            writtermachine(help_arr[contador_arr])
            contador_arr++
            console.log('teste')

            if(contador_arr >= help_arr.length){
                clearInterval(defaults)
            }
        },590)
    }
    else if(answer.value == '/nct'){
        container_writter.innerHTML = ''
        answer.value = ''
    }

    else if(answer.value == '/sudo.fig'){
        config = true
        writtermachine('CMD CONFIG SET:')
        answer.value = '~sys.config:    ()'
    }
    else if(answer.value = `~sys.config:    ('template',TRUE)` && config == true){
        help_arr[0] = 'DEFAULT.TEMPLATE.................TRUE'
        writtermachine('sys.TEMPLATE alterado')
        answer.value = ''
    }
    else{
        console.log('teste23')
        writtermachine('comando não encontrado')
        answer.value = ''
        set_help = false
        
    }
}



function writtermachine(texto){
    newline = document.createElement('p')
    newline.textContent = answer.value
    container_writter.appendChild(newline)
    let arr = texto.split('')
    let newarr = []
    let contador = 0
    
    let escrita = setInterval(()=>{
        newarr.push(arr[contador])
        contador++
        x = newarr.join('')
        newline.textContent = x
        
        if(contador >= arr.length ){
            clearInterval(escrita)
        }
    },15)

}

function teste(){
    let arr_teste = ['oii','DEFAULT.DATABASE.CONNECTION......FALSE','DEFAULT.CONNECTION...............FALSE']


    let string_teste = arr_teste[2].split(' ')

    console.log(arr_teste[2].length)
    console.log(arr_teste[1].length)
    
}
