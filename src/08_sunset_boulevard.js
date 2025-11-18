setcpm(112/4)

const drums = stack(
  s("bd sd bd sd").gain(0.7),
  s("hh*8").gain(0.3)
);

const bass = note("f2 c2 g2 a2").sound("sawtooth").lpf(600).gain(0.3);

const chords = note("<f4 a4 c5> <c4 e4 g4> <g3 b3 d4> <a3 c4 e4>").sound("triangle")
 .lpf(900)
 .gain(0.25)
 .every(4, x => x.slow(2));

const melody = note("a4 g4 f4 e4 d4 e4 f4 g4").sound("square")
 .gain(0.2)
 .every(2, x => x.add(12));

const sunset_boulevard = stack(drums, bass, chords, melody)
 .every(16, x => x.room(0.8))
 .sometimes(x => x.degradeBy(0.2));
