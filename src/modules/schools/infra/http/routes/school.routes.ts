import { Router } from 'express';
import { container } from 'tsyringe';

import { getRepository } from 'typeorm';
import { School } from '@modules/schools/infra/typeorm/entities/School';

import { CreateSchoolService } from '@modules/schools/services/CreateSchoolService';
import { DeleteSchoolService } from '@modules/schools/services/DeleteSchoolService';
import { UpdateSchoolService } from '@modules/schools/services/UpdateSchoolService';



const schoolRoutes = Router();

schoolRoutes.post('/', async (request, response) => {

  const { name, country , state, city  } = request.body;

  const schoolService = container.resolve(CreateSchoolService)
  const school = await schoolService.execute({ name, country , state, city })

  return response.json(school);
  
});

schoolRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params

 
  
  const schoolService = container.resolve( DeleteSchoolService);

  await schoolService.execute(id);

  return response.json({ message: 'ok'})
});


schoolRoutes.put('/:id', async (request, response) => {



  const { id } = request.params;
  const { name, country, state, city } = request.body
  const schoolService = container.resolve(UpdateSchoolService);

  const school = await schoolService.execute({id, name, country, state, city});

  return response.json(school);
});


schoolRoutes.get('/', async(request, response) => { 
  const schoolRepository = getRepository(School);

  const allSchool = await schoolRepository.find()

  return response.json(allSchool);
})


export { schoolRoutes } 