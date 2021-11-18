import {Entity, model, property, hasMany} from '@loopback/repository';
import {Producto} from './producto.model';
import {Mascota} from './mascota.model';
import {ConsultaVet} from './consulta-vet.model';

@model()
export class Proveedor extends Entity {
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
  contacto: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @hasMany(() => Producto)
  productos: Producto[];

  @hasMany(() => Mascota, {through: {model: () => ConsultaVet}})
  mascotas: Mascota[];

  constructor(data?: Partial<Proveedor>) {
    super(data);
  }
}

export interface ProveedorRelations {
  // describe navigational properties here
}

export type ProveedorWithRelations = Proveedor & ProveedorRelations;
