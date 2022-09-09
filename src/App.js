import React from 'react';
import NavBar from './NavBar.js';
import Header from './Header.js';
import Content from './Content.js';
import './App.css';
import './Header.css';
import './Content.css';

function App() {
  const [state, setState] = React.useState(1);

  if (state > 6) setState(1);

  if (state === 5) {
    setTimeout(() => {
      setState(6);
    }, 4000)
  }
  return (
    <div className="App">
      <NavBar
        state={state}
        onClick={() => setState(state + 1)}
      />
      <Header
        state={state}
        onClick={() => setState(state + 1)}
      />
      <Content
        state={state}
        onClick={() => setState(state + 1)}
        backClick={() => setState(state - 1)}
      />
    </div>
  );
}

export default App;
