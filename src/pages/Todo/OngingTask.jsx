import { useEffect, useState } from "react";
import ViewTask from "./ViewTask";

const OngingTask = () => {
  const [ongoingTasks, setOngoingTasks] = useState([]);

  // Function to fetch tasks from the server
  const fetchOngoingTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/task/ongoing");
      const data = await res.json();
      setOngoingTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchOngoingTasks();
  }, []);

  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:3000/task/${taskId}`, {
        method: "DELETE",
      });
      // Refetch tasks after deleting a task
      await fetchOngoingTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const stateOngoingChangeTask = async (changeId) => {
    console.log(changeId);
    try {
      await fetch(`http://localhost:3000/task/status/${changeId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ status: "complete" }),
      });
      // Refetch tasks after deleting a task
      await fetchOngoingTasks();
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
            <th>Complete</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {ongoingTasks.map((tas, index) => (
            <ViewTask
              key={tas._id}
              task={tas}
              index={index + 1}
              onDelete={deleteTask}
              onStateChange={stateOngoingChangeTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OngingTask;
