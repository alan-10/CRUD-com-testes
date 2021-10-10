import { v4 as uuid } from 'uuid';
import { ISchoolRepository } from "@modules/schools/repositories/ISchoolRepository";
import { School } from "@modules/schools/infra/typeorm/entities/School";
import { CreateSchoolDTOS } from "@modules/schools/dtos/CreateSchoolDTOS";
import { UpdateSchoolDTOS } from "@modules/schools/dtos/UpdateSchoolDTOS";

export class FakeSchoolRepository implements ISchoolRepository {
  private school: School[] = [];

  public async create({
    city,
    country,
    name,
    state,
  }: CreateSchoolDTOS): Promise<School> {
    const school = new School();
    Object.assign(school, { id: uuid(), city, country, name, state });
    this.school.push(school);
    return school;
  }

  public async findOne(id: string): Promise<School | undefined> {

    const findByIndex = this.school.findIndex( school => school.id === id )

    return this.school[findByIndex];
  }

  public async update({
    state,
    name,
    country,
    city,
    id,
  }: UpdateSchoolDTOS): Promise<School > {
    const school = new School();
    const findByIndex = this.school.findIndex(school => school.id == id);
    Object.assign(school, { state, name, country, city, id });
    this.school.push(this.school[findByIndex] = school);
    return school ;
  }

  public async findOneByName(name: string): Promise<School | undefined> {
    const findbyIndex = this.school.findIndex(school => school.name === name);
    return this.school[findbyIndex];
  }

  public async delete(id: string): Promise<void> {
    const findByIndex = this.school.findIndex( school => school.id === id);

    delete this.school[findByIndex];
  }
}
