import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Proveedor,
ConsultaVet,
Mascota,
} from '../models';
import {ProveedorRepository} from '../repositories';

export class ProveedorMascotaController {
  constructor(
    @repository(ProveedorRepository) protected proveedorRepository: ProveedorRepository,
  ) { }

  @get('/proveedors/{id}/mascotas', {
    responses: {
      '200': {
        description: 'Array of Proveedor has many Mascota through ConsultaVet',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mascota)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Mascota>,
  ): Promise<Mascota[]> {
    return this.proveedorRepository.mascotas(id).find(filter);
  }

  @post('/proveedors/{id}/mascotas', {
    responses: {
      '200': {
        description: 'create a Mascota model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mascota)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Proveedor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {
            title: 'NewMascotaInProveedor',
            exclude: ['id'],
          }),
        },
      },
    }) mascota: Omit<Mascota, 'id'>,
  ): Promise<Mascota> {
    return this.proveedorRepository.mascotas(id).create(mascota);
  }

  @patch('/proveedors/{id}/mascotas', {
    responses: {
      '200': {
        description: 'Proveedor.Mascota PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {partial: true}),
        },
      },
    })
    mascota: Partial<Mascota>,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.proveedorRepository.mascotas(id).patch(mascota, where);
  }

  @del('/proveedors/{id}/mascotas', {
    responses: {
      '200': {
        description: 'Proveedor.Mascota DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.proveedorRepository.mascotas(id).delete(where);
  }
}
