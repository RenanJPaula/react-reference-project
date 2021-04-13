import { applyMiddleware, createStore, Store } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { AppState } from './app-state';
import reducers from './reducers-config';

const storesToPersist: string[] = [
    'authState'
];

const persistedReducer = persistReducer({
    key: 'appState',
    storage,
    whitelist: storesToPersist
}, reducers);

const store: Store<AppState> = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
