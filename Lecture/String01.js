//1. 문자 찾기

//입력
let str = "Computercooler"
let t = 'o';

//solution
str = str.toUpperCase();
t = t.toUpperCase();

let count = 0;
for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == t) {
        count++;
    }
}

//출력 
console.log(count);