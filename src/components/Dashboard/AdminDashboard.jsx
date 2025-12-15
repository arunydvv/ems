import React from "react";
import Header from "../../Other/Header";
import CreateTask from "../../Other/CreateTask";import AllTasks from "../../Other/AllTasks";


const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full p-6 text-white">
      <Header />
      <CreateTask />
      <AllTasks />

     
    </div>
  );
};

export default AdminDashboard;
