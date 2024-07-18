const form = document.getElementById("form-agenda")
// const listaNomes= []
// const listaNumeros=[]
// const anotacoes = []

let linhas = ""

form.addEventListener("submit", function(e){
    e.preventDefault()

    adicionaLinha()
    // validaNumero()

})

function adicionaLinha(){
    const inputNome = document.getElementById("nome")
    const inputNumero = document.getElementById("numero")
    const textArea = document.getElementById("anotacao")

    // listaNomes.push(inputNome.value)
    // listaNumeros.push(parseFloat(inputNumero.value))
    // anotacoes.push(textArea.value)

    if(validaNome(inputNome.value) == false){

        const nomeCompleto = document.querySelector(".nome-incompleto")
        nomeCompleto.style.display = "Block"
        nomeCompleto.innerHTML = "O nome precisa estar completo"
        
    }else{
        let linha = "<tr>"
        linha += `<td>${inputNome.value}</td>`
        linha += `<td>${inputNumero.value}</td>`
        linha += `<td>${textArea.value}</td>`
        linha += "</tr>"
    
        linhas += linha
    
        const tabela = document.querySelector("tbody")
        tabela.innerHTML = linhas
    
        inputNome.value = ""
        inputNumero.value = ""
        textArea.value = ""
    }
}

function validaNome(nomeValidacao){
    const nomeArray = nomeValidacao.split(" ")
    return nomeArray.length >=2
}

// function validaNumero(numero) {
//     const regex = /^\d{2}\d{8,9}$/;
//     return regex.test(numero);
// }

