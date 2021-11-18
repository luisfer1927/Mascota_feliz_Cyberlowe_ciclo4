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
Mascota,
ConsultaVet,
Proveedor,
} from '../models';
import {MascotaRepository} from '../repositories';

export class MascotaProveedorController {
  constructor(
    @repository(MascotaRepository) protected mascotaRepository: MascotaRepository,
  ) { }

  @get('/mascotas/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Array of Mascota has many Proveedor through ConsultaVet',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Proveedor)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Proveedor>,
  ): Promise<Proveedor[]> {
    return this.mascotaRepository.proveedores(id).find(filter);
  }

  @post('/mascotas/{id}/proveedors', {
    responses: {
      '200': {
        description: 'create a Proveedor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Proveedor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Mascota.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {
            title: 'NewProveedorInMascota',
            exclude: ['id'],
          }),
        },
      },
    }) proveedor: Omit<Proveedor, 'id'>,
  ): Promise<Proveedor> {
    return this.mascotaRepository.proveedores(id).create(proveedor);
  }

  @patch('/mascotas/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Mascota.Proveedor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Proveedor, {partial: true}),
        },
      },
    })
    proveedor: Partial<Proveedor>,
    @param.query.object('where', getWhereSchemaFor(Proveedor)) where?: Where<Proveedor>,
  ): Promise<Count> {
    return this.mascotaRepository.proveedores(id).patch(proveedor, where);
  }

  @del('/mascotas/{id}/proveedors', {
    responses: {
      '200': {
        description: 'Mascota.Proveedor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Proveedor)) where?: Where<Proveedor>,
  ): Promise<Count> {
    return this.mascotaRepository.proveedores(id).delete(where);
  }
}
