
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build the React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <div>
        <TodoList todos={todos} handleComplete={handleComplete}/>
      </div>
    </div>
  );
};

function TodoList({ todos, handleComplete }) {
  return (
    <ul>
      <h2>Child Component</h2>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}
export default App
