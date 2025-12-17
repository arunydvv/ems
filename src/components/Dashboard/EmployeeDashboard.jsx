import Header from '../../Other/Header'
import TaskList from '../../Other/TaskList'
import TaskListNumbers from '../../Other/TaskListNumbers'

const EmployeeDashboard = ({ data }) => {




    const numbers = {
      total: data.tasks.length,
      active: data.tasks?.filter((task) => task.active)?.length ?? 0,
      completed: data.tasks?.filter((task) => task.completed)?.length ?? 0,
      failed: data.tasks?.filter((task) => task.failed)?.length ?? 0
    };
  return (
      <>
          <div className='p-20 bg-[#1c1c1c] h-screen'>
              <Header name = {data.name} />
              <TaskListNumbers numbers = {numbers} />
              <TaskList list={data.tasks} />
          </div>
      </>
  )
}

export default EmployeeDashboard