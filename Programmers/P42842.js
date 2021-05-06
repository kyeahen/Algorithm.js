// [프로그래머스] 카펫 - level2
// - 완전탐색

const brown = 10;
const yellow = 2;

let ans = solution(brown, yellow);
console.log(ans[0] + " " + ans[1]);

function solution(brown, yellow) {
    let result = [0, 0];

    let area = brown + yellow;
    let w = 0, h = 0;
    while(true) {
        w++;

        //카펫의 가로는 세로와 같거나, 길기 때문에 (width >= height)
        //width까지만 height 값을 탐색한다.
        let flag = false;
        for (h = 1; h <= w; h++) {
            
            // 1. 가로(w) x 세로(h) = 넓이 (area)
            // 2. 노란 타일은 갈색 타일에 둘러쌓여있기 때문에 카펫 가로, 세로 길이보다 2씩 작음.
            // 해당 가로, 세로 길이가 노란 타일의 넓이를 충족하는지 확인한다.
            if (w * h == area && yellow == (w - 2) * (h - 2)) {
                flag = true;
                break;
            }
        }

        if (flag) {
            result[0] = w;
            result[1] = h;
            return result;
        }

    }
}