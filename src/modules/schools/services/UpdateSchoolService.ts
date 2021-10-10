import { inject, injectable } from 'tsyringe';
import { School } from "@modules/schools/infra/typeorm/entities/School";

import { ISchoolRepository } from "../repositories/ISchoolRepository";
import { AppErros } from '@shered/errors/AppErros';

interface Request {
  id: string;
  name: string;
  country: string;
  state: string;
  city: string;
}

@injectable()
export class UpdateSchoolService {
  constructor(
    @inject('SchoolRepository')
    private schoolRepository: ISchoolRepository
    ) {}

  async execute({
    name,
    country,
    state,
    city,
    id,
  }: Request): Promise<School | undefined> {
    const school = await this.schoolRepository.findOne(id);

    if (!school) {
      throw new AppErros("School not exixts");
    }

    const schoolUpdated = await this.schoolRepository.update({
      name,
      country,
      state,
      city,
      id,
    });

    return schoolUpdated;
  }
}
