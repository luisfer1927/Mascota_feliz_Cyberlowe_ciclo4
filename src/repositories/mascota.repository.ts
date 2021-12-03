import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, HasManyThroughRepositoryFactory, repository} from '@loopback/repository';
import {MongoDbDataSource} from '../datasources';
import {ConsultaVet, Empleado, Mascota, MascotaRelations, Pagoplan, Plan, Propietario, Proveedor, VisitaMascota} from '../models';
import {ConsultaVetRepository} from './consulta-vet.repository';
import {EmpleadoRepository} from './empleado.repository';
import {PagoplanRepository} from './pagoplan.repository';
import {PlanRepository} from './plan.repository';
import {PropietarioRepository} from './propietario.repository';
import {ProveedorRepository} from './proveedor.repository';
import {VisitaMascotaRepository} from './visita-mascota.repository';

export class MascotaRepository extends DefaultCrudRepository<
  Mascota,
  typeof Mascota.prototype.id,
  MascotaRelations
> {

  public readonly propietario: BelongsToAccessor<Propietario, typeof Mascota.prototype.id>;

  public readonly proveedores: HasManyThroughRepositoryFactory<Proveedor, typeof Proveedor.prototype.id,
    ConsultaVet,
    typeof Mascota.prototype.id
  >;

  public readonly Y: HasManyThroughRepositoryFactory<Empleado, typeof Empleado.prototype.id,
    VisitaMascota,
    typeof Mascota.prototype.id
  >;

  public readonly plans: HasManyThroughRepositoryFactory<Plan, typeof Plan.prototype.id,
    Pagoplan,
    typeof Mascota.prototype.id
  >;

  constructor(
    @inject('datasources.mongoDB') dataSource: MongoDbDataSource, @repository.getter('PropietarioRepository') protected propietarioRepositoryGetter: Getter<PropietarioRepository>, @repository.getter('ConsultaVetRepository') protected consultaVetRepositoryGetter: Getter<ConsultaVetRepository>, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>, @repository.getter('VisitaMascotaRepository') protected visitaMascotaRepositoryGetter: Getter<VisitaMascotaRepository>, @repository.getter('EmpleadoRepository') protected empleadoRepositoryGetter: Getter<EmpleadoRepository>, @repository.getter('PagoplanRepository') protected pagoplanRepositoryGetter: Getter<PagoplanRepository>, @repository.getter('PlanRepository') protected planRepositoryGetter: Getter<PlanRepository>,
  ) {
    super(Mascota, dataSource);
    this.plans = this.createHasManyThroughRepositoryFactoryFor('plans', planRepositoryGetter, pagoplanRepositoryGetter,);
    this.registerInclusionResolver('plans', this.plans.inclusionResolver);
    this.Y = this.createHasManyThroughRepositoryFactoryFor('Y', empleadoRepositoryGetter, visitaMascotaRepositoryGetter,);
    this.registerInclusionResolver('Y', this.Y.inclusionResolver);
    this.proveedores = this.createHasManyThroughRepositoryFactoryFor('proveedores', proveedorRepositoryGetter, consultaVetRepositoryGetter,);
    this.registerInclusionResolver('proveedores', this.proveedores.inclusionResolver);
    this.propietario = this.createBelongsToAccessorFor('propietario', propietarioRepositoryGetter,);
    this.registerInclusionResolver('propietario', this.propietario.inclusionResolver);
  }
}
