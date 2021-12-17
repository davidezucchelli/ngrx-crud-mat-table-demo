import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CrudRoutingModule } from './crud-routing.module';
import { CrudService } from './services/crud.service';
import { reducers } from './store/reducers';
import { MaterialModule } from 'src/app/material.module';
import { CrudComponent } from './crud.component';
import { PeriodicElement } from 'src/app/models/PeriodicElement';
import { ElementNote } from 'src/app/models/ElementNote';
import { UiCrudState } from './store/reducers/ui-reducer';
import { ElementsEffect } from './store/effects/elements.effects';
import { ElementsNoteEffect } from './store/effects/elements-note.effects';
import { ElementListComponent } from './components/element-list/element-list.component';
import { ElementNoteListComponent } from './components/element-note-list/element-note-list.component';
import { DeleteElementComponent } from './components/element-functions/delete-element/delete-element.component';
import { InsertUpdateElementComponent } from './components/element-functions/insert-update-element/insert-update-element.component';
import { InsertUpdateElementNoteComponent } from './components/element-note-functions/insert-update-element-note/insert-update-element-note.component';
import { DeleteElementNoteComponent } from './components/element-note-functions/delete-element-note/delete-element-note.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ElementFilterComponent } from './components/element-filter/element-filter.component';

export interface CrudState {
  elements: {
    items: PeriodicElement[];
    loading: boolean;
  };
  elementsNote: {
    items: ElementNote[];
    loading: boolean;
  };
  ui: UiCrudState;
}

@NgModule({
  declarations: [
    CrudComponent,
    ElementListComponent,
    ElementNoteListComponent,
    DeleteElementComponent,
    InsertUpdateElementComponent,
    InsertUpdateElementNoteComponent,
    DeleteElementNoteComponent,
    ElementFilterComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('crud', reducers),
    CrudRoutingModule,
    FlexLayoutModule,
    EffectsModule.forFeature([ElementsEffect, ElementsNoteEffect]),
  ],
  providers: [CrudService],
})
export class CrudModule {}
