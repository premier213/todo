import TextField, { TextFieldProps } from '@mui/material/TextField';

const TaskTextField = (props: TextFieldProps) => (
  <TextField
    {...props}
    sx={{
      '.MuiOutlinedInput-root': {
        bgcolor: 'white'
      }
    }}
    className='w-full border-black border'
  />
);

export default TaskTextField;
