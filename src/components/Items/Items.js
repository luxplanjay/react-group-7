import React, { useState } from 'react';
import shortid from 'shortid';
import { LoremIpsum } from 'lorem-ipsum';
import List from './List';
import Button from '../Button';

const lorem = new LoremIpsum();

export default function Items() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const item = {
      id: shortid.generate(),
      text: lorem.generateWords(5),
    };

    setItems([...items, item]);
  };

  const removeItem = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <Button label="Add Item" onClick={addItem} />
      <hr />
      <List items={items} onDelete={removeItem} />
    </div>
  );
}
