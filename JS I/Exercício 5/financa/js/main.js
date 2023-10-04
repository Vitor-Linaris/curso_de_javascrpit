let saldo = prompt("Informe a quantidade de dinheiro incial:");
saldo = parseFloat(saldo);
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponivel: R$ " +
      saldo +
      "\n1. Adicionar dinheiro" +
      "\n2. Remover dinheiro" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado: "));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o valor a ser removido: "));
      break;
    case "3":
      alert("O Controle financeiro foi finalizado com sucesso!");
      break;

    default:
      alert("Valor inválido");
      break;
  }
} while (opcao !== "3");
