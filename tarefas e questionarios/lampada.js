tipoimagen = 1
function mudar(){
    const foto = document.getElementById("imagem")
    if(tipoimagen === 1){
        foto.src = "./imagenslampada/lampada-on.jpg"
        tipoimagen = 2

    }else if(tipoimagen=== 2){
        foto.src = "./imagenslampada/lampada-off.jpg"
        tipoimagen = 1
    }
}