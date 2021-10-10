import { UpdateSchoolService } from './UpdateSchoolService';
import { FakeSchoolRepository } from '@modules/schools/repositories/fakes/FakeSchoolRepository';
import { AppErros } from '@shered/errors/AppErros';

describe('UpdateSchool', () => {
  it('Should be able to update', async () => {
    const  fakeSchoolRepository = new FakeSchoolRepository()
    const updateSchool = new UpdateSchoolService(fakeSchoolRepository);
    const school = await fakeSchoolRepository.create({
      city: 'cityTest',
      country: 'BrasilTest',
      name: 'nameTest',
      state: 'MA'
    });

     const userUpdated = await updateSchool.execute({
      city: 'CE',
      country: 'NewCountry',
      name: 'NewName',
      id: school.id,
      state: 'CE'
    });


    expect(userUpdated?.name).toBe('NewName');

  });


  it('shoul be not able update school non exists', () => {
    const  fakeSchoolRepository = new FakeSchoolRepository()
    const updateSchool = new UpdateSchoolService(fakeSchoolRepository);


    expect(
      updateSchool.execute({
        city: 'CE',
        country: 'NewCountry',
        name: 'NewName',
        id: 'id-no-exists',
        state: 'CE'
      })
    ).rejects.toBeInstanceOf(AppErros);
  })
});