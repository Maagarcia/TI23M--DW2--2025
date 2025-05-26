function maior(x){
    e = x.sort(function(a,b){return b-a})
    c = e[0]
    console.log(c)
    for (i=0;i <= x.length - 1;i++){
        if(c = x[i])
            console.log(`seu numero está na posição ${i}`)
    }
}
x = [1,5,7,3,5,10]

console.log(maior(x))

function maiorquesete(x){
    let c = [...x]
    c = c.filter(num => num >7)
    return c}
    
// x = [1,2,3,4,5,6,7,8,9]
// console.log(maiorquesete(x))

function nota(p1,p2,t1,textra=10){
    return p1+p2+t1+textra
}

// console.log(nota(40,40,10,5))
