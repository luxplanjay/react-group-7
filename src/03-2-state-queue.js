state = { value: 0 };

this.setState(state => {
  return {
    value: state.value + 1
  };
});
// state = {value: 0}

this.setState(state => {
  return {
    value: state.value + 1
  };
});
// state = {value: 0}

this.setState(state => {
  return {
    value: state.value + 1
  };
});
// state = {value: 0}

// update queue: fn(state, props), fn(state, props), fn(state, props)
// state = {value: 0}

currentState = { value: 0 };
update = fn(currentState); // { value: 0 + 1}
nextState = { ...currentState, ...update }; // {value: 1}

currentState = { value: 1 };
update = fn(currentState); // { value: 1 + 1}
nextState = { ...currentState, ...update }; // {value: 2}

currentState = { value: 2 };
update = fn(currentState); // {value: 2 + 1}
nextState = { ...currentState, ...update }; // {value: 3}

const state = {
  items: [1, 2, 3, 4, 5],
  name: 'Mango'
};

updateName() {
  this.state({
    name: 'Poly'
  })
}

addItem(num) {
  this.setState(state => {
    return {
      items: [...state.items, num]
    }
  })
}

removeItem(num) {
  this.setState(state => {
    return {
      items: state.items.filter(item => item !== num)
    }
  })
}