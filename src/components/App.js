import React from 'react';
import Counter from './Counter';
import Dropdown from './Dropdown';
import Quiz from './Quiz';

const App = () => (
  <div className="App">
    <h1 className="App__title">React is awesome :)</h1>
    <Counter initialValue={10} step={5} />

    <Counter initialValue={10} step={5} />

    <Dropdown />
    <Quiz questions={['Q1', 'Q2', 'Q3', 'Q4']} />
  </div>
);

export default App;
