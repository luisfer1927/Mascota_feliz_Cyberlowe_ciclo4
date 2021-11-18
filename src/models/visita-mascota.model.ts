import {Entity, model, property} from '@loopback/repository';

@model()
export class VisitaMascota extends Entity {
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
  id_mascota: string;

  @property({
    type: 'string',
    required: true,
  })
  id_empleado: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
  })
  mascotaId?: string;

  @property({
    type: 'string',
  })
  empleadoId?: string;

  constructor(data?: Partial<VisitaMascota>) {
    super(data);
  }
}

export interface VisitaMascotaRelations {
  // describe navigational properties here
}

export type VisitaMascotaWithRelations = VisitaMascota & VisitaMascotaRelations;
