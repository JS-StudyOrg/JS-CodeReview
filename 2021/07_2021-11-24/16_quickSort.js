// 퀵정렬은 정렬하는데 가장 간단한 배열은 바로 요소가 없거나
// 하나만 있는 배열이므로 모든 배열이 기본 배열이 될 때까지 큰배열을 나눠야함.
// 퀵정렬에서는 요소 하나를 기준 원소인 pivot으로 설정. 기준 원소의 왼쪽에는
// 기준 원소보다 작은 값의 배열을 놓고 오른쪽에는 기준 원소보다 큰 값을 넣어야함.
// pivot 왼쪽에 놓여진 기준 원소보다 작은 배열에서 위와 같은 방법으로 다시 pivot을
// 설정하고 배열을 pivot을 기준으로 나눠야함. 이 방법을 반복하면 기본 단계인 원소가 하나만
// 있는 배열이 남음.

// 1. 기준원소를 고름
// 2. 배열을 기준 원소보다 작은 원소의 배열과 기준 원소보다 큰 원소의 배열, 2개의 하위 배열로 분할
// 3. 하위 배열에 대해 재귀적으로 퀵 정렬을 호출.
const quickSort = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    // arr 요소가 하나이면 arr 자체를 반환
  if (arr.length < 1) {
    return arr;
  }
  // quickSort 초기 배열을 선언 첫 pivot 배열의 첫 번째 요소
  let pivot = [arr[0]]; 
  let left = []; // pivot 보다 작은 수 배열
  let right = []; // pivot 보다 큰 수 배열
  
  // for 문을 사용해서 pivot 보다 작으면 left로 크면 right로 그렇지 않으면 pivot에 넣어주기
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
   // 재귀함수 구조로 다시 선언해서 끝날때까지 시작한다.
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  // 따로 더 알아보니까 위 코드는 메모리를 많이 차지한다고 합니다.
  // 메모리를 덜 차지하는 코드
  // const quickSort = function (arr, left = 0, right = arr.length - 1, callback = (num) => num) {
  
  //   const div = (arr, left, right, pivot) => {
  //     while(left <= right){
  //       while(arr[left] < pivot){
  //         left++;
  //       }
  
  //       while(arr[right] > pivot){
  //         right--;
  //       }
  
  //       if(left <= right){
  //         let temp = arr[left];
  //         arr[left] = arr[right];
  //         arr[right] = temp;
  //         left++;
  //         right--;
  //       }
  //     }
  //     return left;
  //   }
  
  //   if(left < right){
  //     const mid = Math.floor((left+right)/2);
  //     const pivot = arr[mid];
  //     const partition = div(arr, left, right, pivot);
  
  //     quickSort(arr, left, partition-1);
  //     quickSort(arr, partition, right);
  //   }
  //   return arr
  // };

