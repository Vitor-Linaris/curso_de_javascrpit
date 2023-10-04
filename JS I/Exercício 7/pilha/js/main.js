let baralho = [];
let opcao = "";

do {
  opcao = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?");
      baralho.push(novaCarta);
      break;
    case "2":
      const puxarCarta = baralho.pop();
      if (!puxarCarta) {
        alert("Não tem carta para puxar");
      } else {
        alert("Você puxou a carta: " + puxarCarta);
      }
      break;
    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Valor inválido");
      break;
  }
} while (opcao !== "3");
