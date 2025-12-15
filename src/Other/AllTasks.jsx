import React from "react";

const Task = ({ employeeName, Task, Status }) => {
  return (
    <div className="bg-[#53534e] py-2 p-4 rounded flex items-center justify-between px-5">
      <h2>{employeeName}</h2>
          <h3>{Task}</h3>
      <h5>{Status}</h5>
    </div>
  );
};

const AllTasks = () => {
  return (
      <div className="flex flex-col ">
          <h1 className="pt-2 pl-10 font-semibold flex justify-center">All Tasks</h1>
      <div className=" no-scrollbar flex flex-col  h-38 p-1 mt-1 overflow-scroll gap-2">
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
        <Task
          employeeName={"Arun"}
          Status={"Todo"}
          Task={"Complete Your work"}
        />
      </div>
    </div>
  );
};

export default AllTasks;
