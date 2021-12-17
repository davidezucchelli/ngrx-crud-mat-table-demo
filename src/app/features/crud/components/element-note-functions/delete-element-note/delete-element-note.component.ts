import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ElementNote } from 'src/app/models/ElementNote';
import { CrudState } from '../../../crud.module';
import { deleteElementNote } from '../../../store/actions/elements-note.actions';

export interface DialogDeleteNote {
  note: ElementNote;
}

@Component({
  selector: 'app-delete-element-note',
  templateUrl: './delete-element-note.component.html',
  styleUrls: ['./delete-element-note.component.css'],
})
export class DeleteElementNoteComponent {
  constructor(
    private store: Store<CrudState>,
    public dialogRef: MatDialogRef<DeleteElementNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: DialogDeleteNote
  ) {}

  onConfirm() {
    this.store.dispatch(
      deleteElementNote({
        id: this.dataDialog.note.id || 0,
      })
    );

    this.dialogRef.close();
  }
}
