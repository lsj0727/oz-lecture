// const: 최대 별 개수 설정
const maxStars = 10;

// var: 별 문자열 저장용
var stars = "";

// 함수 선언문: 별 출력 함수
function printStars(count = 1) {
    // 매개변수 기본값: count가 0 이하이면 기본값 1 사용
    if (count <= 0) count = 1;
    
    // 별 문자열 생성
    for (let i = 0; i < count; i++) {
        stars += "*";
    }

    console.log(stars); // 콘솔에 출력
}

// 입력 반복: 유효할 때까지 반복 (do-while)
let input;

do {
    input = prompt("Enter the number of stars (1-10):");

    // 입력값을 숫자로 변환
    let num = Number(input);

    // 입력 유효성 검사
    if (!isNaN(num) && num >= 1 && num <= maxStars) {
        // 유효한 숫자 → 별 출력 후 종료
        printStars(num);
        break;
    } else {
        // 유효하지 않은 입력 → 경고 후 다시 입력
        console.log(`[입력: ${input}] Invalid input! Enter a number between 1 and 10.`);
        continue; // 다음 반복으로 건너뜀
    }

} while (true);