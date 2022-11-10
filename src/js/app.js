import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
    console.log(e);
  }
})();
