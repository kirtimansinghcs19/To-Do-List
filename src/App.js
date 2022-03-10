import './App.css';
import React from 'react';
import TodoList from './components/todoList';
import "bootswatch/dist/materia/bootstrap.min.css";
import Nav from './components/nav';


function App() {
  return (
    <>
      <Nav />
        <div className="container">
          <TodoList/>
        </div>
      </>
  );
}

export default App;
