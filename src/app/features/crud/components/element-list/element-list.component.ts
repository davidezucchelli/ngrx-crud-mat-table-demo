import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { CrudState } from '../../crud.module';
import { expandCollapseRow } from '../../store/actions/elements.actions';
import { DeleteElementComponent } from '../element-functions/delete-element/delete-element.component';
import { InsertUpdateElementComponent } from '../element-functions/insert-update-element/insert-update-element.component';
import { InsertUpdateElementNoteComponent } from '../element-note-functions/insert-update-element-note/insert-update-element-note.component';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementListComponent implements AfterViewInit {
  @Input() items: PeriodicElement[] | null;
  @Input() loading: boolean | null;

  columns: string[] = [
    'child',
    'name',
    'weight',
    'symbol',
    'position',
    'id',
  ];

  dataSource: MatTableDataSource<PeriodicElement> = new MatTableDataSource();

  pageSize = 50;
  resultsLength = 0;

  constructor(
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private store: Store<CrudState>
  ) {
    this.items = [];
    this.loading = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['items'] &&
      changes['items'].currentValue &&
      !changes['items'].firstChange
    ) {
      this.dataSource.data = this.items || [];
      this.resultsLength = this.dataSource.data.length;
      this.cdRef.detectChanges();
    }
  }

  ngAfterViewInit() {
    this.dataSource.data = this.items || [];
    this.resultsLength = this.dataSource.data.length;
    this.cdRef.detectChanges();
  }

  onExpandRow(element: PeriodicElement) {
    this.store.dispatch(expandCollapseRow({ element: element }));
  }

  onInsertNote(element: PeriodicElement) {
    this.dialog.open(InsertUpdateElementNoteComponent, {
      data: {
        element: element,
        note: null,
      },
    });
  }

  onUpdateElement(element: PeriodicElement) {
    this.dialog.open(InsertUpdateElementComponent, {
      data: {
        element: element,
      },
    });
  }

  onDeleteElement(element: PeriodicElement) {
    this.dialog.open(DeleteElementComponent, {
      data: {
        element: element,
      },
    });
  }
}
