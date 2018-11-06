import React from 'react';

const AppHeader = ({
  toDo,
  done,
}) => (
  <h1>My todo list {toDo} {done}</h1>
);

export default AppHeader;