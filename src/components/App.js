import React from 'react';
import Product from './Product';
import Panel from './Panel';
import List from './List';

const items = [
  { id: 'qweq', text: 'html' },
  { id: 'zxczc', text: 'css' },
  { id: 'eehs', text: 'js' },
  { id: 'ymt5', text: 'react' },
];

const App = () => (
  <div>
    <h1>App title</h1>

    <List items={items} />

    <Panel title="Panel 1">
      <Product
        alt="hello"
        imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
        title="Tacos With Lime"
        price={20}
        quantity={10}
      />
    </Panel>

    <Panel title="Panel 2">
      <Product
        imageUrl="https://hips.hearstapps.com/hmg-prod/images/delish-bacon-horizontal-1542140714.png"
        title="Bacon"
        price={100}
        quantity={100}
      />
    </Panel>
  </div>
);

export default App;
