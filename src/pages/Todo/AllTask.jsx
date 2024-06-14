import { useEffect, useState } from "react";

import AllTaskViewer from "./AllTaskViewer";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);

  // Function to fetch tasks from the server
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/task/all");
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
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((tas, index) => (
            <AllTaskViewer
              key={tas._id}
              task={tas}
              index={index + 1}
              onDelete={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
