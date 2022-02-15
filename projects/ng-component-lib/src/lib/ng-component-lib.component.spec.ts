import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgComponentLibComponent } from './ng-component-lib.component';

describe('NgComponentLibComponent', () => {
  let component: NgComponentLibComponent;
  let fixture: ComponentFixture<NgComponentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgComponentLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgComponentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
