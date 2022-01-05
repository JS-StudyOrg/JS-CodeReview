/*
04_DPocean
금고를 털어라!!
입력 target을 훔칠 수 있는 방법의 수를 return 한다. 
입력 type은 100이하의 자연수를 담음 배열이며 금고 안에 있는 돈의 타입이다. 
출력 : Number type의 target을 훔칠 수 있는 방법의 수를 숫자로 반환한다.
*/

//? 아해와 같이 식을 세웠지만 어디서 문제가 되는건지 몇 개의 테스트 케이스가 통과가 안됩니다.

/*
! 일반화 : onlyType + dp[i-1][j-1] + dp[i-1][j] 
! -> 현재 type만으로 target을 채울 수 있는 경우의 수 + type을 사용하지 않고 target에서 i-1 type만을 사용하여 채운 경우 + target을 type을 사용하지 않았을 때의 경우의 수들

*/
function ocean(target, type) {
  // dp를 선언한다
  // type으로 반복문을 돌린다 for i=0 to type.len
  // target으로 반복문을 돌린다 j=0 to target.len
  // 만약 i=0, j=0 이라면 dp[i][j]에 0을 넣는다.
  // 만약 target%type가 나누어 떨어지면 onlyJ에 1을 대입하고 아니면 0
  // 만약 type[i]가 target보다 작거나 같다면
  // dp[i][j]= onlyJ + dp[i-1][j-1] + dp[i-1][j]
  // 크다면 0을 대입.

  let dp = [];
  type.unshift(0);

  for (let i = 0; i < type.length; i++) {
    dp.push([]);
    for (let j = 0; j < target + 1; j++) {
      // 0인경우는 다 0
      if (j === 0 || i === 0) dp[i][j] = 0;
      // 첫 줄을 채워보자
      else if (i === 1) dp[i][j] = j % type[i] === 0 ? 1 : 0;
      else if (type[i] <= j) {
        dp[i][j] =
          j - type[i] >= type[i]
            ? dp[i][j - type[i]] + dp[i - 1][j]
            : dp[i - 1][j - type[i]] + dp[i - 1][j];
        // dp[i][j] = dp[i][j - type[i]] + dp[i - 1][j] + onlyJ;
        if (j - type[i] === 0) dp[i][j] += 1;
      } else dp[i][j] = 0;
    }
  }
  // let result = dp.reduce((acc, cur) => (acc += cur[cur.length - 1]), 0);
  // let result = dp.map((el) => el[el.length - 1]);
  // return result;
  let len = dp.length - 1;
  return dp[len][dp[len].length - 1];
}

let output = ocean(50, [10, 20, 50]);
console.log(output); // 4

let output1 = ocean(100, [10, 20, 50]);
console.log(output1); // 10

let output2 = ocean(30, [5, 6, 7]);
console.log(output2); // 4

let output3 = ocean(10000, [24, 36, 83, 47, 92, 67, 87, 100, 97, 76, 35]);
console.log(output3);
// 84968945685777

let output4 = ocean(500, [7, 18, 22, 28, 48, 72]);
// let output4 = ocean(500, [48, 72, 28, 22, 18, 7]);
console.log(output4);
//-> 2381
