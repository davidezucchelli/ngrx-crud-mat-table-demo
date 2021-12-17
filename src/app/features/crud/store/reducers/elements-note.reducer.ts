import { createReducer, on } from '@ngrx/store';
import { ElementNote } from 'src/app/models/ElementNote';
import {
  deleteElementNote,
  deleteElementNoteFailed,
  deleteElementNoteSuccess,
  insertElementNote,
  insertElementNoteFailed,
  insertElementNoteSuccess,
  loadElementNotes,
  loadElementNotesFailed,
  loadElementNotesSuccess,
  updateElementNote,
  updateElementNoteFailed,
  updateElementNoteSuccess,
} from '../actions/elements-note.actions';

const initialState: {
  items: ElementNote[];
  loading: boolean;
} = {
  items: [],
  loading: false,
};

export const elementsNotelReducer = createReducer(
  initialState,
  on(loadElementNotes, (state) => {
    return { ...state, loading: true };
  }),
  on(loadElementNotesSuccess, (state, action) => {
    return {
      ...state,
      items: [...action.notes],
      loading: false,
    };
  }),
  on(loadElementNotesFailed, (state) => {
    return { ...state, loading: false };
  }),
  on(insertElementNote, (state) => {
    return { ...state, loading: true };
  }),
  on(insertElementNoteSuccess, (state, action) => {
    return {
      ...state,
      items: [...state.items, action.note],
      loading: false,
    };
  }),
  on(insertElementNoteFailed, (state) => {
    return { ...state, loading: false };
  }),
  on(updateElementNote, (state) => {
    return { ...state, loading: true };
  }),
  on(updateElementNoteSuccess, (state, action) => {
    const index = state.items.findIndex((value) => value.id === action.note.id);

    const updatedItems = [...state.items];
    updatedItems[index] = action.note;

    return {
      ...state,
      items: [...updatedItems],
      loading: false,
    };
  }),
  on(updateElementNoteFailed, (state) => {
    return { ...state, loading: false };
  }),
  on(deleteElementNote, (state) => {
    return { ...state, loading: true };
  }),
  on(deleteElementNoteSuccess, (state, action) => {
    return {
      ...state,
      items: state.items.filter((value) => {
        return value.id !== action.id;
      }),
      loading: false,
    };
  }),
  on(deleteElementNoteFailed, (state) => {
    return { ...state, loading: false };
  })
);
