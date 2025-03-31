function media(x,y,z){
    return (x+y+z)/3

}

// console.log(media(4,10,6))


function fatorial(n){
    let resultado = 1
    for (let i = n; i > 0; i--){
        resultado = resultado * i

    }
    return resultado
}

console.log(fatorial(15))