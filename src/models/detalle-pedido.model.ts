import {Entity, model, property} from '@loopback/repository';

@model()
export class DetallePedido extends Entity {
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
  id_pedido: string;

  @property({
    type: 'string',
    required: true,
  })
  id_producto: string;

  @property({
    type: 'string',
    required: true,
  })
  forma_de_pago: string;

  @property({
    type: 'number',
    required: true,
  })
  precio_total: number;

  @property({
    type: 'string',
  })
  pedidoId?: string;

  @property({
    type: 'string',
  })
  productoId?: string;

  constructor(data?: Partial<DetallePedido>) {
    super(data);
  }
}

export interface DetallePedidoRelations {
  // describe navigational properties here
}

export type DetallePedidoWithRelations = DetallePedido & DetallePedidoRelations;
