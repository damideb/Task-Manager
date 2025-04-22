import { Dispatch, SetStateAction, useState } from "react";
import GenericModal from "./Modal";
import Button from "../reusables/Button";
import { useAppContext } from "../../Store/ContextProvider";
import { ITasks } from "../../utils/interface&types";

export default function EditTask({
  openModal,
  setOpenModal,
  task
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  task:ITasks
}) {
  const [singleTask, setSingleTask] = useState(task);

  const { updateTask } = useAppContext();

 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSingleTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleAddTask = (e: React.FormEvent) => {
    const id = singleTask.id;
    e.preventDefault();
    updateTask(id,singleTask);
    setOpenModal(false);
  };
  return (
    <GenericModal
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="Update Task"
      subtitle="Update Task Details"
    >
      <form onSubmit={handleAddTask}>
        <div className=" space-y-3 mb-5">
          <div className="flex flex-col gap-1">
            <label className="font-medium">Task Title</label>
            <input
              className="w-full border outline-none p-3 rounded-md shadow-xs border-gray-300"
              placeholder="Enter task title"
              value={singleTask.title}
              name="title"
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className=" font-medium">Task Status</label>
            <select
              name="status"
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
            styles="bg-white hover:bg-primary text-black! border-black border!"
          />
          <Button type="submit" content="Update Task" />
        </div>
      </form>
    </GenericModal>
  );
}
