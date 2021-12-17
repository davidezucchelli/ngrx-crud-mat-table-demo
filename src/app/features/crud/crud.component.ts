import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { InsertUpdateElementComponent } from './components/element-functions/insert-update-element/insert-update-element.component';
import { CrudState } from './crud.module';
import { loadElementNotes } from './store/actions/elements-note.actions';
import { loadElements } from './store/actions/elements.actions';
import { setFilterCrud } from './store/actions/ui.actions';
import { UiFilterCrud } from './store/reducers/ui-reducer';
import {
  getElementsFiltered,
  getElementsIsLoading,
} from './store/selectors/elements.selector';
import { getFilterCrud } from './store/selectors/ui.selector';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  elements$: Observable<PeriodicElement[]> = this.store.pipe(
    select(getElementsFiltered)
  );

  loading$: Observable<boolean> = this.store.pipe(select(getElementsIsLoading));

  filter$: Observable<UiFilterCrud> = this.store.pipe(select(getFilterCrud));

  constructor(private store: Store<CrudState>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadElements());
    this.store.dispatch(loadElementNotes());
  }

  setFilterHandler(filter: UiFilterCrud) {
    this.store.dispatch(setFilterCrud({ filter: filter }));
  }

  onNewElement() {
    this.dialog.open(InsertUpdateElementComponent, {
      data: {
        element: null,
      },
    });
  }
}
