function orderOfPresentation (N, K) {
  const factorial = (n) => {
    if(n <= 1) {
      return 1;
    }
    return n * factorial(n-1);
  }

  //* 사용한 숫자들을 저장해놓기 위한 배열을 선언한다.
  const visited = new Array(N + 1).fill(false);
  let count = 0;

  for(let i = 0; i < K.length; i++) {
    //* K배열의 첫번째 요소부터 순회를 시작한다.
    const currentNum = K[i];
    //* 사용한 요소는 true로 지정하여 더 이상 사용하지 못하도록 지정하고
    visited[currentNum] = true;
    //* 입력받은 숫자보다 작은 숫자들의 갯수를 계산한다.
    const candidates = visited.slice(1, currentNum);
    const check_used = candidates.filter(el => el === false).length;
    //! 사용가능한 숫자 * 남아있는 숫자 갯수에 대한 Factorial 값을 count에 더한다.
    const prevCnt = check_used * factorial(N - i - 1);
    count += prevCnt; 
  }
  return count;    
}
