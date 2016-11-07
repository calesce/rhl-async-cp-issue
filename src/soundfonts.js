export default class SoundfontLoader {
  constructor() {
    this.cache = {};
  }

  loadSoundfonts = async instruments => {
    const instrumentObjects = await Promise.all(
      instruments.map(instrument => {
        if(this.cache[instrument]) {
          return new Promise(resolve => resolve(this.cache[instrument]));
        } else {
          return new Promise(resolve => resolve({ isCool: true }));
        }
      })
    );

    instrumentObjects.forEach((instrument, i) => {
      this.cache[instruments[i]] = instrument;
    });
    return this.cache;
  }
}
