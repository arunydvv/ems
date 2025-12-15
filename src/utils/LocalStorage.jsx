export const employeeData = [
  {
    id: 1,
    email: "john.doe@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create UI for login page using Tailwind",
        taskDate: "2025-01-10",
        taskCategory: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve alignment issue in navbar",
        taskDate: "2025-01-05",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Integrate task API",
        taskDate: "2025-01-02",
        taskCategory: "Backend",
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard UI",
        taskDescription: "Build admin dashboard layout",
        taskDate: "2025-01-12",
        taskCategory: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Add validation to forms",
        taskDate: "2025-01-06",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy app to server",
        taskDate: "2025-01-03",
        taskCategory: "DevOps",
      },
    ],
  },
  {
    id: 3,
    email: "alex.brown@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare project documentation",
        taskDate: "2025-01-11",
        taskCategory: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix reported UI bugs",
        taskDate: "2025-01-07",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Optimization",
        taskDescription: "Improve app performance",
        taskDate: "2025-01-04",
        taskCategory: "Optimization",
      },
    ],
  },
  {
    id: 4,
    email: "emma.wilson@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Task Model",
        taskDescription: "Design task data structure",
        taskDate: "2025-01-13",
        taskCategory: "Backend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Code",
        taskDescription: "Clean up old components",
        taskDate: "2025-01-08",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Testing Setup",
        taskDescription: "Setup testing environment",
        taskDate: "2025-01-05",
        taskCategory: "Testing",
      },
    ],
  },
  {
    id: 5,
    email: "liam.johnson@company.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "User Research",
        taskDescription: "Analyze user requirements",
        taskDate: "2025-01-14",
        taskCategory: "Research",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "UI Review",
        taskDescription: "Review UI consistency",
        taskDate: "2025-01-09",
        taskCategory: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Setup CI/CD",
        taskDescription: "Configure CI/CD pipeline",
        taskDate: "2025-01-06",
        taskCategory: "DevOps",
      },
    ],
  },
];

export const adminData = [
  {
    id: 101,
    email: "admin@company.com",
    password: "123",
  },
];

export function getLocalStorageItem() {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log("Employees from LS:", employees);
    console.log("Admin from LS:", admin);
}

export function setLocalStorageItem() {
      localStorage.setItem("employees", JSON.stringify(employeeData));
      localStorage.setItem("admin", JSON.stringify(adminData));
}
