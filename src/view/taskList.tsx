import { MiddleSizeButton } from '../components/button';
import PriorityLevel from '../components/priorityLevel';
import { FormType } from '../store/reducers/task.slice';

type List = {
  value: FormType[];
};
const TaskList = ({ value }: List) => (
  <div className='w-screen flex flex-col justify-center items-center gap-4'>
    <div className='-ml-[40%]'>
      <MiddleSizeButton label='view Done Tasks' colored='sky' />
    </div>
    {value.map(item => (
      <div
        key={item.id}
        className='w-2/4 border-solid border-2 border-black rounded-2xl'
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
          <div className='flex gap-4'>
            <MiddleSizeButton label='Done Task' colored='orange' />
            <MiddleSizeButton label='Edit Task' colored='green' />
          </div>
        </div>
      </div>
    ))}
  </div>
);
export default TaskList;
