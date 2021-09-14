// 03_isSubsetOf
// 문제 : 두 개의 배열(base, sample)을 입렫받아 sample이 base의 부분집합인지 여부를 리턴한다.
// input1 : base : num 타입을 요소로 갖는 임의의 배열 length 100이하
// input2 : number 타입읠 요소로 갖는 임의의 배열 length는 100이하
// output : boolean 타입을 리터한다.
// 주의사항 : base, sample 내에 중볻되는 요소는 없다고 가정한다.

// 아래의 함수는 클로저로 접근을 한 것이 아닌가?
const isSubsetOf1=function(base,sample){
    // sample의 각 요소가 base의 요소인지 확인하면 되는 문제 
    // sample이 base 보다 길다면 return false
    // 만약 요소중 한개라도 base에 없다면 false
    // 이 방법은 O(n) 
    if(sample.length>base.length)
    return false; 
    

    for(let el of sample){
        if(!base.includes(el))
        return false
    }

    return true;
}



const isSubsetOf2 = function (base, sample) {

    // 정규식을 사용하여 base를 문자열로 바꾼다
    // sample 만큼 for문을 돌린다
    // let re를 선언하여 el을 정규식으로 변환한다.
    // search를 사용하여 대응되는 패턴이 없다면 false를 반환

    if (sample.length > base.length)
        return false;

    let baseTostr = String(base)
    for (let el of sample) {

        let re = new RegExp(`${el}`);
        if (baseTostr.search(re) === -1)
        if (!re.test(baseTostr))
            return false
    }
    return true    
  
}
const isSubsetOf3 = function (base, sample) {

    // 정규식을 사용하여 base를 문자열로 바꾼다
    // sample 만큼 for문을 돌린다
    // let re를 선언하여 el을 정규식으로 변환한다.
    // search를 사용하여 대응되는 패턴이 없다면 false를 반환

    if (sample.length > base.length)
        return false;

    if (!sample.length)
        return true
    if (!base.includes(sample[0]))
        return false
    
    return isSubsetOf3(base,sample.slice(1))
  
}
const isSubsetOf4 = function (base, sample) {
    
    // base를 크기 순으로 정렬한다.
    base.sort((a,b)=>a-b);    
 
    // sample 크기 만큼 반복문을 돌린다
      // 만약 findElement(el,base)가 false 라면
        // false를 
    // true

    for(let el of sample){
        if(!findElement(el,base))
        return false
    }
    return true  
  
}

const findElement=(el,arr)=>{

 
    let arrLen = parseInt(arr.length / 2);
    let cur = arr[arrLen];

    if (el === cur)
        return true

    if (arrLen === 0)
        return false

    if(el<cur){
    
        return findElement(el,arr.slice(0,arrLen));
    }

    if(el>cur)
    return findElement(el,arr.slice(arrLen+1,))
    
}

const isSubsetOf = function (base, sample) {
    
   // base를 정렬한다
   // sample을 정렬한다
   // sample[0]의 base.indexOf 
   // sample[sample.length-1] 의 baseIndexOf
   // 만약 둘 중 하나가 -1이면 return false

   // 범위 만큼 base 슬라이스를 새로운 변수에 넣는다
   // sample 만큼 반복문
    // newBase.include()

    base.sort((a,b)=>a-b)
    sample.sort((a,b)=>a-b)

    let sampleMin=sample[0];
    let sampleMax=sample[sample.length-1];
    let minRange=base.indexOf(sampleMin);
    let maxRange=base.indexOf(sampleMax);

    if((minRange || maxRange) ===-1) return false;

    let slicedBase=base.slice(minRange,maxRange+1)

    for(let el of sample){
        if(!slicedBase.includes(el))
        return false
    }
    return true  
}




let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
// let output = isSubsetOf(base, sample);
// console.log(output); // --> true

// sample = [6, 7];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

// base = [10, 99, 123, 7];
// sample = [11, 100, 99, 123];
// output = isSubsetOf(base, sample);
// console.log(output); // --> false

base=[1, 2, 3, 4, 5];
sample=[3,5]
output = isSubsetOf(base, sample);
console.log(output); // --> true
