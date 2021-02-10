/*
Найти сумму цифр числа, которые кратны двум
*/

let sum = 0;

for(let i = 0; i < 80; i++){
	if (i % 2 === 0){
		sum += i;
	}
}
console.log(sum);