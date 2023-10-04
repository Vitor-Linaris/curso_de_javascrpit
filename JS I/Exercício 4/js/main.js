const turista = prompt("Digite o nome do turista");
let cidades = "";
let contagem = 0;

let continuar = prompt("O turista já Visitou cidade? S ou N?");

while (continuar === "S") {
  let cidade = prompt("Qual é o nome da cidade visitada?");
  cidades += " - " + cidade + "\n";
  contagem++;
  continuar = prompt("Visitou alguma outra cidade? S ou N?");
}

alert(
  "Turista: " +
    turista +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas: \n" +
    cidades
);
