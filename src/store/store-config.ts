import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { AppState } from './app-state';
import reducers from './reducers-config';

const store: Store<AppState> = createStore(reducers, applyMiddleware(thunk));

export default store;
