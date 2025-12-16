import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null); // "admin" | "employee" | null
  const [loggedInUserData, setLoggedInUserData] = useState(null);


  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedInUserData(loggedInUser.data);
      }
    }
  }, [authData]);


  const handleLogin = (email, password) => {
    const adminValue = authData?.admin?.find(
      (adm) => adm.email === email && adm.password === password
    );

    if (adminValue) {
      setUser("admin");
      setLoggedInUserData(adminValue);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
          data: adminValue,
        })
      );
      return;
    }

    const employeeValue = authData?.employees?.find(
      (emp) => emp.email === email && emp.password === password
    );

    if (employeeValue) {
      setUser("employee");
      setLoggedInUserData(employeeValue);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employeeValue,
        })
      );
      return;
    }

    alert("Invalid credentials");
  };


  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard data={loggedInUserData} />}
      {user === "employee" && <EmployeeDashboard data={loggedInUserData} />}
    </>
  );
};

export default App;
