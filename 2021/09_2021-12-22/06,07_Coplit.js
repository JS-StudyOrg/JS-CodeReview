// * 이번 코플릿 문제에 풀이에 있어, 순열 및 조합 함수를 전부 인용한 후 
// * 상황에 맞게 호출하여 사용하였습니다.
// * 이런 방법 말고 좀 더 효율적으로 작성하신 것이 있으시면 첨언 부탁드립니다.

function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.

  //1. stuffArr에서 0을 3개 이상 포함하고 있는 요소를 걸러내고
  const splited = stuffArr.map((el) => {
    const stringed = String(el)
    return stringed.split('')
  })

  const filtered = splited.filter((el) => {
    let count = 0;
    for(let i = 0; i < el.length; i++) {
      if(el[i] === '0') count++
    }
    if(count >= 3) {
      return false
    }
    return true;
  }).map((el) => {
    const tmp = el.join('')
    return Number(tmp)
  })

  //2. 걸러낸 배열로 순열을 구한다. (choiceNum)
  let isUsed = new Set()
  let tmp = [];
  let ans = [];
  const permutation = (arr, r, tmp, isUsed) => {    
    //순열 하나가 완성된 경우, 재귀를 탈출한다.
    if(r > arr.length) {
      return [];
    }
    
    if(tmp.length === r) {
      ans.push([...tmp]);
      return ans;
    }
    // 사용되지 않은 요소 중 하나를 사용한다.
    for(let i = 0; i < arr.length; i++) {
      if(isUsed.has(i)) continue;
      isUsed.add(i);
      tmp.push(arr[i]);
      permutation(arr, r, tmp, isUsed);
      tmp.pop();
      isUsed.delete(i);
    }
    return ans;
  }
  return permutation(filtered, choiceNum, tmp, isUsed)
}

function boringBlackjack(cards) {
  // TODO: 여기에 코드를 작성합니다.
  function permutation(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, arr) => {
      const fixed = v;
      const restArr = arr;
      const permutationArr = permutation(restArr, selectNum - 1);
      const combineFix = permutationArr.map((v) => [fixed, ...v]);
      result.push(...combineFix);
    });
    return result;
  }  

  const result = combination(cards, 3);

  const tmp = result.map((el) => el.reduce((acc, cur) => acc + cur));
  const rul = tmp.filter(el => isPrime(el)) 
  
  function isPrime(num) {
  // TODO: 여기에 코드를 작성합니다.
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
return rul.length
}