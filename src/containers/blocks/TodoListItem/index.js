import React from 'react';
import PropTypes from 'prop-types';

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
      <div className={classNames} onClick={onToggleDone} onKeyPress={onToggleDone}>
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

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
};

export default TodoListItem;
