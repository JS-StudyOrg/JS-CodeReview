const primePassword = (curPwd, newPwd) => {
  let count = 0;

  // 소수 여부를 판별하는 함수
  const isPrime = (num) => {
    if(num === 1){
      return false;
    } else {   
      for(i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0){
          return false;
        } 
      }
    }
    return true;
  }

  const split_Num = (num) => {
    const nums = String(num).split('');
    return nums;
  }

  // 값이 하나만 바뀌었는지 확인하는 함수
  const is_OneChanged = (num, target) => {
    num = split_Num(num);
    target = split_Num(target);
    let count = 0;
    for(let i = 0; i < 4; i++) {
      if(num[i] !== target[i])
        count++
    }
    return (count === 1) ? true : false;
  }

  // 바뀐게 없거나, 1개만 바뀌었을 때는 바로 해당 값을 반환
  if(is_OneChanged(curPwd, newPwd)) return 1;
  else if(curPwd === newPwd) {
    return 0;
  }

  const primes = [];

  for(let i = curPwd; i <= newPwd; i++) {    
    if(isPrime(i)) primes.push(i);   
  }

  const isVisited = Array(primes.length).fill(false);

  // BFS탐색을 통해 답을 구한다.
  // is_OneChanged 함수로 소수 배열 primes의 요소를 하나씩 사용해본다.
  //! 여러 방면으로 더 고민해보았으나, 하기 접근법으로는 문제 해결이 불가능함.
  // 반복문을 돌리는 와중 최초 한자리만 바꾸는 소수가 정답으로까지 이어진다는 보장이 없기 때문임.
  // 해결하신 분이 있으면 공유 부탁드립니다. 
  const bfs = (curPwd, newPwd) => {
    class queue {
      constructor() {
        this.storage = [];
      }
      enqueue(value) {
        this.storage.push(value);
      }
      dequeue() {
        this.storage.shift();
      }      
    }

    let que = new queue();
    que.enqueue(curPwd);

    while(que.storage.length !== 0) {
      const checking = que.dequeue();
      if(checking === newPwd) {
        break;
      }      
      for(let i = 0; i < primes.length; i++) {
        if(is_OneChanged(cheking, primes[i])) {
          que.enqueue(primes[i]);
          count++;
        }
      }
    } 
  }
  return count;
};
