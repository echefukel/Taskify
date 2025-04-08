import { FaTrash } from "react-icons/fa6";

export default function TodoItem({ todo, onToggle , onDelete }) {
    return (
      <li
        
        className={`flex justify-between items.center cursor-pointer border w-full p-4 border-gray-200 rounded-md bg-gray-100 shadow-md ${
          todo.done ? "line-through text-gray-500" : ""
        }`}
      >
        <span onClick={onToggle} className="flex-1 cursor-pointer">{todo.text}</span>
        <button onClick={onToggle} className="text-green-600">{todo.done ? "undo" : "Complete"}</button>
        <FaTrash className="ml-4 text-blue-500" onClick={onDelete} />
      </li>
    );
  }
