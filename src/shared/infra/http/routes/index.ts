import { Router } from 'express';
const routes = Router();

import { schoolRoutes } from '@modules/schools/infra/http/routes/school.routes';
import { hallRoutes } from '@modules/halls/infra/http/routes/hall.routes';

routes.use('/school', schoolRoutes);
routes.use('/hall', hallRoutes)

export { routes }