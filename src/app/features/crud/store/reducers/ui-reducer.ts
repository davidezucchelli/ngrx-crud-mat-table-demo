import { createReducer, on } from '@ngrx/store';
import { setFilterCrud } from '../actions/ui.actions';

export interface UiFilterCrud {
  name: string;
}

export interface UiCrudState {
  filterCrud: UiFilterCrud;
}

const initialState: UiCrudState = {
  filterCrud: {
    name: '',
  },
};

export const uiReducer = createReducer(
  initialState,
  on(setFilterCrud, (state, action) => {
    return {
      ...state,
      filterCrud: { ...action.filter },
    };
  })
);
