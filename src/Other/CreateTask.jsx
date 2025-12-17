import { useState } from "react";


const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  
  function handleSubmit(e) {
    e.preventDefault();
    console.log({
      taskDate,
      taskDescription,
      taskTitle,
      assignTo,
      category
    })


    setAssignTo('');
    setCategory('');
    setTaskDescription('');
    setTaskDate('');
    setTaskTitle('')
  }

  return (
    <div className="mt-2 w-full h-[40%] rounded-2xl p-2  backdrop-blur">
      <h2 className="mb-2 text-2xl font-semibold">Create New Task</h2>

      <form onSubmit={handleSubmit} className="flex gap-10 ">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 w-[45%]">
          {/* Task Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Task Title</label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              type="text"
              placeholder="Enter task title"
              className="rounded-lg border border-emerald-500/40 bg-transparent px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Due Date</label>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="rounded-lg border border-emerald-500/40 bg-transparent px-4 py-2 text-white outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          {/* Assign To */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Assign To</label>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              type="text"
              placeholder="Employee name"
              className="rounded-lg border border-emerald-500/40 bg-transparent px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              placeholder="Design, Dev, etc"
              className="rounded-lg border border-emerald-500/40 bg-transparent px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4 justify-between w-[45%]">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={6}
              placeholder="Describe the task in detail..."
              className="resize-none rounded-lg border border-emerald-500/40 bg-transparent px-4 py-2 text-white placeholder-gray-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30"
            />
          </div>

          <button
            type="submit"
            className="mt-2 rounded-full bg-emerald-600 px-8 py-3 font-medium text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask