import {Entity, model, property} from '@loopback/repository';

@model()
export class Pagoplan extends Entity {
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
  id_plan: string;

  @property({
    type: 'string',
    required: true,
  })
  forma_de_pago: string;

  @property({
    type: 'number',
    required: true,
  })
  valorplan: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha_pago: string;

  @property({
    type: 'string',
  })
  mascotaId?: string;

  @property({
    type: 'string',
  })
  planId?: string;

  constructor(data?: Partial<Pagoplan>) {
    super(data);
  }
}

export interface PagoplanRelations {
  // describe navigational properties here
}

export type PagoplanWithRelations = Pagoplan & PagoplanRelations;
