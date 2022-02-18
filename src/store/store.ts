import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/task.slice';
import manageReducer from './reducers/manageModal.slice';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    manage: manageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
