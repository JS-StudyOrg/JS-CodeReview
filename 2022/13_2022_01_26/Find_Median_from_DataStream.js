// https://programmers.co.kr/learn/courses/30/lessons/42586

/* 

문제 설명
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.

제한 사항
작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.
작업 진도는 100 미만의 자연수입니다.
작업 속도는 100 이하의 자연수입니다.
배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

----------------------------------------------------------------------------------------------------
입출력 예
progresses	             | speeds             |	return
[93, 30, 55]	           | [1, 30, 5]	        | [2, 1]
[95, 90, 99, 99, 80, 99] | [1, 1, 1, 1, 1, 1] |	[1, 3, 2]

----------------------------------------------------------------------------------------------------
입출력 예 설명

입출력 예 #1
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.
----------------------------------------------------------------------------------------------------
입출력 예 #2
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.

 */

function solution(progresses, speeds) {
  // 풀이 1
  // 1. 먼저 각각 남은 일수를 구한다.
  // 2. 뒤의 일수가 해당 일수보다 같거나 작으면 완료 갯수에 추가된다.

  var answer = [];
  const days = [];

  for (let i = 0; i < progresses.length; i++) {
    let day = (100 - progresses[i]) / speeds[i];
    days.push(Math.ceil(day));
  }
  // map으로 좀더 압축 가능할 듯..

  let pointer = days[0];
  let x = 0;

  // NaN이 나오는 문제.. >> 일단 answer을 0으로 채워야할듯?

  answer[0] = 0;
  for (let el of days) {
    if (el <= pointer) {
      answer[x]++;
    } else {
      pointer = el;
      answer[++x] = 1;
    }
  }

  return answer;
}

//------------------------------------------------------------------------------//
// 조금 더 queue적인 느낌이 나려면..?
function sol2(progresses, speeds) {
  const answer = [];
  const queue = progresses.map((el, idx) =>
    Math.ceil((100 - el) / speeds[idx])
  );

  let time = Math.min(...queue);
  let counter = 0;

  while (queue.length > 0) {
    if (queue[0] <= time) {
      queue.shift();
      counter++;
    } else {
      // 막혔을 때, 크게 2가지. > 그냥 앞에서 count가 없이 반복됐을 때 / 아니면, 변곡적인 부분으로 앞에서 count되고 막힐때.

      if (counter > 0) {
        answer.push(counter);
        counter = 0;
      }
      time++;
    }
  }
  answer.push(counter);

  return answer;
}
//------------------------------------------------------------------------------//
// 소라님의 코드를 참고한 풀이
function sol3(progresses, speeds) {
  const answer = [];
  let time = 0;
  let count = 0;

  while (progresses.length) {
    if (progresses[0] + speeds[0] * time >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
    } else {
      if (count > 0) {
        answer.push(count);
        count = 0;
      }
      time++;
    }
  }
  answer.push(count);
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(sol3([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
console.log(sol3([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
