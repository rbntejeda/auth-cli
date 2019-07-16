import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorAdminComponent } from './trabajador-admin.component';

describe('TrabajadorAdminComponent', () => {
  let component: TrabajadorAdminComponent;
  let fixture: ComponentFixture<TrabajadorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajadorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
