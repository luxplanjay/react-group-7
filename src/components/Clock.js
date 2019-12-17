import React, { useState, useEffect, useRef } from 'react';

const styles = {
  clockface: {
    fontSize: 32,
    fontWeight: 500,
  },
};

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const intervalId = useRef();

  useEffect(() => {
    console.log('useEffect');
    intervalId.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('clearing before next useEffect');
      clearInterval(intervalId.current);
    };
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p style={styles.clockface}>Current time: {time.toLocaleTimeString()}</p>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

// export default class Clock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return (
//       <p style={styles.clockface}>
//         Current time: {this.state.time.toLocaleTimeString()}
//       </p>
//     );
//   }
// }
