import React from 'react'

const Tasks = () => {
  return (
    <div className="shrink-0 h-full w-75 bg-[#3f2d2d] rounded-xl px-4">
      <div className= 'flex justify-between p-5'>
        <h3 className="bg-red-600 text-sm px-3 py-1 font-bold rounded">High</h3>
        <h4 className='text-sm'>9 July 2004</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>Make a youtube vedio</h2>
      <p className='text-sm mt-2 ' >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad reprehenderit impedit, quaerat ab ipsum.
      </p>
    </div>
  );
};


const TaskList = () => {
  return (
    <div className="flex no-scrollbar overflow-x-auto items-center gap-5 h-[55%] w-full  mt-10 flex-nowrap py-5 ">
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
    </div>
  );
}






export default TaskList