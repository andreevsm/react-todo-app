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
export const deleteTodo = createAction('todoList/REMOVE_TODO');
export const toggleImportantTodo = createAction('todoList/TOGGLE_IMPORTANT_TODO');
export const toggleDoneTodo = createAction('todoList/TOGGLE_DONE_TODO');

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
  'todoList/REMOVE_TODO': (state, action) => state.filter(todo => todo.id !== action.payload),
  'todoList/TOGGLE_IMPORTANT_TODO': (state, action) => {
    const idx = state.findIndex(el => el.id === action.payload);
    const oldItem = state[idx];
    const newItem = {
      ...oldItem,
      important: !oldItem.important,
    };

    return [
      ...state.slice(0, idx),
      newItem,
      ...state.slice(idx + 1),
    ];
  },
  'todoList/TOGGLE_DONE_TODO': (state, action) => {
    const idx = state.findIndex(el => el.id === action.payload);
    const oldItem = state[idx];
    const newItem = {
      ...oldItem,
      done: !oldItem.done,
    };

    return [
      ...state.slice(0, idx),
      newItem,
      ...state.slice(idx + 1),
    ];
  },
}, initialState);
