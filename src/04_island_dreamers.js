/*
 * ==============================================================================
 * 04. ISLAND DREAMERS (島嶼夢遊) - Pentatonic Folk Journey
 * ==============================================================================
 * 午後的寧靜，民謠吉他帶來島嶼的呼喚
 * 回到根源，回到自然，回到純粹的台灣之聲
 *
 * 調性: F Major Pentatonic (五聲音階)
 * BPM: 90
 * 風格: Folk Pop, Acoustic (告五人民謠風格)
 * 情緒: 平和、鄉愁、自然、溫暖
 *
 * 五聲音階: F G A C D (Fa Sol La Do Re)
 */

setcpm(90/4)

// ==============================================================================
// ACOUSTIC GUITAR - 木吉他 (主要樂器)
// ==============================================================================

// Fingerpicking Pattern (指彈模式)
const fingerpicking = note("f3 a3 c4 f4 a4 c4 | g3 b3 d4 g4 b3 d4 | c3 e3 g3 c4 e3 g3 | d3 f#3 a3 d4 f#3 a3")
  .sound("triangle")
  .lpf(1800)
  .gain(0.35)
  .room(0.6)
  .decay(0.4)
  .every(4, x => x.slow(2))                      // 偶爾放慢
  .sometimes(x => x.add(note("7")));            // 偶爾加五度音

// Strumming Pattern (刷弦模式 - 副歌使用)
const strumming = note("<[f3,a3,c4,f4]!2> <[g3,b3,d4,g4]!2> <[c3,e3,g3,c4]!2> <[d3,f#3,a3,d4]!2>")
  .sound("triangle")
  .lpf(2000)
  .gain(0.4)
  .room(0.65)
  .decay(0.3)
  .degradeBy(0.2)                                // 模擬不完美的刷弦
  .every(2, x => x.add(note("12")));            // 偶爾高八度

// Melody Guitar (旋律吉他 - 五聲音階)
const melody_guitar = note("f4 g4 a4 c5 | d5 c5 a4 g4 | a4 g4 f4 g4 | a4 ~ ~ ~")
  .scale("F:pentatonic")                         // 使用五聲音階
  .sound("triangle")
  .lpf(2200)
  .gain(0.3)
  .room(0.7)
  .delay(0.25)
  .every(8, x => x.sometimes(y => y.add(note("2")))); // 微調變化

// Harmonic Guitar (泛音吉他 - 高頻質感)
const harmonic_guitar = note("f5 a5 c6 f6")
  .sound("sine")
  .lpf(4000)
  .hpf(2000)
  .gain(0.15)
  .room(0.8)
  .degradeBy(0.6)                                // 稀疏出現
  .pan(perlin.range(0.3, 0.7));

// ==============================================================================
// PERCUSSION - 打擊樂 (簡約自然)
// ==============================================================================

// Soft Kick (柔和大鼓)
const soft_kick = s("bd ~ bd ~")
  .gain(0.45)
  .lpf(300)
  .room(0.6);

// Light Percussion (輕打擊)
const light_perc = stack(
  s("~ ~ hh ~").gain(0.25).hpf(3000),           // 清脆 hi-hat
  s("~ ~ ~ ~").sometimes(x => s("tamb*4").gain(0.2)), // 偶爾的鈴鼓
  s("~ ~ ~ ~").sometimes(x => s("~ ~ shaker*2 ~").gain(0.15)) // 偶爾的沙鈴
);

// Hand Claps (手拍聲 - 副歌增強)
const hand_claps = s("~ cp ~ cp")
  .gain(0.3)
  .room(0.5)
  .degradeBy(0.3);                               // 稀疏出現

// ==============================================================================
// BASS - 貝斯 (簡約支撐)
// ==============================================================================

// Acoustic Bass (木貝斯感)
const acoustic_bass = note("f2 f2 g2 g2 | c2 c2 d2 d2")
  .sound("triangle")
  .lpf(500)
  .gain(0.35)
  .room(0.5)
  .every(8, x => x.add(note("7")));             // 偶爾加五度音

// Walking Bass (行走貝斯 - 橋段使用)
const walking_bass = note("f2 g2 a2 c3 | d3 c3 a2 g2 | f2 g2 a2 f2 | g2 ~ ~ ~")
  .sound("triangle")
  .lpf(600)
  .gain(0.3)
  .room(0.6)
  .slow(2);

// ==============================================================================
// ATMOSPHERIC LAYERS - 氛圍層
// ==============================================================================

// Wind Chimes (風鈴 - 自然元素)
const wind_chimes = note("f5 a5 c6 d6")
  .sound("sine")
  .lpf(3500)
  .gain(0.12)
  .room(0.9)
  .decay(1.0)
  .degradeBy(0.7)                                // 隨風飄來
  .pan(sine.slow(8).range(0.2, 0.8));

// Ambient Pad (環境 Pad - 遠山)
const ambient_pad = note("<f3 a3 c4>!16 <g3 b3 d4>!16 <c3 e3 g3>!16 <d3 f#3 a3>!16")
  .sound("sine")
  .slow(8)                                       // 超慢變化
  .gain(0.15)
  .lpf(perlin.range(400, 900))
  .room(0.95)
  .delay(0.5);

// Drone (無人機低音 - 大地)
const earth_drone = note("f2*32")
  .sound("sine")
  .slow(16)
  .gain(sine.slow(64).range(0.1, 0.2))          // 極緩慢呼吸
  .lpf(250)
  .room(0.9);

// Bird Sounds (鳥鳴 - 自然音效)
const bird_sounds = note(perlin.range(72, 96).segment(64))
  .sound("sine")
  .lpf(4000)
  .hpf(2500)
  .gain(0.08)
  .degradeBy(0.85)                               // 極稀疏
  .decay(0.2)
  .pan(rand.range(0, 1));

// ==============================================================================
// VOCALS (模擬人聲旋律)
// ==============================================================================

// Main Vocal Melody (主唱旋律 - 五聲音階)
const main_vocal = note("a4 g4 f4 g4 | a4 c5 d5 ~ | c5 a4 g4 f4 | g4 ~ ~ ~")
  .scale("F:pentatonic")
  .sound("sine")
  .lpf(2500)
  .gain(0.28)
  .room(0.7)
  .delay(0.125)
  .every(8, x => x.sometimes(y => y.add(note("2"))));

// Harmony Vocal (和聲 - 三度和聲)
const harmony_vocal = note("c5 e5 a4 e5 | c5 e5 f5 ~ | e5 c5 e5 a4 | e5 ~ ~ ~")
  .scale("F:pentatonic")
  .sound("sine")
  .lpf(2200)
  .gain(0.18)
  .room(0.8)
  .delay(0.25)
  .degradeBy(0.3);                               // 稀疏和聲

// Humming (哼唱 - 背景)
const humming = note("f4 a4 c5")
  .sound("sine")
  .slow(4)
  .gain(0.12)
  .lpf(1500)
  .room(0.85)
  .degradeBy(0.5);

// ==============================================================================
// SONG STRUCTURE - 歌曲結構
// ==============================================================================

// INTRO (序奏 - 自然醒來)
const intro = stack(
  fingerpicking.slow(2).degradeBy(0.3),
  ambient_pad.gain(0.12),
  earth_drone,
  wind_chimes,
  bird_sounds
)
  .lpf(sine.slow(32).range(800, 1600))
  .gain(sine.slow(16).range(0.3, 0.5));

// VERSE (主歌 - 溫柔敘事)
const verse = stack(
  fingerpicking,
  soft_kick.degradeBy(0.3),
  light_perc.degradeBy(0.4),
  acoustic_bass,
  main_vocal,
  ambient_pad.gain(0.13),
  humming.degradeBy(0.6),
  wind_chimes.degradeBy(0.5)
)
  .every(8, x => x.room(0.75))
  .sometimes(x => x.lpf(perlin.range(1500, 2500)));

// PRE-CHORUS (Pre-Chorus - 情感累積)
const pre_chorus = stack(
  fingerpicking.gain(0.4),
  strumming.degradeBy(0.5),
  soft_kick,
  light_perc,
  hand_claps.degradeBy(0.5),
  acoustic_bass,
  main_vocal.gain(0.32),
  harmony_vocal.degradeBy(0.4),
  ambient_pad.gain(0.16)
)
  .every(4, x => x.gain(0.65))
  .sometimes(x => x.room(0.8));

// CHORUS (副歌 - 開闊明亮)
const chorus = stack(
  strumming,
  fingerpicking.degradeBy(0.4),
  soft_kick,
  light_perc,
  hand_claps,
  acoustic_bass.gain(0.4),
  main_vocal.gain(0.35).add(note("12")),        // 提高八度
  harmony_vocal,
  harmonic_guitar,
  ambient_pad.gain(0.18),
  wind_chimes.degradeBy(0.3)
)
  .gain(0.7)
  .room(0.75)
  .every(8, x => x.sometimes(y => y.add(note("7"))))
  .sometimes(x => x.delay(0.25));

// BRIDGE (橋段 - 反思)
const bridge = stack(
  melody_guitar.slow(2),
  walking_bass,
  soft_kick.degradeBy(0.6).slow(2),
  ambient_pad.gain(0.2).room(0.9),
  humming.gain(0.15),
  wind_chimes,
  bird_sounds.degradeBy(0.7)
)
  .slow(2)
  .lpf(perlin.range(1000, 2000))
  .gain(sine.slow(8).range(0.4, 0.6))
  .room(0.85);

// OUTRO (尾奏 - 回歸寧靜)
const outro = stack(
  fingerpicking.slow(2).degradeBy(0.5),
  ambient_pad.gain(0.15),
  earth_drone,
  wind_chimes,
  bird_sounds
)
  .slow(2)
  .gain(sine.slow(64).range(0.2, 0.35))         // 緩慢淡出
  .lpf(sine.slow(128).range(600, 1200))
  .room(sine.slow(32).range(0.85, 0.98));

// ==============================================================================
// FINAL COMPOSITION - 最終組合
// ==============================================================================

stack(
  // 核心樂器
  fingerpicking.degradeBy(0.2),
  strumming.degradeBy(0.6).every(16, x => x.degradeBy(0.3)),
  melody_guitar.degradeBy(0.5),

  // 節奏組
  soft_kick.degradeBy(0.3),
  light_perc.degradeBy(0.4),
  hand_claps.degradeBy(0.6).every(32, x => x.degradeBy(0.3)),

  // 貝斯
  acoustic_bass,

  // 旋律/人聲
  main_vocal.degradeBy(0.3).every(16, x => x.degradeBy(0.2)),
  harmony_vocal.degradeBy(0.6),
  humming.degradeBy(0.7),

  // 氛圍
  ambient_pad,
  earth_drone,
  wind_chimes.degradeBy(0.7),
  bird_sounds.degradeBy(0.85),
  harmonic_guitar.degradeBy(0.75)
)
  // 全局效果
  .gain(sine.slow(128).range(0.45, 0.65))       // 如呼吸般的動態
  .lpf(sine.slow(256).range(1400, 2200))        // 緩慢濾波器變化
  .room(0.7)

  // 段落變化
  .every(16, x => x.gain(0.7))                  // 副歌能量
  .every(32, x => x.room(0.8))                  // 空間感變化
  .every(64, x => x.slow(1.05))                 // 偶爾略為放慢

  // 自然元素
  .sometimes(x => x.lpf(perlin.range(1600, 2400)))
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))

  // 最終修飾
  .delay(0.25)
  .room(0.75)

/*
 * ==============================================================================
 * USAGE NOTES - 使用說明
 * ==============================================================================
 *
 * 這是一首充滿台灣島嶼氛圍的民謠流行歌曲
 * 使用五聲音階營造東方韻味，模擬木吉他與自然音效
 *
 * 建議：
 * - 在 https://strudel.cc 播放
 * - 中低音量，適合安靜聆聽
 * - 戴上耳機感受自然音效的立體感
 * - 閉上眼睛想像台灣的山林與海岸
 *
 * 技術特點：
 * - F 大調五聲音階 (F G A C D)
 * - 三角波模擬木吉他音色
 * - 指彈與刷弦模式的交替
 * - 自然音效 (風鈴、鳥鳴)
 * - 極緩慢的 drone 營造大地感
 * - degradeBy 創造不完美的人性化演奏
 *
 * 靈感來源：
 * - 告五人的民謠搖滾抒情作品
 * - 台灣民謠音樂的五聲音階傳統
 * - 自然田野錄音美學
 */
