import { useEffect, useState } from "react";
import ViewTask from "./ViewTask";

const CompleteTask = () => {
  const [completeTasks, setcompleteTasks] = useState([]);

  // Function to fetch tasks from the server
  const fetchcompleteTasks = async () => {
    try {
      const res = await fetch("http://localhost:3000/task/complete");
      const data = await res.json();
      setcompleteTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchcompleteTasks();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {completeTasks.map((tas, index) => (
            <ViewTask key={tas._id} task={tas} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompleteTask;
