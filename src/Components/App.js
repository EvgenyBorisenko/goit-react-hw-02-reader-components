import React from 'react';
import Reader from './Reader/Reader';
import publications from '../publications.json';

function App() {
  return (
    <div className="App">
      <Reader items={publications} />
    </div>
  );
}

export default App;
