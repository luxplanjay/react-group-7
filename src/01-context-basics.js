'use strict';

// Контекст (this) внутри функции определяется тем КАК функция вызывается
// а не тем где она обьявлена

function foo() {
  console.log(this);
}

// Если фнукция вызвана не в контексте какогото обьекта, this будет window
// не в строгом режиме и undefined в строгом
foo(); // undefined

const user = {
  tag: 'mango'
};

user.showThis = foo;

console.log(user); // {tag: 'mango', showThis: f}

foo(); // undefined
user.showThis(); // {tag: 'mango', showThis: f}

function higherOrderFunction(callback) {
  callback();
}

higherOrderFunction(foo); // undefined

higherOrderFunction(user.showThis.bind(user)); // {tag: 'mango', showThis: f}

// ================

// У стрелок нет своего контекста. Контекст стрелки определяется местом создания.
// Она берет внешний контекст.

const arrowFn = () => {
  console.log(this);
};

arrowFn(); // window

const obj = {
  tag: 'poly',
  tryThis() {
    console.log(this);

    const arr = () => {
      console.log(this);
    };

    arr();
  }
};

obj.showThis = arrowFn;

obj.showThis(); // window

obj.tryThis(); // obj // obj
