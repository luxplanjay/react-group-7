import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import middleware1 from './middleware/md-1';
import middleware2 from './middleware/md-2';
import stateValidator from './middleware/stateValidator';

const middleware = [middleware1, middleware2, stateValidator];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const preloadedState = {
  notes: {
    items: [
      { id: 'id-1', text: 'Learn React' },
      { id: 'id-2', text: 'Learn React Router' },
      { id: 'id-3', text: 'Get comfy with Redux' },
    ],
  },
};

const store = createStore(rootReducer, preloadedState, enhancer);

export default store;
