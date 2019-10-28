const add = (a, b) => {
  return a + b;
};

const mult = (a, b) => {
  return a * b;
};

function withLog(fn) {
  return function(...args) {
    console.log('Invoking with args:', args);

    return fn(...args);
  };
}

function withHello(fn) {
  return function(...args) {
    console.log('HELLO');

    return fn(...args);
  };
}

function withGreet(fn) {
  return function(...args) {
    console.log('GREET');

    return fn(...args);
  };
}

const addWithLog = withLog(add);
const addWithHello = withHello(add);

const addWithLogAndHelloAndGreet = withLog(withHello(withGreet(add)));

addWithLogAndHelloAndGreet(10, 50);

// function compose(arguments) {
//   // body
// }

// const addWithLogAndHelloAndGreet = compose(
//   withLog,
//   withHello,
//   withGreet,
// )(add);
