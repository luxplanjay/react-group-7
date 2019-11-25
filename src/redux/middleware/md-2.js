const middleware2 = store => next => action => {
  console.log('Middlewrae #2');

  next(action);
};

export default middleware2;
