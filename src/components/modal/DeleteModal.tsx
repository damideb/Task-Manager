import { Dispatch, SetStateAction } from "react";
import GenericModal from "./Modal";
import Button from "../reusables/Button";
import { useAppContext } from "../../Store/ContextProvider";

export default function DeleteTask({
  openModal,
  setOpenModal,
  id,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  id: string;
}) {
  const { deleteTask } = useAppContext();

  const handleDeleteTask = async (id: string) => {
    deleteTask(id);
    setOpenModal(false);
  };


  return (
    <GenericModal
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="Are you sure"
      subtitle="This action cannot be undone. This will permanently delete the task"
    >
      <div className=" flex justify-end gap-2">
        <Button
          content="Cancel"
          type="button"
          onClick={() => setOpenModal(false)}
          styles="bg-white hover:bg-primary text-black! border-black border!"
        />
        <Button
          type="submit"
          content="Delete"
          onClick={() => handleDeleteTask(id)}
          styles="bg-red-500 hover:bg-red-700"
        />
      </div>
    </GenericModal>
  );
}
