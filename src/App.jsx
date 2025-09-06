import { useEffect, useState } from "react";
import TodoForm from "./Components/TodoFrom";
import { TodosContextProvider } from "./Context/Todos";
import TodoItem from "./Components/TodoItem";
function App() {
  const [Todos, setTodos] = useState([]);

  const AddTodo = (Todo) => {
    setTodos((prev) => [{ id: Date.now(), ...Todo }, ...prev]);
  };

  const UpdateTodo = (id, Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...Todo } : todo))
    );
  };

  const DeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const TogleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, Complete: !todo.Complete } : todo
      )
    );
  };

  function Redner(){
    const TodosData = (JSON.parse(localStorage.getItem("Todos")));
    if(TodosData.length > 0 && TodosData){
      setTodos(TodosData);
    }
  }
  useEffect(Redner , []);
  function Save(){
    localStorage.setItem("Todos" , JSON.stringify(Todos));
  }
  useEffect(Save , [Todos]);
  return (
    <TodosContextProvider
      value={{ Todos, AddTodo, UpdateTodo, DeleteTodo, TogleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {Todos.map((todo) => (
              <div className="w-full" key={todo.id}>
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodosContextProvider>
  );
}

export default App;
