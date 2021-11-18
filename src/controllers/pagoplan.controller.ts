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
import {Pagoplan} from '../models';
import {PagoplanRepository} from '../repositories';

export class PagoplanController {
  constructor(
    @repository(PagoplanRepository)
    public pagoplanRepository : PagoplanRepository,
  ) {}

  @post('/pagoplans')
  @response(200, {
    description: 'Pagoplan model instance',
    content: {'application/json': {schema: getModelSchemaRef(Pagoplan)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagoplan, {
            title: 'NewPagoplan',
            exclude: ['id'],
          }),
        },
      },
    })
    pagoplan: Omit<Pagoplan, 'id'>,
  ): Promise<Pagoplan> {
    return this.pagoplanRepository.create(pagoplan);
  }

  @get('/pagoplans/count')
  @response(200, {
    description: 'Pagoplan model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Pagoplan) where?: Where<Pagoplan>,
  ): Promise<Count> {
    return this.pagoplanRepository.count(where);
  }

  @get('/pagoplans')
  @response(200, {
    description: 'Array of Pagoplan model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Pagoplan, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Pagoplan) filter?: Filter<Pagoplan>,
  ): Promise<Pagoplan[]> {
    return this.pagoplanRepository.find(filter);
  }

  @patch('/pagoplans')
  @response(200, {
    description: 'Pagoplan PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagoplan, {partial: true}),
        },
      },
    })
    pagoplan: Pagoplan,
    @param.where(Pagoplan) where?: Where<Pagoplan>,
  ): Promise<Count> {
    return this.pagoplanRepository.updateAll(pagoplan, where);
  }

  @get('/pagoplans/{id}')
  @response(200, {
    description: 'Pagoplan model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Pagoplan, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Pagoplan, {exclude: 'where'}) filter?: FilterExcludingWhere<Pagoplan>
  ): Promise<Pagoplan> {
    return this.pagoplanRepository.findById(id, filter);
  }

  @patch('/pagoplans/{id}')
  @response(204, {
    description: 'Pagoplan PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pagoplan, {partial: true}),
        },
      },
    })
    pagoplan: Pagoplan,
  ): Promise<void> {
    await this.pagoplanRepository.updateById(id, pagoplan);
  }

  @put('/pagoplans/{id}')
  @response(204, {
    description: 'Pagoplan PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() pagoplan: Pagoplan,
  ): Promise<void> {
    await this.pagoplanRepository.replaceById(id, pagoplan);
  }

  @del('/pagoplans/{id}')
  @response(204, {
    description: 'Pagoplan DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.pagoplanRepository.deleteById(id);
  }
}
