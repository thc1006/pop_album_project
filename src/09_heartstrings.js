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

// ==============================================================================
// STRING SECTION - 多層弦樂營造溫柔質感
// ==============================================================================

// Soft Strings - Main (主弦樂)
const soft_strings = note("<[a3,c4,e4]!4> <[d4,f4,a4]!4> <[f3,a3,c4]!4> <[g3,b3,d4]!4>")
  .sound("sine")
  .lpf(1600)
  .gain(0.32)
  .room(0.85)
  .decay(0.7)
  .slow(2)
  .every(8, x => x.add(note("7")))
  .sometimes(x => x.add(note("12")));

// Cello Layer (大提琴層)
const cello = note("a2 a2 f2 f2 | c2 c2 g2 g2")
  .sound("triangle")
  .lpf(900)
  .gain(0.35)
  .room(0.8)
  .decay(1.2)
  .slow(2)
  .every(4, x => x.add(note("12")));

// Violin Tremolo (小提琴顫音)
const violin_tremolo = note("<a4 c5 e5>!8 <d4 f4 a4>!8 <f4 a4 c5>!8 <g4 b4 d5>!8")
  .sound("sine")
  .fast(4)
  .lpf(2200)
  .gain(sine.slow(8).range(0.18, 0.28))
  .room(0.88)
  .decay(0.4)
  .slow(2)
  .degradeBy(0.4)
  .pan(sine.slow(6).range(0.4, 0.6));

// Viola Harmony (中提琴和聲)
const viola = note("<e4 a4 c5>!8 <f4 a4 d5>!8 <c4 f4 a4>!8 <d4 g4 b4>!8")
  .sound("triangle")
  .lpf(1400)
  .gain(0.25)
  .room(0.85)
  .decay(0.9)
  .slow(4)
  .degradeBy(0.3);

// ==============================================================================
// BASS & FOUNDATION
// ==============================================================================

// Deep Bass - Main (深沉低音)
const deep_bass = note("a1 a1 f1 f1 | c1 c1 g1 g1")
  .sound("sine")
  .lpf(400)
  .gain(0.45)
  .room(0.7)
  .slow(2)
  .every(8, x => x.add(note("12")));

// Sub Bass (次低音)
const sub_bass = note("<a0!8> <f0!8> <c1!8> <g0!8>")
  .sound("sine")
  .lpf(100)
  .gain(0.38)
  .room(0.6)
  .slow(4);

// Walking Bass Ornament (行走低音裝飾)
const bass_ornament = note("~ a2 ~ ~ | ~ f2 ~ ~ | ~ c2 ~ ~ | ~ g2 ~ ~")
  .sound("triangle")
  .lpf(600)
  .gain(0.28)
  .room(0.75)
  .decay(0.5)
  .degradeBy(0.6);

// ==============================================================================
// VOCAL & MELODIC ELEMENTS
// ==============================================================================

// Vocal Melody - Main (主人聲旋律)
const vocal_melody = note("e5 d5 c5 b4 | c5 d5 e5 ~ | e5 d5 c5 a4 | b4 ~ ~ ~")
  .sound("sine")
  .lpf(2400)
  .gain(0.3)
  .room(0.8)
  .delay(0.125)
  .degradeBy(0.3)
  .every(8, x => x.sometimes(y => y.add(note("2"))))
  .every(4, x => x.sometimes(y => y.add(note("7"))));

// Harmony Vocal (和聲人聲)
const harmony_vocal = note("c5 b4 a4 g4 | a4 b4 c5 ~ | c5 b4 a4 f4 | g4 ~ ~ ~")
  .sound("sine")
  .lpf(2200)
  .gain(0.22)
  .room(0.85)
  .delay(0.25)
  .degradeBy(0.4)
  .pan(sine.slow(8).range(0.6, 0.9));

// Whispered Melody (耳語旋律)
const whisper = note("~ e5 ~ ~ | ~ d5 ~ ~ | ~ c5 ~ ~ | ~ ~ ~ ~")
  .sound("sine")
  .lpf(1800)
  .hpf(800)
  .gain(0.15)
  .room(0.9)
  .degradeBy(0.75)
  .decay(0.3)
  .pan(sine.slow(12).range(0.1, 0.4));

// ==============================================================================
// PIANO-LIKE ELEMENTS
// ==============================================================================

// Soft Piano Chords (柔和鋼琴和弦)
const piano_chords = note("<[a3,c4,e4]> <[d4,f4,a4]> <[f3,a3,c4]> <[g3,b3,d4]>")
  .sound("triangle")
  .lpf(2000)
  .gain(0.28)
  .room(0.75)
  .decay(1.5)
  .slow(4)
  .degradeBy(0.5)
  .every(16, x => x.degradeBy(0.3));

// Piano Ornament (鋼琴裝飾音)
const piano_ornament = note("~ ~ e5 ~ | ~ ~ d5 ~ | ~ ~ c5 ~ | ~ ~ ~ ~")
  .sound("triangle")
  .lpf(2800)
  .gain(0.2)
  .room(0.8)
  .decay(0.8)
  .degradeBy(0.7)
  .pan(sine.slow(10).range(0.5, 0.8));

// ==============================================================================
// ATMOSPHERIC TEXTURES
// ==============================================================================

// Breathy Texture (呼吸質感)
const breathy = note("a4 c5 e5")
  .sound("sine")
  .slow(8)
  .gain(sine.slow(16).range(0.1, 0.18))
  .lpf(perlin.range(800, 1400))
  .room(0.9)
  .decay(0.6)
  .degradeBy(0.5)
  .pan(sine.slow(20).range(0.3, 0.7));

// Warm Pad (溫暖音墊)
const warm_pad = note("<a3 c4 e4 a4>!16 <d3 f3 a3 d4>!16 <f3 a3 c4 f4>!16 <g3 b3 d4 g4>!16")
  .sound("sine")
  .slow(8)
  .gain(0.18)
  .lpf(perlin.range(600, 1200))
  .room(0.92)
  .delay(1.0)
  .decay(2.0);

// Ethereal Texture (空靈質感)
const ethereal = note(sine.range(60, 84).segment(256))
  .sound("sine")
  .lpf(perlin.range(1200, 2000))
  .gain(sine.slow(32).range(0.08, 0.15))
  .degradeBy(0.88)
  .room(0.95)
  .decay(1.5)
  .pan(perlin.range(0, 1));

// ==============================================================================
// RHYTHMIC ELEMENTS - 極簡節奏
// ==============================================================================

// Minimal Drums (極簡鼓組)
const minimal_drums = stack(
  s("bd ~ ~ ~").gain(0.35).lpf(200).room(0.8),
  s("~ ~ sd ~").gain(0.3).room(0.85).lpf(800),
  s("~ ~ ~ ~").sometimes(x => s("~ hh ~ ~").gain(0.18).hpf(2500)),
  s("~ ~ ~ ~").every(8, x => s("~ ~ ~ bd").gain(0.25).lpf(180))
);

// Soft Brush (柔和刷子)
const brush = s("~ ~ ~ ~")
  .every(4, x => s("~ shaker ~ ~").gain(0.15).hpf(6000))
  .degradeBy(0.7)
  .room(0.85);

// Heartbeat Pulse (心跳脈動)
const heartbeat = s("~ ~ ~ ~")
  .every(8, x => s("bd ~ ~ ~").gain(0.28).lpf(150))
  .degradeBy(0.6)
  .room(0.9);

// ==============================================================================
// DELICATE ORNAMENTS
// ==============================================================================

// Delicate Chimes (精緻風鈴)
const chimes = note(perlin.range(72, 96).segment(64))
  .sound("sine")
  .lpf(3500)
  .gain(sine.slow(24).range(0.08, 0.14))
  .degradeBy(0.85)
  .room(0.95)
  .decay(1.0)
  .pan(perlin.range(0.2, 0.8));

// Music Box Sparkle (音樂盒火花)
const music_box = note("e6 ~ c6 ~ | a5 ~ ~ ~ | ~ ~ ~ ~ | ~ ~ ~ ~")
  .sound("triangle")
  .lpf(3800)
  .gain(0.12)
  .room(0.9)
  .decay(0.6)
  .degradeBy(0.8)
  .delay(0.5)
  .pan(sine.slow(15).range(0.6, 1));

// Distant Bells (遠方鐘聲)
const distant_bells = note("a5 ~ ~ ~ | ~ ~ ~ ~ | ~ ~ ~ ~ | ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .lpf(3000)
  .gain(0.1)
  .room(0.98)
  .decay(3.0)
  .degradeBy(0.85);

// ==============================================================================
// FINAL COMPOSITION
// ==============================================================================

stack(
  // String Section
  soft_strings,
  cello.degradeBy(0.2),
  violin_tremolo.degradeBy(0.45),
  viola.degradeBy(0.35),

  // Bass Foundation
  deep_bass,
  sub_bass,
  bass_ornament,

  // Vocal Elements
  vocal_melody.degradeBy(0.35).every(16, x => x.degradeBy(0.25)),
  harmony_vocal.degradeBy(0.45),
  whisper.degradeBy(0.75),

  // Piano Elements
  piano_chords.degradeBy(0.55),
  piano_ornament.degradeBy(0.75),

  // Atmospheric Textures
  breathy.degradeBy(0.6),
  warm_pad.degradeBy(0.3),
  ethereal.degradeBy(0.85),

  // Rhythmic Elements
  minimal_drums.degradeBy(0.5),
  brush.degradeBy(0.7),
  heartbeat.degradeBy(0.65),

  // Delicate Ornaments
  chimes.degradeBy(0.8),
  music_box.degradeBy(0.85),
  distant_bells.degradeBy(0.9)
)
  // Global Dynamics - Breathing quality
  .gain(sine.slow(128).range(0.35, 0.55))
  .lpf(sine.slow(256).range(1200, 2000))
  .room(sine.slow(192).range(0.85, 0.95))

  // Progressive Evolution
  .every(16, x => x.gain(0.6).room(0.9))
  .every(32, x => x.room(0.95).lpf(2200))
  .every(64, x => x.gain(0.65))

  // Intimate Variations
  .sometimes(x => x.degradeBy(perlin.range(0, 0.2)))
  .sometimes(x => x.add(note(perlin.range(-1, 1))))
  .sometimes(x => x.delay(perlin.range(0.25, 0.75)))

  // Final Polish
  .delay(0.375)
  .distort(sine.slow(1024).range(0, 0.01))

/*
 * ==============================================================================
 * 極度細膩的抒情風格 - 優化版本
 * ==============================================================================
 * 技術特點：
 * - A 小調深情和弦進行 (Am - Dm - F - G)
 * - 多層弦樂編制（主弦樂 + 大提琴 + 小提琴顫音 + 中提琴）
 * - 三層低音（Sub + Deep + Ornament）營造深沉穩重
 * - 三層人聲（主旋律 + 和聲 + 耳語）增添情感層次
 * - 鋼琴元素點綴（和弦 + 裝飾音）
 * - 豐富的氛圍質感（呼吸 + 溫暖音墊 + 空靈）
 * - 極簡節奏（鼓組 + 刷子 + 心跳）凸顯旋律
 * - 精緻裝飾音（風鈴 + 音樂盒 + 遠方鐘聲）
 *
 * 混音策略：
 * - 低頻：Sub bass (< 100Hz) + Deep bass (150-400Hz)
 * - 中低頻：Cello (400-900Hz) + Bass ornament (300-600Hz)
 * - 中頻：Strings (600-1600Hz) + Viola (800-1400Hz) + Piano (1000-2000Hz)
 * - 中高頻：Violin tremolo (1400-2200Hz) + Vocals (1800-2400Hz)
 * - 高頻：Whisper (800-1800Hz) + Chimes (> 3000Hz) + Music box (3000-3800Hz)
 * - 氛圍：Pads + Ethereal textures (600-2000Hz)
 *
 * 情緒營造：
 * 絲絮般的旋律講述內心細膩的感受
 * 溫柔、深情、內省、細膩
 * 每個音符都帶著呼吸感，每個休止符都充滿情感
 *
 * 動態特色：
 * - 呼吸般的 gain 變化 (sine.slow(128))
 * - 逐漸展開的空間感 (room 0.85 -> 0.95)
 * - Degradation 營造若隱若現的質感
 * - 豐富的延遲與殘響創造內省空間
 * - Perlin 調製確保每次播放都略有不同
 */
