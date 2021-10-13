//* 211013(Rev.1)
//* 기본적인 스도쿠 풀이 알고리즘은 아래 사항을 만족하면서 1~9까지의 숫자를 채우는 것입니다.
//* 스도쿠 보드를 입력받아, 각 요소 (총 81개)에 대한 유효성 검사를 반복하여 진행합니다.
//! 유효성 검사는 이하 3가지를 만족해야 합니다.
//* 1) 입력받은 요소의 가로줄을 검사하여, 중복이 없어야 한다.
//* 2) 입력받은 요소의 세로줄을 검사하여, 중복이 없어야 한다.
//* 3) 입력받은 요소의 3*3 박스를 검사하여, 중복이 없어야 한다.

const sudoku = function (board) {

  // 구글 검색을 통해 사용한 함수.
  function nextEmptySpot(board) {
    // check empty spot. if none, returns [-1, -1]
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0)
          return [i, j];
      }
    }
    return [-1, -1];
  }

  const 빈칸확인 = (board) => {
    let blanks = [];
    for(let y = 0; y < 9; y++) {
      for(let x = 0; x < 9; x++) {
        if(board[y][x] === 0) {
          blanks.push([y, x]);
        }
      }
    }
    return blanks
  }

  const 가로줄확인 = (y, x, value) => {
    for(let i = 0; i < 9; i++) {
      if(board[y][i] === value)
        return false;
    }
    return true;
  }

  const 세로줄확인 = (y, x, value) => {
    for(let i = 0; i < 9; i++) {
      if(board[i][x] === value)
        return false; 
    }
    return true;
  }

  const 서브박스확인 = (y, x, value) => {
    const boxRow = Math.floor(x / 3) * 3;
    const boxCol = Math.floor(y / 3) * 3;

    for (let y = 0; y < 3; y++){
      for (let x = 0; x < 3; x++){
        if (board[boxCol + y][boxRow + x] === value)
          return false;
      }
    }
    return true;
  }
  
  const 유효성확인 = (y, x, value) => {
    if(가로줄확인(y, x, value) && 세로줄확인(y, x, value) && 서브박스확인(y, x, value)) {
      return true;
    }
    return false;
  }

  const 스도쿠작성 = (board) => {
    let 빈칸 = nextEmptySpot(board);
    let 현재_열 = 빈칸[0];
    let 현재_행 = 빈칸[1];

    if(현재_열 === -1) {
      return board;
    }

    for(let num = 1; num <= 9; num++) {
      if(유효성확인(현재_열, 현재_행, num) === true) {
        board[현재_열][현재_행] = num;
        스도쿠작성(board);
      }    
    }
    if(nextEmptySpot(board)[0] !== -1) {
      board[현재_열][현재_행] = 0;
    }
    return board;
  }  
  return 스도쿠작성(board)
};

const expertBoard = [
[9, 0, 0, 0, 0, 3, 0, 0, 0],
[0, 0, 0, 4, 0, 0, 0, 6, 0],
[0, 0, 0, 0, 0, 0, 7, 0, 0],
[0, 0, 0, 0, 6, 0, 5, 2, 0],
[3, 0, 0, 1, 0, 0, 0, 0, 0],
[8, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 6, 0, 0, 0, 0, 1, 0, 0],
[0, 2, 0, 0, 7, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 8, 0, 0, 3]
];

 