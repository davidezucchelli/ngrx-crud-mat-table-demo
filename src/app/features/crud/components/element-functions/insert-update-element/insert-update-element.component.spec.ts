import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateElementComponent } from './insert-update-element.component';

describe('InsertUpdateElementComponent', () => {
  let component: InsertUpdateElementComponent;
  let fixture: ComponentFixture<InsertUpdateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUpdateElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
