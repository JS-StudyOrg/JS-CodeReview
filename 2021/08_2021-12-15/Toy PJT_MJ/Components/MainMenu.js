import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const MainMenu = styled.div`
    border: 2px solid gray;
    flex: 1 0 0;
    height: 100vh;
    background-color: #2055a4;
    min-width: 150px;
  `;

  const MainBtnContainer = styled.div`
    background-color: #2055a4;
    display: flex;
    flex-direction: column;
    > .mainBtn {
      display: flex;
      align-items: center;
      border: 2px solid white;
      color: #faf9f8;
      height: 10vh;
    }
  `;

  return (
    <MainMenu>
      <MainBtnContainer>
        <div className="write_quote mainBtn">
          <Link to="/write_quote">견적서 작성</Link>
        </div>
        <div className="find_quote mainBtn">
          <Link to="/find_quote">견적서 조회</Link>
        </div>
        <div className="calc_price mainBtn">
          <Link to="/calc_price">예상단가 산출</Link>
        </div>
        <div className="calc_price mainBtn">
          <Link to="/settings">설정</Link>
        </div>
      </MainBtnContainer>
    </MainMenu>
  );
}
