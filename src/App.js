import { useState } from "react";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import TaskContainer from "./components/TaskContainer/TaskContainer.component";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "buy milk", day: "Feb 1st at 10:00am", reminder: false },
    { id: 2, text: "go doctor", day: "Feb 2nd at 2:30pm", reminder: true },
    { id: 3, text: "pick up Tom", day: "Feb 1st at 8:00pm", reminder: true },
  ]);

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder:!task.reminder } : task
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
      />
      <Footer />
    </div>
  );
}

export default App;
