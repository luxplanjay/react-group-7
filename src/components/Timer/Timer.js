import React from 'react';
import css from './Timer.module.css';

const Timer = ({ value, onIncrement, onDecrement }) => (
  <div className={css.container}>
    <button type="button" className={css.button} onClick={() => onDecrement(5)}>
      &#8722;
    </button>
    <div className={css.value}>{value} minutes</div>
    <button type="button" className={css.button} onClick={() => onIncrement(5)}>
      &#43;
    </button>
  </div>
);

export default Timer;
