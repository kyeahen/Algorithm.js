//2. 대소문자 변환

//입력 
let str = "StuDY"

//solution
let result = "";
for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);

    if ('A' <= c && c <= 'Z') {
        result += c.toLowerCase();
    }

    if ('a' <= c && c <= 'z') {
        result += c.toUpperCase();
    }
}

//출력
console.log(result);