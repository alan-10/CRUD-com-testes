import { School } from '@modules/schools/infra/typeorm/entities/School';
import { AppErros } from '@shered/errors/AppErros';
import {inject, injectable } from 'tsyringe';

import { ISchoolRepository } from '../repositories/ISchoolRepository';

interface Request {
  name: string;
  country: string;
  state: string;
  city: string;
}

@injectable()
export class CreateSchoolService {

  constructor(
    @inject('SchoolRepository')
    private schoolRepository: ISchoolRepository
    ){}

  async execute({ name, country, state, city }: Request): Promise<School | undefined> {
    
  const schoolExists = await this.schoolRepository.findOneByName(name);
  
    if (schoolExists) {
      throw new AppErros("school alread existis");
    }
    
    const school = await this.schoolRepository.create({ name, country, state, city });

    return school;
  }
}
