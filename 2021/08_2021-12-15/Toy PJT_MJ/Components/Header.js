import styled from 'styled-components'

export default function Header () {
  
  const Header = styled.div`
    border: 2px solid gray;
    background-color: #2055A4;
    height: 70px;
    display: flex;
    >.logo {
      flex: 1 0 0;
    }
    > .header_text {
      display: flex;
      align-items: center;
      color: #FAF9F8;
      padding-right: 10px;
      font-weight: bold;
    }
  `
  
  return (
    <Header>
      <img className="logo" src='./imgs/sanil.jpeg' alt=''></img>
      <div className="header_text">QMS SYSTEM</div>
    </Header>
  )
}