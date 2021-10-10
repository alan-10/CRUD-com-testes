import { AppErros } from '@shered/errors/AppErros';
import { CreateSchoolService } from './CreateSchoolService';
import { FakeSchoolRepository } from '../repositories/fakes/FakeSchoolRepository';

describe('CreateUser', () => {
  it('Should be able to created a new school', async () => {
    const fakeSchoolRepository = new FakeSchoolRepository();
    const createShool = new CreateSchoolService(fakeSchoolRepository);

    const school = await createShool.execute({
      city: 'CityTest',
      country: 'CountyTest',
      name: 'NameSchoolTest',
      state: 'TEST',
      
    });

    expect(school).toHaveProperty('id');
  });

  it('should be not able created school with email alread user other ', async () => {
    const fakeSchoolRepository = new FakeSchoolRepository();
    const createShool = new CreateSchoolService(fakeSchoolRepository);

    const school = await createShool.execute({
      city: 'CityTest',
      country: 'CountyTest',
      name: 'NameSchoolTest',
      state: 'TEST'
    });

    expect( createShool.execute({
      city: 'CityTest',
      country: 'CountyTest',
      name: 'NameSchoolTest',
      state: 'TEST'
    })).rejects.toBeInstanceOf(AppErros);
  })
})