import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'
import styled from 'styled-components'

function App() {
  const App = styled.div`
    display : flex;
    flex-direction : column;
  `
  return (
    <App>
      <Header />
      <Body />
    </App>
  );
}

export default App;
