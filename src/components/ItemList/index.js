import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTodoAction: PropTypes.func.isRequired,
  onToggleImportantTodo: PropTypes.func.isRequired,
  onToggleDoneAction: PropTypes.func.isRequired,
};

export default ItemList;
