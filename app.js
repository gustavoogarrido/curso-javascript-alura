// Função da documentação
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert('Você terá que tentar adivinhar o número secreto que está entre 1 e 100. Boa sorte!');
let secret = parseInt(Math.random() * 100 + 1);
let x = 0
let resposta = prompt('Digite o seu palpite, deve ser apenas um número');
while (resposta != secret) {
    x++
    console.log(`Iteração numero ${x}`)
    console.log(`O secret é ${secret}`)
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

let feedback = Number(prompt('Digite um número')) > 0 ? 'O número é positivo' : 'O número é negativo' // Conteúdo da aula 4

if (numeroDigitado > 0)
    alert('O número é positivo')
else
    alert('O número é negativo')

// Desafio aula 3

let count
for (count = 0; count < 10; count++)
    console.log(`Iteração número ${count}`)

//Desafios aula 4 (finais)

console.log('Começando desafios finais');
let nome4 = "Gustavo"

console.log(`Meu nome é ${nome4}`)

alert(`O nome é ${nome4}`)

const respostaLinguagem = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(respostaLinguagem)

const valor1 = 324
const valor2 = 654
const resultado = valor1 + valor2

console.log(`${valor1} + ${valor2} = ${resultado}`)
console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`)