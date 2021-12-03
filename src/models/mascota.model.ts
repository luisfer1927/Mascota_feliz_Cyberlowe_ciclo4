import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {ConsultaVet} from './consulta-vet.model';
import {Empleado} from './empleado.model';
import {Pagoplan} from './pagoplan.model';
import {Plan} from './plan.model';
import {Propietario} from './propietario.model';
import {Proveedor} from './proveedor.model';
import {VisitaMascota} from './visita-mascota.model';

@model()
export class Mascota extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  raza: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSalud: string;

  @property({
    type: 'string',
    required: true,
  })
  especie: string;

  @property({
    type: 'string',
    required: true,
  })
  activo: string;

  @property({
    type: 'string',
    required: true,
  })
  motivoInac: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaNac: string;

  @property({
    type: 'string',
    required: true,
  })
  signoVital: string;

  @property({
    type: 'string',
    required: true,
  })
  alimento: string;

  @property({
    type: 'string',
    required: true,
  })
  enfermedadesPre: string;

  @property({
    type: 'string',
    required: true,
  })
  foto: string;

  @belongsTo(() => Propietario)
  propietarioId: string;

  @hasMany(() => Proveedor, {through: {model: () => ConsultaVet}})
  proveedores: Proveedor[];

  @hasMany(() => Empleado, {through: {model: () => VisitaMascota}})
  Y: Empleado[];

  @hasMany(() => Plan, {through: {model: () => Pagoplan}})
  plans: Plan[];

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
