import './App.css';
import Container from './molecules/Container';
import Editor from './molecules/Editor';
import Previewer from './molecules/Previewer';

function App() {
  return (
    <div className="App">
      <Container title={'Editor'} className='editor'>
        <Editor />
      </Container>
      <Container title={'Previewer'} className='previewer'>
        <Previewer />
      </Container>
    </div>
  );
}

export default App;
