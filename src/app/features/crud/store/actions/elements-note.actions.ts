import { createAction, props } from '@ngrx/store';
import { ElementNote } from 'src/app/models/ElementNote';

export const loadElementNotes = createAction(
  '[Element Notes] Load elements note'
);

export const loadElementNotesSuccess = createAction(
  '[Element Notes] Load elements note success',
  props<{ notes: ElementNote[] }>()
);

export const loadElementNotesFailed = createAction(
  '[Element Notes] Load elements note failed'
);

export const insertElementNote = createAction(
  '[Element Notes] Insert element note',
  props<{ note: ElementNote }>()
);

export const insertElementNoteSuccess = createAction(
  '[Element Notes] Insert element note success',
  props<{ note: ElementNote }>()
);

export const insertElementNoteFailed = createAction(
  '[Element Notes] Insert element note failed'
);

export const updateElementNote = createAction(
  '[Element Notes] Update element note',
  props<{ note: ElementNote }>()
);

export const updateElementNoteSuccess = createAction(
  '[Element Notes] Update element note success',
  props<{ note: ElementNote }>()
);

export const updateElementNoteFailed = createAction(
  '[Element Notes] Update element note failed'
);

export const deleteElementNote = createAction(
  '[Element Notes] Delete note element',
  props<{ id: number }>()
);

export const deleteElementNoteSuccess = createAction(
  '[Element Notes] Delete element note success',
  props<{ id: number }>()
);

export const deleteElementNoteFailed = createAction(
  '[Element Notes] Delete element note failed'
);
