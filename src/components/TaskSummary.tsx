import { useAppContext } from "../Store/ContextProvider";
import CompletedTasks from "./cards/CompletedTasks";
import PendingTasks from "./cards/PendingTasks";
import TotalTasks from "./cards/TotalTasks";

function TaskSummary() {
  const { completedTasks,pendingTasks,totalTasks } = useAppContext();

  return (
    <div className="grid sm:grid-cols-5 grid-rows-2 my-5 gap-2">
      <TotalTasks totalTasks={totalTasks.length} />
      <CompletedTasks completedTasks={completedTasks.length} />
      <PendingTasks pendingTasks={pendingTasks.length} />
    </div>
  );
}

export default TaskSummary;
