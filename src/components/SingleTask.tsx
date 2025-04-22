import { useEffect, useRef, useState } from "react";
import { ITasks } from "../utils/interface&types";
import { IoIosMore } from "react-icons/io";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import EditTask from "./modal/EditModal";
import DeleteTask from "./modal/DeleteModal";
import { useAppContext } from "../Store/ContextProvider";

export default function SingleTask({ task }: { task: ITasks }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const { updateTask } = useAppContext();

  const handleStatusEdit = (value: string) => {
    updateTask(task.id, { ...task, status: value });
  };
  const capitalizeWord = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
 const dropdownRef = useRef<HTMLDivElement |null>(null);

 const handleClickOutside = (e: MouseEvent) => {
   if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
     setShowDropdown(false);
   }
 };

 useEffect(() => {
   if (showDropdown) {
     document.addEventListener("mousedown", handleClickOutside);
   } else {
     document.removeEventListener("mousedown", handleClickOutside);
   }

   return () => {
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, [showDropdown]);
  return (
    <div className=" bg-white my-2 relative rounded-lg border-2 border-gray-200 p-5 flex justify-between ">
      <div className=" flex items-center gap-5">
        <input
          type="checkbox"
          checked={task.status === "Completed"}
          value={task.status}
          onChange={() =>
            handleStatusEdit(
              task.status === "Completed" ? "Pending" : "Completed"
            )
          }
          className="size-5 accent-primary"
        />
        <h3
          className={`${
            task.status == "Completed" && " line-through text-black/50"
          } `}
        >
          {capitalizeWord(task.title)}
        </h3>
      </div>

      <button className=" cursor-pointer ">
        <IoIosMore
          className=" ml-auto "
          size={25}
          onClick={() => setShowDropdown((prev) => !prev)}
        />
        {showDropdown && (
          <div
            ref={dropdownRef}
            className="w-50 z-50 grid gap-2 shadow border border-gray-100 right-5 bg-white text-left px-2 py-3 absolute"
          >
            <div
              onClick={() => setShowEditModal(true)}
              className=" hover:bg-[#F4FaF5] py-1 flex gap-2 items-center"
            >
              <FaRegEdit /> <p>Edit</p>
            </div>
            <div
              onClick={() => setShowDeleteModal(true)}
              className="hover:bg-[#F4FaF5] py-1 flex gap-2 items-center"
            >
              <MdDeleteOutline /> <p>Delete</p>
            </div>
            <div
              onClick={() =>
                handleStatusEdit(
                  task.status === "Completed" ? "Pending" : "Completed"
                )
              }
              className="hover:bg-[#F4FaF5] py-1 flex gap-2 items-center"
            >
              <FaCheck />
              <p>
                {" "}
                Mark as{" "}
                {task.status === "Completed" ? "Incomplete" : "Complete"}
              </p>
            </div>
          </div>
        )}
      </button>
      {showEditModal && (
        <EditTask
          openModal={showEditModal}
          setOpenModal={setShowEditModal}
          task={task}
        />
      )}
      {showDeleteModal && (
        <DeleteTask
          openModal={showDeleteModal}
          setOpenModal={setShowDeleteModal}
          id={task.id}
        />
      )}
    </div>
  );
}
