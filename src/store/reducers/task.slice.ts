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
    },
    done: (state, action) => {
      const result = state.value.findIndex(x => x.id === action.payload);
      state.value[+result].completed = true;
    },
    edit: (state, action) => {
      const update = {
        title: action.payload.data.title,
        description: action.payload.data.description,
        priority: action.payload.data.priority,
        id: action.payload.isEdit.id,
        completed: action.payload.isEdit.completed
      };
      const result = state.value.findIndex(
        x => x.id === action.payload.isEdit.id
      );
      state.value[+result] = update;
    }
  }
});
export const selectTask = (state: RootState) => state.task.value;
export const { add, done, edit } = taskSlice.actions;
export default taskSlice.reducer;
