import React from 'react';

import TodoListItem from '../todo-list-item';
import './styles.css';

const TodoList = ({
  todos,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {
  console.log(todos)
  return (
    <ul className="list-group todo-list">
      {todos.map((item, index) => {
        const { id, ...itemProps } = item;
        return (
          <li key={id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <TodoListItem
              onDeleted={() => onDeleted(id)}
              onToggleDone={() => onToggleDone(id)}
              onToggleImportant={() => onToggleImportant(id)}
              {...itemProps}
            />
          </li>
        )
      }
      )}
    </ul>
  );
};

export default TodoList;