function addPlayer() {
  const playerPosition = document.getElementById("position").value;
  const playerName = document.getElementById("name").value;
  const playerNumber = document.getElementById("number").value;

  const confirmacao = confirm(
    "Salvar este jogador?\n" +
      "\nPosição do jogador: " +
      playerPosition +
      "\nNome do jogador: " +
      playerName +
      "\nNúmero do jogador: " +
      playerNumber
  );
  if (confirmacao) {
    const playerList = document.getElementById("player-list");
    const playerItem = document.createElement("li");
    playerItem.id = "player-" + playerNumber;
    playerItem.innerText =
      playerPosition + ": " + playerName + "(" + playerNumber + ")";
    playerList.appendChild(playerItem);

    document.getElementById("position").value;
    document.getElementById("name").value;
    document.getElementById("number").value;
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById("player-" + number);

  const confirmacao = confirm(
    "Remover este jogador?\n" + playerToRemove.innerText + "?"
  );

  if (confirmacao) {
    document.getElementById("player-list").removeChild(playerToRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
