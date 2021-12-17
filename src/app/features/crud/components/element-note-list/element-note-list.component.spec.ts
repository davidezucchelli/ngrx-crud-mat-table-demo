import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementNoteListComponent } from './element-note-list.component';

describe('ElementNoteListComponent', () => {
  let component: ElementNoteListComponent;
  let fixture: ComponentFixture<ElementNoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementNoteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
