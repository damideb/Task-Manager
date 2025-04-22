
import { useAppContext } from '../../Store/ContextProvider';
import SingleTask from '../SingleTask';

export default function Total() {
    const {totalTasks} = useAppContext()
  return (
    <div>
      
    {totalTasks.length>0? <div>{totalTasks?.map((task) => (
        <div key={task.id}>
          <SingleTask task={task} />
        </div>
      ))}</div> : <h3 className=' text-center'>You have no logged task</h3>}
    </div>
  );
}
