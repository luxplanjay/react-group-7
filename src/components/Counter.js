import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const Counter = () => {
  const params = useParams();
  console.log('params: ', params);

  const location = useLocation();
  console.log(location);

  const history = useHistory();
  console.log(history);

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('document.title useEffect');
    document.title = `You clicked ${count} times`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    console.log('textValue useEffect');
    console.log(textValue);
  }, [textValue]);

  const handleChange = e => setTextValue(e.target.value);

  return (
    <div>
      <input type="text" value={textValue} onChange={handleChange} />
      <p>You clicked {count} times</p>
      <button type="button" onClick={handleIncrement}>
        Increment counter
      </button>
    </div>
  );
};

export default Counter;

// TODO: Добавить какое-то поле ввода чтобы показать useEffect deps
// export default class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState(state => ({ count: state.count + 1 }));
//   };

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }

// componentDidUpdate(prevProps, prevState) {
//   if(prevState.count !== this.state.count) {
//     document.title = `You clicked ${this.state.count} times`;
//   }
// }

//   render() {
//     return (
// <div>
//   <p>You clicked {this.state.count} times</p>
//   <button type="button" onClick={this.handleIncrement}>
//     Increment counter
//   </button>
// </div>
//     );
//   }
// }
