import { MdOutlinePendingActions } from "react-icons/md";

export default function PendingTasks({
  pendingTasks,
}: {
  pendingTasks: number;
}) {
  return (
    <div className=" bg-white col-span-3 p-5 grid  items-center  row-span-1  border border-gray-300 shadow-sm rounded-lg">
      <div>
        <div className="flex justify-between">
          {" "}
          <h3 className="font-medium text-lg">Pending</h3>
          <span>
            <MdOutlinePendingActions size={30} />
          </span>
        </div>
        <p className=" text-4xl text-primary py-1 font-bold">{pendingTasks}</p>
        <p className=" opacity-80 text-sm">All tasks yet to be completed</p>
      </div>
    </div>
  );
}
