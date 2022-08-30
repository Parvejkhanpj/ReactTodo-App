import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  let inputEl = useRef(null);

  function handleAddTodo() {
    if (inputEl.current.value.length === 0) {
      alert("Please enter a task");
    } else {
      setTodoList([...todoList, currentTask]);
      console.log(todoList);
      inputEl.current.value = "";
      setCurrentTask("");
    }
  }

  function deleteTask(deleteTaskElment) {
    setTodoList((current) =>
      current.filter((task) => {
        return task.id !== deleteTaskElment;
      })
    );
  }

  return (
    <div className="App ">
      <h1 className="text-center text-3xl my-3 font-bold text-green-500">
        {" "}
        TODO APP
      </h1>
      <input
        ref={inputEl}
        type="text"
        className="App-input  bg-gradient-to-r from-indigo-500  to-sky-500 text-white w-[400px] h-[45px]  my-5 ml-30 py-2 px-2 text-xl"
        placeholder="TASK..."
        onChange={(e) => setCurrentTask(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="Add w-[150px] h-[45px] mx-5 border-2 bg-gradient-to-l from-green-800 to-green-400  text-white text-xl  hover:from-green-900 hover:to-green-700 rounded"
      >
        Add Task
      </button>
      <hr />
      <ul className="grid place-items-center my-5">
        {todoList.map((todo, key) => {
          return (
            <div key={key} className="flex flex-row items-center ">
              <li className="bg-gradient-to-r from-cyan-700 to-blue-500 text-white w-[500px] h-[40px] my-2 text-xl p-1 text-left p-2">
                {todo}
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-5 hover:text-red-700"
                onClick={() => deleteTask()}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
              </svg>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
