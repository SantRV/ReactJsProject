import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// Reducers
import { todos, isLoading, test } from "./Todos/state/todos.reducer";
import { persistReducer } from "redux-persist";

const reducers = {
    todos: todos,
    isLoading: isLoading,
    test: test
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers(reducers) as any;
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configStore = () => configureStore({
        reducer: persistedReducer,
        middleware: [thunk]
    }
)



