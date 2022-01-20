
//! 1번 통과, 2번 Fail
const removeDuplicateLetters = (s) => {
  const splitedS = s.split('');
  const noDup = new Set();
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (noDup.has(s[i])) {
      noDup.delete(s[i]);
      noDup.add(s[i]);
    }  
    noDup.add(s[i]);    
  }

  noDup.forEach((el) => result.push(el));  

  return result.join('');
}

const result1 = removeDuplicateLetters('bcabc');
const result2 = removeDuplicateLetters('cbacdcbc');



//! 1, 2, 3번 통과, 4번 Fail
const removeDuplicateLetters2 = (s) => {
  
  let strSet = new Set();
  let comp_strSet = new Set();

  const checkLexial = (strArr1, strArr2) => {
    for (let i = 0 ; i < strArr1.length; i++) {
      if (strArr1[i] === strArr2[i]) {
        continue;
      } else if (strArr1[i] < strArr2[i]) {
        // strArr1
        return true;
      } else {
        // strArr2
        return false;
      } 
    }
  }

  const setToStr = (set) => {
    const result = [];
    set.forEach((el) => result.push(el));
    return result.join(''); 
  }

  for (let i = 0 ; i < s.length; i++) {
    // Map에 str의 요소를 하나씩 넣어가다가
    // 중복 되는 요소가 있으면 비교한다.
    if (strSet.has(s[i])) {
      const comp1 = Array.from(strSet.keys());
      comp_strSet.delete(s[i]);
      comp_strSet.add(s[i]);
      const comp2 = Array.from(comp_strSet.keys());
      const check = checkLexial(comp1, comp2);
      if (!check) {
        strSet = new Set(comp2);
      }
      comp_strSet = new Set(comp1);
    } else {
      strSet.add(s[i]);
      comp_strSet = new Set(s[i]);
    }
  }

  const answer = setToStr(strSet); 
  return answer;
}

