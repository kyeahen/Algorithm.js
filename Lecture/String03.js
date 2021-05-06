//3. 문장 속 단어

//입력
let str = "it is time to study";

//solution
let arr = str.split(" ");

let ans = "";
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].length) {
        max = arr[i].length;
        ans = arr[i];
    }
}

//출력
console.log(ans);