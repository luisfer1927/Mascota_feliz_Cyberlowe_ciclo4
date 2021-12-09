import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPropietarioComponent } from './propietarios/buscar-propietario/buscar-propietario.component';
import { CrearPropietarioComponent } from './propietarios/crear-propietario/crear-propietario.component';
import { EditarPropietarioComponent } from './propietarios/editar-propietario/editar-propietario.component';
import { EliminarPropietarioComponent } from './propietarios/eliminar-propietario/eliminar-propietario.component';

const routes: Routes = [
  {
  path:'crear-propietario',
  component: CrearPropietarioComponent
},

{
  path: 'editar-propietario',
  component: EditarPropietarioComponent
},
{
  path: 'buscar-propietario',
  component: BuscarPropietarioComponent
},
{
  path: 'eliminar-propietario',
  component: EliminarPropietarioComponent
},

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
