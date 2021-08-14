import './App.css';
import Comment from './components/comment';
import Header from './components/header';
import List from './components/list';
import Content from './components/content';
import styled from 'styled-components';

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
      <List />
      <Comment />
    </Section>
  </>
  );
}

export default App;
