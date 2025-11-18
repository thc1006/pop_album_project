/*
 * ==============================================================================
 * 02. CITY PULSE (城市脈動) - Heartbeat of the Streets
 * ==============================================================================
 * 城市甦醒了，街道充滿生命
 * 人群、車流、霓虹燈——這是屬於城市的節奏
 *
 * 調性: C Major
 * BPM: 128
 * 風格: Pop Rock, Indie Rock (告五人風格)
 * 情緒: 活力、希望、前進
 *
 * 和弦進行: I - V - vi - IV (C - G - Am - F) 經典流行進行
 */

setcpm(128/4)

// ==============================================================================
// DRUM PATTERNS - 鼓組模式
// ==============================================================================

// Main Rock Drum (主要搖滾鼓組)
const main_drum = stack(
  s("bd ~ bd ~ bd ~ bd ~").gain(0.85),           // 強勁大鼓
  s("hh*8").gain(0.35).pan(sine.slow(8)),        // 立體 hi-hat
  s("~ sd ~ sd").gain(0.5),                       // 小鼓在 2, 4 拍
  s("~ ~ ~ oh").gain(0.3).every(4, x => x.degradeBy(0.3)) // open hi-hat
);

// Verse Drum (主歌鼓組 - 較克制)
const verse_drum = stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.7),              // 較稀疏的大鼓
  s("hh ~ hh ~ hh ~ hh ~").gain(0.3),            // 簡單 hi-hat
  s("~ ~ sd ~").gain(0.4).room(0.6)              // 帶殘響的小鼓
);

// Chorus Drum (副歌鼓組 - 滿能量)
const chorus_drum = stack(
  s("bd*4").gain(0.9),                            // 四四拍重擊
  s("hh*8").gain(0.4).pan(sine.slow(4)),         // 密集 hi-hat
  s("~ sd ~ sd").gain(0.6),                       // 強力小鼓
  s("~ ~ ~ crash").gain(0.5).every(8, x => x.degradeBy(0.5)), // 偶爾的鈸
  s("~ ~ cp ~").gain(0.25)                        // 拍手音效增強節奏感
);

// ==============================================================================
// BASS LINES - 貝斯線條
// ==============================================================================

// Verse Bass (主歌貝斯 - 穩定根音)
const verse_bass = note("<c2!4> <g2!4> <a1!4> <f2!4>")
  .sound("sawtooth")
  .lpf(600)
  .gain(0.55)
  .room(0.3)
  .every(8, x => x.add(note("12")));             // 偶爾跳高八度

// Chorus Bass (副歌貝斯 - 動態貝斯)
const chorus_bass = note("c2 c3 c2 g2 | g2 g3 g2 g2 | a1 a2 a1 e2 | f2 f3 f2 c3")
  .sound("sawtooth")
  .lpf(700)
  .gain(0.6)
  .room(0.4)
  .sometimes(x => x.add(note("7")));             // 偶爾加五度音

// Bridge Bass (橋段貝斯 - 行走貝斯)
const bridge_bass = note("c2 d2 e2 f2 | g2 a2 b2 c3")
  .sound("triangle")
  .lpf(600)
  .gain(0.5)
  .room(0.5);

// ==============================================================================
// CHORD PROGRESSIONS - 和弦進行
// ==============================================================================

// Main Chords (主要和弦 - C G Am F)
const main_chords = note("<[c4,e4,g4]!4> <[g4,b4,d5]!4> <[a3,c4,e4]!4> <[f4,a4,c5]!4>")
  .sound("sawtooth")
  .lpf(900)
  .gain(0.35)
  .room(0.5)
  .delay(0.125);

// Verse Chords (主歌和弦 - 較輕柔)
const verse_chords = note("<[c4,e4,g4]!2> <[g4,b4,d5]!2> <[a3,c4,e4]!2> <[f4,a4,c5]!2>")
  .sound("triangle")
  .lpf(1000)
  .gain(0.25)
  .room(0.6)
  .slow(2);

// Chorus Chords (副歌和弦 - 厚實飽滿)
const chorus_chords = note("<[c3,c4,e4,g4]!4> <[g3,g4,b4,d5]!4> <[a2,a3,c4,e4]!4> <[f3,f4,a4,c5]!4>")
  .sound("sawtooth")
  .lpf(1100)
  .gain(0.4)
  .room(0.5)
  .every(4, x => x.add(note("12")));             // 偶爾加高八度層次

// Arpeggiated Chords (琶音和弦 - Pre-Chorus 使用)
const arp_chords = note("c4 e4 g4 c5 g4 e4 | g4 b4 d5 g5 d5 b4 | a3 c4 e4 a4 e4 c4 | f4 a4 c5 f5 c5 a4")
  .sound("square")
  .lpf(1200)
  .gain(0.3)
  .room(0.4)
  .delay(0.125);

// ==============================================================================
// LEAD MELODIES - 主旋律
// ==============================================================================

// Verse Melody (主歌旋律 - 對話式)
const verse_melody = note("e5 e5 d5 c5 | d5 ~ e5 g5 | a5 g5 f5 e5 | d5 ~ ~ ~")
  .sound("square")
  .gain(0.3)
  .lpf(1400)
  .room(0.4)
  .delay(0.125)
  .every(4, x => x.sometimes(y => y.add(note("2")))); // 微調變化

// Chorus Melody (副歌旋律 - 上口易記)
const chorus_melody = note("c5 c5 d5 e5 | g5 ~ g5 a5 | a5 g5 f5 e5 | f5 e5 d5 c5")
  .sound("square")
  .gain(0.35)
  .lpf(1600)
  .room(0.5)
  .delay(0.125)
  .every(2, x => x.sometimes(y => y.add(note("12")))); // 偶爾跳高

// Bridge Melody (橋段旋律 - 情感推進)
const bridge_melody = note("g5 a5 b5 c6 | b5 a5 g5 f5 | e5 f5 g5 a5 | g5 ~ ~ ~")
  .sound("sine")
  .gain(0.3)
  .lpf(2000)
  .room(0.7)
  .delay(0.25)
  .slow(2);                                       // 放慢以示情感

// ==============================================================================
// GUITAR SOUNDS - 吉他音色
// ==============================================================================

// Electric Guitar Riff (電吉他 Riff - 間奏使用)
const guitar_riff = note("c4 ~ e4 g4 | g4 ~ d4 ~ | a3 ~ c4 e4 | f4 ~ c4 ~")
  .sound("sawtooth")
  .lpf(1000)
  .gain(0.38)
  .room(0.4)
  .distort(0.2)                                   // 輕微破音
  .sometimes(x => x.fast(2));                     // 偶爾加快

// Clean Guitar Texture (清音吉他質感 - 背景)
const clean_guitar = note("<c5 e5 g5>!8 <g5 b5 d6>!8 <a4 c5 e5>!8 <f5 a5 c6>!8")
  .sound("triangle")
  .lpf(2000)
  .gain(0.2)
  .room(0.6)
  .delay(0.25)
  .pan(sine.slow(8).range(0.3, 0.7));           // 立體聲移動

// ==============================================================================
// ATMOSPHERIC LAYERS - 氛圍層
// ==============================================================================

// Synth Pad (合成器 Pad)
const synth_pad = note("<c4 e4 g4 c5>!16 <g4 b4 d5 g5>!16 <a3 c4 e4 a4>!16 <f4 a4 c5 f5>!16")
  .sound("sine")
  .slow(4)
  .gain(0.15)
  .lpf(perlin.range(600, 1200))                 // Perlin 調制
  .room(0.8)
  .delay(0.375);

// High Shimmer (高頻閃爍)
const shimmer = note("c6 d6 e6 g6")
  .sound("sine")
  .gain(0.1)
  .lpf(4000)
  .room(0.9)
  .degradeBy(0.5)                                // 稀疏出現
  .pan(perlin.range(0, 1));

// ==============================================================================
// SONG STRUCTURE - 歌曲結構
// ==============================================================================

// INTRO (序奏 - 8 bars)
const intro = stack(
  verse_drum.degradeBy(0.3),                     // 漸入的鼓
  verse_bass,
  clean_guitar.degradeBy(0.4),
  synth_pad.slow(2).gain(0.1)
)
  .lpf(sine.slow(32).range(800, 1600))          // 濾波器逐漸開啟
  .gain(sine.slow(16).range(0.4, 0.6));

// VERSE 1 (主歌 1 - 16 bars)
const verse1 = stack(
  verse_drum,
  verse_bass,
  verse_chords,
  verse_melody,
  clean_guitar.degradeBy(0.3),
  synth_pad.gain(0.12)
)
  .every(8, x => x.room(0.6))
  .sometimes(x => x.lpf(perlin.range(1000, 1800)));

// PRE-CHORUS (Pre-Chorus - 8 bars)
const pre_chorus = stack(
  main_drum,
  verse_bass,
  arp_chords,
  verse_melody.gain(0.35),
  synth_pad.gain(0.18)
)
  .every(4, x => x.gain(0.7))                    // 能量堆疊
  .sometimes(x => x.fast(1.1));

// CHORUS (副歌 - 16 bars)
const chorus = stack(
  chorus_drum,
  chorus_bass,
  chorus_chords,
  chorus_melody,
  guitar_riff.degradeBy(0.3),
  clean_guitar,
  synth_pad.gain(0.2),
  shimmer
)
  .gain(0.7)                                      // 副歌整體音量加大
  .room(0.6)
  .every(8, x => x.fast(1.05))                   // 微加速增加張力
  .sometimes(x => x.add(note("12")));            // 偶爾加高八度

// VERSE 2 (主歌 2 - 16 bars, 類似 Verse 1 但稍有變化)
const verse2 = stack(
  verse_drum,
  verse_bass,
  verse_chords,
  verse_melody.sometimes(x => x.add(note("2"))), // 微調變化
  clean_guitar.degradeBy(0.2),
  synth_pad.gain(0.15)
)
  .every(8, x => x.room(0.65))
  .sometimes(x => x.lpf(perlin.range(1100, 1900)));

// BRIDGE (橋段 - 8 bars)
const bridge = stack(
  main_drum.slow(2).gain(0.6),                   // 放慢鼓組
  bridge_bass,
  main_chords.slow(2),
  bridge_melody,
  synth_pad.gain(0.25).room(0.9)
)
  .slow(2)
  .lpf(sine.slow(16).range(800, 2000))          // 情感濾波器掃描
  .room(0.8)
  .gain(sine.slow(8).range(0.5, 0.7));          // 呼吸般動態

// FINAL CHORUS (最終副歌 - 16 bars, 最高能量)
const final_chorus = stack(
  chorus_drum.gain(0.95),
  chorus_bass.gain(0.65),
  chorus_chords.gain(0.45),
  chorus_melody.add(note("12")),                 // 全部提高八度
  guitar_riff,
  clean_guitar.gain(0.25),
  synth_pad.gain(0.25),
  shimmer.degradeBy(0.3).gain(0.15)
)
  .gain(0.8)                                      // 最大音量
  .room(0.7)
  .every(4, x => x.fast(1.1))                    // 更頻繁的加速
  .sometimes(x => x.delay(0.25));

// OUTRO (尾奏 - 8 bars, 逐漸淡出)
const outro = stack(
  verse_drum.degradeBy(0.5),
  verse_bass.slow(2),
  chorus_chords.slow(2).gain(0.3),
  synth_pad.gain(0.2)
)
  .slow(2)
  .gain(sine.slow(32).range(0.2, 0.4))          // 淡出
  .lpf(sine.slow(64).range(600, 1000))
  .room(sine.slow(32).range(0.7, 0.95));

// ==============================================================================
// FINAL COMPOSITION - 最終組合
// ==============================================================================

// 完整歌曲混音 (簡化版 - 所有元素同時播放，透過 degradeBy 和 every 控制出現時機)
stack(
  // 節奏組
  main_drum.every(16, x => x.gain(0.9)),

  // 貝斯
  verse_bass.every(8, x => x.sometimes(y => chorus_bass)),

  // 和弦
  main_chords.every(4, x => x.sometimes(y => chorus_chords)),

  // 旋律
  verse_melody.every(8, x => x.sometimes(y => chorus_melody)),

  // 吉他
  guitar_riff.degradeBy(0.6).every(16, x => x.degradeBy(0.2)),
  clean_guitar.degradeBy(0.4),

  // 氛圍
  synth_pad,
  shimmer.degradeBy(0.7)
)
  // 全局效果
  .gain(sine.slow(128).range(0.5, 0.7))          // 全曲動態變化
  .lpf(sine.slow(256).range(1000, 2000))         // 緩慢濾波器變化
  .room(0.55)

  // 段落變化
  .every(16, x => x.gain(0.75))                  // 副歌能量
  .every(32, x => x.room(0.7))                   // 空間感變化
  .every(64, x => x.fast(1.05))                  // 長週期微加速

  // 細節變化
  .sometimes(x => x.delay(0.125))
  .sometimes(x => x.lpf(perlin.range(1200, 1800)))

/*
 * ==============================================================================
 * USAGE NOTES - 使用說明
 * ==============================================================================
 *
 * 這是一首充滿活力的流行搖滾歌曲，展現城市的脈動與生命力
 * 融合了告五人的流行易懂風格與獨立搖滾的能量
 *
 * 建議：
 * - 在 https://strudel.cc 播放
 * - 適中音量以感受節奏與旋律的平衡
 * - 注意副歌與主歌的對比
 *
 * 技術特點：
 * - 經典 I-V-vi-IV 和弦進行 (C-G-Am-F)
 * - 完整的歌曲結構：Intro-Verse-Pre-Chorus-Chorus-Bridge-Final Chorus-Outro
 * - 多層次的吉他與合成器音色
 * - 動態變化創造段落對比
 * - 流行易記的旋律線
 *
 * 和弦進行參考自告五人《帶我去找夜生活》等作品的流行感
 */
