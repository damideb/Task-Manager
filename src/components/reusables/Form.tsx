import { Dispatch, SetStateAction } from "react";
import Button from "./Button";

export default function Form({
  handleAddTask,
  singleTask,
  handleChange,
  setOpenModal,
}: {
  handleAddTask: (e: React.FormEvent) => void;
  singleTask: { title: string; status: string };
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}) {
  return (
    <form onSubmit={handleAddTask} role="form">
      <div className=" space-y-3 mb-5">
        <div className="flex flex-col gap-1">
          <label className="font-medium" htmlFor="Task tile">
            Task Title
          </label>
          <input
            id="Task title"
            className="w-full border outline-none p-3 rounded-md shadow-xs border-gray-300"
            placeholder="Enter task title"
            value={singleTask.title}
            name="title"
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className=" font-medium" htmlFor="Task status">
            Task Status
          </label>
          <select
            name="status"
            id="Task status"
            value={singleTask.status}
            onChange={handleChange}
            className="w-full border outline-none p-3 rounded-md shadow-xs border-gray-300"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className=" flex justify-end gap-2">
        <Button
          content="Cancel"
          type="button"
          onClick={() => setOpenModal(false)}
          styles="bg-white hover:bg-primary  text-black!  border-black border!"
        />
        <Button type="submit" content="Add Task" />
      </div>
    </form>
  );
}
