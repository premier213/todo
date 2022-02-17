import Button from '@mui/material/Button';
import orange from '@mui/material/colors/orange';
import blue from '@mui/material/colors/blue';
import green from '@mui/material/colors/green';

export interface TaskButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  isClicked?: () => void;
}
export interface MiddleSizeButton {
  label: string;
}
export const NewTaskButton = (props: TaskButtonProps) => {
  const { label, isClicked, className, type } = props;

  return (
    <Button
      type={type}
      className={className}
      onClick={isClicked}
      variant='contained'
      sx={{
        bgcolor: orange[600],
        border: 'thin solid black',
        height: '3rem',
        borderRadius: '0.75rem',
        color: 'black',
        '&:hover': {
          bgcolor: orange[700]
        }
      }}
    >
      <span>{label}</span>
    </Button>
  );
};

export const MiddleSizeButton = (props: any) => (
  <Button
    {...props}
    variant='contained'
    sx={{
      bgcolor: props.colored,
      border: 'thin solid black',
      height: '2rem',
      borderRadius: '0.25rem',
      color: 'black',
      '&:hover': {
        bgcolor: props.colored
      }
    }}
  >
    {props.label}
  </Button>
);
