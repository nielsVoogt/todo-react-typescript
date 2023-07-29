import { ITodo } from "../interface";

interface Iprops {
  todo: ITodo;
  deleteTodo: (todo: number) => void;
  checkTodo: (todo: number) => void;
}

export default function Todo({ todo, deleteTodo, checkTodo }: Iprops) {
  return (
    <li
      className="bg-white w-full flex mt-4 p-2 rounded-md items-center"
      data-cy="list-item"
    >
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => checkTodo(todo.id)}
        className="mr-3"
      />
      {todo.text}
      <button
        className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded ml-auto"
        onClick={() => deleteTodo(todo.id)}
        data-cy="delete-todo"
      >
        Delete
      </button>
    </li>
  );
}
