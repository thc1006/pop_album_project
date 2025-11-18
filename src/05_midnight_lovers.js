setcpm(80/4)

const piano = note("<c4 e4 g4 c5> <a3 c4 e4 a4>").sound("sine").gain(0.3).lpf(800).room(0.8).slow(2);

const bass = note("c2*4 a2*4").sound("triangle").gain(0.2).room(0.6).slow(2);

const percussion = s("bd ~ sd ~").gain(0.3).lpf(300);

const lead = note("e5 d5 c5 d5 e5 g5 a5").sound("sine").gain(0.2).every(4, x => x.slow(2));

const midnight_lovers = stack(piano, bass, percussion, lead)
 .every(32, x => x.room(0.9))
 .sometimes(x => x.degradeBy(0.3));
