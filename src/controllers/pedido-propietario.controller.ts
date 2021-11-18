import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Pedido,
  Propietario,
} from '../models';
import {PedidoRepository} from '../repositories';

export class PedidoPropietarioController {
  constructor(
    @repository(PedidoRepository)
    public pedidoRepository: PedidoRepository,
  ) { }

  @get('/pedidos/{id}/propietario', {
    responses: {
      '200': {
        description: 'Propietario belonging to Pedido',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Propietario)},
          },
        },
      },
    },
  })
  async getPropietario(
    @param.path.string('id') id: typeof Pedido.prototype.id,
  ): Promise<Propietario> {
    return this.pedidoRepository.propietario(id);
  }
}
