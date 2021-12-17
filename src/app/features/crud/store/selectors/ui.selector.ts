import { createSelector } from '@ngrx/store';
import { CrudState } from '../../crud.module';
import { getCrud } from '../reducers';
import { UiCrudState } from '../reducers/ui-reducer';

export const getUi = createSelector(getCrud, (state: CrudState) => state.ui);

export const getFilterCrud = createSelector(
  getUi,
  (state: UiCrudState) => state.filterCrud
);
