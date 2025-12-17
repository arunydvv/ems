
const Tasks = ({ task }) => {
  // Determine background color
  const getBgColor = () => {
    if (task.failed) return "bg-red-900/60";
    if (task.completed) return "bg-green-900/60";
    if (task.active) return "bg-yellow-900/60";
    if (task.newTask) return "bg-blue-900/70";
    return "bg-neutral-800";
  };

  return (
    <div
      className={`shrink-0 h-full w-3/7 rounded-xl px-4 py-4 text-white ${getBgColor()}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="bg-black/40 text-sm px-3 py-1 font-bold rounded">
          {task.taskCategory}
        </h3>
        <h4 className="text-sm text-gray-300">{task.taskDate}</h4>
      </div>

      {/* Content */}
      <h2 className="mt-4 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{task.taskDescription}</p>

      {/* Status & Actions */}
      <div className="mt-5 flex  justify-between items-center">
        <div className="flex flex-col">
          {/* Status Text */}
          {task.completed && (
            <span className="text-green-400 font-semibold">✅ Completed</span>
          )}

          {task.failed && (
            <span className="text-red-400 font-semibold">❌ Failed</span>
          )}

          {task.active && !task.completed && !task.failed && (
            <span className="text-yellow-400 font-semibold">🔄 Active</span>
          )}

          {task.newTask && (
            <span className="text-blue-400 font-semibold">🆕 New Task</span>
          )}
        </div>

        {/* Buttons */}
        <div className="ml-auto flex flex-col items-center justify-between">
          {task.newTask && (
            <button className="bg-green-600 hover:bg-green-700 text-sm px-4 py-1 m-2 rounded cursor-pointer">
              Mark as Completed
            </button>
          )}

          {task.active && !task.completed && !task.failed && (
            <button className="bg-yellow-600 hover:bg-yellow-700 text-sm px-4 py-1 rounded cursor-pointer">
              Mark as Todo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};





const TaskList = ({ list }) => {
  return (
    <div className="flex no-scrollbar overflow-x-auto items-center gap-5 h-[55%] w-full  mt-10 flex-nowrap py-5 ">
      {list.map((item) => (
        <Tasks key={item.id} task={item} />
      ))}
    </div>
  );
}






export default TaskList