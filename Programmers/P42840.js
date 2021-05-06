// [프로그래머스] 모의고사 - level1
// - 완전탐색

const answers = [1, 2, 3, 4, 5]; //입출력 예

console.log(solution(answers))

function solution(answers) {
    //수포자 패턴
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    //점수
    let score = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        
        if (answers[i] == student1[i % 5]) {
            score[0]++;
        }

        if (answers[i] == student2[i % 8]) {
            score[1]++;
        }

        if (answers[i] == student3[i % 10]) {
            score[2]++;
        }
    }

    //가장 높은 점수 찾기
    let max = -1;
    for (let i = 0; i < score.length; i++) {
        max = Math.max(score[i], max);
    }

    //가장 높은 점수를 받은 학생(들) 찾기
    let result = [];
    for (let i = 0; i < score.length; i++) {
        if (max == score[i]) {
            result.push(i + 1);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

