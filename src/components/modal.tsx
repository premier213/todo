import Dialog from '@mui/material/Dialog';
import FormTask from '../view/formTask';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: DialogProps) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
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
      <FormTask onClose={onClose} />
    </div>
  </Dialog>
);

export default Modal;
