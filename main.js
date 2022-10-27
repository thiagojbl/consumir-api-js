function getUltimos(url){
    let request = new XMLHttpRequest() 
    request.open("GET", url, false)
    request.send()
    console.log("Fim")
    return request.responseText 
}   

function criarLinha(element){
    linha = document.createElement("tr");
    tdId = document.createElement("td");
    tdNome = document.createElement("td");    
    tdId.innerHTML = element.id
    tdNome.innerHTML = element.nome
 
    linha.appendChild(tdId);
    linha.appendChild(tdNome);
    return linha
}

function main(){
    api = "http://sistema-premen-votacao.herokuapp.com/cliente/ultimos"
    data = JSON.parse(getUltimos(api)) 
    let tabela = document.getElementById("tabela");
    console.log(data);
    data.forEach(element => {
       let linha = criarLinha(element);
       tabela.appendChild(linha);
   });    
}

main()