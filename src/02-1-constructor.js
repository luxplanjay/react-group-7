'use strict';

class MyReactComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };
  }

  updateValue() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.updateValue.bind()}>Click</button>
      </div>
    );
  }
}

{
  /* <MyReactComponent /> */
}

const MyComponent = function() {
  this.state = {
    value: 0
  };
};

MyComponent.prototype.updateValue = function() {
  console.log(this);
};

const instance = new MyComponent();

console.log(instance); // {state: {value: 0}, __proto__: MyComponent.prototype}

instance.updateValue(); // {state: {value: 0}, __proto__: MyComponent.prototype}

function onClick(callback) {
  callback();
}

onClick(instance.updateValue.bind(instance)); // {state: {value: 0}, __proto__: MyComponent.prototype}
