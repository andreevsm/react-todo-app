import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  toDo,
  done,
}) => (
  <h1>
    My todo list
    {toDo}
    {' '}
    {done}
  </h1>
);

Header.propTypes = {
  toDo: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};

export default Header;
