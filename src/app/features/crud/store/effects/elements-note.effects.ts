import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CrudService } from '../../services/crud.service';
import {
  deleteElementNote,
  deleteElementNoteFailed,
  deleteElementNoteSuccess,
  insertElementNote,
  insertElementNoteFailed,
  insertElementNoteSuccess,
  loadElementNotes,
  loadElementNotesFailed,
  loadElementNotesSuccess,
  updateElementNote,
  updateElementNoteFailed,
  updateElementNoteSuccess,
} from '../actions/elements-note.actions';

@Injectable()
export class ElementsNoteEffect {
  constructor(private actions$: Actions, private crudService: CrudService) {}

  loadElementNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadElementNotes),
      mergeMap(() =>
        this.crudService.getElementNotes().pipe(
          map((result) => loadElementNotesSuccess({ notes: result })),
          catchError(() => of(loadElementNotesFailed()))
        )
      )
    )
  );

  insertElementNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(insertElementNote),
      mergeMap((action) =>
        this.crudService.insertElementNote(action.note).pipe(
          map((result) => insertElementNoteSuccess({ note: result })),
          catchError(() => of(insertElementNoteFailed()))
        )
      )
    )
  );

  updateElementNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateElementNote),
      mergeMap((action) =>
        this.crudService.updateElementNote(action.note).pipe(
          map((result) => updateElementNoteSuccess({ note: result })),
          catchError(() => of(updateElementNoteFailed()))
        )
      )
    )
  );

  deleteElementNote$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteElementNote),
      mergeMap((action) =>
        this.crudService.deleteElementNote(action.id).pipe(
          map(() => deleteElementNoteSuccess({ id: action.id })),
          catchError(() => of(deleteElementNoteFailed()))
        )
      )
    )
  );
}
