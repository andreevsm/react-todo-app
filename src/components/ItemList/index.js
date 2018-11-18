import React from 'react';

import Item from '../Item';

const ItemList = ({
  items,
  onDeleteTodoAction,
  onToggleImportantTodo,
  onToggleDoneAction,
}) => (
  <ul className="list-group todo-list">
    {items.map((item) => {
      const { id, ...itemProps } = item;
      return (
        <li key={id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
          <Item
            onDeleted={() => onDeleteTodoAction(id)}
            onToggleDone={() => onToggleDoneAction(id)}
            onToggleImportant={() => onToggleImportantTodo(id)}
            {...itemProps}
          />
        </li>
      );
    })}
  </ul>
);

export default ItemList;
