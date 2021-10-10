import { ISchoolRepository } from "../../../repositories/ISchoolRepository";
import { School } from "../entities/School";
import { CreateSchoolDTOS } from "../../../dtos/CreateSchoolDTOS";
import { UpdateSchoolDTOS } from "../../../dtos/UpdateSchoolDTOS";

import { getRepository, Repository } from "typeorm";

export class SchoolRepository implements ISchoolRepository {
  private ormRepository: Repository<School>;

  constructor() {
    this.ormRepository = getRepository(School);
  }

  public async create({
    city,
    country,
    name,
    state,
  }: CreateSchoolDTOS): Promise<School  > {
    const school = this.ormRepository.create({ city, country, name, state });

    await this.ormRepository.save(school);
    return school;
  }

  public async findOne(id: string): Promise<School | undefined> {
    const school = await this.ormRepository.findOne(id);
    return school;
  }

  public async update({
    state,
    name,
    country,
    city,
    id,
  }: UpdateSchoolDTOS): Promise<School | undefined> {
    const school = await this.findOne(id);

    await this.ormRepository.update(
      { id },
      { state, name, country, city, id }
    );

    return this.findOne(id);
  }

  public async findOneByName(name: string): Promise<School | undefined> {
    
    const school = await this.ormRepository.findOne({ where: { name } });
    return school;
  }

  public async delete(id: string): Promise<void>{
    await this.ormRepository.delete(id);
  }
}

