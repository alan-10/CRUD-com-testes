import { DeleteSchoolService } from './DeleteSchoolService';
import { FakeSchoolRepository } from '@modules/schools/repositories/fakes/FakeSchoolRepository';
import { AppErros } from '@shered/errors/AppErros';

describe('DeliteSchool', () => {
  it('Should be able deleted only on school', async () => {
    const fakeSchoolRepository = new FakeSchoolRepository();
    const deliteSchool = new DeleteSchoolService(fakeSchoolRepository);

    const deleteSchool = jest.spyOn(fakeSchoolRepository,'delete');

    const school = await fakeSchoolRepository.create({
      name: 'SchoolTEst',
      city: 'CityTest',
      country: 'Country',
      state: 'StateTest'
    });

    await deliteSchool.execute(school.id)

    expect(deleteSchool).toHaveBeenCalledWith(school.id);

  });

  it('shuold be not able to deleted school non existing', () => {
    const fakeSchoolRepository = new FakeSchoolRepository();
    const deliteSchool = new DeleteSchoolService(fakeSchoolRepository);

    expect(
      deliteSchool.execute('id-no-exists')
    ).rejects.toBeInstanceOf(AppErros);
  });
});