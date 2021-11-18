import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {ConsultaVet, ConsultaVetRelations} from '../models';

export class ConsultaVetRepository extends DefaultCrudRepository<
  ConsultaVet,
  typeof ConsultaVet.prototype.id,
  ConsultaVetRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(ConsultaVet, dataSource);
  }
}
