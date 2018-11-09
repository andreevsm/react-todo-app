import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Header = ({
  toDo,
  done,
}) => (
  <div className="header">
    <h1 className="header__title">My Todo list</h1>
    <div className="header__todo-info">
      To do
      {' '}
      <span className="todo-info__count">{toDo}</span>
      {' '}
      Done
      {' '}
      <span className="todo-info__count">{done}</span>
    </div>

  </div>
);

Header.propTypes = {
  toDo: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};

export default Header;
