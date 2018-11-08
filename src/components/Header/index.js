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

Header.PropTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
};

export default Header;
