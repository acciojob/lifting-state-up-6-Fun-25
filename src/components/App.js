
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
       
        <Child todoList={todos} onComplete={handleComplete} />
      </div>
    </div>
  );
};

const Child = ({ todoList, onComplete }) => {
  return (
    <div className="child">
      <ul>
        <h2>Child Component</h2>
        {todoList.map((todo) => (
          <div className="child-item" key={todo.id}>
            <li>{todo.text}</li>
            {!todo.completed && (
              <button onClick={() => onComplete(todo.id)}>Complete</button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};
export default App
