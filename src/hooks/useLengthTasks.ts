import { useSelector } from 'react-redux';
import { selectTask } from '../store/reducers/task.slice';

export const useLengthTasks = () => {
  const tasks = useSelector(selectTask);

  return tasks.length;
};
