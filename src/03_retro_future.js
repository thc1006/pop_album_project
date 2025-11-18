/*
 * ==============================================================================
 * 03. RETRO FUTURE (復古未來) - Cyberpunk Anthem
 * ==============================================================================
 * 在街角聽見的龐克與合成器
 * 過去的躁動遇見未來的科技——這是美秀集團的賽博台客精神
 *
 * 調性: E Minor
 * BPM: 132
 * 風格: Punk Rock, Synth Rock, Experimental (美秀集團風格)
 * 情緒: 叛逆、科技感、高能量、野性
 *
 * 和弦進行: i - VI - III - VII (Em - C - G - D) 小調搖滾
 */

setcpm(132/4)

// ==============================================================================
// DRUM PATTERNS - 鼓組模式 (龐克風格)
// ==============================================================================

// Punk Drum - Main (主要龐克鼓組 - 高能量)
const punk_drum = stack(
  s("bd*4").gain(0.95),                          // 重擊大鼓
  s("hh*8").gain(0.45).degradeBy(0.15),         // 略帶混亂的 hi-hat
  s("sd sd sd sd").gain(0.65),                   // 密集小鼓
  s("~ ~ oh ~").gain(0.45).sometimes(x => x.fast(2)), // 爆發性 cymbal
  s("~ ~ ~ crash").gain(0.5).every(8, x => x.degradeBy(0.3)) // 偶爾的 crash
);

// Verse Drum (主歌鼓組 - 稍微克制)
const verse_drum = stack(
  s("bd ~ bd ~ bd ~ bd ~").gain(0.85),
  s("hh*8").gain(0.4).degradeBy(0.1),
  s("~ sd ~ sd").gain(0.55),
  s("~ ~ ~ oh").gain(0.35).every(4, x => x.degradeBy(0.4))
);

// Breakdown Drum (分解段鼓組 - 極簡)
const breakdown_drum = stack(
  s("bd ~ ~ ~").gain(0.7),
  s("~ ~ sd ~").gain(0.5).room(0.7),
  s("~ ~ ~ click").gain(0.3).fast(perlin.range(1, 3)) // 實驗性 click
);

// ==============================================================================
// BASS LINES - 貝斯線條 (厚重失真)
// ==============================================================================

// Main Bass (主要貝斯 - 失真厚重)
const main_bass = note("<e1!4> <c2!4> <g1!4> <d2!4>")
  .sound("square")
  .lpf(650)
  .gain(0.65)
  .distort(0.3)                                  // 龐克失真
  .room(0.35)
  .every(4, x => x.add(note("12")));            // 偶爾跳高八度

// Verse Bass (主歌貝斯 - 根音為主)
const verse_bass = note("e1 e2 e1 b1 | c2 c3 c2 g2 | g1 g2 g1 d2 | d2 d3 d2 a2")
  .sound("square")
  .lpf(600)
  .gain(0.6)
  .distort(0.25)
  .room(0.3)
  .sometimes(x => x.add(note("7")));

// Aggressive Bass (激進貝斯 - 副歌使用)
const aggressive_bass = note("e1*8 | c2*8 | g1*8 | d2*8")
  .sound("sawtooth")
  .lpf(700)
  .gain(0.7)
  .distort(0.4)                                  // 重失真
  .room(0.4)
  .sometimes(x => x.add(perlin.range(-2, 2)));  // 微音調變化

// ==============================================================================
// GUITAR RIFFS - 吉他 Riff (破音電吉他)
// ==============================================================================

// Main Riff (主要 Riff - 龐克能量)
const main_riff = note("e4 g4 a4 g4 | c5 b4 a4 g4 | g4 a4 b4 d5 | d5 c5 b4 a4")
  .sound("sawtooth")
  .lpf(1100)
  .gain(0.45)
  .distort(0.35)                                 // 破音效果
  .room(0.45)
  .every(4, x => x.fast(2))                     // 偶爾加速
  .sometimes(x => x.add(note("12")));           // 偶爾高八度

// Power Chords (力量和弦 - 副歌使用)
const power_chords = note("<[e3,e4,b4]!4> <[c3,c4,g4]!4> <[g3,g4,d5]!4> <[d3,d4,a4]!4>")
  .sound("sawtooth")
  .lpf(1000)
  .gain(0.5)
  .distort(0.4)                                  // 重破音
  .room(0.5)
  .every(2, x => x.add(note("12")));            // 頻繁加高八度

// Lead Guitar (主音吉他 - 間奏使用)
const lead_guitar = note("e5 g5 a5 b5 | c6 b5 a5 g5 | g5 a5 b5 d6 | d6 e6 d6 b5")
  .sound("square")
  .lpf(1400)
  .gain(0.4)
  .distort(0.3)
  .room(0.5)
  .delay(0.25)
  .sometimes(x => x.fast(2));

// ==============================================================================
// SYNTH ELEMENTS - 合成器元素 (復古未來感)
// ==============================================================================

// Retro Synth Lead (復古合成器主音)
const retro_synth = note("e5 ~ g5 a5 | ~ b5 c6 ~ | g5 ~ a5 b5 | d6 ~ ~ ~")
  .sound("square")
  .lpf(sine.range(800, 1800))                   // 動態濾波器掃描
  .gain(0.35)
  .room(0.6)
  .delay(0.125)
  .every(4, x => x.fast(1.5));

// Arpeggiator (琶音器 - 科技感)
const arpeggiator = note("e4 g4 b4 e5 b4 g4 | c4 e4 g4 c5 g4 e4 | g4 b4 d5 g5 d5 b4 | d4 f#4 a4 d5 a4 f#4")
  .sound("triangle")
  .lpf(perlin.range(1200, 2000))                // Perlin 調制濾波器
  .gain(0.28)
  .room(0.5)
  .delay(0.125)
  .pan(sine.slow(4).range(0.2, 0.8))           // 立體聲移動
  .every(8, x => x.fast(2));

// Glitch Synth (故障合成器 - 實驗性)
const glitch_synth = note(rand.range(48, 72).segment(32))  // 隨機音高
  .sound("square")
  .lpf(1500)
  .gain(0.2)
  .degradeBy(0.7)                                // 稀疏出現
  .room(0.6)
  .pan(rand.range(0, 1))                        // 隨機聲像
  .sometimes(x => x.fast(perlin.range(1, 4)));

// Pad Synth (背景 Pad - 空間感)
const pad_synth = note("<e3 g3 b3>!16 <c3 e3 g3>!16 <g3 b3 d4>!16 <d3 f#3 a3>!16")
  .sound("sine")
  .slow(4)
  .gain(0.18)
  .lpf(perlin.range(500, 1000))
  .room(0.85)
  .delay(0.5);

// ==============================================================================
// EXPERIMENTAL SOUNDS - 實驗性音色 (美秀集團自製樂器風格)
// ==============================================================================

// Metallic Percussion (金屬打擊 - 自製樂器感)
const metallic_perc = note(perlin.range(60, 84).segment(16))
  .sound("triangle")
  .gain(0.25)
  .hpf(2000)                                     // 只保留高頻
  .room(0.7)
  .degradeBy(0.6)
  .pan(rand.range(0, 1))
  .decay(0.1);

// Industrial Noise (工業噪音 - 科技台客)
const industrial_noise = note(rand.range(36, 48).segment(64))
  .sound("square")
  .lpf(600)
  .gain(0.15)
  .degradeBy(0.8)                                // 很稀疏
  .distort(0.5)
  .room(0.5);

// Vocoder Effect (合成人聲效果)
const vocoder = note("e4 e4 g4 a4 | b4 ~ c5 ~ | g4 ~ a4 b4 | d5 ~ ~ ~")
  .sound("square")
  .lpf(1200)
  .hpf(400)
  .gain(0.22)
  .room(0.7)
  .degradeBy(0.5)                                // 間歇出現
  .sometimes(x => x.add(perlin.range(-2, 2)));

// ==============================================================================
// FINAL COMPOSITION - 最終組合
// ==============================================================================

// 完整歌曲混音 (所有元素透過動態控制出現)
stack(
  // 節奏組 (核心)
  punk_drum.every(16, x => x.gain(0.95)),

  // 貝斯 (厚重)
  main_bass.every(8, x => x.sometimes(y => aggressive_bass)),

  // 吉他 (龐克能量)
  main_riff.degradeBy(0.3).every(16, x => x.degradeBy(0.1)),
  power_chords.degradeBy(0.5).every(8, x => x.degradeBy(0.2)),
  lead_guitar.degradeBy(0.7).every(32, x => x.degradeBy(0.3)),

  // 合成器 (復古未來)
  retro_synth.degradeBy(0.4).every(16, x => x.degradeBy(0.2)),
  arpeggiator.degradeBy(0.3),
  pad_synth,

  // 實驗性元素 (美秀集團風格)
  glitch_synth.degradeBy(0.7),
  metallic_perc.degradeBy(0.6),
  industrial_noise.degradeBy(0.8),
  vocoder.degradeBy(0.65)
)
  // 全局效果
  .gain(sine.slow(128).range(0.55, 0.75))       // 全曲動態變化
  .lpf(sine.slow(256).range(900, 1600))         // 緩慢濾波器變化
  .room(0.55)

  // 段落變化
  .every(16, x => x.gain(0.8))                  // 副歌能量
  .every(32, x => x.distort(0.1))               // 偶爾加失真
  .every(64, x => x.fast(1.05))                 // 長週期微加速

  // 實驗性變化 (美秀集團精神)
  .sometimes(x => x.add(perlin.range(-1, 1)))   // 微音調偏移
  .sometimes(x => x.lpf(perlin.range(800, 1400)))
  .sometimes(x => x.degradeBy(perlin.range(0, 0.2))) // 隨機故障

  // 最終修飾
  .delay(0.125)
  .room(0.6)

/*
 * ==============================================================================
 * USAGE NOTES - 使用說明
 * ==============================================================================
 *
 * 這是一首融合龐克搖滾與合成器實驗的高能量歌曲
 * 致敬美秀集團的「賽博台客」精神——科技與傳統的野性碰撞
 *
 * 建議：
 * - 在 https://strudel.cc 播放
 * - 較大音量以感受龐克能量
 * - 注意合成器與吉他的交織
 * - 聆聽實驗性元素帶來的驚喜
 *
 * 技術特點：
 * - 小調搖滾和弦進行 (Em-C-G-D)
 * - 失真破音吉他與厚重貝斯
 * - 復古合成器音色 (filter sweep, arpeggiator)
 * - 實驗性元素 (glitch, industrial noise, metallic percussion)
 * - Perlin 和 rand 創造不可預測性
 * - 高密度鼓組營造龐克能量
 *
 * 靈感來源：
 * - 美秀集團的自製樂器與高能量表演
 * - 80 年代合成器龐克
 * - 賽博龐克美學與台灣本土元素的融合
 */
