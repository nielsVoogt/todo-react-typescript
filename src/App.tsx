import { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";

import { ITodo } from "./interface";

function App() {
  const [todos, setTodo] = useState<ITodo[]>([]);

  const newTodo = (text: string) => {
    const newTodo: ITodo = {
      id: todos.length,
      text: text,
      checked: false,
    };
    setTodo([...todos, newTodo]);
  };

  const checkTodo = (id: number) => {
    setTodo(
      [...todos]
        .map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
        .sort((a, b) => Number(a.checked) - Number(b.checked))
    );
  };

  const deleteTodo = (id: number) => {
    setTodo([...todos].filter((t) => t.id !== id));
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">My todo list</h1>
      <div className="ml-auto mr-auto bg-slate-300 p-3 w-96 rounded-md">
        <Form newTodo={newTodo} />
        <ul className="list-none" data-cy="todo-list">
          {todos.length ? (
            todos.map((todo: ITodo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  checkTodo={checkTodo}
                  deleteTodo={deleteTodo}
                />
              );
            })
          ) : (
            <li data-cy="empty-message">
              <p>Er zijn geen todos</p>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
