import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
