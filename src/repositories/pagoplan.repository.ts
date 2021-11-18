import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {Pagoplan, PagoplanRelations} from '../models';

export class PagoplanRepository extends DefaultCrudRepository<
  Pagoplan,
  typeof Pagoplan.prototype.id,
  PagoplanRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(Pagoplan, dataSource);
  }
}
