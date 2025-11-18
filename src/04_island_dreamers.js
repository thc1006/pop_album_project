setcpm(90/4)

const guitar = note("c4 d4 e4 g4 a4 g4 e4 d4").sound("triangle")
  .gain(0.3)
  .lpf(1000)
  .room(0.8)
  .every(4, x => x.slow(2));

const drone = note("c3*16").sound("sine").gain(0.2).room(0.9).slow(4);

const percussion = s("bd ~ bd ~ hh*4").gain(0.2).hpf(1000);

const island_dreamers = stack(guitar, drone, percussion)
  .every(32, x => x.gain(0.4))
  .sometimes(x => x.add(7));
