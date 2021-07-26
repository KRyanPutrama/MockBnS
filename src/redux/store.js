import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

import rootReducer from './reducer/indexReducer';
import rootSagas from "./sagas/rootSagas";

// const store = createStore(rootReducer);

const sagaMiddleWare = createSagaMiddleware()

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSagas)

// export let persistor = persistStore(store);
