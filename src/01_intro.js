setcpm(100/4)

const pad = note("c4 e4 g4 c5").sound("sine").slow(4).gain(0.3).room(0.8).lpf(800);
const bass = note("c2*8").sound("triangle").gain(0.2).room(0.7);
const bell = note("c5 g4 e5").sound("triangle").gain(0.2).room(0.6).lpf(1200);

const intro = stack(pad, bass, bell)
  .every(8, x => x.slow(2))
  .every(16, x => x.gain(0.5))
  .sometimes(x => x.degradeBy(0.1));
