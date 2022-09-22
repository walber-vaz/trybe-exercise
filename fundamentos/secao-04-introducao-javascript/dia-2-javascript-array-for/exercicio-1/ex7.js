let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numeros = [];
let soma = numbers[0];
let isMaior = numbers[0];
let isMenor = numbers[0];
let qtdImpar = 0;

for(let index = 1; index <= 25; index += 1) {
  numeros.push(index);
}

for(let index = 0;index < numbers.length; index += 1) {
  if (numbers[index] > isMaior) {
    isMaior = numbers[index];
    continue
  } 
  soma += numbers[index];
  console.log(numbers[index]);
}

for(let indexNumber of numbers) {
  if (indexNumber % 2 !== 0) {
    qtdImpar += 1;
  }
}

for (let indexNumber of numbers) {
  if (indexNumber < isMenor) {
    isMenor = indexNumber;
  }
}

let media = soma / numbers.length;

console.log(`A soma de todos valores e: ${soma}`);
console.log(`A media dos valores é: ${media}`);
if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20')
}
console.log(`A quantidade de números impares: ${qtdImpar}`);
console.log(`O maior número e: ${isMaior}`);
console.log(`O menor número e: ${isMenor}`);
console.log(`O valores 1 a 25: ${numeros}`);