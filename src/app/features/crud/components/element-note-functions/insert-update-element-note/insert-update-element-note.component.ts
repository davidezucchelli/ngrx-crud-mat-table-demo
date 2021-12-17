import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ElementNote } from 'src/app/models/ElementNote';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { CrudState } from '../../../crud.module';
import {
  insertElementNote,
  updateElementNote,
} from '../../../store/actions/elements-note.actions';

export interface DialogInsertElementNote {
  element: PeriodicElement;
  note: ElementNote;
}

@Component({
  selector: 'app-insert-update-element-note',
  templateUrl: './insert-update-element-note.component.html',
  styleUrls: ['./insert-update-element-note.component.css'],
})
export class InsertUpdateElementNoteComponent {
  editMode: boolean = false;
  form: FormGroup;

  constructor(
    private store: Store<CrudState>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InsertUpdateElementNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: DialogInsertElementNote
  ) {
    if (dataDialog.note) {
      this.editMode = true;
    }

    this.form = this.fb.group({
      description: new FormControl(
        dataDialog.note ? dataDialog.note.description : ''
      ),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const obj = {
      ...this.dataDialog.note,
      ...this.form.value,
      date: new Date(),
      idElement: this.dataDialog.element ? this.dataDialog.element.id : 0,
    };

    if (this.editMode) {
      this.store.dispatch(
        updateElementNote({
          note: obj,
        })
      );
    } else {
      this.store.dispatch(
        insertElementNote({
          note: obj,
        })
      );
    }

    this.dialogRef.close();
  }
}
