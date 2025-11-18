setcpm(130/4)

const kick = s("bd*4").gain(0.8);
const hats = s("hh*8").gain(0.3);
const snare = s("sd*2").gain(0.4);

const bass = note("c2 e2 g1 a1").sound("sawtooth")
 .lpf(600)
 .gain(0.4);

const chords = note("<c4 e4 g4> <a3 c4 e4> <f3 a3 c4> <g3 b3 d4>").sound("sawtooth")
 .lpf(900)
 .gain(0.25)
 .every(8, x => x.slow(2));

const arpeggio = note("c5 e5 g5 a5 g5 e5").sound("triangle")
 .gain(0.2)
 .every(4, x => x.fast(2))
 .sometimes(x => x.add(12));

const pad = note("c4 d4 e4 f4 g4 a4 b4 c5").sound("sine")
 .gain(0.15)
 .lpf(perlin.range(400, 1200))
 .every(2, x => x.add(perlin.range(-2,2)))
 .room(0.8);

const euphoria = stack(kick, hats, snare, bass, chords, arpeggio, pad)
 .every(16, x => x.fast(2))
 .sometimes(x => x.room(0.95));
