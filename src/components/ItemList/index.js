import React from 'react';

import { withData } from 'HOC';
import Item from '../Item';

const ItemList = ({
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
          <Item
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

export default withData(ItemList);
