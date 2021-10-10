import { inject, injectable } from 'tsyringe';
import { School } from '@modules/schools/infra/typeorm/entities/School';

import { ISchoolRepository } from '../repositories/ISchoolRepository';
import { AppErros } from '@shered/errors/AppErros';

@injectable()
export class DeleteSchoolService {

  constructor(
    @inject('SchoolRepository')
    private schoolRepository: ISchoolRepository
  ){}

  async execute(id: string){


    const schoolExists = await  this.schoolRepository.findOne(id);
      
    if(!schoolExists){
      throw new AppErros('school not exists');
    } else {
        this.schoolRepository.delete(id);
    }
  }
}