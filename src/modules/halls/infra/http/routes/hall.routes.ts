import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Hall } from '@modules/halls/infra/typeorm/entities/Hall';

const hallRoutes = Router();

hallRoutes.post('/', async(request, response) => {
  const { number, school_id  } = request.body;

  const hallRepository = getRepository(Hall);

  const hall = hallRepository.create({ number, school_id });

  await hallRepository.save(hall);
  return response.json(hall);
})


export { hallRoutes }