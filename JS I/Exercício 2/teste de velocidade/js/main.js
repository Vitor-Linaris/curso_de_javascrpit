const veiculo1 = window.prompt("Informe o nome do primeiro veículo:");
const velocidade1 = window.prompt("Informe a velocidade do primeiro veículo");

const veiculo2 = window.prompt("Informe o nome do segundo veículo:");
const velocidade2 = window.prompt("Informe a velocidade do segundo veículo");


if(velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rapido do que " + veiculo2)
} else if(velocidade1 < velocidade2) {
    alert(veiculo2 + " é mais rapido do que " + veiculo1)
} else {
    alert(veiculo1 + " e " + veiculo2 + "possuem velocidades iguais")
}