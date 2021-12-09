import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPropietarioComponent } from './buscar-propietario.component';

describe('BuscarPropietarioComponent', () => {
  let component: BuscarPropietarioComponent;
  let fixture: ComponentFixture<BuscarPropietarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPropietarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPropietarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
