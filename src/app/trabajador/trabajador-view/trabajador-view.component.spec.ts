import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorViewComponent } from './trabajador-view.component';

describe('TrabajadorViewComponent', () => {
  let component: TrabajadorViewComponent;
  let fixture: ComponentFixture<TrabajadorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajadorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
