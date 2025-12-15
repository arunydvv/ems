import Header from '../../Other/Header'
import TaskList from '../../Other/TaskList'
import TaskListNumbers from '../../Other/TaskListNumbers'

const EmployeeDashboard = () => {
  return (
      <>
          <div className='p-20 bg-[#1c1c1c] h-screen'>
              <Header />
              <TaskListNumbers />
              <TaskList/>
          </div>
      </>
  )
}

export default EmployeeDashboard