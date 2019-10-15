'use strict';

class MyReactComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue() {
    console.log(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.updateValue}>Click</button>
      </div>
    );
  }
}

{
  /* <MyReactComponent /> */
}

// this.updateValue = this.updateValue.bind(this);

const MyComponent = function() {
  this.state = {
    value: 0
  };

  this.updateValue = MyComponent.prototype.updateValue.bind(this);
};

MyComponent.prototype.updateValue = function() {
  console.log(this);
};

const instance = new MyComponent();

console.log(instance); // {state: {value: 0}, updateValue: f, __proto__: MyComponent.prototype}

instance.updateValue(); // {state: {value: 0}, updateValue: f, __proto__: MyComponent.prototype}

function onClick(callback) {
  callback();
}

onClick(instance.updateValue); // {state: {value: 0}, __proto__: MyComponent.prototype}
