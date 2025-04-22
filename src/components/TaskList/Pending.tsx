
import { useAppContext } from '../../Store/ContextProvider';
import SingleTask from '../SingleTask';

export default function Pending() {
    const {pendingTasks} = useAppContext()
  return (
    <div>
     {pendingTasks.length>0? <div>{pendingTasks?.map((task) => (
           <div key={task.id}>
             <SingleTask task={task} />
           </div>
         ))}</div> : <h3 className=' text-center'>You have no pending task</h3>}
    </div>
  );
}
