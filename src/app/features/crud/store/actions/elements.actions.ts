import { createAction, props } from '@ngrx/store';
import { PeriodicElement } from 'src/app/models/PeriodicElement';

export const loadElements = createAction('[Elements] Load elements');

export const loadElementsSuccess = createAction(
  '[Elements] Load elements success',
  props<{ elements: PeriodicElement[] }>()
);

export const loadElementsFailed = createAction(
  '[Elements] Load elements failed'
);

export const insertElement = createAction(
  '[Elements] Insert element',
  props<{ element: PeriodicElement }>()
);

export const insertElementSuccess = createAction(
  '[Elements] Insert element success',
  props<{ element: PeriodicElement }>()
);

export const insertElementFailed = createAction(
  '[Elements] Insert element failed'
);

export const updateElement = createAction(
  '[Elements] Update element',
  props<{ element: PeriodicElement }>()
);

export const updateElementSuccess = createAction(
  '[Elements] Update element success',
  props<{ element: PeriodicElement }>()
);

export const updateElementFailed = createAction(
  '[Elements] Update element failed'
);

export const deleteElement = createAction(
  '[Elements] Delete element',
  props<{ id: number }>()
);

export const deleteElementSuccess = createAction(
  '[Elements] Delete element success',
  props<{ id: number }>()
);

export const deleteElementFailed = createAction(
  '[Elements] Delete element failed'
);

export const expandCollapseRow = createAction(
  '[Elements] Expand/Collapse Row',
  props<{ element: PeriodicElement }>()
);
