import { container } from 'tsyringe';

import { ISchoolRepository } from '@modules/schools/repositories/ISchoolRepository';
import { SchoolRepository } from '@modules/schools/infra/typeorm/repositories/SchoolRepository';


container.registerSingleton<ISchoolRepository>('SchoolRepository',SchoolRepository)
