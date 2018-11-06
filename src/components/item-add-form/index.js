import React from 'react';

import './styles.css';

export default class ItemAddForm extends React.Component {

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
    this.props.onCreateTodo(this.state.label);
    this.setState({
      label: '',
    });
  }

  render () {
    return (
      <form onSubmit={this.onSubmit} className="item-add-form input-group d-flex">
        <input
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
        />
        <button
          
          className="btn btn-outline-secondary"
        >
          Add item
        </button>
      </form>
    )
  }
}