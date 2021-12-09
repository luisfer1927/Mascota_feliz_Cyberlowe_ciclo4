import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPropietarioComponent } from './editar-propietario.component';

describe('EditarPropietarioComponent', () => {
  let component: EditarPropietarioComponent;
  let fixture: ComponentFixture<EditarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
