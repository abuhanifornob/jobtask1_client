import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OngoingTaskEdit = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "",
  });

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await fetch(`http://localhost:3000/task/edit-task/${id}`);

        const data = await res.json();
        // Update task state with fetched data

        setTask({
          title: data.title,
          description: data.description,
          deadline: data.deadline,
          priority: data.priority,
        });
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);
  console.log(task);

  console.log(task.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FormData", task);
    fetch(`http://localhost:3000/task/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setTask({
      title: "",
      description: "",
      deadline: "",
      priority: "",
    });
  };
  return (
    <div className="">
      <h1 className="text-2xl text-center mt-8 font-bold">Edit Task</h1>
      <div className="max-w-screen-md mx-auto bg-violet-100 p-6 rounded-lg border-spacing-1 my-12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
              className="mt-1 p-2 w-full border-slate-950 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block font-medium">
              Description
            </label>
            <textarea
              id="description"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label htmlFor="deadline" className="block font-medium">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              value={task.deadline}
              onChange={(e) => setTask({ ...task, deadline: e.target.value })}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="priority" className="block font-medium">
              Priority
            </label>
            <select
              id="priority"
              value={task.priority}
              onChange={(e) => setTask({ ...task, priority: e.target.value })}
              className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <motion.button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Edit Task
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default OngoingTaskEdit;
