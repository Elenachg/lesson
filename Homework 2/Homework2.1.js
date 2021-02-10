/*
Переменная содержит в себе строку. Вывести строку в обратном порядке.
*/

let str = "qwerty";
let conversely = "";

for (let i = str.length - 1; i >= 0; i--){
	conversely += str[i];
}
console.log( conversely );