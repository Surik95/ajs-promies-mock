import GameSavingLoader from '../GameSavingLoader';

test('Проверка работы функции load', async () => {
  expect.assertions(1);
  const value = await GameSavingLoader.load();
  expect(value).toBe(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}',
  );
});
