import { createSelector } from '@ngrx/store';
import { ElementNote } from 'src/app/models/ElementNote';
import { CrudState } from '../../crud.module';
import { getCrud } from '../reducers';

export const getElementNotes = createSelector(
  getCrud,
  (state: CrudState) => state.elementsNote.items
);

export const getElementNotesIsLoading = createSelector(
  getCrud,
  (state: CrudState) => state.elementsNote.loading
);

export const getElementNotesFromID = (id: number) =>
  createSelector(getElementNotes, (elementNotes): ElementNote[] => {
    if (elementNotes && id) {
      return elementNotes.filter((x) => x.idElement === id);
    } else {
      return [];
    }
  });
