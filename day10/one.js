//후치연산
let increment = 10; 
console.log("1", increment); // 10
increment++;
console.log("2", increment); // 11
console.log("3", increment++); // 11
console.log("4", increment); // 12

let decrement = 10;
console.log("dec1", decrement); // 10
decrement--;
console.log("dec2", decrement); // 9
console.log("dec3", decrement--); // 9
console.log("dec4", decrement--); // 8

//전치연산
let incFrist = 10;
console.log("incFrist 1", incFrist); // 10
++incFrist;
console.log("incFrist 2", incFrist); // 11
console.log("incFrist 3", ++incFrist); // 12
console.log("incFrist 4", incFrist); // 12

let decFirst = 10;
console.log("incFrist 1", decFirst); // 10
--decFirst;
console.log("decFirst 2", decFirst); // 9
console.log("decFirst 3", --decFirst); // 8
console.log("decFirst 4", decFirst); // 8

// cosole.log(++a) 전치연산
let a = 10;
a = a + 1;
console.log(a);

// cosole.log(b++) 후치연산
let b = 10;
console.log(b);
b = b + 1;

// 불가
// let c = c++;

// 단한 부정 연산자
let num = -10;
num = -num;
console.log("-(-10)", num);

let num2 = -10;
num2 = -num2;
console.log("-(-10)",num2);

let num3 = -10;
-num3;
console.log(num3);