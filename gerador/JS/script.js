const tamanhoSenha = window.document.getElementById('tamanho')
const ABC = window.document.getElementById('ABC')
const abc = window.document.getElementById('abc')
const nums = window.document.getElementById('123')
const carcteresEspeciais = window.document.getElementById('@#?')
const resultado = window.document.getElementById('resultado')
const copiar = window.document.getElementById('copiar')
const alfabeto = [
    'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y',
    'Z'
];


let tam = 0 //ultimo numero visto 

setInterval(() => {
    if(tamanhoSenha.value !== '') {
        setTimeout(() => {
            if (tamanhoSenha.value !== tam) { //faz conque nao fique se repetindo toda hora
                gerarSenhas()
            }
            tam = tamanhoSenha.value
        },500)
    }
},500)

function gerarSenhas() {
    for (let i = 0; i < tamanhoSenha.value; i++) {
        let senhaAleatoria = Math.floor(Math.random() * 26)
        console.log(alfabeto[senhaAleatoria])
    }
}