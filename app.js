alert('Você terá que tentar adivinhar o número secreto que está entre 1 e 100. Boa sorte!');
let secret = 32;
let x = 0
let resposta = prompt('Digite o seu palpite, deve ser apenas um número');
while (resposta != secret) {
    x++
    console.log(`Iteração numero ${x}`)
    if (resposta > secret) {
        alert('Seu palpite foi muito alto, tente algo menor');
    }
    else {
        alert('Seu palpite foi muito baixo, tente algo maior');
    }
    resposta = prompt('Digite o seu palpite, deve ser apenas um número');
}

alert('Parabéns, você acertou o número!!')

// Desafios aula 1

alert('Boas vindas ao nosso site!')

let nome = 'Lua'
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 1000

const mensagemErro = 'Erro! Preencha todos os campos'


alert(mensagemErro)

nome = prompt('Digite o nome')
idade = prompt('Digite a idade') >= 18 ? alert('Pode tirar habilitação') : alert('Não pode tirar habilitadação') //ternario é muito bom

// Desafios aula 2

// 1-
let respostaDiaSem = prompt('Que dia é hoje?')
const finalDeSemana = ['sábado', 'domingo']
if (finalDeSemana.includes(respostaDiaSem.toLowerCase().normalize('NFD')))
    alert('Bom fim de semana')

else 
    alert('Boa semana para você')

// 2-

let feedback = Number(prompt('Digite um número')) > 0 ? 'O número é positivo' : 'O número é negativo'

if (numeroDigitado > 0)
    alert('O número é positivo')
else
    alert('O número é negativo')

// Desafio aula 3

let count
for (count = 0; count < 10; count++)
    console.log(`Iteração número ${count}`)