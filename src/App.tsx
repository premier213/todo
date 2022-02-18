import Fab from '@mui/material/Fab';
import { useDispatch, useSelector } from 'react-redux';
import { NewTaskButton } from './components/button';
import Modal from './view/modal';
import { selectTask } from './store/reducers/task.slice';
import './styles/global.css';
import TaskList from './view/taskList';
import AddIcon from '@mui/icons-material/Add';
import { add } from './store/reducers/manageModal.slice';
import { useState } from 'react';
import { useLengthTasks } from './hooks/useLengthTasks';

function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const taskState = useSelector(selectTask);
  const dispatch = useDispatch();
  const lengthTasks = useLengthTasks();

  function handleAdd() {
    setOpenDialog(true);
    dispatch(add());
  }

  return (
    <>
      <div>
        <div className='flex flex-col items-center h-screen'>
          <div className='my-16 text-3xl'>Hello World</div>
          <div className='my-16 text-3xl'>Number of Tasks : {lengthTasks}</div>
          <div className='flex flex-col justify-center h-full'>
            {taskState.length !== 0 ? (
              <TaskList value={taskState} />
            ) : (
              <NewTaskButton
                label='Create your First Task ;)'
                isClicked={handleAdd}
              />
            )}
          </div>

          {taskState.length !== 0 && (
            <Fab
              onClick={handleAdd}
              color='secondary'
              aria-label='add'
              className='right-4 bottom-4 bg-red-500'
              sx={{
                '&.MuiFab-root': {
                  position: 'absolute',
                  backgroundColor: 'red'
                }
              }}
            >
              <AddIcon />
            </Fab>
          )}
        </div>
        <Modal close={() => setOpenDialog(false)} isOpen={openDialog} />
      </div>
    </>
  );
}

export default App;
