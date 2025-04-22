import { Dispatch, SetStateAction, useState } from "react";
import GenericModal from "./Modal";
import Button from "../reusables/Button";
import { useAppContext } from "../../Store/ContextProvider";

export default function AddTask({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [singleTask, setSingleTask] = useState({
    title: "",
    status: "Pending",
  });

  const { addTask } = useAppContext();

  const generateDateTimeId = () => {
    const now = new Date();

    const pad = (n: number) => n.toString().padStart(2, "0");

    const datePart = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(
      now.getDate()
    )}`;
    const timePart = `${pad(now.getHours())}${pad(now.getMinutes())}${pad(
      now.getSeconds()
    )}`;

    return `${datePart}-${timePart}`;
  };

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
    e.preventDefault();
    addTask({ ...singleTask, id: generateDateTimeId() });
    setOpenModal(false);
  };
  return (
    <GenericModal
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="Add New Task"
      subtitle="Enter the details of your new tasks"
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
            styles="bg-white hover:bg-primary  text-black!  border-black border!"
          />
          <Button type="submit" content="Add Task" />
        </div>
      </form>
    </GenericModal>
  );
}
