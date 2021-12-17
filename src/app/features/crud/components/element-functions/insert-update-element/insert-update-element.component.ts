import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { CrudState } from '../../../crud.module';
import {
  insertElement,
  updateElement,
} from '../../../store/actions/elements.actions';

export interface DialogInsertElement {
  element: PeriodicElement;
}

@Component({
  selector: 'app-insert-update-element',
  templateUrl: './insert-update-element.component.html',
  styleUrls: ['./insert-update-element.component.css'],
})
export class InsertUpdateElementComponent {
  editMode: boolean = false;

  form: FormGroup;

  constructor(
    private store: Store<CrudState>,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<InsertUpdateElementComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: DialogInsertElement
  ) {
    if (dataDialog.element) {
      this.editMode = true;
    }
    this.form = this.fb.group({
      name: new FormControl(dataDialog.element ? dataDialog.element.name : ''),
      weight: new FormControl(
        dataDialog.element ? dataDialog.element.weight : ''
      ),
      symbol: new FormControl(
        dataDialog.element ? dataDialog.element.symbol : ''
      ),
      position: new FormControl(
        dataDialog.element ? dataDialog.element.position : ''
      ),
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const obj = {
      ...this.dataDialog.element,
      ...this.form.value,
    };

    if (this.editMode) {
      this.store.dispatch(
        updateElement({
          element: obj,
        })
      );
    } else {
      this.store.dispatch(
        insertElement({
          element: obj,
        })
      );
    }

    this.dialogRef.close();
  }
}
