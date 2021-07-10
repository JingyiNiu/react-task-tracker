import { useState, useEffect } from "react";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import TaskContainer from "./components/TaskContainer/TaskContainer.component";

import "./App.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div>
      <Header />
      <TaskContainer
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        onAdd={addTask}
        showAddTask={showAddTask}
        setShowAddTask={setShowAddTask}
      />
      <Footer />
    </div>
  );
}

export default App;
