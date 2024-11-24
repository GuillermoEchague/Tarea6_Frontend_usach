// Secuencia de Fibonacci entre 0 y 1000
let fibonacci = [0, 1];
while (true) {
  let next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  if (next > 1000) break;
  fibonacci.push(next);
}
console.log("Secuencia de Fibonacci entre 0 y 1000:", fibonacci);

// Números pares entre 0 y 1000
let evenNumbers = [];
for (let i = 0; i <= 1000; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}
console.log("Números pares entre 0 y 1000:", evenNumbers);

// Números impares entre 0 y 1000
let oddNumbers = [];
for (let i = 0; i <= 1000; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}
console.log("Números impares entre 0 y 1000:", oddNumbers);
