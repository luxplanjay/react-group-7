import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import Sidebar from './Sidebar';
import Items from './Items/Items';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header />

      <Button
        label="Show Sidebar"
        onClick={() => setShowSidebar(prevState => !prevState)}
      />

      <Items />

      <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)} />

      {/* <CSSTransition
        in={showComments}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <section>
          <h2>Commnets</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            ullam modi voluptates sint obcaecati temporibus incidunt alias
            numquam impedit laudantium commodi cum vitae saepe esse quae
            accusamus repellendus! Iste mollitia amet maxime culpa! Dignissimos
            doloribus sed temporibus veritatis. At ab corrupti tempora atque
            ratione voluptate ut cumque itaque mollitia nostrum!
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
            ullam modi voluptates sint obcaecati temporibus incidunt alias
            numquam impedit laudantium commodi cum vitae saepe esse quae
            accusamus repellendus! Iste mollitia amet maxime culpa! Dignissimos
            doloribus sed temporibus veritatis. At ab corrupti tempora atque
            ratione voluptate ut cumque itaque mollitia nostrum!
          </p>
        </section>
      </CSSTransition> */}
    </>
  );
}
