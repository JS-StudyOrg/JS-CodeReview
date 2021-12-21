// 06_sudoku
// 문제 : 9 X 9의 스도쿠를 채워넣는 문제 . 일부 칸이 비어있는 스도부 보드를 입력받고 완성된 퍼즐을 리턴한다.
// 입력 : board 가로길이와 세로 길이가 모두 9인 2차원 배열. 배열의 요소는 1~9 사이의 자연수
// 주의사항 : 입력되는 board를 직접 수정해도 된다.
// 출력 : 가로와 세로의 길이가 모두 9인 2차원 배열을 리턴해야한다.
// return 되는 보드는 유일하다.

const sudoku = function (board) {
  //? dfsSdoku는 해당 (행,열)의 요소에 들어갈 수 있는 후보들을 구하고 , 후보들을 하나씩 대입한다.
  //? 만약 해당 요소의 후보가 없다면 이전의 요소에서 대입된 후보가 잘못된 것이므로 다시 돌아가서 다른 후보를 넣는다.
  //? 이런 작업을 계속 반복한다.
  //? 자료구조로는 dfs와 재귀를 사용하고 재귀의 종료 조건은 해당 행이 스도쿠의 마지막 행이고, 그 행에 더이상 0이 없는 경우이다.
  // dfs sdoku
  const dfsSdoku = (board, x, y) => {
    // dfs의 결과가 true이지 false인지
    let tORf = true;
    // board[x][y]의 candidate를 구한다
    const candidateStack = getCandidateNums(board, x, y);

    // 만약 후보가 없다면, 적절하지 않은 결과이므로 back tracking을 해야한다.
    if (!candidateStack.length) return false;

    for (let candidate of candidateStack) {
      // 먼저 후보르 넣어준다
      board[x][y] = candidate;

      // x행의 그 다음 0인 인덱스를 찾는다.
      const nextY = board[x].indexOf(0);

      // 만약 nextY가 -1이라면 (더이상 0인 인덱스가 없다면)
      if (nextY === -1) {
        const nextX = x + 1;
        // 그리고 board[nextX]이 없다면 nextX=x+1
        // 스도쿠 완성 return true
        if (!board[nextX]) return true;
        tORf = dfsSdoku(board, nextX, board[nextX].indexOf(0)) ?? false;
      }
      // 아니라면 nextX , nextY로 dsf 시작
      else tORf = dfsSdoku(board, x, nextY) ?? false;

      // 만약 tORf가 false 이면 continue
      if (!tORf) {
        board[x][y] = 0;
        continue;
      } else return true;
    }
    // 반복문을 다 돌았다면 후보가 다 적절하지 않다는 의미이므로 back tracking
    board[x][y] = 0;
    return false;
  };

  // 첫 인자를 구한다

  dfsSdoku(board, 0, board[0].indexOf(0));

  return board;
};

//! 사용한 메서드들------------------------------
const search = (array) => {
  /* 주어진 배열에서 1~9사이의 값 중 포함되어있지 않은 요소를 배열로 리턴하는 메서드 */
  let result = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return result.filter((num) => array.includes(num) === false);
};
const getCandidateNums = (board, x, y) => {
  /* 빈 칸에 들어갈 수 있는 후보 숫자들을 구하여 집합으로 출력하는 메서드 */
  // 행,열,sub_board를 탐색하여 1-9의 값 중 포함되자 않는 요소를 각 변수애 넣는다.
  const colIdx = x;
  const rowIdx = y;
  let col = search(board[colIdx]);
  let row = search(getRow(board, rowIdx));
  let sub_board = search(getSubBoard(board, colIdx, rowIdx));
  // 위의 게 배열의 모든 원소들을에 공통적으로 존재하는 값을 추출한다.
  let result = col.filter(
    (num) => row.includes(num) && sub_board.includes(num) === true
  );
  return result;
};

const getRow = (board, rowIdx) => {
  /* 주어진 2차원 배열 인자인 board에서 rodIdx의 열을 추출하여 1차원 배열로 리턴하는 메서드 */
  return board.map((array) => array[rowIdx]);
};

/* rowIndex가 포함되어있는 3x3에에 들어가야 할 숫자를 배열로 반환하는 메서드 */
const getSubBoard = function (board, colIdx, rowIdx) {
  /* rowIndex가 포함되어있는 3x3에에 들어가야 할 숫자를 배열로 반환하는 메서드 */
  let sub_board = [];

  // column 의 인덱스가 3보다 작으면 board의 제일 위 3줄을 의미한다.
  if (colIdx < 3) {
    // rowIdx가 3보다 작은 경우는 board의 제일 왼쪽 3줄을 의미한다.
    if (rowIdx < 3)
      // board의 0~2행을 각 각 slice로 인덱스 0~2번 까지의 원소까지만 자르고 sub_board에 넣어준다.
      for (let i = 0; i < 3; i++)
        sub_board = sub_board.concat(board[i].slice(0, 3));
    // rowIdx가 3보다 크고 6보다 작은 경우는 board의 제일 왼쪽에서 4번째 줄~6번째 줄을 의미한다.
    else if (rowIdx < 6)
      // board의 0~2행을 각 각 slice로 인덱스 3~5번 까지의  원소까지만 자르고 sub_board에 넣어준다.
      for (let i = 0; i < 3; i++)
        sub_board = sub_board.concat(board[i].slice(3, 6));
    // rowIdx가 6보다 큰 경우는 board의 제일 왼쪽에서 7번째 줄~9번째 줄을 의미한다.
    else
      for (let i = 0; i < 3; i++)
        sub_board = sub_board.concat(board[i].slice(6));
    // board의 0~2행을 각 각 slice로 인덱스 6~8 까지의  원소까지만 자르고 ssub_board에 넣어준다.
  } else if (colIdx < 6) {
    if (rowIdx < 3)
      for (let i = 3; i < 6; i++)
        sub_board = sub_board.concat(board[i].slice(0, 3));
    else if (rowIdx < 6)
      for (let i = 3; i < 6; i++)
        sub_board = sub_board.concat(board[i].slice(3, 6));
    else
      for (let i = 3; i < 6; i++)
        sub_board = sub_board.concat(board[i].slice(6));
  } else {
    if (rowIdx < 3)
      for (let i = 6; i < 9; i++)
        sub_board = sub_board.concat(board[i].slice(0, 3));
    else if (rowIdx < 6)
      for (let i = 6; i < 9; i++)
        sub_board = sub_board.concat(board[i].slice(3, 6));
    else
      for (let i = 6; i < 9; i++)
        sub_board = sub_board.concat(board[i].slice(6));
  }
  return sub_board;
};

//! ---------------삽질--------------------------
// board는 스도쿠 판 , preValue는 바로 이전에 0이었던 인덱스
const dfsSdoku = (candidateStack, x, y) => {
  for (let candidate of candidateStack) {
    dfsSdoku(candidateStack, x, y);
  }

  // 각 col을 반복문을 돌린다.
  for (let row of col) {
    // row가 0이 아니면 다음 요소로 반복문을 돌린다.
    if (row !== 0) continue;

    // Stack 배열 한 개를 선언한다.(스도쿠의 답이 될 수 있는 후보들을 저장)
    let stack = [];

    // 후보들을 넣을 배열에 해당 인덱스의 숫자에 올 수 있는 후보들을 구하고 저장한다.
    const candidate = getCandidateNums(board, col, row);

    // 만약 후보들이 없다면 이전에 넣은 값에 문제가 있으므로 back tracking 진행
    if (!candidate.length) {
      // 이전 값이 잘못되었으므로
    }
  }
  // 후보로 사용 했을음 표시하는 배열을 선언한다. 전체 false로 초기화를 진행한다.
  let isCandidate = new Array(9).fill(false);

  // 만약 후보로 사용할 수 있는 값이 없다면, return 0
  if (!candidate.length) return 0; // back tracking
  // stack에 후보들을 모두 넣는다.
  stack.push(...candidate);
  // 후보배열의 길이만큼 반복문을 돌린다
  for (let el of candidate) {
    //스택에서 요소 한 개를 빼서 board[xIdx][yIdx]에 넣는다.
    let data = stack.pop();
    // 만약 data가 isCandidate에 없다면(후보로 사용한 적이 없다면)
    if (!isCandidate[data - 1]) {
      board[xIdx][yIdx] = data;
      isCandidate[data - 1] = true; // data를 후보로 사용했음을 의미
      yIdx = board[xIdx].indexOf(0);
      if (yIdx === -1) break;
      dfsSdoku(board, xIdx, yIdx);
    }
  }
};
// };

const sudoku2 = function (board) {
  //  전체 0의 갯수를 카운트하는 변수 count를 선언한다.
  let count = 0;
  // board의 길이만큼 반복문을 돌린다. (각 행에 접근하기 위해)
  for (let i = 0; i < board.length; i++) {
    //  각 행의 길이만틈 다시 반복문을 돌린다.
    for (let j = 0; j < board[i].length; j++) {
      //    만약 요소가 0이라면
      if (board[i][j] === 0) {
        // 집합 probableNums를 선언한다.
        let candidateNums = getCandidateNums(board, i, j);
        // console.log(i, j, ":", candidateNums);
        // 만약 개수가 1개이면 board의 해당 인덱스에 넣는다.
        if (candidateNums.length === 1) board[i][j] = candidateNums[0];
        // 개수가 1보다 크면 count에 그 행의 0의 개수를 카운트에 더한다.
      }
    }
    count += getTheNumOfZero(board[i]);
  }
  // 카운트가 0보다 크면 board로 재귀를 돌린다.
  if (count > 0) sudoku(board);
  // 아니라면 return ;
  return board;
};
