function par(n){
    return (id = n%2 == 1? false: true)

}

// console.log(par(2))//true
// console.log(par(3))//false

function primo(x){
    let u = 0
    for (i=2; i < x; i++){
        if(x%i==0){
           u +=1
        }else{}
    
    }
    return (id = u > 0? false:true)
}

// console.log(primo(9))//false
// console.log(primo(13))//true
// console.log(primo(15))//false
// console.log(primo(17))//true
// console.log(primo(2))//true

function prims(x){
    for (i=2; i <= x; i++){
        return (id = x%i ==1? true: false)

    }

}


function conversão(n){
    let f = n*1.8 +32
    f = f.toFixed(1)
    console.log(f)


}
// conversão(37)// 98,6
// conversão(101)// 98,6

function contatexto(x){
    x = x.split(' ')
    count = 0
    for (i in x){
        count++
    }
    console.log(count)
}

// contatexto('hello world')//2
// contatexto('the brown fox jumps over the lazy dog')//8

function horas(n){
    let horas  = n /3600
    horas = Math.floor(horas)
    let minutos = (n%3600)/60
    minutos = Math.floor(minutos,1)
    let segundos = (n%3600)%60


    console.log(`horario é ${horas}:${minutos}:${segundos}`)
}
// horas(3600)//horario é 1:0:0
// horas(3661)//horario é 1:1:1
// horas(4508)//horario é 1:15:8
// horas(78568 )//horario é 21:49:28

function a(x,y){
    z = (Math.sqrt((Math.pow(x,2)+Math.pow(y,3))))/(Math.abs(x+y))
    console.log(z)
}

// a(1,2)//1

function b(x){
    z = (1+Math.sin(x))/(1+Math.cos(x))
    console.log(z)
}
// b((Math.PI)/4)//1

function c(x){
    z = 1 + (1/x) +(1/(x**2)) + (1/(x**3)) + (1/x**4)
    console.log(z)
}

// c(2)//1.9375

function d(x,y){
    z= (x/y)- (x+Math.pow((x/y),2))/(x-Math.pow(x/y),2)
    console.log(z)
}

// d(8,4)//-4

function e(x){
    z = Math.sqrt(Math.PI + Math.sqrt(Math.E**3 +Math.sqrt(4 + Math.sqrt(x))))
    console.log(z)
}

e(4)//2.808682937394785
