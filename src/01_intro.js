/*
 * ==============================================================================
 * 01. INTRO (序曲) - Dawn in the Mist
 * ==============================================================================
 * 霧氣籠罩的清晨，城市尚未甦醒
 * 柔和的 pad 與遠方的鐘聲揭開故事序幕
 *
 * 調性: C Major
 * BPM: 100
 * 風格: Ambient, Atmospheric Pop
 * 情緒: 寧靜、期待、神秘
 */

setcpm(100/4)

// ==============================================================================
// FOUNDATION - 基底層 (持續的氛圍音色)
// ==============================================================================

// Deep Drone (深沉的無人機音)
const deep_drone = note("c2*16")
  .sound("sine")
  .gain(sine.slow(32).range(0.15, 0.25))  // 極緩慢的呼吸
  .lpf(200)
  .room(0.95)
  .slow(8);

// Warm Pad - Main Harmony (溫暖和聲 Pad)
const warm_pad = note("<c4 e4 g4> <c4 f4 a4> <c4 e4 g4> <b3 d4 g4>")
  .sound("sine")
  .slow(8)                                 // 超慢的和弦變化
  .gain(0.25)
  .lpf(perlin.range(600, 1000))           // Perlin 噪聲調制濾波器
  .room(0.9)
  .delay(0.375)
  .pan(sine.slow(16).range(0.3, 0.7));    // 緩慢的立體聲移動

// Ethereal Pad - Upper Harmony (飄渺上層和聲)
const ethereal_pad = note("<g4 c5 e5> <a4 c5 f5> <g4 b4 e5> <g4 b4 d5>")
  .sound("triangle")
  .slow(16)                                // 超慢變化
  .gain(0.15)
  .lpf(1200)
  .room(0.95)
  .delay(0.5)
  .every(32, x => x.slow(2));             // 偶爾更慢

// ==============================================================================
// MELODIC ELEMENTS - 旋律元素
// ==============================================================================

// Bell Tones (鐘聲 - 遠方的教堂鐘聲)
const bell_tones = note("c5 g4 e5 c5 g4 a4")
  .sound("triangle")
  .slow(2)
  .gain(0.2)
  .lpf(2000)
  .room(0.85)
  .delay(0.25)
  .every(8, x => x.degradeBy(0.3))        // 偶爾消失
  .sometimes(x => x.add(note("7")));      // 偶爾跳高

// Delicate Chimes (精緻風鈴)
const chimes = note("e5 d5 c5 b4")
  .sound("sine")
  .slow(4)
  .gain(0.12)
  .lpf(3000)
  .room(0.9)
  .decay(0.8)
  .degradeBy(0.4)                         // 稀疏出現
  .pan(perlin.range(0.2, 0.8));          // 隨機立體聲位置

// Subtle Bass (微妙的低音)
const subtle_bass = note("c2 c2 g2 c2")
  .sound("triangle")
  .slow(4)
  .gain(0.18)
  .lpf(400)
  .room(0.7)
  .every(16, x => x.degradeBy(0.5));     // 偶爾消失

// ==============================================================================
// TEXTURE LAYERS - 質感層
// ==============================================================================

// Shimmer (閃爍音色 - 高頻質感)
const shimmer = note(sine.range(60, 72).segment(128))  // 連續變化的音高
  .sound("sine")
  .gain(0.08)
  .lpf(4000)
  .hpf(2000)                              // 只保留高頻
  .room(0.95)
  .degradeBy(0.6)                         // 很稀疏
  .pan(sine.slow(2).range(0, 1));        // 快速立體聲移動

// Breath Texture (呼吸質感)
const breath = note("c3 e3 g3")
  .sound("sine")
  .slow(8)
  .gain(sine.slow(16).range(0.05, 0.15)) // 如呼吸般起伏
  .lpf(perlin.range(300, 800))
  .room(0.9)
  .every(32, x => x.slow(2));

// ==============================================================================
// RHYTHMIC ELEMENTS - 節奏元素 (極為微妙)
// ==============================================================================

// Subtle Pulse (微妙脈動 - 暗示節奏)
const pulse = s("~ ~ ~ bd")
  .gain(0.15)
  .lpf(200)
  .room(0.9)
  .degradeBy(0.5)                         // 若隱若現
  .every(8, x => x.degradeBy(0.8));      // 經常消失

// ==============================================================================
// INTRO STRUCTURE - 段落結構
// ==============================================================================

// Opening (開場 - 前 32 拍)
const opening = stack(
  deep_drone,
  warm_pad.slow(2),
  ethereal_pad.slow(2)
)
  .gain(sine.slow(32).range(0.3, 0.5))   // 整體漸強
  .lpf(sine.slow(64).range(400, 1200));  // 緩慢開啟濾波器

// Development (發展 - 中段)
const development = stack(
  deep_drone,
  warm_pad,
  ethereal_pad,
  bell_tones,
  chimes.degradeBy(0.3),
  subtle_bass,
  breath
)
  .every(16, x => x.room(0.95))          // 增加空間感
  .sometimes(x => x.lpf(perlin.range(800, 1600)));

// Full Texture (完整質感 - 漸入所有元素)
const full_texture = stack(
  deep_drone,
  warm_pad,
  ethereal_pad,
  bell_tones,
  chimes,
  subtle_bass,
  breath,
  shimmer,
  pulse
)
  .gain(sine.slow(16).range(0.4, 0.6))   // 動態呼吸
  .every(8, x => x.room(sine.range(0.85, 0.95)))
  .sometimes(x => x.delay(0.5));

// Outro Fade (尾奏淡出 - 準備進入下一曲)
const outro_fade = stack(
  warm_pad.slow(2),
  bell_tones.degradeBy(0.5),
  deep_drone
)
  .slow(2)
  .gain(sine.slow(64).range(0.1, 0.3))   // 極緩慢淡出
  .lpf(perlin.range(300, 600))
  .room(0.98);

// ==============================================================================
// FINAL COMPOSITION - 最終組合
// ==============================================================================

// 使用 cat() 按順序播放各段落，或使用 stack() 疊加所有元素
// 在 Strudel 中建議使用 stack 並透過 .segment() 控制時間

stack(
  deep_drone,
  warm_pad,
  ethereal_pad,
  bell_tones,
  chimes,
  subtle_bass,
  breath,
  shimmer.degradeBy(0.5),
  pulse.degradeBy(0.6)
)
  // 全局動態變化
  .gain(sine.slow(64).range(0.3, 0.5))           // 如潮汐般的音量變化
  .lpf(sine.slow(128).range(600, 1400))          // 極緩慢的濾波器掃描
  .room(sine.slow(96).range(0.85, 0.95))         // 空間感變化

  // 漸進式變化
  .every(32, x => x.slow(1.5))                   // 偶爾放慢
  .every(64, x => x.gain(0.6))                   // 偶爾加強
  .every(128, x => x.lpf(400).room(0.98))        // 偶爾極度柔和

  // 細微隨機變化
  .sometimes(x => x.delay(perlin.range(0.125, 0.5)))
  .sometimes(x => x.add(note(perlin.range(-1, 1)))) // 微音調變化

  // 最終修飾
  .delay(0.375)
  .room(0.9)

/*
 * ==============================================================================
 * USAGE NOTES - 使用說明
 * ==============================================================================
 *
 * 這首序曲設計為專輯的開場，營造寧靜、神秘的氛圍
 * 可在 https://strudel.cc 貼上整個檔案並播放
 *
 * 建議：
 * - 戴上耳機聆聽以感受立體聲效果
 * - 調整音量至舒適的中低音量
 * - 讓音樂循環播放以感受漸變效果
 *
 * 技術特點：
 * - 使用 perlin 和 sine 創造連續的動態變化
 * - 多層次的 pad 音色營造深度
 * - 極緩慢的和弦進行 (8-16 小節一個和弦)
 * - degradeBy() 創造若隱若現的質感
 * - 豐富的殘響和延遲營造空間感
 */
