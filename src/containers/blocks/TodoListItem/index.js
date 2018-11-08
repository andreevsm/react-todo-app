import React from 'react';

import './styles.css';

const TodoListItem = ({
  label,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  important,
  done,
}) => {
  let classNames = 'todo-list-item';

  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  return (
    <React.Fragment>
      <div className={classNames} onClick={onToggleDone}>
        {label}
      </div>
      <div className="buttons-block">
        <button onClick={onDeleted} type="button" className="btn btn-outline-danger buttons-block-btn">
          <i className="fa fa-trash" />
        </button>
        <button onClick={onToggleImportant} type="button" className="btn btn-outline-success">
          <i className="fa fa-exclamation" />
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoListItem;
