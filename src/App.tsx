import { useState, useOptimistic } from "react";
import TodoList from "./components/Todo/TodoList";
import TodoForm from "../src/components/Todo/TodoForm";

import './App.css'


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);

  const addTodo = async (text: string): Promise<void> => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id: number) => {
    setOptimisticTodos((prevTodos) => 
      prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  //Mise à jour réelle après un petit délai (ex: si on attend une API)
  setTimeout(() => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, 1000);
    
    // setTodos(todos.map(todo => 
    //   todo.id === id ? { ...todo, completed: !todo.completed } : todo
    // ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ma To-Do App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={optimisticTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App
