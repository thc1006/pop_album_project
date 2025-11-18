setcpm(142/4)

const kick = s("bd*4").gain(0.7);
const hats = s("hh*8").gain(0.3).pan(sine.slow(4));
const snare = s("sd*2").gain(0.4);

const bass = note(rand.range(0, 7).segment(64)).scale("A:minor").sound("square")
 .lpf(600)
 .gain(0.4);

const glitch = note(rand.range(0, 12).segment(16)).scale("C:minor")
 .sound("triangle")
 .lpf(1000)
 .gain(0.2)
 .every(4, x => x.fast(2));

const lead = note("c4 d4 e4 g4 a4").sound("sawtooth")
 .gain(0.2)
 .every(2, x => x.add(perlin.range(-2, 2)))
 .lpf(800);

const homegrown_techno = stack(kick, hats, snare, bass, glitch, lead)
 .every(32, x => x.degradeBy(0.4))
 .sometimes(x => x.lpf(300).gain(0.2));
