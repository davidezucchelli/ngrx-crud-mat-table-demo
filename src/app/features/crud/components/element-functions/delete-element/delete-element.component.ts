import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { CrudState } from '../../../crud.module';
import { deleteElement } from '../../../store/actions/elements.actions';

export interface DialogDeleteElement {
  element: PeriodicElement;
}

@Component({
  selector: 'app-delete-element',
  templateUrl: './delete-element.component.html',
  styleUrls: ['./delete-element.component.css'],
})
export class DeleteElementComponent {
  constructor(
    private store: Store<CrudState>,
    public dialogRef: MatDialogRef<DeleteElementComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: DialogDeleteElement
  ) {}

  onConfirm() {
    this.store.dispatch(
      deleteElement({
        id: this.dataDialog.element.id || 0,
      })
    );

    this.dialogRef.close();
  }
}
