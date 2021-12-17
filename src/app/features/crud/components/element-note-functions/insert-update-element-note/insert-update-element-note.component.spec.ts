import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateElementNoteComponent } from './insert-update-element-note.component';

describe('InsertUpdateElementNoteComponent', () => {
  let component: InsertUpdateElementNoteComponent;
  let fixture: ComponentFixture<InsertUpdateElementNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUpdateElementNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateElementNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
