function areaTriangulo() {
  const base = parseFloat(prompt("Qual é a base do triângulo: "));
  const altura = parseFloat(prompt("Qual é a altura do triângulo: "));
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = parseFloat(prompt("Qual é a base do retângulo: "));
  const altura = parseFloat(prompt("Qual é a altura do retângulo: "));
  return base * altura;
}

function areaQuadrado() {
  const lado = parseFloat(prompt("Qual é a lado do quadrado: "));
  return lado * lado;
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Qual é a base maior do trapézio: "));
  const baseMenor = parseFloat(prompt("Qual é a base menor do trapézio: "));
  const altura = parseFloat(prompt("Qual é a altura do trapézio: "));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  const pi = 3.14;
  const raio = parseFloat(prompt("Qual é o raio do círculo: "));
  return pi * (raio * raio);
}

function menu() {
  let menu = prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
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
        resultado = areaTriangulo();
        break;

      case "2":
        resultado = areaRetangulo();
        break;

      case "3":
        resultado = areaQuadrado();
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

    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opcao !== "6");
}

executar();
