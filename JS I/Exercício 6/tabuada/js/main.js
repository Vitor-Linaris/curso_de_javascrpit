let num = parseInt(prompt("Tabuada do número:"));
let tabuada = "";

for (let count = 1; count <= 20; count++) {
  tabuada += num + " x " + count + " = " + num * count + "\n";
}

alert(tabuada);
