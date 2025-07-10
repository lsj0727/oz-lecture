// 사용자 입력
let inputStr = prompt("점수를 입력하세요.");
let input = Number(inputStr);
console.log("input", input);

// 상수 선언
const MAX_SCORE = 105;
const BONUS_SCORE = 5;
let score;
var grade;

// 최종점수 계산 (보너스 포함, 최대값 제한)
let finalScore = input + BONUS_SCORE;
if (finalScore > MAX_SCORE) {
    finalScore = MAX_SCORE;
}

// 등급 결정 (if문)
if (finalScore >= 100) {
    grade = "S";
} else if (finalScore >= 90) {
    grade = "A";
} else if (finalScore >= 80) {
    grade = "B";
} else if (finalScore >= 70) {
    grade = "C";
} else if (finalScore >= 60) {
    grade = "D";
} else {
    grade = "F";
}

//합격/불합격 여부 (삼항연산자)
const status = finalScore >= 60 ? "Pass" : "Fail";

// 등급 메시지 출력용 변수
let message = "";

// switch 문으로 메시지 결정
switch (grade) {
    case "S":
        message = "Super!!";
        break;
    case "A":
        message = "Excellent work!";
        break;
    case "B":
        message = "Good job!";
        break;
    case "C":
        message = "Satisfactory performance.";
        break;
    case "D":
        message = "Needs improvement.";
        break;
    case "F":
        message = "Please try harder!";
        break;
    default:
        message = "Unknown grade";
        break;
}
// 최종 결과 출력
console.log(`Final Score: ${finalScore}`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
console.log(`Message: ${message}`);

// const consoleTemplate = `#########
// Final Score: ${finalScore}
// Grade: ${grade}
// Status: ${passStatus}
// Message: ${Message}
// #########
// `;



// 콘솔 출력
// console.log("Final Score: " + score);
// console.log("Grade: " + grade);
// console.log("Status: " + status);
// console.log("Message: " + message);

// // const 선언: 최대 점수
// const maxScore = 100;

// // let 선언: 사용자 입력 점수
// let input = prompt("점수를 입력하세요.");
// let score = Number(input); // 문자열을 숫자로 변환

// // 이항 산술 + 복합 대입 연산: 보너스 점수 추가
// score += 5;

// // 연산자 우선순위 고려: 최종 점수가 105점 초과되지 않도록 조정
// score = (score > 105) ? 105 : score;

// // var 선언: 등급 변수
// var grade;

// // // 조건문: 등급 부여 (if, else if, else 사용)
// // if (score >= 100) {
// //     grade = "S";
// // } else if (score >= 90) {
// //     grade = "A";
// // } else if (score >= 80) {
// //     grade = "B";
// // } else if (score >= 70) {
// //     grade = "C";
// // } else if (score >= 60) {
// //     grade = "D";
// // } else {
// //     grade = "F";
// // }

// // 삼항 연산자: Pass/Fail 판단
// // let status = (score >= 60) ? "Pass" : "Fail";

// // switch 문: 등급별 메시지 출력
// // let message = "";

// // switch (grade) {
// //     case "S":
// //         message = "Super!!";
// //         break;
// //     case "A":
// //         message = "Excellent work!";
// //         break;
// //     case "B":
// //         message = "Good job!";
// //         break;
// //     case "C":
// //         message = "Satisfactory performance.";
// //         break;
// //     case "D":
// //         message = "Needs improvement.";
// //         break;
// //     case "F":
// //         message = "Please try harder!";
// //         break;
// //     default:
// //         message = "Invalid grade.";
// // }

// // 콘솔 출력
// console.log("Final Score: " + score);
// console.log("Grade: " + grade);
// console.log("Status: " + status);
// console.log("Message: " + message);