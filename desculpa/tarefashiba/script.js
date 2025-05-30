function tarefaapi(){
    const senha = document.getElementById('senha').value

    const url = `https://brasilapi.com.br/api/isbn/v1/${senha}`

    fetch(url)
        .then((api) =>{
            return api.json()
        })
        .then((api)=>{
            document.getElementById('nome').value = api.title
            document.getElementById('autor').value = api.authors
            document.getElementById('ano').value = api.year
            document.getElementById('publicadora').value = api.publisher
        })
    
}