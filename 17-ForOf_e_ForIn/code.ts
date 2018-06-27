function Executar(): void {

    let nomes = ["joao", "ana", "carlos", "daniela", "sofia"]

    let elemento = document.getElementById("info");

    elemento.innerHTML = "";

    // Padrão
  
    elemento.innerHTML += " <br>  for(let i = 0; i < nomes.length; i++) <br> ";
    for(let i = 0; i < nomes.length; i++){
        elemento.innerHTML += nomes[i]+" - ";    
    } 
    
    elemento.innerHTML += " <br>  nomes.forEach(function (e) <br> ";
    // Novo
    nomes.forEach(function (e) {
        elemento.innerHTML += e + " - ";
    });

    
    elemento.innerHTML += " <br>  nomes.forEach(nome =>{ <br> ";
    // Novo
    // for arrow function
    nomes.forEach(nome =>{
        elemento.innerHTML += nome + " - ";
    });
    
    elemento.innerHTML += " <br>  for(let nome of nomes) <br> ";
    // for ...of
    // apresenta os nomes
    for(let nome of nomes){
        elemento.innerHTML += nome + " - ";
    }

    elemento.innerHTML += " <br>  for(let nome in nomes) <br> ";
    // for ...in
    // apresenta o indexs, e nao os nomes
    for(let index in nomes){
        elemento.innerHTML += index + " - ";
    }

}




