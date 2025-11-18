setcpm(128/4)

const drums = stack(
  s("bd*4").gain(0.8),
  s("hh*8").gain(0.3),
  s("sd*2").gain(0.4)
);

const bass = note("c2 c2 e2 g1").sound("sawtooth").lpf(600).gain(0.5);

const chords = note("<c4 e4 g4> <f4 a4 c5> <g4 b4 d5> <a4 c5 e5>")
  .sound("sawtooth")
  .lpf(800)
  .gain(0.3)
  .every(8, x => x.slow(2));

const lead = note("e5 f5 g5 a5 g5 e5 d5").sound("square")
  .gain(0.25)
  .every(4, x => x.fast(2))
  .sometimes(x => x.add(12));

const city_pulse = stack(drums, bass, chords, lead)
  .every(16, x => x.room(0.6))
  .sometimes(x => x.degradeBy(0.1));
