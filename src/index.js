import SoundfontLoader from './soundfonts';

const soundfont = new SoundfontLoader();

soundfont.loadSoundfonts(['guitar'], 'asdfas')
  .then(buffers => {
    console.log(buffers);
  })
  .catch(err => {
    console.log(err);
  });
