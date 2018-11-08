import React from 'react';

import './styles.css';

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
    const { onCreateTodo } = this.props;
    const { label } = this.state;
    onCreateTodo(label);
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
        <button type="submit" className="btn btn-outline-secondary">
          Add item
        </button>
      </form>
    );
  }
}
