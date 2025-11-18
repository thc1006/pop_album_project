setcpm(90/4)

const chords = note("<c4 e4 a4> <d4 f4 a4> <f4 a4 c5> <g4 b4 d5>").sound("sine")
 .gain(0.3)
 .lpf(800)
 .room(0.8)
 .slow(2);

const bass = note("a2 f2 c2 g2").sound("triangle")
 .gain(0.2)
 .room(0.7);

const lead = note("e5 d5 c5 b4 c5 d5 e5").sound("sine")
 .gain(0.25)
 .every(4, x => x.slow(2));

const drums = s("bd ~ sd ~").gain(0.3);

const heartstrings = stack(chords, bass, lead, drums)
 .every(32, x => x.room(0.9))
 .sometimes(x => x.degradeBy(0.3));
