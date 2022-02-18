import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  value: {
    addTask: false,
    doneTask: false,
    showTask: false,
    editTask: false
  }
};

export const manageSlice = createSlice({
  name: 'manage',
  initialState,
  reducers: {
    edit: state => {
      state.value.addTask = false;
      state.value.doneTask = false;
      state.value.showTask = false;
      state.value.editTask = true;
    },
    show: state => {
      state.value.addTask = false;
      state.value.doneTask = false;
      state.value.showTask = true;
      state.value.editTask = false;
    },
    add: state => {
      state.value.addTask = true;
      state.value.doneTask = false;
      state.value.showTask = false;
      state.value.editTask = false;
    },
    isDone: state => {
      state.value.doneTask = true;
      state.value.addTask = false;
      state.value.showTask = false;
      state.value.editTask = false;
    }
  }
});

export const selectManage = (state: RootState) => state.manage.value;
export const { add, isDone, show, edit } = manageSlice.actions;
export default manageSlice.reducer;
