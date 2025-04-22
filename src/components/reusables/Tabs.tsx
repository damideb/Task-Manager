export default function Tabs({
  options,
  active,
  handleClick,
}: {
  options: string[];
  active: string;
  handleClick: (tab: string) => void;
}) {
  return (
    <div className="flex overflow-x-auto gap-3 bg-gray-300 p-1 w-full sm:w-fit rounded-md">
      {options.map((opt) => {
        return (
          <button
            onClick={() => handleClick(opt)}
            key={opt}
            className={`${
              active == opt && "bg-white rounded-md font-medium"
            } cursor-pointer px-5 py-2 opacity-80 `}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
