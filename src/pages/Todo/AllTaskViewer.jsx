import { RiDeleteBin5Line } from "react-icons/ri";
/* eslint-disable react/prop-types */
const AllTaskViewer = ({ task, onDelete, index }) => {
  const { deadline, description, priority, title, _id, status } = task;
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
      <td>
        <p>{status}</p>
      </td>

      <th>
        <button
          onClick={() => onDelete(_id)}
          className="text-red-400 text-2xl flex justify-center items-center hover:bg-red-600 p-2 rounded-lg hover:text-white"
        >
          {" "}
          <RiDeleteBin5Line />
        </button>
      </th>
    </tr>
  );
};

export default AllTaskViewer;
