/*
Переменная хранит процент кредита, вторая переменная хранит объем тела кредита,
третья переменная хранит длительность кредитного договора в годах.
Написать скрипт который вычислит:
- Сколько процентов заплатит клиент за все время.
- Сколько процентов заплатит клиент за один календарный год.
- Какое общее количество денежных средств клиент банка выплатит за все года.

*/

let procent = 10;
let telo = 75000;
let srok = 2;

let procent1year = (telo * procent / 100);
console.log("Сколько процентов заплатит клиент за один календарный год: " + procent1year);

let procentalltime = (telo * procent / 100 * srok);
console.log("Сколько процентов заплатит клиент за все время: " + procentalltime);

let allsum = (telo * procent / 100 * srok + telo);
console.log("Какое общее количество денежных средств клиент банка выплатит за все года: " + allsum);





