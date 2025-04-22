import { SetStateAction } from "react";

export interface ITasks {
  title: string;
  status: string;
  id: string;
}

export interface IContextProvider {
  tasks: ITasks[];
  setTasks: React.Dispatch<SetStateAction<ITasks[]>>;
  addTask: (newTask: ITasks) => Promise<void>;
  pendingTasks: ITasks[];
  totalTasks: ITasks[];
  completedTasks: ITasks[];
  updateTask:(id:string, newTask:ITasks)=>Promise<void>;
  deleteTask:(id:string)=>Promise<void>
}
