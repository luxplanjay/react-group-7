import React from 'react';
import AntButton from 'antd/es/button';
import MaterialButton from '@material-ui/core/Button';
import Icon from 'antd/es/icon';
import Button from '../Button';
import Product from '../Product';
import SButton from '../SButton';

const App = () => (
  <div className="App">
    <MaterialButton variant="contained" color="primary">
      Hello World
    </MaterialButton>
    <hr />
    <AntButton type="danger">
      <Icon type="fast-forward" /> Button
    </AntButton>

    <hr />
    <Button label="Get started" />
    <Button label="Get started" disabled />

    <hr />

    <SButton label="Get started" />
    <SButton label="Get started" disabled />

    <Product
      alt="hello"
      imageUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640"
      title="Tacos With Lime"
      price={20}
      quantity={10}
    />
  </div>
);

export default App;
