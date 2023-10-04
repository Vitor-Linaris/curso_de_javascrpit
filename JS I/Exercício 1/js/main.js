let nome = window.prompt("Insira seu nome!");
let sobrenome = window.prompt("Insira seu sobrenome!");
let campoDeEstudo = window.prompt("Campo de estudo?");
let anoNascimento = window.prompt("Data de nasciemnto?");

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

let idade = anoAtual - anoNascimento;

console.log("Nome conmpleto: " + nome + sobrenome)
console.log("Campo de estudo: " + campoDeEstudo)
console.log("Idade: " + idade)