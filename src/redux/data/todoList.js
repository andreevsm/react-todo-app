import { handleActions, createAction } from 'redux-actions';

const initialState = [
  {
    id: 1,
    label: 'Learn React',
    important: false,
    done: false,
  },
  {
    id: 2,
    label: 'Build an Awesome App',
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
];

export const addTodo = createAction('todoList/ADD_TODO');

export default handleActions({
  'todoList/ADD_TODO': (state, action) => [
    ...state,
    {
      id: state.length + 1,
      label: action.payload,
      done: false,
      important: false,
    },
  ],
  'todoList/REMOVE_TODO': (state, action) => action.payload,
  'todoList/EDIT_TODO': (state, action) => action.payload,
}, initialState);
