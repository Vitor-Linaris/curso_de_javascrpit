async function calcularIMC(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    return Promise.reject("O peso ou altura não é um número!");
  }
  return peso / (altura * altura);
}

async function execute(peso, altura) {
  try {
    console.log("A promise está sendo executada.");
    const result = await calcularIMC(peso, altura);
    if ((result <= 18, 5)) {
      console.log(`Seu IMC de ${result} é considerado magresa `);
    } else if ((result > 18, 5 <= 24, 9)) {
      console.log(`Seu IMC de ${result} é considerado normal `);
    } else if ((result > 25 <= 29, 9)) {
      console.log(`Seu IMC de ${result} é considerado sobrepeso `);
    } else if ((result > 30 <= 39, 9)) {
      console.log(`Seu IMC de ${result} é considerado obesidade `);
    } else if (result >= 40) {
      console.log(`Seu IMC de ${result} é considerado obesidade grave `);
    }
  } catch (err) {
    console.log(`A promise foi rejeitada! Motivo: ${err}`);
  }
}

execute(71, 1.74);
