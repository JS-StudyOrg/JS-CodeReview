const powerSet = function (str) {

  let splited_str = str.split('');
  let remove_duplicate = (splited_str) => {
    let result = [];
    for(let i of splited_str) {
      if(!result.includes(i)) {
        result.push(i);
      }
    }
    return result;
  }

  let arr = remove_duplicate(splited_str)

  const getSubsets = function (arr) {
    let flag = new Array(arr.length).fill(false);
    const subSets = [];

    // *멱집합에 대한 코드를 공부하여 짜집기 하였습니다.
    // !멱집합 : 주어진 집합의 모든 부분집합의 집합
    // *재귀 탈출 조건은 트리의 마지막 depth까지 다다랐을 경우입니다.
    // *탐색하는 방법은 이진트리의 탐색법과 유사하며, 왼쪽으로 갈 때는 true, 오른쪽으로 갈때는  false입니다.
    const subSet = function DFS (depth) { 
      if (depth === arr.length) { // 재귀 종료 조건
        const subSet = arr.filter((value, index) => flag[index]);
        subSets.push(subSet); // 부분집합들을 담는 배열에 push
        return;
      }

      flag[depth] = true; // 해당 depth의 왼쪽 트리
      subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출

      flag[depth] = false; // 해당 depth 오른쪽 트리
      subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    }
    
    subSet(0); // 처음에 depth 0 부터 시작
    return subSets;
  }

  const result = getSubsets(arr).map(el => {
    let sorted = el.sort();
    let joined = sorted.join('');
    return joined
  })

  return result.sort()
}