// Múltiplos

let indice: number;
let multiplos: string = "";

for (indice = 1; indice <= 100; indice++) {
  if (indice % 2 == 0 || indice % 3 == 0) {
    multiplos = multiplos + indice + " ";
  }
}
console.log(multiplos);
