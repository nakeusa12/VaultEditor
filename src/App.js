import React from 'react';
import './App.css';
import { EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Editor from '@draft-js-plugins/editor';

function App() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );


  return (
    <div className="App">
      <header className="App-header">
        <Editor editorState={editorState} onChange={setEditorState} />
      </header>
    </div>
  );
}

export default App;
