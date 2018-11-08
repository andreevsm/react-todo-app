import React, { Component } from 'react';

import Header from 'components/Header';

import TodoList from 'containers/blocks/TodoList';
import SearchPanel from 'containers/blocks/SearchPanel';
import TodoStatusFilter from 'containers/blocks/TodoStatusFilter';

import TodoAddFrom from 'containers/forms/TodoAddForm';

import './styles.css';

export default class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        label: 'Learn React',
        important: false,
        done: false,
      },
      {
        id: 2,
        label: 'Build Awesome App',
        important: true,
        done: true,
      },
      {
        id: 3,
        label: 'Clean up room',
        important: true,
        done: false,
      },
      {
        id: 4,
        label: 'Fix bugs',
        done: false,
        important: false,
      },
    ],
    text: '',
    filter: 'active',
  }

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
  }

  deleteItem = (id) => {
    this.setState(({ todos }) => {
      const newTodos = todos.filter(todo => todo.id !== id);
      return {
        todos: newTodos,
      };
    });
  }

  createTodo = (label) => {
    this.setState(({ todos }) => ({
      todos: [...todos, {
        label,
        important: false,
        done: false,
        id: todos.length + 1,
      }],
    }));
  }

  onToggleImportant = (id) => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, 'important'),
    }));
  }

  onToggleDone = (id) => {
    this.setState(({ todos }) => ({
      todos: this.toggleProperty(todos, id, 'done'),
    }));
  }

  onSearchPanel = (text) => {
    this.setState({ text });
  }

  searchTodos = (array, text) => {
    if (text.length === 0) return array;
    return array.filter(item => item.label.toLowerCase().indexOf(text) > -1);
  }

  filter = (array, filter) => {
    switch (filter) {
      case 'all': return array;
      case 'active': return array.filter(item => !item.done);
      case 'done': return array.filter(item => item.done);
      default: return array;
    }
  }

  onFilterChange = (filter) => {
    this.setState({
      filter,
    });
  }

  render() {
    const { todos, text, filter } = this.state;
    const doneCount = todos.filter(todo => todo.done).length;
    const todoCount = todos.length - doneCount;
    const visibleTodos = this.filter(this.searchTodos(todos, text), filter);

    return (
      <div className="root">
        <Header toDo={todoCount} done={doneCount} />
        <SearchPanel onSearchTodos={text => this.onSearchPanel(text)} />
        <TodoStatusFilter
          filter={filter}
          onFilterChange={filter => this.onFilterChange(filter)}
        />
        <TodoList
          todos={visibleTodos}
          onDeleted={id => this.deleteItem(id)}
          onToggleImportant={id => this.onToggleImportant(id)}
          onToggleDone={id => this.onToggleDone(id)}
        />
        <TodoAddFrom onCreateTodo={label => this.createTodo(label)} />
      </div>
    );
  }
}
