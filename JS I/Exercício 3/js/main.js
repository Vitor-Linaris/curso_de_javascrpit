let valor = prompt("Digite o valor em metro que será convertido");
const convercao = prompt(
  "Para qual unidade de medida deseja converter?" +
    "\n1 - milímetros (mm)" +
    "\n2 - centímetros (cm)" +
    "\n3 - decímetros (dm)" +
    "\n4 - decâmetros (dam)" +
    "\n5 - hectômetro (hm)" +
    "\n6 - quilômetro (km)" +
    "Insira o numero desejado!"
);

switch (convercao) {
  case "cm":
    valor *= 100;
    alert("Valor convertido: " + valor + " cm");
    break;

  case "mm":
    valor *= 1000;
    alert("Valor convertido: " + valor + " mm");
    break;

  case "dm":
    valor *= 10;
    alert("Valor convertido: " + valor + " dm");
    break;

  case "dam":
    valor /= 10;
    alert("Valor convertido: " + valor + " dam");
    break;

  case "hm":
    valor /= 100;
    alert("Valor convertido: " + valor + " hm");
    break;

  case "km":
    valor /= 1000;
    alert("Valor convertido: " + valor + " km");
    break;

  default:
    alert("Opção inválida");
}
