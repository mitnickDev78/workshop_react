interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TodoItemProps {
    todo: Todo;
    toggleComplete: (id: number) => void;
    deleteTodo: (id: number) => void;
  }
  
  const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
    return (
      <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="cursor-pointer"
          />
          <span className={todo.completed ? "line-through text-gray-500" : "text-black"}>{todo.text}</span>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          Supprimer
        </button>
      </div>
    );
  };
  
  export default TodoItem;
  