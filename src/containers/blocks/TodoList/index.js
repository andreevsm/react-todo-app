import React from 'react';
import { connect } from 'react-redux';

import TodoListItem from 'containers/blocks/TodoListItem';

const TodoList = ({
  todoList,
  onDeleted,
  onToggleImportant,
  onToggleDone,
}) => {
  console.log(TodoList);

  return (
    <ul className="list-group todo-list">
      {todoList.map((item) => {
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
};


const mapStateToProps = ({ data: { todoList } }) => ({ todoList });

export default connect(
  mapStateToProps,
)(TodoList);
