import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'components/Header';

import TodoList from 'containers/blocks/TodoList';
import SearchPanel from 'containers/blocks/SearchPanel';
import TodoStatusFilter from 'containers/blocks/TodoStatusFilter';
import TodoAddFrom from 'containers/forms/TodoAddForm';

import { addTodo, deleteTodo } from 'redux/data/todoList';

import './styles.css';

class App extends Component {
  state = {
    text: '',
    filter: 'active',
  };

  toggleProperty = (array, id, propName) => {
    const idx = array.findIndex(el => el.id === id);
    const oldItem = array[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
    };

    return [
      ...array.slice(0, idx),
      newItem,
      ...array.slice(idx + 1),
    ];
  };

  onToggleImportant = (id) => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, 'important'),
    }));
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, 'done'),
    }));
  };

  onSearchPanel = (text) => {
    this.setState({ text });
  };

  searchTodos = (array, text) => {
    if (text.length === 0) return array;
    return array.filter(item => item.label.toLowerCase()
      .indexOf(text) > -1);
  };

  filter = (array, filter) => {
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
  };

  onFilterChange = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    const { text, filter } = this.state;
    const {
      todoList,
      onAddTodoAction,
      onDeleteTodoAction,
    } = this.props;
    const doneCount = todoList.filter(todo => todo.done).length;
    const todoCount = todoList.length - doneCount;
    const visibleTodos = this.filter(this.searchTodos(todoList, text), filter);

    return (
      <div className="root">
        <Header toDo={todoCount} done={doneCount} />
        <nav className="navbar navbar-light bg-light mb-3">
          <div className="navbar-brand">
            <SearchPanel onSearchTodos={text => this.onSearchPanel(text)} />
          </div>
          <div className="navbar-item">
            <TodoStatusFilter
              filter={filter}
              onFilterChange={filter => this.onFilterChange(filter)}
            />
          </div>
        </nav>
        <TodoList
          items={visibleTodos}
          onDeleted={id => onDeleteTodoAction(id)}
          onToggleImportant={id => this.onToggleImportant(id)}
          onToggleDone={id => this.onToggleDone(id)}
        />
        <TodoAddFrom onCreateTodo={label => onAddTodoAction(label)} />
      </div>
    );
  }
}

const mapStateToProps = ({ data: { todoList } }) => ({ todoList });
const mapDispatchToProps = dispatch => ({
  onAddTodoAction(text) {
    dispatch(addTodo(text));
  },
  onDeleteTodoAction(id) {
    dispatch(deleteTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
