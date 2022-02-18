import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PriorityLevel from '../components/priorityLevel';
import { FormType, selectTask } from '../store/reducers/task.slice';

const DoneTasks = () => {
  const [completedTasks, setCompletedTasks] = useState<FormType[]>([]);
  const taskState = useSelector(selectTask);

  useEffect(() => {
    if (taskState) {
      setCompletedTasks(taskState.filter(x => x.completed === true));
    }
  }, [taskState]);

  return (
    <div>
      {completedTasks?.map(item => (
        <div
          key={item.id}
          className='border-solid border-2 border-black bg-white mt-2'
        >
          <div className='flex justify-between m-4'>
            <div className='font-bold'>{item.title}</div>
            <div className='flex gap-4'>
              <div className='font-bold'>{item.priority}</div>
              <PriorityLevel color={item.priority} />
            </div>
          </div>
          <div className='flex justify-between m-4'>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoneTasks;
