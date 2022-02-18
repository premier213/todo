import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MiddleSizeButton } from '../components/button';
import PriorityLevel from '../components/priorityLevel';
import { FormType, selectTask } from '../store/reducers/task.slice';

export interface TaskViewProps {
  taskId: string | undefined;
}
const TaskView = ({ taskId }: TaskViewProps) => {
  const [singleTask, setSingleTask] = useState<FormType>();
  const task = useSelector(selectTask);

  useEffect(() => {
    if (task) {
      setSingleTask(task.find(x => x.id === taskId));
    }
  }, [task, taskId]);

  return (
    <div>
      <div className='flex'>
        <div className='flex gap-4 w-1/4'>
          <PriorityLevel color={singleTask?.priority} />
          {singleTask?.priority}
        </div>
        <div className='flex justify-center items-center flex-col w-3/4'>
          <div>{singleTask?.title}</div>
          <div>{singleTask?.description}</div>
        </div>
      </div>
      <div className='flex justify-between mt-16'>
        <MiddleSizeButton label='Done Task' colored='orange' />
        <MiddleSizeButton label='Edit Task' colored='green' />
        <MiddleSizeButton label='Delete Task' colored='red' />
      </div>
    </div>
  );
};

export default TaskView;
