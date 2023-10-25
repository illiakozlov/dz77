import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
    </div>
  );
};

export default TodoItem;
