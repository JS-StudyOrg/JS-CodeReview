// 1. 중복
// 2. 순서

// sol 1) 이미 갖추어져잇는 abcd~ 의 문자열을 돌면서, str의 앞부분과 비교하여
//  같으면 뺀다.

const mySol1 = (str) => {
  const example = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let word of example) {
    if (str.includes(word)) {
      result += word;
    }
  }

  return result;
};

console.log(mySol1("bddbccaad"));

//근데 뭔가 스택적인 것을 활용하는 느낌은 아닌 듯한..
// 2번 예시 통과 안됨.
// -------------------------------------------------------
// 1) 만약에 뒤에 또 중복해서 등장하고
// 2) 또한 word로 받는 글자보다 크다면 (가령 cb 인 상황)
// >> pop한다.

const mySol2 = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.includes(s[i])) {
      continue;
    }
    while (
      s.slice(i + 1).includes(stack[stack.length - 1]) &&
      stack.length > 0 &&
      stack[stack.length - 1] > s[i]
    ) {
      stack.pop();
    }
    stack.push(s[i]);
  }
  return stack.join("");
};

console.log(mySol2("cbacdcbc"));
console.log(mySol2("abacb"));
