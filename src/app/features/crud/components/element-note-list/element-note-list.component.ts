import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ElementNote } from 'src/app/models/ElementNote';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { CrudState } from '../../crud.module';
import { getElementNotesFromID } from '../../store/selectors/elements-note.selector';
import { DeleteElementNoteComponent } from '../element-note-functions/delete-element-note/delete-element-note.component';
import { InsertUpdateElementNoteComponent } from '../element-note-functions/insert-update-element-note/insert-update-element-note.component';

@Component({
  selector: 'app-element-note-list',
  templateUrl: './element-note-list.component.html',
  styleUrls: ['./element-note-list.component.css'],
})
export class ElementNoteListComponent implements OnInit {
  @Input() element: PeriodicElement = {};
  @Input() loading: boolean;

  notes$: Observable<ElementNote[]> = of([]);

  constructor(private dialog: MatDialog, private store: Store<CrudState>) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.notes$ = this.store.pipe(
      select(getElementNotesFromID(this.element?.id || 0))
    );
  }

  onUpdateNote(note: ElementNote) {
    this.dialog.open(InsertUpdateElementNoteComponent, {
      data: {
        element: this.element,
        note: note,
      },
    });
  }

  onDeleteNote(note: ElementNote) {
    this.dialog.open(DeleteElementNoteComponent, {
      data: {
        note: note,
      },
    });
  }
}
