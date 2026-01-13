alert('Você terá que tentar adivinhar o número secreto que está entre 1 e 100. Boa sorte!');
let secret = 32;

let resposta = prompt('Digite o seu palpite, deve ser apenas um número');
while (resposta != secret) {
    if (resposta > secret) {
        alert('Seu palpite foi muito alto, tente algo menor');
    }
    else {
        alert('Seu palpite foi muito baixo, tente algo maior');
    }
    resposta = prompt('Digite o seu palpite, deve ser apenas um número');
}

// Desafio

alert('Boas vindas ao nosso site!')

let nome = 'Lua'
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000

const mensagemErro = 'Erro! Preencha todos os campos'


alert(mensagemErro)

nome = prompt('Digite o nome')
idade = prompt('Digite a idade') >= 18 ? alert('Pode tirar habilitação') : alert('Não pode tirar habilitadação') //ternario é muito bom
