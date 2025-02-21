import { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return; 
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-black p-2 rounded w-full text-black"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Ajouter
      </button>
    </form>
  );
};

export default TodoForm;
