setcpm(140/4)

const kick = s("bd*4").gain(0.8);
const hats = s("hh*16").gain(0.3);
const snare = s("~ sd ~ sd").gain(0.5);

const bass = note("c2 g2 a2 f2").sound("triangle").lpf(500).gain(0.4);

const pad = note("<c4 e4 g4> <f4 a4 c5> <g4 b4 d5> <a4 c5 e5>").sound("sawtooth")
 .lpf(sine.range(400, 2000).slow(16))
 .gain(0.2)
 .room(0.7);

const arpeggio = note("c5 e5 g5 c6 e5 g5").sound("triangle")
 .gain(0.25)
 .every(4, x => x.fast(2))
 .sometimes(x => x.add(12));

const starlit_overpass = stack(kick, hats, snare, bass, pad, arpeggio)
 .every(16, x => x.room(0.9))
 .sometimes(x => x.fast(2));
