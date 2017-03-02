import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'
import rootReducer from 'reducers';

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk,loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
