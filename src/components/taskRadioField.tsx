import Radio, { RadioProps } from '@mui/material/Radio';

type Color = {
  colored: 'green' | 'orange' | 'red';
};

const TaskRadioField = (props: RadioProps & Color) => (
  <Radio
    {...props}
    sx={{
      border: 'thin solid black',
      width: '1.7rem',
      height: '1.7rem',
      marginRight: '1rem',
      '&.Mui-checked': {
        backgroundColor: props.colored
      },
      svg: {
        display: 'none'
      }
    }}
  />
);

export default TaskRadioField;
