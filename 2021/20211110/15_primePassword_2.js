//! 3'rd BFS 자료구조를 사용

const primePassword = (curPwd, newPwd) => {
  let queue = [curPwd]; // 인접한 노드를 넣는 queue  초기 노드는 현재 비번
  let count = 0; // 비밀번호 변경 횟수를 기록
  let base = 0; // 기준이 될 노드를 넣는 변수
  let queueTemp = []; // 임시 queue/
  let visited = {}; // 방문했음을 표시하는 Obj

  if (curPwd === newPwd) return 0;

  let newArr = newPwd.toString().split("");
  // queue에 노드가 없을 때 까지 반복한다.
  while (queue.length) {
    base = queue.shift(); // base에 탐색을 진행 할 queue에 있는 노드를 넣는다.

    for (let i = 0; i < 4; i++) {
      // newARr[i]를 base의 i 번 쨰 인덱스에 넣은 숫자를 반환
      let modifiedPwd = getModifiedNum(base, newArr[i], i);
      if (!(modifiedPwd in visited)) {
        visited[modifiedPwd] = true; // visited에 방문했음을 표시
        isPrime(modifiedPwd)
          ? queueTemp.push(modifiedPwd) // 소수이면 queueTemp에 push
          : queueTemp.push(...getPrime(base, i, visited)); // 아니면 소수를 구하고 push
      }
    }
    // 해당 idx에 해당하는 인접 숫자들을 구하고 queueTemp에 push한다.

    // count를 일려주기 위해 다음의 작업을 시행
    if (!queue.length) {
      // 동일 level의 노들이 다 돌 떄까지 queue를 업데이트 하지 않는다.
      // 만약 queueTemp에 newPwd가 있다면 return count
      if (queueTemp.indexOf(newPwd) > -1) return count + 1;
      // 이 떄 다음 level로 이동하므로 count++
      count++;
      queue.push(...queueTemp);
      queueTemp.length = 0; // queeuTemp 초기화
    }
  }

  return console.log("FAILED");
};

const getModifiedNum = (num, value, idx) => {
  numTostring = num.toString();
  if (idx === 0) return Number(value + numTostring.slice(1));
  else if (idx === 3) return Number(numTostring.slice(0, 3) + value);
  else
    return Number(
      numTostring.slice(0, idx) + value + numTostring.slice(idx + 1)
    );
};

const getPrime = (base, targetIdx, visited) => {
  // 기준이 되는 숫자의 targetIdx부분만 0~9까지 넣으면서 소수인지 확인하고
  // 배열에 넣은 후 배열을 리턴한다.

  // base를 배열로 변환
  let toArray = base.toString().split("");
  let result = [];
  let number;

  if (targetIdx === 0)
    // targetIdx가 첫 번째 인자인 경우  0을 제외한 값으로 반복문을 돌린다.
    for (let i = 1; i < 10; i++) {
      toArray[targetIdx] = i; // targetIdx에 i를 넣할당
      number = parseInt(toArray.join(""));
      if (!(number in visited)) {
        // visited에 없다면
        visited[number] = true; // 방문했음 표시하고
        isPrime(number) ? result.push(number) : null; // i를 넣은 숫자가 소수이면 result 배열에 push 한다.
      }
    }
  else if (targetIdx === 3)
    for (let i = 1; i < 10; i += 2) {
      toArray[targetIdx] = i; // targetIdx에 i를 넣할당
      number = parseInt(toArray.join(""));
      if (!(number in visited)) {
        visited[number] = true;
        isPrime(number) ? result.push(number) : null; // i를 넣은 숫자가 소수이면 result 배열에 push 한다.
      }
    }
  else
    for (let i = 0; i < 10; i++) {
      toArray[targetIdx] = i; // targetIdx에 i를 넣할당
      number = parseInt(toArray.join(""));
      if (!(number in visited)) {
        visited[number] = true;
        isPrime(number) ? result.push(number) : null; // i를 넣은 숫자가 소수이면 result 배열에 push 한다.
      }
    }
  return result;
};

// 소수인지 팔별하는 함수
const isPrime = (number) => {
  // number의 제곱근을 구한다
  // 3부터 제곱근 보다 작거나 같은 정수까지 홀수만 number와 "%"연산을 해서 0이 나오면 false
  // 나워지지 않으면 true 를 return 한다.
  // number가 2 또는 3이면 true
  // else ifnumber가 짝수이면 false
  if (number === 2 || number === 3) return true;
  if (!(number % 2)) return false;
  const sqrt = Math.sqrt(number);
  for (let i = 3; i <= sqrt; i += 2) if (!(number % i)) return false;
  return true;
};
let output = primePassword(3733, 8779);
console.log(output); // --> 3 (3733 -> 3739 -> 3779 -> 8779)

output = primePassword(1009, 1171);
console.log(output); // --> 5

output = primePassword(9787, 9923);
console.log(output); // --> 6
