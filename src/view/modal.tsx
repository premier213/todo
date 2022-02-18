import Dialog from '@mui/material/Dialog';
import FormTask from './formTask';
import DoneTasks from './doneTasks';
import TaskView from './taskView';
import { FormType } from '../store/reducers/task.slice';
import { useSelector } from 'react-redux';
import { selectManage } from '../store/reducers/manageModal.slice';

export interface DialogProps {
  isOpen: boolean;
  isDone?: boolean;
  taskId?: string;
  isEdit?: FormType;
  close: () => void;
}

const Modal = ({ close, isOpen, taskId, isEdit }: DialogProps) => {
  const manageModalState = useSelector(selectManage);

  return (
    <Dialog
      onClose={close}
      open={isOpen}
      maxWidth='md'
      sx={{
        '.MuiDialog-paperWidthMd': {
          borderRadius: '3rem',
          border: 'thin solid black'
        }
      }}
      fullWidth
    >
      <div className='p-8 rounded-xl bg-zinc-400'>
        {manageModalState.addTask && <FormTask close={close} />}
        {manageModalState.doneTask && <DoneTasks />}
        {manageModalState.showTask && <TaskView taskId={taskId} />}
        {manageModalState.editTask && (
          <FormTask isEdit={isEdit} close={close} />
        )}
      </div>
    </Dialog>
  );
};

export default Modal;
