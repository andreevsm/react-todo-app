import React from 'react';
import {
  compose,
  withState,
  pure,
  withHandlers,
} from 'recompose';
import PropTypes from 'prop-types';

import './styles.css';

const TodoAddForm = ({
  label,
  setLabel,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="item-add-form input-group d-flex">
    <input
      className="form-control"
      type="text"
      onChange={e => setLabel(e.target.value)}
      placeholder="What needs to be done?"
      value={label}
    />
    <button type="submit" className="btn btn-outline-secondary ml-1">
      Add Todo
    </button>
  </form>
);

TodoAddForm.propTypes = {
  label: PropTypes.string.isRequired,
  setLabel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default compose(
  pure,
  withState('label', 'setLabel', ''),
  withHandlers({
    onSubmit: ({
      onCreateTodo,
      label,
      setLabel,
    }) => (event) => {
      event.preventDefault();
      onCreateTodo(label);
      setLabel('');
    },
  }),
)(TodoAddForm);
