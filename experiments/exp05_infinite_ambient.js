/*
 * ==============================================================================
 * EXPERIMENT 05: INFINITE AMBIENT (無限環境音樂)
 * ==============================================================================
 * Brian Eno 的 "Music for Airports" 遇見現代生成音樂
 * 永不重複、永恆流動的聲音環境
 *
 * 概念：Infinite generative music (無限生成音樂)
 * 風格：Ambient, Generative, Minimalism
 * BPM: 48 (極度緩慢)
 *
 * 理論基礎：
 * 使用不同週期長度的循環，它們的公倍數極大
 * 確保音樂在極長時間內不會重複
 */

setcpm(48/4)

// Layer 1: 5-note cycle (5 音符循環)
const layer_1 = note("c4 e4 g4 a4 d4")
  .scale("C:major")
  .slow(5)
  .sound("sine")
  .lpf(1800)
  .gain(sine.slow(17).range(0.15, 0.25))
  .room(0.95)
  .decay(3.0)
  .delay(0.5);

// Layer 2: 7-note cycle (7 音符循環)
const layer_2 = note("g3 b3 d4 f4 e4 c4 a3")
  .scale("C:major")
  .slow(7)
  .sound("triangle")
  .lpf(1500)
  .gain(sine.slow(23).range(0.12, 0.2))
  .room(0.92)
  .decay(4.0)
  .delay(0.75);

// Layer 3: 11-note cycle (11 音符循環)
const layer_3 = note("e3 g3 c4 d4 f4 a4 b4 g4 e4 d4 c4")
  .scale("C:major")
  .slow(11)
  .sound("sine")
  .lpf(2000)
  .gain(sine.slow(31).range(0.1, 0.18))
  .room(0.93)
  .decay(5.0)
  .delay(1.0)
  .pan(sine.slow(19).range(0.3, 0.7));

// Layer 4: 13-note cycle (13 音符循環)
const layer_4 = note("c3 d3 e3 f3 g3 a3 b3 c4 b3 a3 g3 f3 e3")
  .scale("C:major")
  .slow(13)
  .sound("triangle")
  .lpf(1200)
  .gain(sine.slow(37).range(0.08, 0.15))
  .room(0.94)
  .decay(6.0)
  .delay(1.25);

// Deep Drone (深層持續音)
const deep_drone = note("c2*64")
  .sound("sine")
  .slow(16)
  .gain(sine.slow(128).range(0.1, 0.18))
  .lpf(120)
  .room(0.98);

// High Shimmer (高頻閃爍)
const shimmer = note(perlin.range(72, 96).segment(256))
  .scale("C:major")
  .sound("sine")
  .lpf(4000)
  .gain(perlin.range(0.03, 0.08))
  .degradeBy(0.92)
  .room(0.98)
  .decay(8.0)
  .pan(perlin.range(0, 1))
  .delay(2.0);

// Breathing Pad (呼吸音墊)
const breathing_pad = note("<c4 e4 g4>!32 <d4 f4 a4>!32 <e4 g4 b4>!32 <c4 e4 g4>!32")
  .sound("sine")
  .slow(32)
  .gain(sine.slow(256).range(0.12, 0.22))
  .lpf(sine.slow(512).range(400, 1000))
  .room(0.95)
  .delay(1.5);

// Random Walk Melody (隨機漫步旋律)
// 使用質數 slow 值確保不重複
const random_walk = note(perlin.range(60, 84).segment(17))
  .scale("C:major")
  .slow(17)
  .sound("sine")
  .lpf(2500)
  .gain(sine.slow(53).range(0.1, 0.2))
  .room(0.96)
  .decay(7.0)
  .degradeBy(0.6)
  .delay(1.75)
  .pan(sine.slow(29).range(0.2, 0.8));

// Bell Tones (鐘聲)
// 使用質數確保極長的循環週期
const bells = note("c5 e5 g5 c6")
  .scale("C:major")
  .slow(19)
  .sound("triangle")
  .lpf(3500)
  .gain(sine.slow(67).range(0.08, 0.15))
  .room(0.97)
  .decay(10.0)
  .degradeBy(0.75)
  .delay(2.5)
  .pan(sine.slow(41).range(0, 1));

// Granular Clouds (顆粒雲)
const granular_clouds = note(rand.range(48, 72).segment(512))
  .scale("C:major")
  .sound("square")
  .lpf(perlin.range(800, 2000))
  .gain(0.05)
  .degradeBy(0.95)
  .room(0.98)
  .decay(0.5)
  .pan(rand.range(0, 1))
  .delay(3.0);

// Distant Echoes (遠方回音)
const distant_echoes = note(sine.range(36, 60).segment(128))
  .scale("C:major")
  .slow(23)
  .sound("sine")
  .lpf(sine.slow(256).range(600, 1200))
  .gain(sine.slow(512).range(0.05, 0.12))
  .room(0.99)
  .delay(4.0)
  .degradeBy(0.8);

// Texture Layer (質感層)
const texture = note(perlin.range(48, 96).segment(1024))
  .scale("C:major")
  .sound("sine")
  .lpf(perlin.range(1000, 3000))
  .gain(perlin.range(0.02, 0.06))
  .degradeBy(0.97)
  .room(0.98)
  .decay(4.0)
  .pan(perlin.range(0, 1))
  .delay(perlin.range(1.0, 5.0));

stack(
  layer_1,
  layer_2,
  layer_3,
  layer_4,
  deep_drone,
  shimmer,
  breathing_pad,
  random_walk,
  bells,
  granular_clouds,
  distant_echoes,
  texture
)
  .gain(sine.slow(512).range(0.35, 0.5))
  .lpf(sine.slow(1024).range(800, 1800))
  .room(perlin.range(0.9, 0.98))
  .delay(perlin.range(0.5, 5.0))

/*
 * 永恆的聲音景觀
 * 數學基礎：
 * - 使用質數 (5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 53, 67) 作為循環長度
 * - 這些數字的最小公倍數極其巨大
 * - 例如：5 × 7 × 11 × 13 = 5005 個循環才重複一次
 * - 以 BPM 48，每個循環 1 分鐘，5005 分鐘 = 83.4 小時
 * - 加上 Perlin noise 和 random，實際上永不重複
 *
 * 美學理念：
 * Brian Eno 說："Ambient music must be as ignorable as it is interesting"
 * 這首曲子可以被忽略，也可以被深度聆聽
 * 它不強迫你注意，但獎勵你的專注
 *
 * 生成音樂哲學：
 * - 作曲家不創造音樂，而是創造生成音樂的系統
 * - 音樂在時間中展開，永不固定
 * - 每次聆聽都是獨一無二的體驗
 * - 這是活的音樂，而非錄音
 *
 * 技術特點：
 * - 極慢 BPM (48) 營造無時間感
 * - 質數循環確保超長週期
 * - 豐富殘響 (room 0.9-0.99) 創造無限空間
 * - 多層延遲 (0.5-5.0 秒) 增加深度
 * - Perlin + Sine 調製確保有機變化
 *
 * 使用情境：
 * - 工作、學習、閱讀的背景音樂
 * - 冥想、瑜伽、放鬆
 * - 睡眠輔助
 * - 創意思考的聲音環境
 * - 藝術裝置、展覽空間
 *
 * 聆聽建議：
 * 設定低音量，讓它成為空間的一部分
 * 不要試圖「聽懂」它
 * 讓它存在於意識的邊緣
 * 24 小時循環播放也不會厭倦
 */
