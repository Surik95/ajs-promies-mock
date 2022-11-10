import GameSavingLoader from '../GameSavingLoader';
import read from '../reader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('работа метода load c ошибкой от reader', async () => {
  read.mockReturnValue(Promise.reject(new Error('Ошибка!')));
  expect.assertions(1);
  try {
    await GameSavingLoader.load();
  } catch (error) {
    expect(error).toEqual(Error('Ошибка!'));
  }
});
