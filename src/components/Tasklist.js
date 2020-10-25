import React from "react";

export default function Tasklist() {
  const [tasks, settasks] = React.useState([]);

  const handleAddTask = function () {
    const newTasks = [...tasks];
    newTasks.push({ title: "" });
    settasks(newTasks);
  };
  return (
    <div>
      <div className="">
        <button
          onClick={handleAddTask}
          className=" text-2xl  text-bold m-3 py-2 px-4 border-solid border-4 border-gray-600"
        >
          +
        </button>
      </div>
      <div>
        <ul className="rounded border border-grey 600 p-4">
          {tasks.map((task, i) => {
            return (
              <li
                className="group bg-white hover:bg-teal-500 border-solid border-t border-grey-600"
                key={i}
              >
                {i + 1}.{" "}
                <input
                  className="bg-transparent focus:text-white focus:text-bold p-4 bg-none outline-none min-w-full"
                  defaultValue={task.title}
                  placeholder="Enter task details"
                  onChange={(e) => {
                    task.title = e.target.value;
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
