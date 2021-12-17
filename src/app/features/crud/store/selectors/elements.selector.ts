import { createSelector } from '@ngrx/store';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { CrudState } from '../../crud.module';
import { getCrud } from '../reducers';
import { UiFilterCrud } from '../reducers/ui-reducer';
import { getFilterCrud } from './ui.selector';

export const getElements = createSelector(
  getCrud,
  (state: CrudState) => state.elements.items
);

export const getElementsFiltered = createSelector(
  getElements,
  getFilterCrud,
  (items: PeriodicElement[], filter: UiFilterCrud) => {
    return items.filter(
      (item) => !filter.name || item.name?.toLowerCase().includes(filter.name.toLowerCase())
    );
  }
);

export const getElementsIsLoading = createSelector(
  getCrud,
  (state: CrudState) => state.elements.loading
);
