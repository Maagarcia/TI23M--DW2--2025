function coordenada(x,y){
    if (x==0 && y==0){
        console.log("ponto de origem")
    }
    else if (x == 0){
        console.log (id = y>0? "toca no eixo y positivamente": "toca no eixo y negativamente")
    }else if (y == 0){
        console.log(id= x>0?"toca no eixo x positivamente": "toca no eixo x negativamente")
    
    }else if(x!=0 && y!=0){
        if(x>0 && y>0){
            console.log(`o ponto (${x},${y}) está localizado no primeiro quadrante`)
        }
        if(x<0 && y>0){
            console.log(`o ponto (${x},${y}) está localizado no segundo quadrante`)
        }
        if(x<0 && y<0){
            console.log(`o ponto (${x},${y}) está localizado no terceiro quadrante`)
        }
        if(x>0 && y<0){
            console.log(`o ponto (${x},${y}) está localizado no quarto quadrante`)
        }
    }
            

}

// coordenada(0,0)
// coordenada(-1,0)
// coordenada(0,-1)
// coordenada(0,1)
// coordenada(1,0)
// coordenada(1,1)
// coordenada(1,-1)
// coordenada(-1,-1)
// coordenada(-1,1)

function triangulo(x,y,z){
    let listainit = [x,y,z]
    listainit.sort(function(a,b){return b-a})
    console.log(listainit)

    if(listainit[0] >= listainit[1]+listainit[2]){
        console.log("NAO FORMA TRIANGULO")
    }

    if (listainit[0]==listainit[1]&& listainit[1]==listainit[2]){
            console.log("triangulo equilátero")
    }

    if (listainit[0]==listainit[1] || listainit[1]==listainit[2]){
            console.log("triangulo isoceles")
    
    }else{
        if(listainit[0]**2== listainit[1]**2+listainit[2]**2){
            console.log("triangulo retângulo")
        }
        if((listainit[0]**2> listainit[1]**2+listainit[2]**2)){
            console.log("triangulo obtusangulo")
        }
        }
        if(listainit[0]**2< listainit[1]**2+listainit[2]**2){
            console.log("triangulo acutangulo")
        }
        }
    

// triangulo(81,90,10)
// triangulo (5,3,4)
// triangulo (6,3,4)
// triangulo (6,3,6)
// triangulo (2,2,2)
// triangulo (20,21,21)

function palindromo(x){
    palavra1 = x.toLowerCase().replace("/\sg, ''")
    palavra2 = x.split('').reverse().join('')

    return (id = palavra1 === palavra2? true:false)

}

// console.log(palindromo("ola mundo"))
// console.log(palindromo("ovo"))

function salarioescravo(x){
    let y
    if (0 < x <400.00){
        y = 15
        console.log(`Seu antigo salario era de ${x} 
seu novo salario é de ${x+(x*(y/100))}
o aumento foi de ${x*(y/100)}`)
    }
    if (400.01 < x < 800.00){
        y = 12
        console.log(`Seu antigo salario era de ${x} 
seu novo salario é de ${x+(x*(y/100))}
o aumento foi de ${x*(y/100)}`)
    }
    if (800.01 < x < 1200.00){
        y = 10
        console.log(`Seu antigo salario era de ${x} 
seu novo salario é de ${x+(x*(y/100))}
o aumento foi de ${x*(y/100)}`)
    }
    if (1200.01 < x < 2000.00){
        y = 7
        console.log(`Seu antigo salario era de ${x} 
seu novo salario é de ${x+(x*(y/100))}
o aumento foi de ${x*(y/100)}`)
    }
    if (2000.01 < x){
        y = 4
        console.log(`Seu antigo salario era de ${x} 
seu novo salario é de ${x+(x*(y/100))}
o aumento foi de ${x*(y/100)}`)
    }

}

// salarioescravo(300.01)
// salarioescravo(400.01)
// salarioescravo(800.01)
// salarioescravo(2000.01)


const somar = (a,b) => a+b

console.log(somar(4,7))//11
