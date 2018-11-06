import React from 'react';

import './styles.css';

const SearchPanel = ({
  onSearchTodos,
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="fa fa-search"></i>
        </span>
      </div>
      <input
        type="text"
        className="form-control"
        placeholder="search"
        aria-label="search"
        onChange={(e) => onSearchTodos(e.target.value)}
      />
    </div>
  )
};

export default SearchPanel;