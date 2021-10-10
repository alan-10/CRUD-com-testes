import { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { app } from './server';
import { AppErros } from "@shered/errors/AppErros"

app.use(( err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppErros){
    return response.status(err.statusCode).json({
      status: 'Erros',
      message: err.message
    });

    return response.status(500).json({
      status: 'Error',
      message: err,
    });
    
  }
})


app.listen(3333, () => console.log('Server Started in Port 3333 '));

