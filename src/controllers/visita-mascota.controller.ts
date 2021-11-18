import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {VisitaMascota} from '../models';
import {VisitaMascotaRepository} from '../repositories';

export class VisitaMascotaController {
  constructor(
    @repository(VisitaMascotaRepository)
    public visitaMascotaRepository : VisitaMascotaRepository,
  ) {}

  @post('/visita-mascotas')
  @response(200, {
    description: 'VisitaMascota model instance',
    content: {'application/json': {schema: getModelSchemaRef(VisitaMascota)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VisitaMascota, {
            title: 'NewVisitaMascota',
            exclude: ['id'],
          }),
        },
      },
    })
    visitaMascota: Omit<VisitaMascota, 'id'>,
  ): Promise<VisitaMascota> {
    return this.visitaMascotaRepository.create(visitaMascota);
  }

  @get('/visita-mascotas/count')
  @response(200, {
    description: 'VisitaMascota model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(VisitaMascota) where?: Where<VisitaMascota>,
  ): Promise<Count> {
    return this.visitaMascotaRepository.count(where);
  }

  @get('/visita-mascotas')
  @response(200, {
    description: 'Array of VisitaMascota model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(VisitaMascota, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(VisitaMascota) filter?: Filter<VisitaMascota>,
  ): Promise<VisitaMascota[]> {
    return this.visitaMascotaRepository.find(filter);
  }

  @patch('/visita-mascotas')
  @response(200, {
    description: 'VisitaMascota PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VisitaMascota, {partial: true}),
        },
      },
    })
    visitaMascota: VisitaMascota,
    @param.where(VisitaMascota) where?: Where<VisitaMascota>,
  ): Promise<Count> {
    return this.visitaMascotaRepository.updateAll(visitaMascota, where);
  }

  @get('/visita-mascotas/{id}')
  @response(200, {
    description: 'VisitaMascota model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(VisitaMascota, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(VisitaMascota, {exclude: 'where'}) filter?: FilterExcludingWhere<VisitaMascota>
  ): Promise<VisitaMascota> {
    return this.visitaMascotaRepository.findById(id, filter);
  }

  @patch('/visita-mascotas/{id}')
  @response(204, {
    description: 'VisitaMascota PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(VisitaMascota, {partial: true}),
        },
      },
    })
    visitaMascota: VisitaMascota,
  ): Promise<void> {
    await this.visitaMascotaRepository.updateById(id, visitaMascota);
  }

  @put('/visita-mascotas/{id}')
  @response(204, {
    description: 'VisitaMascota PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() visitaMascota: VisitaMascota,
  ): Promise<void> {
    await this.visitaMascotaRepository.replaceById(id, visitaMascota);
  }

  @del('/visita-mascotas/{id}')
  @response(204, {
    description: 'VisitaMascota DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.visitaMascotaRepository.deleteById(id);
  }
}
