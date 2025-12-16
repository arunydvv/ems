import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Task = ({ data }) => {
  const numbers = {
    total: data.tasks.length,
    active: data.tasks.filter((task) => task.active).length,
    completed: data.tasks.filter((task) => task.completed).length,
    failed: data.tasks.filter((task) => task.failed).length,
  };

  return (
    <div className=" py-3 px-5 rounded flex items-center justify-between text-white">
      {/* Employee Name */}
      <h2 className="font-semibold w-40">{data.name}</h2>

      {/* Stats */}
      <h3 className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white"></span>
        Total: {numbers.total}
      </h3>

      <h3 className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
        Active: {numbers.active}
      </h3>

      <h3 className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-400"></span>
        Completed: {numbers.completed}
      </h3>

      <h3 className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-400"></span>
        Failed: {numbers.failed}
      </h3>
    </div>
  );
};



const AllTasks = () => {
  const data = useContext(AuthContext);

  return (
    <div className="flex flex-col ">
      <h1 className="mt-4 font-semibold text-3xl text-center text-white">
        All Tasks
      </h1>

      <div className="no-scrollbar flex flex-col h-44 p-2 mt-2 overflow-scroll gap-2 border-amber-300 rounded-t-lg border">
        {data?.employees?.map((item) => (
          <Task key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AllTasks;



