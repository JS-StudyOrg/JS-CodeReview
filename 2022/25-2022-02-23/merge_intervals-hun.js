//1. 앞배열의 뒷 숫자와 뒷배열의 앞 숫자간 비교

// ~>

function mySol() {
  const args = Array.from(arguments)[0];
  //! leet code 테스트 결과, sorting도 필요한듯 하다..
  args.sort((a, b) => a[0] - b[0]);
  //console.log(args[0]);
  //args = [[1,2],[2,4],[5,8]]
  //output = [[a,b]]

  const result = [];
  let pre = args[0];

  // ! 큰거를 선택하기위해 Math.max()활용해보기!!

  for (let i = 1; i < args.length; i++) {
    if (pre[1] >= args[i][0]) {
      pre = [pre[0], Math.max(pre[1], args[i][1])];
    } else {
      result.push(pre);
      pre = args[i];
    }
  }
  result.push(pre);
  return result;
}

console.log(
  mySol([
    [1, 2],
    [2, 4],
    [5, 8],
  ])
);
