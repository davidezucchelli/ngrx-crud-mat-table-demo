import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';
import {
  deleteElement,
  deleteElementFailed,
  deleteElementSuccess,
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

@Injectable()
export class ElementsEffect {
  constructor(private actions$: Actions, private crudService: CrudService) {}

  loadElements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadElements),
      mergeMap(() =>
        this.crudService.getElements().pipe(
          map((result) => loadElementsSuccess({ elements: result })),
          catchError(() => of(loadElementsFailed()))
        )
      )
    )
  );

  insertElement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(insertElement),
      mergeMap((action) =>
        this.crudService.insertElement(action.element).pipe(
          map((result) => insertElementSuccess({ element: result })),
          catchError(() => of(insertElementFailed()))
        )
      )
    )
  );

  updateElement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateElement),
      mergeMap((action) =>
        this.crudService.updateElement(action.element).pipe(
          map((result) => updateElementSuccess({ element: result })),
          catchError(() => of(updateElementFailed()))
        )
      )
    )
  );

  deleteElement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteElement),
      mergeMap((action) =>
        this.crudService.deleteElement(action.id).pipe(
          map(() => deleteElementSuccess({ id: action.id })),
          catchError(() => of(deleteElementFailed()))
        )
      )
    )
  );
}
