import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { IContextProvider, ITasks } from "../utils/interface&types";

export const TaskContext = createContext<IContextProvider | null>(null);

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, setTasks] = useState<ITasks[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3001/tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTask = async (newTask: ITasks) => {
    try {
      const response = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = await response.json();
       
      fetchTasks()
      console.log("Task added:", data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (id: string, updatedInfo: ITasks) => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      });

      const data = await response.json();
      fetchTasks();
      console.log("Task updated:", data);
     
    } catch (err) {
      console.log(err);
    }
  };

   const deleteTask = async (id: string) => {
     try {
       await fetch(`http://localhost:3001/tasks/${id}`, {
         method: "DELETE",
       });
      
       console.log("Task deleted");
       fetchTasks()
     } catch (err) {
       console.log(err);
     }
   };

  const totalTasks = useMemo(() => {
    return tasks;
  }, [tasks]);
  const completedTasks = useMemo(() => {
    const task = tasks.filter((task) => task.status == "Completed");
    return task;
  }, [tasks]);
  const pendingTasks = useMemo(() => {
    const task = tasks.filter((task) => task.status == "Pending");
    return task;
  }, [tasks]);

  useEffect(() => {
    fetchTasks();
  }, []);
 
  return (
    <TaskContext.Provider
      value={{
      tasks,
      setTasks,
      addTask,
      totalTasks,
      pendingTasks,
      completedTasks,
      updateTask,
      deleteTask
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useAppContext must be used within a ThemeProvider");
  }
  return context;
};
