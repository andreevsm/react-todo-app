import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  compose,
  withState,
  setDisplayName,
  withHandlers,
} from 'recompose';

import Header from 'components/Header';

import TodoList from 'containers/blocks/TodoList';
import SearchPanel from 'containers/blocks/SearchPanel';
import TodoStatusFilter from 'containers/blocks/TodoStatusFilter';
import TodoAddFrom from 'containers/forms/TodoAddForm';

import { addTodo } from 'redux/data/todoList';

import './styles.css';

const App = ({
  text,
  todoList,
  onAddTodoAction,
  setText,
  filter,
  setFilter,
  onSearchTodos,
  onFilter,
}) => {
  const doneCount = todoList.filter(todo => todo.done).length;
  const todoCount = todoList.length - doneCount;
  const visibleTodos = onFilter(onSearchTodos(todoList, text), filter);

  return (
    <div className="root">
      <Header toDo={todoCount} done={doneCount} />
      <nav className="navbar navbar-light bg-light mb-3">
        <div className="navbar-brand">
          <SearchPanel onSearchTodos={text => setText(text)} />
        </div>
        <div className="navbar-item">
          <TodoStatusFilter
            filter={filter}
            onFilterChange={filter => setFilter(filter)}
          />
        </div>
      </nav>
      <TodoList items={visibleTodos} />
      <TodoAddFrom onCreateTodo={label => onAddTodoAction(label)} />
    </div>
  );
};

App.propTypes = {
  text: PropTypes.string.isRequired,
  todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddTodoAction: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  onSearchTodos: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default compose(
  setDisplayName('App'),
  connect(
    ({ data: { todoList } }) => ({ todoList }),
    {
      onAddTodoAction: text => addTodo(text),
    },
  ),
  withState('text', 'setText', ''),
  withState('filter', 'setFilter', 'all'),
  withHandlers({
    onSearchTodos: () => (array, text) => {
      if (text.length === 0) return array;
      return array.filter(item => item.label.toLowerCase()
        .indexOf(text) > -1);
    },
    onFilter: () => (array, filter) => {
      switch (filter) {
        case 'all':
          return array;
        case 'active':
          return array.filter(item => !item.done);
        case 'done':
          return array.filter(item => item.done);
        default:
          return array;
      }
    },
  }),
)(App);
