/*
 * ==============================================================================
 * EXPERIMENT 04: GRANULAR PUNK (顆粒龐克)
 * ==============================================================================
 * Granular synthesis 遇見龐克搖滾的暴力美學
 * 聲音被撕裂成微小顆粒，再以龐克的能量重組
 *
 * 概念：Destruction as creation (破壞即創造)
 * 風格：Glitch + Punk + Industrial + Noise
 * BPM: 165 (極快)
 */

setcpm(165/4)

// Aggressive Punk Drums
const punk_drums = stack(
  // Relentless kick
  s("bd*4").gain(0.95).lpf(180).distort(0.2),

  // Machine gun snare
  s("~ sd*2 ~ sd*2").gain(0.7).room(0.4).distort(0.15),

  // Chaotic hi-hats
  s("hh*16")
    .gain(perlin.range(0.25, 0.45))
    .hpf(5000)
    .degradeBy(0.2)
    .sometimes(x => x.fast(2)),

  // Crashes
  s("~ ~ ~ crash").gain(0.55).every(4, x => x.degradeBy(0.3)),

  // Industrial hits
  s("~ ~ cp ~").gain(0.4).distort(0.3).hpf(2000)
);

// Granular Guitar Simulation
// 使用極短的顆粒模擬電吉他的破碎聲響
const granular_guitar = note(rand.range(36, 48).segment(128))
  .scale("E:minor")
  .sound("sawtooth")
  .lpf(perlin.range(600, 1800))
  .gain(0.45)
  .distort(0.45)
  .room(0.35)
  .decay(0.05) // 極短的 decay 創造顆粒感
  .degradeBy(0.3)
  .pan(rand.range(0.2, 0.8));

// Power Chord Riff (能量和弦)
const power_chords = note("<[e3,e4]!4 [g3,g4]!4> <[a3,a4]!4 [f#3,f#4]!4>")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.5)
  .distort(0.4)
  .room(0.45)
  .every(8, x => x.fast(2))
  .sometimes(x => x.add(note("12")));

// Distorted Bass
const distorted_bass = note("e2!4 g2!4 | a2!4 f#2!4")
  .sound("triangle")
  .lpf(400)
  .gain(0.55)
  .distort(0.5)
  .room(0.3)
  .every(4, x => x.add(note("12")));

// Glitch Vocal Chops (故障人聲切片)
const vocal_chops = note(rand.range(48, 72).segment(64))
  .scale("E:minor")
  .sound("sine")
  .lpf(2200)
  .gain(0.25)
  .degradeBy(0.85)
  .room(0.6)
  .decay(0.08)
  .pan(rand.range(0, 1))
  .sometimes(x => x.distort(0.3));

// Industrial Noise Layer
const industrial_noise = note(rand.range(24, 36).segment(32))
  .sound("square")
  .lpf(perlin.range(200, 800))
  .gain(0.3)
  .distort(0.6)
  .room(0.5)
  .degradeBy(0.6)
  .every(8, x => x.fast(perlin.range(1, 4)));

// Granular Synthesis Texture
// 使用高密度的隨機音符模擬顆粒合成
const granular_texture = note(rand.range(60, 96).segment(256))
  .scale("E:minor")
  .sound("square")
  .lpf(perlin.range(1000, 3000))
  .gain(0.12)
  .degradeBy(0.9)
  .room(0.7)
  .decay(0.03)
  .pan(rand.range(0, 1));

// Feedback Scream (回授尖嘯)
const feedback_scream = note(sine.range(72, 96).segment(16))
  .sound("sine")
  .lpf(perlin.range(2000, 4000))
  .gain(sine.fast(8).range(0.1, 0.25))
  .distort(0.5)
  .room(0.8)
  .delay(0.125)
  .every(16, x => x.fast(4));

// Stutter Effect (口吃效果)
const stutter = note("e4 e4 e4 e4")
  .sound("square")
  .fast(8)
  .lpf(1500)
  .gain(0.2)
  .distort(0.35)
  .degradeBy(0.7)
  .sometimes(x => x.fast(2))
  .sometimes(x => x.rev());

// Noise Burst (噪音爆發)
const noise_burst = s("~ ~ ~ ~")
  .sometimes(x => note(rand.range(36, 84)).sound("square").lpf(rand.range(400, 2000)).gain(0.4).distort(0.6).decay(0.02));

// Crushed Cymbals (壓碎的鈸)
const crushed_cymbals = s("~ ~ oh ~")
  .gain(0.35)
  .hpf(4000)
  .distort(0.4)
  .degradeBy(0.4)
  .pan(sine.fast(2).range(0, 1));

stack(
  punk_drums.degradeBy(0.1),
  granular_guitar,
  power_chords,
  distorted_bass,
  vocal_chops,
  industrial_noise,
  granular_texture,
  feedback_scream.degradeBy(0.5),
  stutter,
  noise_burst,
  crushed_cymbals
)
  .gain(sine.slow(32).range(0.6, 0.8))
  .lpf(sine.slow(64).range(1000, 2500))
  .room(0.5)
  .distort(perlin.range(0.1, 0.3))
  .every(16, x => x.gain(0.85))
  .every(32, x => x.distort(0.5))
  .sometimes(x => x.degradeBy(perlin.range(0, 0.4)))
  .delay(0.125)

/*
 * 聲音的解構與重組
 * 美學宣言：
 * - Granular synthesis = 將聲音撕成碎片
 * - Punk ethos = 破壞既有規則
 * - 兩者結合 = 從廢墟中創造新秩序
 *
 * 技術創新：
 * - 極短 decay (0.02-0.08) 創造顆粒感
 * - 高密度 segment (128-256) 模擬顆粒雲
 * - Degradation + randomness = 不可預測的美
 * - Distortion layers 營造工業質感
 * - Fast BPM (165) 維持龐克能量
 *
 * 聲音設計哲學：
 * 傳統顆粒合成追求細膩、飄渺
 * 我們反其道而行 - 暴力、粗糙、直接
 * 這是數位時代的龐克精神
 *
 * 聆聽警告：
 * 音量可能過大、刺耳、不適
 * 這正是龐克的本質
 * 如果你感到不舒服 - 那就對了
 */
