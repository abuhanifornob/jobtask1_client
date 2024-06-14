/* eslint-disable react/prop-types */
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewTask = ({ task, index, onDelete, onStateChange }) => {
  const { deadline, description, priority, title, _id } = task;

  return (
    <tr className="hover">
      <th>
        <label>
          <p>{index}</p>
        </label>
      </th>
      <td>
        <p>{title}</p>
      </td>
      <td className="w-52">{description}</td>
      <td>{deadline}</td>
      <td>
        <p>{priority}</p>
      </td>
      {task.status !== "complete" && (
        <>
          <th>
            <div className="form-control">
              <input
                onClick={() => onStateChange(_id)}
                type="checkbox"
                className="toggle toggle-primary"
              />
            </div>
          </th>
        </>
      )}

      {task.status !== "complete" && (
        <>
          <th>
            <Link
              to={`edit-task/${_id}`}
              className="text-white-400 text-2xl  flex justify-center items-center hover:bg-yellow-600 p-2 rounded-lg hover:text-white"
            >
              {" "}
              <FaRegEdit />
            </Link>
          </th>
          <th>
            <button
              onClick={() => onDelete(_id)}
              className="text-red-400 text-2xl flex justify-center items-center hover:bg-red-600 p-2 rounded-lg hover:text-white"
            >
              {" "}
              <RiDeleteBin5Line />
            </button>
          </th>
        </>
      )}
    </tr>
  );
};

export default ViewTask;
