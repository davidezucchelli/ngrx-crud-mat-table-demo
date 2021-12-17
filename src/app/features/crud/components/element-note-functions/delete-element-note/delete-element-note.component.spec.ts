import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteElementNoteComponent } from './delete-element-note.component';

describe('DeleteElementNoteComponent', () => {
  let component: DeleteElementNoteComponent;
  let fixture: ComponentFixture<DeleteElementNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteElementNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteElementNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
