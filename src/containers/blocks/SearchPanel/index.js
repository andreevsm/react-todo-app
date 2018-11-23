import React from 'react';
import PropTypes from 'prop-types';

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

SearchPanel.propTypes = {
  onSearchTodos: PropTypes.func.isRequired,
};

export default SearchPanel;
