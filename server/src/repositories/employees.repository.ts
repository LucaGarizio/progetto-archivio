import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {Employees, EmployeesRelations} from '../models';

export class EmployeesRepository extends DefaultCrudRepository<
  Employees,
  typeof Employees.prototype.id,
  EmployeesRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(Employees, dataSource);
  }
}
