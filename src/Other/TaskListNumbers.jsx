import React from 'react'

const TaskBox = ({ number, text, colour }) => {
  return (
    <div
      className="w-[45%] px-10 py-5 bg-red-400  rounded-xl"
      style={{ backgroundColor: colour }}
    >
      <h2 className="text-3xl font-semibold ">{number}</h2>
      <h3 className="text-xl font-medium">{text}</h3>
    </div>
  );
};


const TaskListNumbers = ({numbers}) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <TaskBox
        number={numbers.total}
        text={"Total Tasks"}
        colour={"#34D399"}
      />
      <TaskBox
        number={numbers.active}
        text={"Active Tasks"}
        colour={"#38BDF8"}
      />
      <TaskBox
        number={numbers.completed}
        text={"Completed Tasks"}
        colour={"#A78BFA"}
      />
      <TaskBox
        number={numbers.failed}
        text={"Failed Tasks"}
        colour={"#FDBA74"}
      />
    </div>
  );
}

export default TaskListNumbers