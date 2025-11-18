setcpm(132/4)

const drum = stack(
  s("bd sd bd sd").gain(0.8),
  s("hh*8").gain(0.3)
);

const bass = note("c2 c3 g2 a2").sound("square").lpf(500).gain(0.5);

const riff = note("e4 g4 a4 g4").sound("sawtooth").gain(0.3).every(4, x => x.fast(2));

const chords = note("<c4 g4 c5> <a3 e4 a4> <f3 c4 f4> <g3 d4 g4>")
 .sound("sawtooth")
 .lpf(900)
 .gain(0.3);

const retro_future = stack(drum, bass, chords, riff)
 .every(32, x => x.fast(2))
 .sometimes(x => x.lpf(400).gain(0.2));
