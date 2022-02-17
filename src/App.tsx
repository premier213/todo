import Fab from '@mui/material/Fab';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NewTaskButton } from './components/button';
import Modal from './components/modal';
import { selectTask } from './store/reducers/task.slice';
import './styles/global.css';
import TaskList from './view/taskList';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import blue from '@mui/material/colors/blue';

function App() {
  const taskState = useSelector(selectTask);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <div>
        <div className='flex flex-col items-center h-screen'>
          <div className='my-16 text-3xl'>Hello World</div>
          <div className='flex flex-col justify-center h-full'>
            {taskState.length !== 0 ? (
              <TaskList value={taskState} />
            ) : (
              <NewTaskButton
                label='Create your First Task ;)'
                isClicked={() => setOpenDialog(true)}
              />
            )}
          </div>

          {taskState.length !== 0 && (
            <Fab
              onClick={() => setOpenDialog(true)}
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
        <Modal isOpen={openDialog} onClose={() => setOpenDialog(false)} />
      </div>
    </>
  );
}

export default App;
