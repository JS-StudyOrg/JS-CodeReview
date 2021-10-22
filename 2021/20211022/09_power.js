// 09_power
// 문제 : 두 수를 입력받아 거듭제곱을 리턴해야한다.
// 입렵 : base number 타입의 자연수 (>=2)
// exponent : number type의 정수 (>=0)
// 출력 : number type
// 주의 : O(lonN)을 만족해야 한다.
// 실제 계산 결과를 94,906,249로 나눈 나머지를 리턴해야한다.
// 계산 결과가 컴퓨터로 나타낼 수 있는 수의 범위를 넘을 수 있기 때문.
// 연산 할 때마다 나머지를 구하고 그 결과에 연산을 이어가야한다.
// --------------------

// ! 방법 1 재귀적으로 풀기
// base^n = base^1/2n x base^1/2n 을 반복한다.
// exponent가 홀수인지 짝수인지에 따라 구동되는 코드가 다르다.

function power(base, exponent) {
  // 종결조건 : exponent ===2 이면 base*base를 반환한다.
  if (exponent === 2) return base * base;
  if (exponent === 1) return base;
  if (exponent === 0) return 1;

  // 결과를 넣을 변수 , exp/2를 넣을 변수를 선언한다
  let result = 1;

  //만약 exponent 가 짝수라면
  if (!(exponent % 2)) {
    let half = power(base, exponent / 2); // exponent/2를 넣은 재귀함수를 할당
    return (result = half * half); // result는 half * half 이다.
  } else {
    let half = power(base, (exponent - 1) / 2); // exponent/2를 넣은 재귀함수를 할당
    return (result = half * half * base); // 홀수인 경우
  }
}

let output2 = power(2, 10);
console.log(output2);

let result1 = power(5, 22);
console.log(result1);
