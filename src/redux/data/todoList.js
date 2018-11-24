import { handleActions, createAction } from 'redux-actions';
import uid from 'uid';

const initialState = [
  {
    id: uid(),
    label: 'Learn React',
    important: false,
    done: false,
  },
  {
    id: uid(),
    label: 'Build an Awesome App',
    important: true,
    done: true,
  },
  {
    id: uid(),
    label: 'Clean up room',
    important: true,
    done: false,
  },
  {
    id: uid(),
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
  [addTodo]: (state, action) => [
    ...state,
    {
      id: uid(),
      label: action.payload,
      done: false,
      important: false,
    },
  ],
  [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload),
  [toggleImportantTodo]: (state, action) => {
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
  [toggleDoneTodo]: (state, action) => {
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
