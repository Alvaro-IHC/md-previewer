import { useState } from 'react';
import './App.css';
import Container from './molecules/Container';
import Editor from './molecules/Editor';
import Previewer from './molecules/Previewer';

function App() {
  const [expandedEditor, setExpandedEditor] = useState(false);
  const [expandedPreviewer, setExpandedPreviewer] = useState(false);

  const handleExpandedEditor = () => {
    setExpandedEditor((previous) => (
      !previous
    ))
  };
  const handleExpandedPreviewer = () => {
    setExpandedPreviewer((previous) => (
      !previous
    ))
  };
  return (
    <div className="App">
      {
        !expandedPreviewer &&
        <Container title={'Editor'} className='editor' expanded={expandedEditor} handleExpanded={handleExpandedEditor}>
          <Editor expanded={expandedEditor} />
        </Container>
      }
      {
        !expandedEditor &&
        <Container title={'Previewer'} className='previewer' expanded={expandedPreviewer} handleExpanded={handleExpandedPreviewer}>
          <Previewer expanded={expandedPreviewer} />
        </Container>
      }
    </div>
  );
}

export default App;
