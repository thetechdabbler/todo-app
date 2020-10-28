import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Tasklist() {
  const [tasks, settasks] = React.useState(() => {
    return JSON.parse(window.localStorage.getItem("tasks")) || [];
  });

  const handleAddTask = function () {
    const newTasks = [...tasks];
    newTasks.push({ title: "", id: uuidv4() });
    settasks(newTasks);
  };

  const handleUpdateTask = function (e) {
    const itemIndex = e.target.dataset.index;
    const newTasks = [...tasks];
    newTasks[itemIndex].title = e.target.value;
    settasks(newTasks);
  };

  const handleDelete = function (e) {
    const itemIndex = e.target.dataset.index;
    const newTasks = [...tasks];
    newTasks.splice(itemIndex, 1);
    settasks([...newTasks]);
  };

  React.useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div>
      <div className="">
        <button
          onClick={handleAddTask}
          className="text-2xl  text-bold m-3 py-2 px-4 border-solid border-4 border-gray-600"
        >
          +
        </button>
      </div>
      <div>
        <ul className="rounded border border-grey 600 p-4">
          {tasks.map((task, i) => {
            return (
              <li
                className="group bg-white hover:border hover:border-solid hover:border-t hover:border-grey-600 "
                key={task.id}
              >
                <div className="flex">
                  <div className="flex-initial  p-4 w-4"> {i + 1}. </div>
                  <div className="flex-auto">
                    <input
                      className="bg-transparent p-4 focus:text-bold bg-none outline-none min-w-full"
                      defaultValue={task.title}
                      placeholder="Enter task details"
                      data-index={i}
                      onChange={handleUpdateTask}
                    />
                  </div>
                  <button
                    className="flex-initial"
                    data-index={i}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
