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

// ==============================================================================
// DRUM PATTERNS - Mid-tempo Rock Drums
// ==============================================================================

// Mid-tempo Drums - Main
const drums = stack(
  s("bd ~ bd ~ bd ~ bd ~").gain(0.75).lpf(250),
  s("hh*8").gain(0.32).pan(sine.slow(8)).hpf(5000),
  s("~ sd ~ sd").gain(0.48).room(0.55),
  s("~ ~ ~ oh").gain(0.28).every(4, x => x.degradeBy(0.4)).hpf(4000)
);

// Driving Hi-hat Pattern
const driving_hats = s("hh ~ hh hh ~ hh ~ hh")
  .gain(0.3)
  .hpf(6000)
  .pan(sine.slow(4).range(0.3, 0.7))
  .degradeBy(0.3)
  .sometimes(x => x.fast(2));

// Shaker Groove
const shaker = s("~ shaker*4 ~ shaker*2")
  .gain(0.22)
  .hpf(7000)
  .pan(sine.slow(3).range(0.4, 0.6))
  .degradeBy(0.3);

// Ride Cymbal
const ride = s("~ ~ ~ ~")
  .every(4, x => s("~ ~ ~ oh").gain(0.25).hpf(5000))
  .degradeBy(0.5);

// ==============================================================================
// BASS LAYERS
// ==============================================================================

// Warm Bass - Main
const bass = note("f2 f2 c2 c2 | g2 g2 a2 a2")
  .sound("triangle")
  .lpf(650)
  .gain(0.5)
  .room(0.4)
  .every(8, x => x.add(note("12")))
  .sometimes(x => x.add(note("7")));

// Sub Bass Layer
const sub_bass = note("<f1!8> <c2!8> <g1!8> <a1!8>")
  .sound("sine")
  .lpf(120)
  .gain(0.45)
  .room(0.3);

// Walking Bass (bridge section)
const walking_bass = note("f2 g2 a2 bb2 | c3 bb2 a2 g2")
  .sound("triangle")
  .lpf(700)
  .gain(0.48)
  .room(0.45)
  .degradeBy(0.6)
  .every(16, x => x.degradeBy(0.2));

// ==============================================================================
// GUITAR LAYERS
// ==============================================================================

// Guitar Chords - Main
const guitar_chords = note("<[f3,a3,c4,f4]!4> <[c3,e3,g3,c4]!4> <[g3,b3,d4,g4]!4> <[a3,c4,e4,a4]!4>")
  .sound("triangle")
  .lpf(1600)
  .gain(0.38)
  .room(0.6)
  .decay(0.35)
  .every(4, x => x.add(note("12")))
  .sometimes(x => x.add(note("7")));

// Guitar Strum Rhythm
const strum_rhythm = note("<f4 a4 c5 f5>!4 <c4 e4 g4 c5>!4 <g4 b4 d5 g5>!4 <a4 c5 e5 a5>!4")
  .sound("triangle")
  .lpf(2000)
  .gain(0.28)
  .room(0.65)
  .decay(0.25)
  .pan(sine.slow(6).range(0.3, 0.7))
  .degradeBy(0.2);

// Lead Guitar Licks
const guitar_licks = note("~ f5 g5 a5 | ~ c6 ~ bb5 | ~ g5 a5 ~ | ~ ~ ~ ~")
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.3)
  .room(0.55)
  .delay(0.25)
  .distort(0.1)
  .degradeBy(0.5)
  .every(8, x => x.degradeBy(0.3));

// Fingerpicked Arpeggio
const fingerpick = note("f4 a4 c5 f5 a4 c5 | c4 e4 g4 c5 e4 g4 | g3 b3 d4 g4 b3 d4 | a3 c4 e4 a4 c4 e4")
  .sound("triangle")
  .lpf(2200)
  .gain(0.25)
  .room(0.7)
  .decay(0.4)
  .degradeBy(0.4)
  .pan(sine.slow(5).range(0.2, 0.5));

// ==============================================================================
// MELODIC ELEMENTS
// ==============================================================================

// Lead Melody - Main
const melody = note("a5 g5 f5 e5 | d5 e5 f5 g5 | a5 c6 a5 g5 | f5 ~ ~ ~")
  .sound("square")
  .lpf(1800)
  .gain(0.32)
  .room(0.55)
  .delay(0.25)
  .every(8, x => x.sometimes(y => y.add(note("7"))))
  .every(4, x => x.sometimes(y => y.add(note("12"))));

// Harmony Melody
const harmony_melody = note("c6 bb5 a5 g5 | f5 g5 a5 bb5 | c6 e6 c6 bb5 | a5 ~ ~ ~")
  .sound("sine")
  .lpf(2200)
  .gain(0.22)
  .room(0.65)
  .delay(0.375)
  .degradeBy(0.3)
  .pan(sine.slow(5).range(0.5, 0.9));

// Whistle-like Ornament
const whistle_ornament = note("f6 ~ g6 ~ | a6 ~ ~ ~ | ~ ~ c7 ~ | ~ ~ ~ ~")
  .sound("sine")
  .lpf(3500)
  .gain(0.18)
  .room(0.75)
  .degradeBy(0.7)
  .delay(0.5)
  .pan(sine.slow(7).range(0.2, 0.8));

// ==============================================================================
// ATMOSPHERIC LAYERS
// ==============================================================================

// Warm Pad
const warm_pad = note("<f3 a3 c4 f4>!16 <c3 e3 g3 c4>!16 <g3 b3 d4 g4>!16 <a3 c4 e4 a4>!16")
  .sound("sine")
  .slow(4)
  .gain(0.2)
  .lpf(perlin.range(700, 1300))
  .room(0.85)
  .delay(0.5)
  .sometimes(x => x.add(note("12")));

// String Ensemble
const strings = note("<[f3,a3,c4]!16> <[c3,e3,g3]!16> <[g3,b3,d4]!16> <[a3,c4,e4]!16>")
  .sound("triangle")
  .slow(4)
  .gain(0.18)
  .lpf(perlin.range(900, 1500))
  .room(0.88)
  .decay(1.2)
  .delay(0.75);

// Sunset Atmosphere
const sunset_atmos = note(perlin.range(60, 84).segment(128))
  .sound("sine")
  .lpf(2500)
  .gain(sine.slow(32).range(0.08, 0.16))
  .degradeBy(0.75)
  .room(0.9)
  .decay(0.8)
  .pan(sine.slow(6).range(0.2, 0.8));

// Golden Hour Shimmer
const golden_shimmer = note(sine.range(72, 96).segment(256))
  .sound("sine")
  .lpf(3500)
  .hpf(2500)
  .gain(0.12)
  .degradeBy(0.85)
  .room(0.95)
  .decay(1.5)
  .pan(perlin.range(0, 1));

// Ambient Traffic Texture
const traffic_texture = note(perlin.range(36, 60).segment(512))
  .sound("square")
  .lpf(perlin.range(400, 1000))
  .gain(0.08)
  .degradeBy(0.92)
  .room(0.85)
  .decay(0.2)
  .pan(rand.range(0.3, 0.7));

// Breeze Texture
const breeze = note("f4 g4 a4")
  .slow(16)
  .sound("sine")
  .lpf(sine.slow(32).range(1200, 2000))
  .gain(sine.slow(64).range(0.08, 0.15))
  .room(0.92)
  .delay(1.0)
  .degradeBy(0.6);

// ==============================================================================
// FINAL COMPOSITION
// ==============================================================================

stack(
  // Rhythm Section
  drums.degradeBy(0.2).every(16, x => x.gain(0.8)),
  driving_hats.degradeBy(0.35),
  shaker.degradeBy(0.4),
  ride,

  // Bass Section
  bass,
  sub_bass,
  walking_bass,

  // Guitar Section
  guitar_chords.degradeBy(0.15).every(8, x => x.gain(0.4)),
  strum_rhythm.degradeBy(0.25),
  guitar_licks,
  fingerpick.degradeBy(0.45),

  // Melodic Section
  melody.degradeBy(0.3).every(16, x => x.degradeBy(0.2)),
  harmony_melody.degradeBy(0.35),
  whistle_ornament,

  // Atmospheric Section
  warm_pad,
  strings.degradeBy(0.2),
  sunset_atmos,
  golden_shimmer.degradeBy(0.75),
  traffic_texture.degradeBy(0.85),
  breeze
)
  // Global Dynamics
  .gain(sine.slow(128).range(0.5, 0.7))
  .lpf(sine.slow(256).range(1200, 2000))
  .room(sine.slow(96).range(0.65, 0.8))

  // Progressive Energy
  .every(16, x => x.gain(0.75))
  .every(32, x => x.room(0.8).lpf(2200))
  .every(64, x => x.gain(0.8))

  // Variations
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))
  .sometimes(x => x.lpf(perlin.range(1400, 2200)))
  .sometimes(x => x.add(note(perlin.range(-1, 1))))

  // Final Polish
  .delay(0.25)
  .distort(sine.slow(512).range(0, 0.03))

/*
 * ==============================================================================
 * 溫暖的流行搖滾風格 - 優化版本
 * ==============================================================================
 * 技術特點：
 * - F 大調溫暖和弦進行 (F - C - G - Am)
 * - 多層吉他質感（和弦 + 掃弦 + 主音 + 指彈）
 * - 三層貝斯（Sub + Main + Walking）增加厚度
 * - 雙主旋律與和聲營造立體感
 * - 弦樂音墊增添情感深度
 * - 夕陽氛圍音效（金色閃爍、車流質感、微風）
 * - 中板節奏營造舒適感與餘韻
 *
 * 混音策略：
 * - 低頻：Sub bass (< 120Hz) + Main bass (300-650Hz)
 * - 中低頻：Guitar chords (600-1600Hz) + Walking bass (400-700Hz)
 * - 中頻：Strumming (1000-2000Hz) + Fingerpicking (1000-2200Hz)
 * - 中高頻：Melodies (1800-2200Hz) + Guitar licks (1200-1800Hz)
 * - 高頻：Whistle (3000-3500Hz) + Shimmer (2500-3500Hz)
 * - 氛圍：Pads + Strings (700-1500Hz) + Atmospheric textures
 *
 * 情緒營造：
 * 夕陽餘暉下的城市，一天的結束也是希望的開始
 * 溫暖、開闊、餘韻、淡淡憂傷中帶著光明
 */
