import { createReducer, on } from '@ngrx/store';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import {
  deleteElement,
  deleteElementFailed,
  deleteElementSuccess,
  expandCollapseRow,
  insertElement,
  insertElementFailed,
  insertElementSuccess,
  loadElements,
  loadElementsFailed,
  loadElementsSuccess,
  updateElement,
  updateElementFailed,
  updateElementSuccess,
} from '../actions/elements.actions';

const initialState: {
  items: PeriodicElement[];
  loading: boolean;
} = {
  items: [],
  loading: false,
};

export const elementsReducer = createReducer(
  initialState,
  on(loadElements, (state) => {
    return { ...state, loading: true };
  }),
  on(loadElementsSuccess, (state, action) => {
    return {
      ...state,
      items: [...action.elements],
      loading: false,
    };
  }),
  on(loadElementsFailed, (state) => {
    return { ...state, loading: false };
  }),
  on(expandCollapseRow, (state, action) => {
    const index = state.items.findIndex(
      (value) => value.id === action.element.id
    );

    const newObj = new PeriodicElement(action.element);
    newObj.isExpanded = !newObj.isExpanded;

    const updatedObj = {
      ...newObj,
    };

    const updatedItems = [...state.items];
    updatedItems[index] = updatedObj;

    return {
      ...state,
      items: [...updatedItems],
    };
  }),
  on(insertElement, (state) => {
    return { ...state, loading: true };
  }),
  on(insertElementSuccess, (state, action) => {
    return {
      ...state,
      items: [...state.items, action.element],
      loading: false,
    };
  }),
  on(insertElementFailed, (state) => {
    return { ...state, loading: false };
  }),
  on(updateElement, (state) => {
    return { ...state, loading: true };
  }),
  on(updateElementSuccess, (state, action) => {
    const index = state.items.findIndex(
      (value) => value.id === action.element.id
    );

    const updatedItems = [...state.items];
    updatedItems[index] = action.element;

    return {
      ...state,
      items: [...updatedItems],
      loading: false,
    };
  }),
  on(updateElementFailed, (state) => {
    return { ...state, loading: false };
  }),
  on(deleteElement, (state) => {
    return { ...state, loading: true };
  }),
  on(deleteElementSuccess, (state, action) => {
    return {
      ...state,
      items: state.items.filter((value) => {
        return value.id !== action.id;
      }),
      loading: false,
    };
  }),
  on(deleteElementFailed, (state) => {
    return { ...state, loading: false };
  })
);
