const vagas = [];

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + 1 + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

function novaVaga() {
  const nome = prompt("Nome para a vaga?");
  const descricao = prompt("Descrição da vaga:");
  const dataLimite = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:");

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada");
  }
}

function visualizarVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(
    (textoFinal, candidato) => textoFinal + "\n - " + candidato,
    ""
  );

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nCandidatos inscritos:" +
      candidatosEmTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do(a) condidato(a):");
  const indice = prompt(
    "Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:"
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir:");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída.");
  }
}

function menu() {
  const menu = prompt(
    "Vagas de emprego\n" +
      "1. Listar vagas disponíveis\n" +
      "2. Criar um nova vaga\n" +
      "3. Visualizar uma vaga\n" +
      "4. Inscrever um candidato em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair\n"
  );

  return menu;
}

function executar() {
  let opcao = "";

  do {
    opcao = menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = listarVagas();
        break;

      case "2":
        resultado = novaVaga();
        break;

      case "3":
        resultado = visualizarVaga();
        break;

      case "4":
        resultado = areaTrapezio();
        break;

      case "5":
        resultado = areaCirculo();
        break;

      case "6":
        alert("Encerrando...");
        break;

      default:
        alert("Opção inválida!");
        break;
    }
  } while (opcao !== "6");
}

executar();
