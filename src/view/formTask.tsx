import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  SubmitHandler,
  useForm
} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { add, edit } from '../store/reducers/task.slice';
import { NewTaskButton } from '../components/button';
import TaskRadioField from '../components/taskRadioField';
import TaskTextField from '../components/taskTextField';
import { v4 as uuidv4 } from 'uuid';
import { DialogProps } from './modal';

type Inputs = {
  title: string;
  description: string;
  priority: string;
};
export interface FieldProps<T> {
  field: T;
  fieldState: ControllerFieldState;
}

const FormTask = ({ isEdit, close }: Pick<DialogProps, 'isEdit' | 'close'>) => {
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm<Inputs>({
    defaultValues: {
      title: isEdit?.title || '',
      description: isEdit?.description || '',
      priority: isEdit?.priority || 'low'
    }
  });

  // submit form
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    if (isEdit) {
      dispatch(edit({ isEdit, data }));
    } else {
      const formData = {
        ...data,
        id: uuidv4(),
        completed: false
      };
      dispatch(add(formData));
    }
    reset();
    close();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='my-4'>
        <Controller
          name='title'
          control={control}
          rules={{ required: 'Title is Required!' }}
          render={({
            field: { onChange, value },
            fieldState: { error }
          }: FieldProps<ControllerRenderProps<Inputs, 'title'>>) => (
            <TaskTextField
              error={!!error}
              label='Task Title'
              helperText={error?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      <div className='my-4'>
        <Controller
          name='description'
          control={control}
          rules={{ required: 'Description is Required!' }}
          render={({
            field: { onChange, value },
            fieldState: { error }
          }: FieldProps<ControllerRenderProps<Inputs, 'description'>>) => (
            <TaskTextField
              multiline
              error={!!error}
              rows={4}
              label='Task Description'
              helperText={error?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </div>
      <div className='my-4'>
        <Controller
          name='priority'
          control={control}
          render={({
            field
          }: FieldProps<ControllerRenderProps<Inputs, 'priority'>>) => (
            <RadioGroup
              row
              defaultValue='low'
              {...field}
              className='flex justify-between'
            >
              <FormControlLabel
                label='low'
                value='low'
                control={<TaskRadioField colored='green' />}
              />

              <FormControlLabel
                label='medium'
                value='medium'
                control={<TaskRadioField colored='orange' />}
              />

              <FormControlLabel
                label='high'
                value='high'
                control={<TaskRadioField colored='red' />}
              />
            </RadioGroup>
          )}
        />
      </div>
      <div className='mt-4 text-center'>
        <NewTaskButton
          label={isEdit ? 'Edit Task' : 'Add To Tasks'}
          className='w-1/3'
          type='submit'
        />
      </div>
    </form>
  );
};

export default FormTask;
