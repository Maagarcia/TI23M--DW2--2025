function api(){
    const isbn = document.getElementById("isbn").value
    console.log(isbn)

    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`

    fetch(url)
        .then((response) =>{
            return response.json()
        })
        .then((infos)=>{
            if(infos.message){
                alert("codigo inválido")
                document.getElementById("title").value = "inválido"
                return
            }
            document.getElementById("title").value = infos.title;
            document.getElementById("autor").value = infos.authors;
            document.getElementById("publicadora").value = infos.publisher;
            document.getElementById("ano").value = infos.year;
            document.getElementById("paginas").value = infos.page_count;
            document.getElementById("sinopse2").textContent = infos.synopsis;
})
    }

