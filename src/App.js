import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todolist, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = (event) => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todolist, task]);
  };
  const deleteTask = (id) => {
    const newTodoList = todolist.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const completedTask = (id) => {
    setTodoList(
      todolist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="flex flex-col items-center relative">
      <div className="fixed absolute top-5">
        <h1 className="text-4xl font-bold mb-6">Todo List</h1>
        <div className="flex w-full max-w-lg" style={{ width: "35rem" }}>
          <input
            type="text"
            placeholder="Add a task..."
            className="border-2 border-gray-400 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-r-md px-4 py-2"
            onClick={addTask}>
            Add Task
          </button>
        </div>
        <div className="mt-6 w-full absolute max-w-lg">
          {todolist.map((task) => {
            return (
              <Task
                taskName={task.taskName}
                id={task.id}
                deleteTask={deleteTask}
                completed={task.completed}
                completedTask={completedTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
