import { School } from '../infra/typeorm/entities/School';
import { CreateSchoolDTOS } from '../dtos/CreateSchoolDTOS';
import { UpdateSchoolDTOS } from '../dtos/UpdateSchoolDTOS';

export interface ISchoolRepository {
  create(data: CreateSchoolDTOS): Promise< School >;
  update(data: UpdateSchoolDTOS):Promise<School | undefined >;
  findOne(id: string):Promise<School | undefined>;
  findOneByName(name: string): Promise<School | undefined>
  delete(id : string): void;
}