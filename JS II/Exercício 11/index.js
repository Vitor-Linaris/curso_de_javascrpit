function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmacao = confirm(
    "Deseja escalar esse jogador(a)?\n" +
      "Nome: " +
      name +
      "\nPosição: " +
      position +
      "\nNúmero do jogador(a): " +
      number
  );

  if (confirmacao) {
    const teamList = document.getElementById("team-list");

    const playerItem = document.createElement("li");
    playerItem.id = "player-" + number;
    playerItem.innerText =
      "Nome: " +
      name +
      "\nPosição: " +
      position +
      "\nNúmero do jogador(a): " +
      number;

    teamList.appendChild(playerItem);
    teamList.appendChild(document.createElement("br"));

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);
  const teamList = document.getElementById("team-list");

  const confirmacao = confirm(
    "Deseja remover esse jogador(a)?\n" + playerToRemove.innerText + "?"
  );

  if (confirmacao) {
    teamList.removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
