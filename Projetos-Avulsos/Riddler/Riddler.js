teste()

let container_writter = document.getElementById('pog')
let answer = document.getElementById('answer')
let container_past_answers = document.getElementById('new')



function resposta(){
    console.log(answer.value)
    
    if(answer.value == '/help'){

        console.log('funfando')
        help_arr = ['DEFAULT.TEMPLATE.................FALSE','DEFAULT.EVENT....................FALSE','DEFAULT.CONNECTION...............FALSE','DEFAULT.STABILIZATION............FALSE']
            contador_arr = 0

            let defaults = setInterval(()=>{
            writtermachine(help_arr[contador_arr])
            contador_arr++
            console.log('teste')

            if(contador_arr >= help_arr.length){
                clearInterval(defaults)
            }
        },590)
    }else{
        writtermachine(answer.value)
        
    }
    answer.value = ''
}



function writtermachine(texto){
    newline = document.createElement('p')
    newline.textContent = container_past_answers.textContent
    container_writter.appendChild(newline)
    let arr = texto.split('')
    let newarr = []
    let contador = 0
    
    let escrita = setInterval(()=>{
        newarr.push(arr[contador])
        contador++
        container_past_answers.textContent = newarr.join('')
        
        if(contador >= arr.length ){
            clearInterval(escrita)
        }
    },15)

}

function teste(){
    let arr_teste = ['oii','DEFAULT.STABILIZATION............FALSE','DEFAULT.CONNECTION...............FALSE']


    let string_teste = arr_teste[2].split(' ')

    console.log(arr_teste[2].length)
    console.log(arr_teste[1].length)
    
}
