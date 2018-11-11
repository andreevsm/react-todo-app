import React from 'react';

import './styles.css';
import { addTodo } from 'redux/data/todoList';

export default class TodoAddFrom extends React.Component {
  state = {
    label: '',
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { onCreateTodo, dispatch } = this.props;
    const { label } = this.state;
    onCreateTodo(label);
    dispatch(addTodo(label));
    this.setState({
      label: '',
    });
  }

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit} className="item-add-form input-group d-flex">
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={label}
        />
        <button type="submit" className="btn btn-outline-secondary ml-1">
          Add Todo
        </button>
      </form>
    );
  }
}
