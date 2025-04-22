
import { useAppContext } from '../../Store/ContextProvider';
import SingleTask from '../SingleTask';

export default function Completed() {
    const {completedTasks} = useAppContext()
  return (
    <div>
       {completedTasks.length>0? <div>{completedTasks?.map((task) => (
             <div key={task.id}>
               <SingleTask task={task} />
             </div>
           ))}</div> : <h3 className=' text-center'>You have no completed task</h3>}
    </div>
  );
}
