import { createReducer, on } from '@ngrx/store';

const initialState: {
  user: any;
} = {
  user: null,
};

export const appReducer = createReducer(initialState);
