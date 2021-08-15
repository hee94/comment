import './App.css';
import Header from './components/header';
import ListContainer from './containers/listContainer';
import Content from './components/content';
import styled from 'styled-components';
import CommnetContainer from './containers/commnetContainer';
const Section = styled.section`
  width: 100%;
  margin: 0;
  padding: .5rem 10% 1rem 10%;
`

function App() {
  return (
    <>
    <Header />
    <Section>
      <Content />
      <ListContainer />
      <CommnetContainer />
    </Section>
  </>
  );
}

export default App;
