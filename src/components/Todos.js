import React, { useState, useReducer, useMemo } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import shortid from 'shortid';

const lorem = new LoremIpsum();

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return [...state, action.payload.todo];

    case 'removeTodo':
      return state.filter(todo => todo.id !== action.payload.todoId);

    default:
      return state;
  }
};

export default function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, []);

  const addTodo = () => {
    const todo = {
      id: shortid.generate(),
      text: lorem.generateWords(3),
    };

    dispatch({ type: 'addTodo', payload: { todo } });
  };

  const removeTodo = todoId => {
    dispatch({ type: 'removeTodo', payload: { todoId } });
  };

  const [filter, setFilter] = useState('');

  const changeFilter = evt => {
    setFilter(evt.target.value);
  };

  const filteredTodos = useMemo(() => {
    console.log('Computing filtered todos');
    return todos.filter(todo => todo.text.includes(filter));
  }, [todos, filter]);

  const [text, setText] = useState('');
  return (
    <>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <p>{text}</p>

      <input type="text" onChange={changeFilter} value={filter} />

      <br />
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

// export default class Todos extends Component {
//   state = {
//     todos: [],
//     filter: '',
//   };

//   addTodo = () => {
// const todo = {
//   id: shortid.generate(),
//   text: lorem.generateWords(3),
// };

//     this.setState(state => ({
//       todos: [...state.todos, todo],
//     }));
//   };

//   removeTodo = todoId => {
// this.setState(state => ({
//   todos: state.todos.filter(todo => todo.id !== todoId),
// }));
//   };

//   changeFilter = evt => {
//     this.setState({ filter: evt.target.value });
//   };

//   render() {
// const filteredTodos = this.state.todos.filter(todo =>
//   todo.text.includes(this.state.filter),
// );

//     return (
//       <>
//         <input
//           type="text"
//           onChange={this.changeFilter}
//           value={this.state.filter}
//         />

//         <br />
//         <button onClick={this.addTodo}>Add todo</button>

//         <ul>
//           {filteredTodos.map(todo => (
//             <li key={todo.id}>
//               <span>{todo.text}</span>
//               <button onClick={() => this.removeTodo(todo.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
