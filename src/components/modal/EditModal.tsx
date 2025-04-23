import { Dispatch, SetStateAction, useState } from "react";
import GenericModal from "./Modal";
import { useAppContext } from "../../Store/ContextProvider";
import { ITasks } from "../../utils/interface&types";
import Form from "../reusables/Form";

export default function EditTask({
  openModal,
  setOpenModal,
  task,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  task: ITasks;
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
    updateTask(id, singleTask);
    setOpenModal(false);
  };
  return (
    <GenericModal
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="Update Task"
      subtitle="Update Task Details"
    >
      <Form
        handleAddTask={handleAddTask}
        handleChange={handleChange}
        singleTask={singleTask}
        setOpenModal={setOpenModal}
      />
    </GenericModal>
  );
}
