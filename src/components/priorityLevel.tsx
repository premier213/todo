export interface PriorityProps {
  color: string;
}

const PriorityLevel = ({ color }: PriorityProps) => {
  let colorize;
  switch (color) {
    case 'low':
      colorize = 'bg-green-500';
      break;
    case 'medium':
      colorize = 'bg-orange-500';
      break;

    default:
      colorize = 'bg-red-500';
      break;
  }

  return <div className={`${colorize} w-8 h-8 rounded-full`} />;
};

export default PriorityLevel;
