// 접근법 1. 순열을 사용하는 방법

// 순열을 통해 N개를 나열하는 경우의 수를 전부 생성하고 배열에 넣고,
// 해당 배열에 K 배열이 있는지를 확인하는 방법.
// 접근법1은, Array.indexOf 메소드가 '배열 안의 배열' 요소는 검색할 수 없어 실패.
function orderOfPresentation (N, K) {
  // TODO: 여기에 코드를 작성합니다.
  const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
    // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); 
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]); 
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}
const compNumber = (num) => {
  const result = [];
  for(i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}

const listNumber = getPermutations(compNumber(N), N)
return listNumber.indexOf(K)
}

// 접근법 2. 부분 순열을 사용하는 방법
// 5, [2, 4, 5, 1, 3] 인 경우
// 2, 4, 5, 1, 3 순으로 아래 가짓수를 더해서 생각해보았다.
// 1 2 3 4 5
// ... // 1을 고정하고 나머지로 조합하는 경우의 가짓수는 총 24개
// 2 1 3 4 5
// 2 1 3 5 4 // 24 + 2 = 26번째
// 2 1 4 3 5
// 2 1 4 5 3
// ...      
// 2 4 1 3 5 // 2, 4를 고정하고, 나머지 3개의 숫자로 조합 : 3 * 2 = 6개
// 2 4 1 5 3
// 2 4 3 1 5
// 2 4 3 5 1
// 2 4 5 1 3 // 41번째 => 24(1을 고정) + 17 ( 6(2, 1을 고정) + 6(2, 3을 고정) + 5(2, 4를 고정해서 나열한 것 중에서 -> 2, 4, 5를 고정해서 나열한 것중에서 몇번째인지?)
// 2 4 5 3 1
// 찾으려는 배열이 [2, 4, 5, 1, 3] 이라면..
// 그러나 위 방법도 결국 indexOf 메소드를 활용해야 하기 때문에, 위와 같은 문제가 발생할 것으로 판단되어
// 접근법2도 좋지 않은 방법이라 판단.