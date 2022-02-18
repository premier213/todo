import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MiddleSizeButton } from '../components/button';
import Modal from './modal';
import PriorityLevel from '../components/priorityLevel';
import { done, FormType } from '../store/reducers/task.slice';
import { edit, isDone, show } from '../store/reducers/manageModal.slice';

type List = {
  value: FormType[];
};
const TaskList = ({ value }: List) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [taskId, setTaskId] = useState('');
  const [editTask, setEditTask] = useState<FormType>();
  const dispatch = useDispatch();

  function handleDone() {
    setOpenDialog(true);
    dispatch(isDone());
  }
  function handleTaskView(id: string) {
    setTaskId(id);
    dispatch(show());
    setOpenDialog(true);
  }
  function handleEditTask(item: FormType) {
    setEditTask(item);
    dispatch(edit());
    setOpenDialog(true);
  }

  return (
    <div className='w-screen flex flex-col justify-center items-center gap-4'>
      <div className='-ml-[40%]'>
        <MiddleSizeButton
          label='view Done Tasks'
          colored='sky'
          onClick={handleDone}
        />
        <Modal
          close={() => setOpenDialog(false)}
          isOpen={openDialog}
          taskId={taskId}
          isEdit={editTask}
        />
      </div>
      {value.map((item, index) => (
        <div
          key={item.id}
          className='w-2/4 border-solid border-2 border-black rounded-2xl cursor-pointer'
        >
          <div className='flex justify-between m-4'>
            <div
              className='font-bold'
              role='button'
              tabIndex={index}
              onClick={() => handleTaskView(item.id)}
              onKeyDown={() => handleTaskView(item.id)}
            >
              {item.title}
            </div>
            <div className='flex gap-4'>
              <div className='font-bold'>{item.priority}</div>
              <PriorityLevel color={item.priority} />
            </div>
          </div>
          <div className='flex justify-between m-4'>
            <div>{item.description}</div>
            <div className='flex gap-4'>
              <MiddleSizeButton
                disabled={item.completed}
                label='Done Task'
                colored='orange'
                onClick={() => dispatch(done(item.id))}
              />
              <MiddleSizeButton
                label='Edit Task'
                colored='green'
                onClick={() => handleEditTask(item)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
