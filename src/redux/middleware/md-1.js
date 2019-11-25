const middleware1 = store => next => action => {
  console.log('Middlewrae #1');

  next(action);
};

export default middleware1;
