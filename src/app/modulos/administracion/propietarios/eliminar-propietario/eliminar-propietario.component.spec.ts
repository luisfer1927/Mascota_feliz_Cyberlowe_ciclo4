import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPropietarioComponent } from './eliminar-propietario.component';

describe('EliminarPropietarioComponent', () => {
  let component: EliminarPropietarioComponent;
  let fixture: ComponentFixture<EliminarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
