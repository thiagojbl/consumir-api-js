function fazPost(url, data, sala) {
      console.log(data)
      
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          console.log("success:", response.status); 

          if(response.status == 201){
            alert("Votação realizada com sucesso!")
            document.getElementById('nome').value='';
            document.getElementById('tel').value='';
            sala.checked=false;          
          }

          if(response.status == 500){
            alert("Erro interno!")
          }

          if(response.status == 400){
            alert("Verifique se o campo nome e telefone estão preenchidos corretamente.")
          }

        })
        .catch((error) => {
          console.log("error", error);
        });
        console.log("fim")
}

function convertit(conversion){
    for (var i = 0; i < conversion.length; i++) {
      if (conversion[i].checked == true){
        return conversion[i];
      }
    }
   return "";
} 

function cadastraUsuario() {
    event.preventDefault() 
    let url = "https://sistema-premen-votacao.herokuapp.com/cliente"
    let nome = document.getElementById("nome").value
    let fone = document.getElementById("tel").value
    var conversion = document.getElementsByName('radio')
    let sala = convertit(conversion)
    if(sala != ""){
      const data = {
        "nome": nome,
        "email": "feira@feira",
        "telefone": fone,
        "sala": sala.value
      }
      fazPost(url, data, sala)
    }else{
      alert("Selecione um curso!")
    }
} 