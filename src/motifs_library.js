/*
Common chord progressions and rhythm patterns for pop.
Use these helpers in your songs by importing or copying them.
*/

// Pop chord progressions
const I_V_vi_IV = note("0 4 5 3").scale("C:major"); // C G Am F
const vi_IV_I_V = note("5 3 0 4").scale("C:major"); // Am F C G
const I_vi_IV_V = note("0 5 3 4").scale("C:major"); // C Am F G
const jazz_walk = note("0 2 4 5 7 5 4 2").scale("A:minor"); // example walking bass

// Rhythm patterns
const basic_drum = stack(
  s("bd*4").gain(0.8),
  s("hh*8").gain(0.3),
  s("sd*2").gain(0.4)
);

// Arpeggio example
const arp_up = note("0 2 4 7 4 2").scale("C:major").sound("triangle").gain(0.2);

// Bass template
const simple_bass = note("c2 e2 a1 g1").sound("sawtooth").lpf(500).gain(0.3);
