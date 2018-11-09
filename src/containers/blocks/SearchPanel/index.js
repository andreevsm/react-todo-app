import React from 'react';

const SearchPanel = ({
  onSearchTodos,
}) => (
  <div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text">
        <i className="fa fa-search" />
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="search"
      aria-label="search"
      onChange={e => onSearchTodos(e.target.value)}
    />
  </div>
);

export default SearchPanel;
