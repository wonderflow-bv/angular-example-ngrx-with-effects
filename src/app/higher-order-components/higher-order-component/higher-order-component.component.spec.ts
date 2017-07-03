import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderComponentComponent } from './higher-order-component.component';

describe('HigherOrderComponentComponent', () => {
  let component: HigherOrderComponentComponent;
  let fixture: ComponentFixture<HigherOrderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HigherOrderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherOrderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
