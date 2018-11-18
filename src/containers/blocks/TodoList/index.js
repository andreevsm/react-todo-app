import { connect } from 'react-redux';

import { withData } from 'HOC';

import ItemList from 'components/ItemList';

import {
  deleteTodo,
  toggleImportantTodo,
  toggleDoneTodo,
} from 'redux/data/todoList';

const TodoList = withData(ItemList);
const mapStateToProps = ({ data: { todoList } }) => ({ todoList });

const mapDispatchToProps = dispatch => ({
  onDeleteTodoAction(id) {
    dispatch(deleteTodo(id));
  },
  onToggleImportantTodo(id) {
    dispatch(toggleImportantTodo(id));
  },
  onToggleDoneAction(id) {
    dispatch(toggleDoneTodo(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
