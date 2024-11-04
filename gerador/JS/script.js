const tamanhoSenha = window.document.getElementById('tamanho')
const ABC = window.document.getElementById('ABC')
const abc = window.document.getElementById('abc')
const nums = window.document.getElementById('123')
const carcteresEspeciais = window.document.getElementById('@#?')
const resultado = window.document.getElementById('resultado')
const copiar = window.document.getElementById('copiar')

let tam = 0 //ultimo numero visto 

setInterval(() => {
    if(tamanhoSenha.value !== '') {
        if (tamanhoSenha.value !== tam) { //faz conque nao fique se repetindo toda hora
            gerarSenhas()
        }
        tam = tamanhoSenha.value
    }
},500)

function gerarSenhas() {
    console.log(tamanhoSenha.value)
}