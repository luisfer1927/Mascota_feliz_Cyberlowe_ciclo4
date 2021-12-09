import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPropietarioComponent } from './propietarios/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietarios/editar-propietario/editar-propietario.component';
import { EliminarPropietarioComponent } from './propietarios/eliminar-propietario/eliminar-propietario.component';
import { BuscarPropietarioComponent } from './propietarios/buscar-propietario/buscar-propietario.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';


@NgModule({
  declarations: [
    CrearPropietarioComponent,
    EditarPropietarioComponent,
    EliminarPropietarioComponent,
    BuscarPropietarioComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
