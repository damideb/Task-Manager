import { MdChecklist } from "react-icons/md";

export default function TotalTasks({ totalTasks }: { totalTasks: number }) {
  console.log('oksy')
  return (
    <div className=" sm:col-span-2 p-5 grid col-span-3  items-center  sm:row-span-full bg-white border border-gray-300 shadow-sm rounded-lg">
      <div>
        <div className="flex justify-between">
          {" "}
          <h3 className="font-medium text-lg">Total Tasks</h3>
          <span>
            <MdChecklist size={30} />
          </span>
        </div>
        <p className=" text-4xl text-primary py-1 font-bold">{totalTasks}</p>
        <p className=" opacity-80 text-sm">All tasks in your dashboard</p>
      </div>
    </div>
  );
}
