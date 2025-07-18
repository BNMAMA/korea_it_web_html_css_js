//단축 평가 논리 연산
// && ||
const name = "김소현";

console.log(!!name && !! "이소현");
// && (AND)연산
// 앞의 값이  true일 때 뒤의 값을 리턴, 앞의 값이 false일 때는 그냥 false
console.log(false && 10)
console.log(true && 10)
console.log(!!name && false)

// || (OR)연산
// 앞의 값이 false일 때 뒤의 값을 리턴, true 일 때 true 리턴
console.log(false || 10)
console.log(true || 10)

//nullish 병합 연산자 => ??
//앞의 값이 null 또는 undefined  아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100)
console.log(undefined ?? 100)
console.log(20 ?? 100)
console.log(0 ?? 100)
console.log("" ?? 100)
