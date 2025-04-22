import Button from "./components/reusables/Button";

import { IoIosAddCircleOutline } from "react-icons/io";
import TaskSummary from "./components/TaskSummary";
import Progress from "./components/reusables/Progress";
import Tabs from "./components/reusables/Tabs";
import { useState } from "react";
import AddTask from "./components/modal/AddTask";
import { useAppContext } from "./Store/ContextProvider";
import Total from "./components/TaskList/Total";
import Pending from "./components/TaskList/Pending";
import Completed from "./components/TaskList/Completed";

function App() {
  const [activeTab, setActiveTab] = useState("All Tasks");
  const [taskModal, setTaskModal] = useState(false);

  const { totalTasks, completedTasks } = useAppContext();



  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className=" p-5 min-h-screen font-Mulish bg-gray-100">
      <div className=" flex flex-col sm:flex-row gap-5 justify-between items-center">
        <h1 className=" text-xl sm:text-3xl font-bold text-primary">
          Task Dashboard
        </h1>
        <Button
          onClick={() => {
            setTaskModal(true);
          }}
          content="Add Task"
          icon={<IoIosAddCircleOutline size={20} />}
        />
      </div>
      <TaskSummary />

      <Progress
        completedTasks={completedTasks.length}
        totalTasks={totalTasks.length}
      />

      <section>
        <div className=" my-10">
          <Tabs
            options={["All Tasks", "Pending", "Completed"]}
            active={activeTab}
            handleClick={handleTabClick}
          />
        </div>
        <div>
          {activeTab == "All Tasks" && <Total />}
          {activeTab == "Pending" && <Pending />}
          {activeTab == "Completed" && <Completed />}
        </div>
      </section>

      {taskModal && (
        <AddTask openModal={taskModal} setOpenModal={setTaskModal} />
      )}
    </main>
  );
}

export default App;
