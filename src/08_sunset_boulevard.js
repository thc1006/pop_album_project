/*
 * ==============================================================================
 * 08. SUNSET BOULEVARD (落日大道) - Warm Pop Rock
 * ==============================================================================
 * 夕陽餘暉下的車流，悠揚的搖滾旋律帶來淡淡憂傷
 * 一天的結束，也是希望的開始
 *
 * 調性: F Major
 * BPM: 112
 * 風格: Pop Rock, Warm
 * 情緒: 溫暖、開闊、餘韻、希望
 */

setcpm(112/4)

// Mid-tempo Drums
const drums = stack(
  s("bd ~ bd ~ bd ~ bd ~").gain(0.75),
  s("hh*8").gain(0.32).pan(sine.slow(8)),
  s("~ sd ~ sd").gain(0.48)
);

// Warm Bass
const bass = note("f2 f2 c2 c2 | g2 g2 a2 a2")
  .sound("triangle")
  .lpf(650)
  .gain(0.5)
  .room(0.4)
  .every(8, x => x.add(note("12")));

// Guitar Chords
const guitar_chords = note("<[f3,a3,c4,f4]!4> <[c3,e3,g3,c4]!4> <[g3,b3,d4,g4]!4> <[a3,c4,e4,a4]!4>")
  .sound("triangle")
  .lpf(1600)
  .gain(0.38)
  .room(0.6)
  .decay(0.35)
  .every(4, x => x.add(note("12")));

// Lead Melody
const melody = note("a5 g5 f5 e5 | d5 e5 f5 g5 | a5 c6 a5 g5 | f5 ~ ~ ~")
  .sound("square")
  .lpf(1800)
  .gain(0.32)
  .room(0.55)
  .delay(0.25)
  .every(8, x => x.sometimes(y => y.add(note("7"))));

// Warm Pad
const warm_pad = note("<f3 a3 c4 f4>!16 <c3 e3 g3 c4>!16 <g3 b3 d4 g4>!16 <a3 c4 e4 a4>!16")
  .sound("sine")
  .slow(4)
  .gain(0.2)
  .lpf(perlin.range(700, 1300))
  .room(0.85)
  .delay(0.5);

// Sunset Atmosphere
const sunset_atmos = note(perlin.range(60, 84).segment(128))
  .sound("sine")
  .lpf(2500)
  .gain(0.12)
  .degradeBy(0.75)
  .room(0.9)
  .pan(sine.slow(6).range(0.2, 0.8));

stack(
  drums.degradeBy(0.2),
  bass,
  guitar_chords.degradeBy(0.15),
  melody.degradeBy(0.3).every(16, x => x.degradeBy(0.2)),
  warm_pad,
  sunset_atmos
)
  .gain(sine.slow(128).range(0.5, 0.7))
  .lpf(sine.slow(256).range(1200, 2000))
  .room(0.65)
  .every(16, x => x.gain(0.75))
  .every(32, x => x.room(0.8))
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))
  .delay(0.25)

/*
 * 溫暖的流行搖滾風格
 * 技術特點：
 * - F 大調溫暖和弦進行
 * - 中板節奏營造舒適感
 * - 吉他與合成器交織
 * - 夕陽氛圍音效點綴
 */
