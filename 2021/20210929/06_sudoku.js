//* 210929
//* 기본적인 스도쿠 풀이 알고리즘은 아래 사항을 만족하면서 1~9까지의 숫자를 채우는 것입니다.
//* 스도쿠 보드를 입력받아, 각 요소 (총 81개)에 대한 유효성 검사를 반복하여 진행합니다.
//! 유효성 검사는 이하 3가지를 만족해야 합니다.
//* 1) 입력받은 요소의 가로줄을 검사하여, 중복이 없어야 한다.
//* 2) 입력받은 요소의 세로줄을 검사하여, 중복이 없어야 한다.
//* 3) 입력받은 요소의 3*3 박스를 검사하여, 중복이 없어야 한다.
//* 모든 요소를 계속해서 돌며 위 유효성 검사를 전부 통과할때까지 진행하는 코드를 짜려 했습니다만,
//* 유효성 검사 함수 Detail을 구현하지 못해 아직 풀지 못했습니다.
//* 더 좋은 방법이 있다면 공유 부탁드립니다. 

const sudoku1 = function (board) {
  //* 3*3 단위로 배열을 검사한다.
  //* 아래 변수는 입력받은 요소가 스도쿠 내에 존재하는 총 9개의 박스 중
  //* 어느 위치에 있는지 알기 위한 코드입니다.
  //* 이 부분에 대해서도 계속 고민을 했습니다만 좋은 방법을 찾지 못해, 레퍼런스 코드를 일부 참조했습니다.
  const box_num = [
    [0,0,0,1,1,1,2,2,2],
    [0,0,0,1,1,1,2,2,2],
    [0,0,0,1,1,1,2,2,2],
    [3,3,3,4,4,4,5,5,5],   
    [3,3,3,4,4,4,5,5,5],
    [3,3,3,4,4,4,5,5,5],
    [6,6,6,7,7,7,8,8,8],
    [6,6,6,7,7,7,8,8,8],
    [6,6,6,7,7,7,8,8,8]
  ];
  
  //* 1. 가로 열을 검사해서 가능한 숫자를 확인한다.
  const checkRow = (x, el) => {
    const usedRow = [];    
    for(let i = 0; i < 9; i++) {
      if(el[x][i] !== 0) {
        usedRow.push(el[x][i]);
      } 
    }
    return usedRow;
  }

  //* 2. 세로 열을 검사해서 가능한 숫자를 확인한다.
  const checkCol = (y, el) => {
    const usedCol = [];
    for(let i = 0; i < 9; i++) {
      if(el[i][y] !== 0) {
        usedCol.push(el[i][y])
      }
    }
    return usedCol;
  }

  //* 3. 3*3 박스를 검사해서 가능한 숫자를 확인하고, 배열에 저장한다.
  const check3Box = (box_num, el) => {
    const used3Box = [];
    for(let listX = 0; listX < 9; listX++) {
      for(let listY; listY < 9; listY++) {
        if(box_num && el[listX][listY] !== 0) {
          used3Box.push(el[listX][listY]);
        }
      }
    }
    return used3Box;
  }

  //* 4. 위 3가지 경우의 숫자를 전부 비교해보고, 모두 가능한 숫자만 따로 빼서 배열 possible_nums 에 저장한다.
  const checkValid = (x, y, box_num, el) => {
    const row = checkRow(x, el);
    const col = checkCol(y, el);
    const box = check3Box(box_num, el);
    const possible_nums = [];
    for(let i = 0; i < row.length; i++) {
      if(col.includes(row[i])) {
        if(box.includes(row[i]))
          possible_nums.push(row[i])
      }
    }
    return possible_nums;
  }

  for(let x = 0; x < 9; x++) {
    for(let y = 0; y < 9; y++) {

      if(!board[x][y]) {
        checkRow(x, board[x][y]);
        checkCol(y, board[x][y]);
        check3Box()
      }
    }
  }
};

//* 210926 풀이
const sudoku2 = function (board) {

  const three_box = [
    [0,0,0,1,1,1,2,2,2],
    [0,0,0,1,1,1,2,2,2],
    [0,0,0,1,1,1,2,2,2],
    [3,3,3,4,4,4,5,5,5],   
    [3,3,3,4,4,4,5,5,5],
    [3,3,3,4,4,4,5,5,5],
    [6,6,6,7,7,7,8,8,8],
    [6,6,6,7,7,7,8,8,8],
    [6,6,6,7,7,7,8,8,8]
  ];
  //* 1. 가로줄을 확인하여 가능한 숫자들이 어떤 건지 확인한다.
  const checkRow = (col) => {
    const usedRow = Array(9).fill(true);
    for(let row = 0; row < 9; row++) {
      if(board[col][row]) {
        usedRow[row] = false;
      }
    }
    return usedRow;    
  }
  //* 2. 세로줄을 확인하여 가능한 숫자들이 어떤 건지 확인한다.
  const checkCol = (row) => {
    const usedCol = Array(9).fill(true);
    for(let col = 0; col < 9; col++) {
      if(board[col][row]) {
        usedCol[col] = false;
      }
    }
    return usedCol;
  }  
  //* 3. 3*3박스를 확인하여 가능한 숫자들이 어떤 건지 확인한다.
  const check3Box = (row, col) => {
    const used3Box = Array(9).fill(true);
    const box_num = three_box[col][row];
    for(let box_Y = 0; box_Y < 9; box_Y++) {
      for(let box_X = 0; box_X < 9; box_X++) {
        if(!board[col][row] && three_box[col][row] === box_num) {
          used3Box[row] = false;
        }
      }
    }
    return used3Box;
  }

  //* 4. 위 3개를 전부 확인하여 가능한 숫자들을 따로 빼놓는다.
  //* 5. 가능한 숫자가 1개 뿐이라면, 해당 숫자를 빈칸에 집어넣는다.
  //* 6. 위 과정을 모든 칸에 숫자를 넣을 때까지 반복한다.

  return board;
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
