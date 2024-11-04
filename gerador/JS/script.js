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
let senha = ''

setInterval(() => {
    if (tamanhoSenha.value !== '') {
        setTimeout(() => {//faz conque nao fique se repetindo toda hora
            if (tamanhoSenha.value !== tam && tamanhoSenha.value !== 0) {
                senha = ''
                gerarSenhas()
            }
            tam = tamanhoSenha.value
        }, 500)
    }
}, 500)

function gerarSenhas() {
    if (ABC.checked || abc.checked || nums.checked || carcteresEspeciais.checked) {
        for (let i = 0; i < tamanhoSenha.value; i++) {
            let senhaAleatoria = Math.floor(Math.random() * 26)
            senha += alfabeto[senhaAleatoria]
        }
        console.log(senha)
    } else {
        console.log('Selecione o caracter utilizado')
    }
}