import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function CompletedTasks({
  completedTasks,
}: {
  completedTasks: number;
}) {
  return (
    <div className=" col-span-3 p-5 grid  items-center  row-span-1 bg-white border border-gray-300 shadow-sm rounded-lg">
      <div>
        <div className="flex justify-between">
          {" "}
          <h3 className="font-medium text-lg">Completed</h3>
          <span>
            <IoMdCheckmarkCircleOutline size={30} />
          </span>
        </div>
        <p className=" text-4xl text-primary py-1 font-bold">
          {completedTasks}
        </p>
        <p className=" opacity-80 text-sm">All tasks you have finished</p>
      </div>
    </div>
  );
}
