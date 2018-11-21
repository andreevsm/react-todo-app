import { connect } from 'react-redux';
import { compose, pure, setDisplayName } from 'recompose';

import { withData } from 'HOC';

import ItemList from 'components/ItemList';

import {
  deleteTodo,
  toggleImportantTodo,
  toggleDoneTodo,
} from 'redux/data/todoList';

const TodoList = withData(ItemList);

export default compose(
  setDisplayName('TodoList'),
  pure,
  connect(
    ({ data: { todoList } }) => ({ todoList }),
    {
      onDeleteTodoAction: id => deleteTodo(id),
      onToggleImportantTodo: id => toggleImportantTodo(id),
      onToggleDoneAction: id => toggleDoneTodo(id),
    },
  ),
)(TodoList);
