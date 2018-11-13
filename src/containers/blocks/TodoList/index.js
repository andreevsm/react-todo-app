import React from 'react';

import TodoListItem from 'containers/blocks/TodoListItem';

const TodoList = ({
  items,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => (
  <ul className="list-group todo-list">
    {items.map((item) => {
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
      );
    })}
  </ul>
);

export default TodoList;
