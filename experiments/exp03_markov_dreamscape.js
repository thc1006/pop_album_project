/*
 * ==============================================================================
 * EXPERIMENT 03: MARKOV DREAMSCAPE (馬可夫夢境)
 * ==============================================================================
 * 使用 Markov chain 概念生成永不重複的夢幻音景
 * 每個音符根據前一個音符的機率狀態選擇下一個音符
 *
 * 概念：Probabilistic melody generation
 * 風格：Ambient, Generative, Dream Pop
 * BPM: 72 (極慢，適合沉思)
 */

setcpm(72/4)

// Markov Melody Layer 1 (狀態轉移旋律 1)
// 使用 perlin noise 模擬 Markov chain 的狀態轉移
const markov_melody_1 = note(perlin.range(60, 72).segment(16))
  .scale("D:major")
  .sound("sine")
  .lpf(2200)
  .gain(0.28)
  .room(0.85)
  .delay(0.25)
  .every(8, x => x.sometimes(y => y.add(note("7"))))
  .degradeBy(0.3);

// Markov Melody Layer 2 (狀態轉移旋律 2)
// 不同的 segment 值創造不同的轉移速度
const markov_melody_2 = note(perlin.range(48, 60).segment(8))
  .scale("D:major")
  .sound("triangle")
  .lpf(1800)
  .gain(0.22)
  .room(0.9)
  .delay(0.375)
  .slow(2)
  .every(16, x => x.rev());

// Probabilistic Harmony (機率和聲)
// 使用 degradeBy 模擬和弦出現的機率
const prob_harmony = note("<[d4,f#4,a4]!8> <[g3,b3,d4]!8> <[a3,c#4,e4]!8> <[e3,g3,b3]!8>")
  .sound("sine")
  .slow(4)
  .lpf(perlin.range(600, 1200))
  .gain(0.25)
  .room(0.9)
  .degradeBy(perlin.range(0.2, 0.5))
  .decay(1.5);

// Deep Drone (深層無人機音)
const deep_drone = note("d2*32")
  .sound("sine")
  .slow(8)
  .gain(sine.slow(64).range(0.12, 0.2))
  .lpf(150)
  .room(0.95);

// Random Walk Bass (隨機漫步低音)
// 每個音符基於前一個音符的位置上下移動
const random_walk_bass = note(sine.range(36, 48).segment(32))
  .sound("triangle")
  .lpf(500)
  .gain(0.35)
  .room(0.75)
  .delay(0.5)
  .slow(4);

// Shimmer Texture (閃爍質感)
const shimmer = note(perlin.range(72, 96).segment(128))
  .scale("D:major")
  .sound("sine")
  .lpf(3500)
  .gain(perlin.range(0.05, 0.15))
  .degradeBy(0.8)
  .room(0.95)
  .decay(2.0)
  .pan(perlin.range(0, 1))
  .delay(0.75);

// Breath Waves (呼吸波)
const breath = note("a3 b3 d4 e4")
  .scale("D:major")
  .slow(16)
  .sound("sine")
  .gain(sine.slow(32).range(0.08, 0.18))
  .lpf(sine.slow(64).range(400, 800))
  .room(0.95)
  .delay(1.0);

// Probability Gate Bells (機率門鐘聲)
const prob_bells = note("d5 f#5 a5 d6")
  .scale("D:major")
  .sound("triangle")
  .slow(8)
  .lpf(4000)
  .gain(0.15)
  .degradeBy(0.75)
  .room(0.95)
  .decay(3.0)
  .pan(sine.slow(8).range(0.2, 0.8))
  .delay(0.5);

// Granular Clouds (顆粒雲)
const granular = note(rand.range(60, 84).segment(256))
  .scale("D:major")
  .sound("square")
  .lpf(perlin.range(1000, 2500))
  .gain(0.08)
  .degradeBy(0.9)
  .room(0.95)
  .decay(0.1)
  .pan(rand.range(0, 1));

// Distant Echoes (遠方迴響)
const echoes = note(sine.range(48, 72).segment(64))
  .scale("D:major")
  .sound("sine")
  .slow(8)
  .lpf(1500)
  .gain(sine.slow(128).range(0.05, 0.12))
  .room(0.98)
  .delay(1.5)
  .degradeBy(0.7);

// Minimal Rhythm (極簡節奏)
// 偶爾出現的節奏錨點
const minimal_rhythm = s("~ ~ ~ ~")
  .sometimes(x => s("~ ~ ~ bd").gain(0.25).lpf(150).room(0.9))
  .slow(4);

stack(
  markov_melody_1,
  markov_melody_2,
  prob_harmony,
  deep_drone,
  random_walk_bass,
  shimmer,
  breath,
  prob_bells,
  granular,
  echoes,
  minimal_rhythm
)
  .gain(sine.slow(256).range(0.4, 0.6))
  .lpf(sine.slow(512).range(1000, 2000))
  .room(perlin.range(0.85, 0.95))
  .every(64, x => x.gain(0.5))
  .sometimes(x => x.degradeBy(perlin.range(0, 0.2)))
  .delay(perlin.range(0.25, 1.0))

/*
 * 永恆變化的音樂夢境
 * 技術特點：
 * - Perlin noise 模擬 Markov chain 的機率狀態轉移
 * - 多層次的 segment 值創造不同時間尺度的變化
 * - degradeBy + perlin 確保每次播放都略有不同
 * - 極慢的 BPM 營造冥想氛圍
 * - 豐富的殘響與延遲創造無限空間感
 *
 * 哲學思考：
 * Markov chain 代表當下只依賴於前一個狀態
 * 音樂也是如此 - 每個音符是前一個音符的延續
 * 但機率性確保了自由意志的存在
 * 這是決定論與隨機性的完美平衡
 *
 * 聆聽建議：
 * 閉上眼睛，讓音樂帶你進入夢境
 * 不要試圖理解結構，只需感受流動
 * 適合冥想、睡眠、創作、深度工作
 */
