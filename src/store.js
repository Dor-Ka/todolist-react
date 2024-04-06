import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import tasksReducer from './features/tasks/taskSlice';
import { watchFetchExampleTasks } from './features/tasks/tasksSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;