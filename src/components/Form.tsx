import { useForm } from "react-hook-form";

interface FormData {
  todo: string;
}

interface FormProps {
  newTodo: (text: string) => void;
}

function Form({ newTodo }: FormProps) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const { todo } = data;
    newTodo(todo);
    resetField("todo");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex">
        <input
          placeholder="Type iets"
          data-cy="todo-input"
          {...register("todo", { required: true })}
          className={
            "flex-1 p-2 rounded-tl-md rounded-bl-md border  " +
            (errors.todo ? "border-red-700" : undefined)
          }
        />

        <input
          data-cy="submit"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-no-wrap"
        />
      </div>
      {errors.todo && (
        <span data-cy="todo-form-error" className="mt-1 text-sm text-red-600">
          This field is required
        </span>
      )}
    </form>
  );
}

export default Form;
