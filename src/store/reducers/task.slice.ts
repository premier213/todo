import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface FormType {
  description: string;
  priority: string;
  title: string;
  id: string;
  completed: boolean;
}

interface TT {
  value: FormType[];
}
const initialState: TT = {
  value: []
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FormType>) => {
      state.value = [...state.value, action.payload];
      console.log(state.value);
    }
  }
});
export const selectTask = (state: RootState) => state.task.value;
export const { add } = taskSlice.actions;
export default taskSlice.reducer;
