import React from 'react'

const Tasks = ({ task}) => {
  return (
    <div className="shrink-0 h-full w-75 bg-[#3f2d2d] rounded-xl px-4">
      <div className="flex justify-between p-5">
        <h3 className="bg-red-600 text-sm px-3 py-1 font-bold rounded">
          {task.taskCategory}
        </h3>
        <h4 className="text-sm">{task.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2 ">{task.taskDescription}</p>
    </div>
  );
};


const TaskList = ({ list }) => {
  console.log(list)
  return (
    <div className="flex no-scrollbar overflow-x-auto items-center gap-5 h-[55%] w-full  mt-10 flex-nowrap py-5 ">
      {list.map((item) => (
        <Tasks key={item.id} task={item} />
      ))}
    </div>
  );
}






export default TaskList