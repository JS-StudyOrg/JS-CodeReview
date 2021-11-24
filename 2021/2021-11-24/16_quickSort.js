
//* 검색하며 작성한 퀵 정렬 알고리즘입니다.
//* 테스트케이스 (요소 100,000의 자연수 배열)를 일부 통과 못하는 문제가 있습니다.
const swap = (arr, pl, pr) => {
  let temp = arr[pl];
  arr[pl] = arr[pr];
  arr[pr] = temp;
}

const quickSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  let left = 0;
  let right = arr.length-1;

  const sort = (arr, left, right) => {
    
    let pl = left;
    let pr = right;
    let pivot = Math.floor((pl + pr)/2);

    do {
      while(arr[pl] < arr[pivot]) pl++;
      while(arr[pr] > arr[pivot]) pr--;
      if(pl <= pr) swap(arr, pl++, pr--);
    } while(pl <= pr);

    if(left < pr) sort(arr, left, pr);
    if(pl < right) sort(arr, pl, right);  
  }
  sort(arr, left, right)
  return arr;
};



//* 레퍼런스는 매우 짧으면서 모든 경우의 수를 통과하는 알고리즘입니다.
//* 추가적으로 이전 rotatedArray에서도 나왔던 방법인데,
//* 콜백 관련 문제를 transform = (item => item) 으로 해결하는 부분이 이해가 안갑니다.
const quickSortR = function (arr, transform = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  let pivot = arr[0];
  let lArr = [];
  let rArr = [];

  if(arr.length <= 1) return arr;

  for(let i = 1; i < arr.length; i++) {
    if(transform(arr[i]) < transform(pivot)) lArr.push(arr[i])
    else rArr.push(arr[i]);
  }

  const leftSorted = quickSort(lArr);
  const rightSorted = quickSort(rArr);

  return [...leftSorted, pivot, ...rightSorted]; 
};
