import { useEffect, useState } from "react";
import ViewTask from "./ViewTask";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/task");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Delete Task
  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:3000/task/${taskId}`, {
        method: "DELETE",
      });
      // Refetch tasks after deleting a task
      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  const stateChangeTask = async (changeId) => {
    console.log(changeId);
    try {
      await fetch(`http://localhost:3000/task/status/${changeId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: "ongoing" }),
      });
      // Refetch tasks after deleting a task
      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>SL.NO</label>
            </th>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Onging</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((tas, index) => (
            <ViewTask
              key={tas._id}
              task={tas}
              index={index + 1}
              onDelete={deleteTask}
              onStateChange={stateChangeTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;
