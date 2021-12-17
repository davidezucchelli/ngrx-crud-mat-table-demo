import { createAction, props } from '@ngrx/store';
import { UiFilterCrud } from '../reducers/ui-reducer';

export const setUi = createAction('[UI CRUD] Set UI CRUD');

export const setFilterCrud = createAction(
  '[UI CRUD] Set Filter CRUD',
  props<{ filter: UiFilterCrud }>()
);
