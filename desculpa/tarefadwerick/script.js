document.getElementById('botao').onclick = isbn

function isbn(){
    const codigo = document.getElementById('isbn').value

    const siteapi = `https://brasilapi.com.br/api/isbn/v1/${codigo}`

    fetch(siteapi)
        .then((data) =>{
            return data.json()

        })
        .then((data)=> {
            if(data.message){
                document.getElementById('isbn').value = 'código invalido'
            }
            document.getElementById('titulo').value = data.title;
            document.getElementById("autor").value = data.authors;
            document.getElementById("ano").value = data.year;
            document.getElementById("sinopse").value = data.synopsis;

        })
    }

