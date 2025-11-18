/*
 * ==============================================================================
 * 05. MIDNIGHT LOVERS (午夜戀人) - Emotional Ballad
 * ==============================================================================
 * 夜色降臨，城市中的愛情故事
 * 抒情旋律講述內心的情感與思念
 *
 * 調性: A Minor
 * BPM: 80
 * 風格: Ballad, Emotional Pop (告五人抒情風格)
 * 情緒: 深情、思念、溫柔、憂傷
 *
 * 和弦進行: i - VII - VI - V (Am - G - F - Em)
 */

setcpm(80/4)

// Piano (柔和鋼琴)
const piano = note("<[a3,c4,e4]!4> <[g3,b3,d4]!4> <[f3,a3,c4]!4> <[e3,g3,b3]!4>")
  .sound("sine")
  .lpf(1800)
  .gain(0.35)
  .room(0.8)
  .decay(0.6)
  .slow(2)
  .every(8, x => x.add(note("12")));

// Bass
const bass = note("a1 a1 g1 g1 | f1 f1 e1 e1")
  .sound("triangle")
  .lpf(500)
  .gain(0.4)
  .room(0.6)
  .every(16, x => x.add(note("7")));

// Strings (弦樂 Pad)
const strings = note("<a3 c4 e4 a4>!16 <g3 b3 d4 g4>!16 <f3 a3 c4 f4>!16 <e3 g3 b3 e4>!16")
  .sound("sine")
  .slow(4)
  .gain(0.18)
  .lpf(perlin.range(600, 1200))
  .room(0.9)
  .delay(0.5);

// Lead Vocal Melody
const vocal = note("e5 d5 c5 d5 | e5 g5 a5 ~ | g5 e5 d5 c5 | d5 ~ ~ ~")
  .sound("sine")
  .lpf(2500)
  .gain(0.32)
  .room(0.75)
  .delay(0.125)
  .every(8, x => x.sometimes(y => y.add(note("2"))));

// Harmony
const harmony = note("c5 b4 a4 b4 | c5 e5 f5 ~ | e5 c5 b4 a4 | b4 ~ ~ ~")
  .sound("sine")
  .lpf(2200)
  .gain(0.2)
  .room(0.85)
  .delay(0.25)
  .degradeBy(0.4);

// Ballad Drums
const drums = stack(
  s("bd ~ ~ ~").gain(0.4).lpf(250),
  s("~ ~ sd ~").gain(0.35).room(0.8),
  s("~ hh ~ hh").gain(0.22).hpf(2500)
);

// Ambient Shimmer
const shimmer = note(sine.range(72, 96).segment(128))
  .sound("sine")
  .lpf(3500)
  .hpf(2000)
  .gain(0.1)
  .degradeBy(0.7)
  .room(0.95)
  .pan(sine.slow(4).range(0, 1));

stack(
  piano.degradeBy(0.1),
  bass,
  strings,
  vocal.degradeBy(0.3).every(16, x => x.degradeBy(0.2)),
  harmony.degradeBy(0.6),
  drums.degradeBy(0.4),
  shimmer.degradeBy(0.75)
)
  .gain(sine.slow(128).range(0.4, 0.6))
  .lpf(sine.slow(256).range(1400, 2200))
  .room(0.8)
  .every(16, x => x.gain(0.65))
  .every(32, x => x.room(0.9))
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))
  .delay(0.25)

/*
 * 抒情民謠風格，細膩的情感表達
 * 技術特點：
 * - A 小調抒情和弦進行
 * - 鋼琴與弦樂營造溫柔氛圍
 * - 簡約鼓組凸顯旋律
 * - 豐富殘響營造情感空間
 */
