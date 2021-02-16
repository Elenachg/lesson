/*
Найти сумму цифр числа, которые кратны двум
*/

let num = 1234567;
let sum = 0;

for(let i of num.toString()){
	if (+i % 2 === 0){
		sum += +i;
	}
}
console.log(sum);