import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {VisitaMascota, VisitaMascotaRelations} from '../models';

export class VisitaMascotaRepository extends DefaultCrudRepository<
  VisitaMascota,
  typeof VisitaMascota.prototype.id,
  VisitaMascotaRelations
> {
  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource,
  ) {
    super(VisitaMascota, dataSource);
  }
}
