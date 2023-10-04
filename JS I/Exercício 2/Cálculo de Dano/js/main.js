const nomePersonagem1 = window.prompt("Insira o nome do personagem atacante");
const poderDeAtaque = window.prompt("Insira seu poder de Ataque");

const nomePersonagem2 = window.prompt("Insira o nome do personagem defensor");
let pontosDeVida = window.prompt("Insira seus pontos de vida");
const poderDeDefesa = window.prompt("Insira seu poder de defesa");
const possuiEscudo = window.prompt("Possui escudo ? responda com S ou N");

let dano = 0

if(poderDeAtaque > poderDeDefesa && possuiEscudo === "N") {
    dano = poderDeAtaque - poderDeDefesa;
} else if(poderDeAtaque > poderDeDefesa && possuiEscudo === "S") {
    dano = (poderDeAtaque - poderDeDefesa) / 2;
} else {
    dano = 0
}

pontosDeVida -= dano

alert(nomePersonagem1 + " causou " + dano + " pontos de dano em " + nomePersonagem2)

alert(
     nomePersonagem1 + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
     nomePersonagem2 + "\nPontos de vida: " + pontosDeVida + 
     "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)