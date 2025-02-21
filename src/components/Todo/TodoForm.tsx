import { useState } from "react";
import { useFormStatus } from "react-dom";


interface TodoFormProps {
  addTodo: (text: string) => Promise<void>;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!text.trim()) return; 
  //   addTodo(text);
  //   setText("");
  // };

  async function action(formData: FormData) {
    const text = formData.get("todo") as string;
    if (!text.trim()) return;
    
    // simuler le pending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await addTodo(text);
  }
  return (
    <form action={action}  className="flex gap-2 mb-4">
      <input
        type="text"
        name= "todo"
        placeholder="Ajouter une tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-black p-2 rounded w-full text-black"
      />
      <SubmitButton />
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  console.log({ pending });
  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-blue-500 text-white p-2 rounded ${
        pending ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Ajout en cours..." : "Ajouter"}
    </button>
  );
};

export default TodoForm;
