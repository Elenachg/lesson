/*
Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.
8! = 1*2*3*4*5*6*7*8 = 40320
(condition) ? value1 : value2;
*/

let n = 8;
function factorial(n) {
	return !(n === 1) ? n * factorial(n - 1) : 1;
  }

console.log (factorial(n));