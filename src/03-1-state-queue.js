// const currentState = {
//   items: [],
//   value: 1,
//   user: {
//     name: 'mango',
//     age: 2
//   }
// };

// const updateSlice = {
//   user: {
//     ...currentState.user,
//     age: 5
//   }
// };

// const nextState = {
//   ...currentState,
//   ...updateSlice
// };

state = { value: 0 };

//this.setState(this.state.value + 1)

this.setState({ value: 0 + 1 });
// state = {value: 0}

this.setState({ value: 0 + 1 });
// state = {value: 0}

this.setState({ value: 0 + 1 });
// state = {value: 0}

// update queue: {value: 0 + 1},  {value: 0 + 1}, {value: 0 + 1}
// state = {value: 0}

currentState = { value: 0 };
update = { value: 0 + 1 };
nextState = { ...currentState, ...update }; // {value: 1}

currentState = { value: 1 };
update = { value: 0 + 1 };
nextState = { ...currentState, ...update }; // {value: 1}

currentState = { value: 1 };
update = { value: 0 + 1 };
nextState = { ...currentState, ...update }; // {value: 1}
