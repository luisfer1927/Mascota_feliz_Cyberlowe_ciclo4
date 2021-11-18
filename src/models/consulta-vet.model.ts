import {Entity, model, property} from '@loopback/repository';

@model()
export class ConsultaVet extends Entity {
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
  id_proveedor: string;

  @property({
    type: 'string',
  })
  mascotaId?: string;

  @property({
    type: 'string',
  })
  proveedorId?: string;

  constructor(data?: Partial<ConsultaVet>) {
    super(data);
  }
}

export interface ConsultaVetRelations {
  // describe navigational properties here
}

export type ConsultaVetWithRelations = ConsultaVet & ConsultaVetRelations;
