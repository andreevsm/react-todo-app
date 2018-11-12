import { handleActions } from 'redux-actions';

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

export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export default handleActions({
  'todoList/ADD_TODO': (state, action) => action.payload,
  'todoList/REMOVE_TODO': (state, action) => action.payload,
  'todoList/EDIT_TODO': (state, action) => action.payload,
}, initialState);
