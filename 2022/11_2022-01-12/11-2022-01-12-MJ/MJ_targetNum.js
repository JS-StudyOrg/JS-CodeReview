function mySolution (numbers, target) {

  const result = [];
  let lists = {}, isVisited = {};

  // number의 각 요소는 양수, 음수로 나뉘어질 수 있으므로 
  // 각 요소마다의 양수, 음수를 저장하는 리스트 및 방문 여부를 체크하는  만든다.
  const numbersMap = numbers.map((el, idx) => { 
      lists[idx] = [el, (-1) * el];
      isVisited[idx] = [false, false];
  });

  const dfs = (numbers, depth, curVal, tmp) => {      
    tmp.push(curVal);
    // numbers의 길이만큼 들어가면 탐색한 값들을 리턴한다.
    if (depth === numbers.length) {
      result.push(tmp);
      return tmp;
    }

    // 해당 정점에 방문하지 않은 부분이 있다면 방문한다.
    // ! 아래 부분을 어떻게 구현해야할지 아직 풀지 못했음!
    for (let i = 0; i < 2; i++) {      
      if (!isVisited[depth][i]) {
        isVisited[depth][i] = true;
        dfs(numbers, depth, lists[depth][i], tmp)
      }
    }
  }

  for (let i = 1; i < numbers.length; i++) {
    isVisited[i][0] = true; 
    dfs(numbers, i, numbers[i], [numbers[0]]);
  }

  return result;
}