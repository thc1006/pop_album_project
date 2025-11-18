/*
 * ==============================================================================
 * 09. HEARTSTRINGS (心之弦) - Intimate Ballad
 * ==============================================================================
 * 絲絮般的旋律講述內心細膩的感受
 * 溫柔的弦樂與深沉的低音，凸顯旋律的流動
 *
 * 調性: A Minor
 * BPM: 90
 * 風格: Ballad, Intimate
 * 情緒: 細膩、內省、溫柔、深情
 */

setcpm(90/4)

// Soft Strings
const soft_strings = note("<[a3,c4,e4]!4> <[d4,f4,a4]!4> <[f3,a3,c4]!4> <[g3,b3,d4]!4>")
  .sound("sine")
  .lpf(1600)
  .gain(0.32)
  .room(0.85)
  .decay(0.7)
  .slow(2)
  .every(8, x => x.add(note("7")));

// Deep Bass
const deep_bass = note("a1 a1 f1 f1 | c1 c1 g1 g1")
  .sound("sine")
  .lpf(400)
  .gain(0.45)
  .room(0.7)
  .slow(2);

// Vocal Melody
const vocal_melody = note("e5 d5 c5 b4 | c5 d5 e5 ~ | e5 d5 c5 a4 | b4 ~ ~ ~")
  .sound("sine")
  .lpf(2400)
  .gain(0.3)
  .room(0.8)
  .delay(0.125)
  .degradeBy(0.3)
  .every(8, x => x.sometimes(y => y.add(note("2"))));

// Breathy Texture
const breathy = note("a4 c5 e5")
  .sound("sine")
  .slow(8)
  .gain(sine.slow(16).range(0.1, 0.18))
  .lpf(perlin.range(800, 1400))
  .room(0.9)
  .degradeBy(0.5);

// Minimal Drums
const minimal_drums = stack(
  s("bd ~ ~ ~").gain(0.35).lpf(200),
  s("~ ~ sd ~").gain(0.3).room(0.85),
  s("~ ~ ~ ~").sometimes(x => s("~ hh ~ ~").gain(0.18).hpf(2500))
);

// Delicate Chimes
const chimes = note(perlin.range(72, 96).segment(64))
  .sound("sine")
  .lpf(3500)
  .gain(0.1)
  .degradeBy(0.85)
  .room(0.95)
  .decay(1.0)
  .pan(perlin.range(0.2, 0.8));

stack(
  soft_strings,
  deep_bass,
  vocal_melody.degradeBy(0.35).every(16, x => x.degradeBy(0.25)),
  breathy.degradeBy(0.6),
  minimal_drums.degradeBy(0.5),
  chimes
)
  .gain(sine.slow(128).range(0.35, 0.55))
  .lpf(sine.slow(256).range(1200, 2000))
  .room(0.85)
  .every(16, x => x.gain(0.6))
  .every(32, x => x.room(0.95))
  .sometimes(x => x.degradeBy(perlin.range(0, 0.2)))
  .delay(0.375)

/*
 * 極度細膩的抒情風格
 * 技術特點：
 * - A 小調深情和弦
 * - 極簡節奏凸顯旋律
 * - degradeBy 創造呼吸感
 * - 豐富殘響營造內省空間
 */
