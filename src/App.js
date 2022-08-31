import "./App.css";
import React, { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  let inputEl = useRef(null);

  //  Adding Todo to into the list

  function handleAddTodo() {
    if (inputEl.current.value.length === 0) {
      alert("Please enter a task");
    } else {
      setTodoList([...todoList, { task: currentTask, complate: false }]);
      console.log(todoList);
      inputEl.current.value = "";
      setCurrentTask("");
    }
  }

  // deleteTask
  function deleteTask(deleteTaskElment) {
    setTodoList(
      todoList.filter((task) => {
        return task !== deleteTaskElment;
      })
    );
  }

  const CompletedTask = (complateToTask) => {
    setTodoList(() =>
      todoList.map((task) => {
        return task.task == complateToTask
          ? { task: complateToTask, complate: true }
          : { task: complateToTask, complate: false };
      })
    );
  };

  return (
    <div className="App ">
      <h1 className="text-center text-[4rem] my-[29px] mr-[94px]  font-bold text-black">
        TODO APP
      </h1>
      <input
        ref={inputEl}
        type="text"
        className="App-input  bg-gradient-to-r from-indigo-800  to-indigo-700 
        text-white w-[550px] h-[55px]  my-5 ml-30 py-2 px-2 text-xl"
        placeholder="TASK..."
        onChange={(e) => setCurrentTask(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="Add w-[200px] h-[55px] mx-5 border-2 
        bg-white  text-black text-2xl  shadow-lg shadow-indigo-500/40
        hover:bg-indigo-500 hover:text-white rounded"
      >
        Add Task
      </button>
      <hr />
      <ul className="grid place-items-center my-5">
        {todoList.map((val, key) => {
          return (
            <div className="flex flex-row items-center mr-[128px]" key={key}>
              <li
                key={key}
                className={`shadow-zinc-100 shadow-xl
                 bg-transprant border-black border-2 
                rounded text-black w-[550px] h-[55px] my-2 
                 text-xl p-1 text-left p-2 ${
                   val.complate ? "line-through" : ""
                 }`}
              >
                {val.task}
              </li>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => CompletedTask(val.task)}
                className="w-10 h-10 mx-2 hover:text-green-700  cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
                <title>Complate</title>
              </svg>

              {/* deleteTask */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-2 hover:text-red-700 cursor-pointer"
                onClick={() => deleteTask(val)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                />
                <title>Remove</title>
              </svg>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
