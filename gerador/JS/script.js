const tamanhoSenha = window.document.getElementById('tamanho')
const ABC = window.document.getElementById('ABC')
const abc = window.document.getElementById('abc')
const nums = window.document.getElementById('123')
const carcteresEspeciais = window.document.getElementById('@#?')
const resultado = window.document.getElementById('resultado')
const copiar = window.document.getElementById('copiar')

const caracteresUsados = {
    ABC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    abc: 'abcdefghijklmnopqrstuvwxyz',
    nums: '0123456789',
    especiais: '!@#$%&*()-+?'
};

let tam = 0 //ultimo numero visto 
let senha = ''

window.document.getElementById('btn').addEventListener('click', gerarSenhas)

copiar.addEventListener('click', function() {
    let texto = resultado.value
    navigator.clipboard.writeText(texto)
    alert('copiado')
})

setInterval(() => {
    if (tamanhoSenha.value <= 20 && tamanhoSenha.value >= 0) {
        if (tamanhoSenha.value !== '') {
            setTimeout(() => {//faz conque nao fique se repetindo toda hora
                if (tamanhoSenha.value !== tam && tamanhoSenha.value !== 0) {
                    gerarSenhas()
                }
                tam = tamanhoSenha.value
            }, 500)
        }
    } else {
        if (tamanhoSenha.value < 0) {
            alert('Insira um número maior que 0')
            tamanhoSenha.value = ''
        } else {
            alert('Você excedeu o limite de caracteres!')
            tamanhoSenha.value = ''
        }
    }
}, 500)

function gerarSenhas() {
    let charsDisponiveis = ''

    // Verificar quais checkboxes estão selecionadas
    if (ABC.checked) charsDisponiveis += caracteresUsados.ABC
    if (abc.checked) charsDisponiveis += caracteresUsados.abc
    if (nums.checked) charsDisponiveis += caracteresUsados.nums
    if (carcteresEspeciais.checked) charsDisponiveis += caracteresUsados.especiais

    // Se nenhum checkbox estiver marcado, mostrar mensagem
    if (charsDisponiveis === '') {
        console.log('Selecione o caracter utilizado')
        return
    }

    // Randomizar a senha com base nos caracteres disponíveis
    senha = ''
    for (let i = 0; i < tamanhoSenha.value; i++) {
        let randomIndex = Math.floor(Math.random() * charsDisponiveis.length)
        senha += charsDisponiveis[randomIndex]
    }

    resultado.value = senha
}