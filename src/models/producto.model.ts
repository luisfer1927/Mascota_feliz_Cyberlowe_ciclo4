import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Proveedor} from './proveedor.model';
import {Pedido} from './pedido.model';
import {DetallePedido} from './detalle-pedido.model';

@model()
export class Producto extends Entity {
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
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  precioCompra: number;

  @property({
    type: 'number',
    required: true,
  })
  precioVenta: number;

  @belongsTo(() => Proveedor)
  proveedorId: string;

  @hasMany(() => Pedido, {through: {model: () => DetallePedido}})
  pedidos: Pedido[];

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
