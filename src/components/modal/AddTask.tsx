import { Dispatch, SetStateAction, useState } from "react";
import GenericModal from "./Modal";
import { useAppContext } from "../../Store/ContextProvider";
import Form from "../reusables/Form";

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
      <Form
        handleAddTask={handleAddTask}
        handleChange={handleChange}
        singleTask={singleTask}
        setOpenModal={setOpenModal}
      />
    </GenericModal>
  );
}
