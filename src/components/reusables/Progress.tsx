
export default function Progress({completedTasks,totalTasks}:{completedTasks:number, totalTasks:number}) {
     const completionPercentage =
       totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div>
      <div className="flex justify-between">
        <span className=' text-lg font-semibold'>
          {completionPercentage}%<span> Complete</span>
        </span>
        <span>
          {completedTasks} of {totalTasks} tasks
        </span>
      </div>
      <div className="bg-white mt-2 rounded-full h-2 w-full">
        <span
          style={{
            width: `${completionPercentage}%`,
            height: "100%",
            backgroundColor: "#035698",
            display: "block",
            borderRadius: "9999px",
          }}
        />
      </div>
    </div>
  );
}
