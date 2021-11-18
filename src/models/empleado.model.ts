import {Entity, model, property, hasMany} from '@loopback/repository';
import {Mascota} from './mascota.model';
import {VisitaMascota} from './visita-mascota.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicioEmpresa: string;

  @property({
    type: 'string',
    required: true,
  })
  cargo: string;

  @property({
    type: 'number',
    required: true,
  })
  comision: number;

  @property({
    type: 'string',
    required: true,
  })
  nivel: string;

  @property({
    type: 'string',
    required: true,
  })
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @hasMany(() => Mascota, {through: {model: () => VisitaMascota}})
  mascotas: Mascota[];

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
