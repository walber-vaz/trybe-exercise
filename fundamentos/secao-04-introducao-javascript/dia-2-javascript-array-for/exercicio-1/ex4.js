let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = numbers[0];

for(let index = 1;index < numbers.length; index += 1) {
  soma += numbers[index];
  console.log(numbers[index]);
}

let media = soma / numbers.length;

console.log(`A soma de todos valores e: ${soma}`);
console.log(`A media dos valores é: ${media}`);

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20')
}