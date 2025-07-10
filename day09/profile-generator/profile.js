// 변수 선언 및 다양한 데이터 타입 할당
var age = 39;                    // number
let name = "이승진";             // string
const isStudent = true;         // boolean
let job = null;                 // null
var hobby;                      // undefined
const uniqueId = Symbol("id");  // Symbol
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

// 이스케이프 문자 사용 및 문자열 연결
let profileMessage = "이름:\t" + name + "\n나이:\t" + age + "\n학생 여부:\t" + isStudent;
console.log(profileMessage);

// 배열 리터럴과 문자열 결합 출력
let hobbies = ["Design", "Gym", "Cafe Tour"];
console.log("My hobbies: " + hobbies.join(", "));

// 객체 리터럴 선언
let profile = {
  name: "이승진",
  age: 39,
  isStudent: true
};

// 객체 속성을 사용하여 프로필 문장 생성
console.log("My name is " + profile.name + " and I am " + profile.age + " years old.");

// typeof 사용
console.log("Type of hobbies: " + typeof hobbies); // object
console.log("Type of profile: " + typeof profile); // object