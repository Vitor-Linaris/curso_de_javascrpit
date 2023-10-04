let imoveis = [];
let opcao = "";

do {
  let opcao = prompt(
    "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " +
      imoveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {};

      imovel.proprietario = prompt("Nome do proprietário");
      imovel.quartos = prompt("Quantidade de quartos");
      imovel.banheiros = prompt("Quantidade de banheiros");
      imovel.garagem = prompt("Se possui garagem");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nPossui Garagem? " +
          imovel.garagem
      );
      if (confirmacao) {
        imoveis.push(imovel);
        alert("Imóvel cadastrado com sucesso!");
      } else {
        alert("Voltando ao menu...");
      }
      break;

    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui Garagem? " +
            imoveis[i].garagem
        );
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "3");
