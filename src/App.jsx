import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import { saveTodos, loadTodos } from "./utils/storage";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const [isInitialized, setIsInitialized] = useState(false);
  // load todos from local storage
  useEffect(() => {
    const storedData = loadTodos();
    setTodos(storedData.todos);

    setIsInitialized(true);
  }, []);
  // save todos to local storage
  useEffect(() => {
    if (isInitialized) {
      saveTodos(todos);
      console.log(todos);
    }
  }, [todos, isInitialized]);
  // handle adding todos
  const handleAddTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };
  // handle toggling todos
  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  // handle deleting todos
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(todos);
  };

  return (
    <div className="font-Lato py-6 bg-gradient-to-r from-white to-gray-100 min-h-screen">
      <h2 className="text-4xl text-center font-bold font-Roboto leading-tight tracking-wide">
        Taskify
      </h2>
      <TodoInput onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      /> 
      <Footer  />
    </div>
  );
};

export default App;
