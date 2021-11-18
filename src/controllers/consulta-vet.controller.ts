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
import {ConsultaVet} from '../models';
import {ConsultaVetRepository} from '../repositories';

export class ConsultaVetController {
  constructor(
    @repository(ConsultaVetRepository)
    public consultaVetRepository : ConsultaVetRepository,
  ) {}

  @post('/consulta-vets')
  @response(200, {
    description: 'ConsultaVet model instance',
    content: {'application/json': {schema: getModelSchemaRef(ConsultaVet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsultaVet, {
            title: 'NewConsultaVet',
            exclude: ['id'],
          }),
        },
      },
    })
    consultaVet: Omit<ConsultaVet, 'id'>,
  ): Promise<ConsultaVet> {
    return this.consultaVetRepository.create(consultaVet);
  }

  @get('/consulta-vets/count')
  @response(200, {
    description: 'ConsultaVet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ConsultaVet) where?: Where<ConsultaVet>,
  ): Promise<Count> {
    return this.consultaVetRepository.count(where);
  }

  @get('/consulta-vets')
  @response(200, {
    description: 'Array of ConsultaVet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ConsultaVet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ConsultaVet) filter?: Filter<ConsultaVet>,
  ): Promise<ConsultaVet[]> {
    return this.consultaVetRepository.find(filter);
  }

  @patch('/consulta-vets')
  @response(200, {
    description: 'ConsultaVet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsultaVet, {partial: true}),
        },
      },
    })
    consultaVet: ConsultaVet,
    @param.where(ConsultaVet) where?: Where<ConsultaVet>,
  ): Promise<Count> {
    return this.consultaVetRepository.updateAll(consultaVet, where);
  }

  @get('/consulta-vets/{id}')
  @response(200, {
    description: 'ConsultaVet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ConsultaVet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ConsultaVet, {exclude: 'where'}) filter?: FilterExcludingWhere<ConsultaVet>
  ): Promise<ConsultaVet> {
    return this.consultaVetRepository.findById(id, filter);
  }

  @patch('/consulta-vets/{id}')
  @response(204, {
    description: 'ConsultaVet PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ConsultaVet, {partial: true}),
        },
      },
    })
    consultaVet: ConsultaVet,
  ): Promise<void> {
    await this.consultaVetRepository.updateById(id, consultaVet);
  }

  @put('/consulta-vets/{id}')
  @response(204, {
    description: 'ConsultaVet PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() consultaVet: ConsultaVet,
  ): Promise<void> {
    await this.consultaVetRepository.replaceById(id, consultaVet);
  }

  @del('/consulta-vets/{id}')
  @response(204, {
    description: 'ConsultaVet DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.consultaVetRepository.deleteById(id);
  }
}
