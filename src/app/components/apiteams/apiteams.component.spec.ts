import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiteamsComponent } from './apiteams.component';

describe('ApiteamsComponent', () => {
  let component: ApiteamsComponent;
  let fixture: ComponentFixture<ApiteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
