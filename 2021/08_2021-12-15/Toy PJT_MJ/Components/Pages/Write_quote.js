import styled from "styled-components";

export default function WriteQuote() {
  const WriteQuote = styled.div`
    border: 2px solid gray;
    flex: 9 0 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #faf9f8;
    padding: 1.2rem;
  `;

  const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
    text-align: center;
    border: 1px solid black;
    padding: 0.75rem 1rem 1rem 1rem;
  `;

  const Basic_spec = styled.div`
    border: 1px solid black;
    padding: 1rem;
  `

  return (
    <WriteQuote>
      <div className="head">견적서 작성</div>
      <div className="divider"></div>
      <div className="head_child">제품 사양을 작성하세요.</div>
      <Basic_spec>
        <div className="write_inform">기본 사양</div>
        <div className="phase inputbox write_inform">
          <div className="inform_indicator">품목(Item type)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="phase inputbox write_inform">
          <div className="inform_indicator">상수(Phase)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="capacity inputbox write_inform">
          <div className="inform_indicator">용량(Capacity)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="primary inputbox write_inform">
          <div className="inform_indicator">1차전압(Primary)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="secondary inputbox write_inform">
          <div className="inform_indicator">2차전압(Secondary)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="frequency inputbox write_inform">
          <div className="inform_indicator">주파수(Frequency)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="vector_connect inputbox write_inform">
          <div className="inform_indicator">결선(Vector Connection)</div>
          <input type="text" className="write_by_user"></input>
        </div>
        <div className="tapping inputbox write_inform">
          <div className="inform_indicator">탭 방식(Tapping Method)</div>
          <input type="text" className="write_by_user"></input>
        </div>
      </Basic_spec>
    </WriteQuote>
  );
}
