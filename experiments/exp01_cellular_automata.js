/*
 * ==============================================================================
 * EXPERIMENT 01: CELLULAR AUTOMATA RHYTHMS (細胞自動機節奏)
 * ==============================================================================
 * 使用細胞自動機演算法生成演化的節奏模式
 * 每個循環都略微不同，創造出有機的、不斷變化的音樂結構
 *
 * 概念：Rule 30 細胞自動機的音樂化
 * 技術：Euclidean rhythms + probability gates + random walks
 */

setcpm(128/4)

// Cellular Automata Kick Pattern
// 使用 Euclidean rhythm 模擬細胞自動機的演化
const ca_kick = s("bd(<5 7 9 11>,16)")
  .gain(0.85)
  .lpf(200)
  .sometimes(x => x.fast(2))
  .every(8, x => x.rev());

// Evolving Snare Pattern
// 機率性觸發模擬細胞的生與死
const ca_snare = s("sd(3,8)")
  .gain(0.6)
  .room(0.7)
  .every(4, x => x.sometimes(y => y.fast(1.5)))
  .degradeBy(perlin.range(0.1, 0.4));

// Mutating Hi-Hats
// 使用 segment 創造階梯式演化
const ca_hats = s("hh*16")
  .gain(perlin.range(0.15, 0.35).segment(32))
  .hpf(4000)
  .pan(sine.slow(3).range(0.2, 0.8))
  .degradeBy(0.3)
  .sometimes(x => x.fast(perlin.range(1, 3)));

// Generative Bass Line
// Random walk 演算法生成旋律
const gen_bass = note(perlin.range(24, 36).segment(16))
  .sound("sawtooth")
  .lpf(sine.fast(4).range(300, 800))
  .gain(0.5)
  .distort(0.2)
  .room(0.4)
  .every(8, x => x.add(note("7")));

// Chaotic Synth Texture
// 混沌系統產生的音高序列
const chaos_synth = note(perlin.range(48, 84).segment(64))
  .sound("square")
  .lpf(perlin.range(600, 2400).segment(32))
  .gain(0.25)
  .degradeBy(0.7)
  .room(0.8)
  .pan(rand.range(0, 1))
  .delay(0.375);

// Probability Gate Melody
// 50% 機率出現的旋律線
const prob_melody = note("0 2 4 7 9 7 4 2")
  .scale("C:minor")
  .sound("sine")
  .lpf(2000)
  .gain(0.3)
  .room(0.75)
  .delay(0.25)
  .degradeBy(0.5)
  .sometimes(x => x.add(note("12")));

// Feedback Loop Simulation
// 模擬自我參照的迴圈系統
const feedback_layer = note(sine.range(36, 60).segment(8))
  .sound("triangle")
  .lpf(1200)
  .gain(sine.slow(16).range(0.1, 0.2))
  .room(0.9)
  .delay(0.5)
  .every(16, x => x.slow(2));

// Glitch Artifacts
// 系統錯誤產生的聲音碎片
const glitch = s("~ ~ ~ ~")
  .sometimes(x => s("shaker*8").gain(0.2).hpf(6000).degradeBy(0.6))
  .sometimes(x => s("~ cp ~ ~").gain(0.25).distort(0.4))
  .sometimes(x => note(rand.range(72, 96)).sound("square").lpf(1800).gain(0.15).decay(0.05));

stack(
  ca_kick,
  ca_snare,
  ca_hats,
  gen_bass,
  chaos_synth,
  prob_melody,
  feedback_layer,
  glitch
)
  .gain(sine.slow(64).range(0.5, 0.7))
  .lpf(sine.slow(128).range(1000, 2500))
  .room(perlin.range(0.5, 0.8))
  .every(32, x => x.gain(0.8))
  .sometimes(x => x.degradeBy(perlin.range(0, 0.3)))

/*
 * 演化音樂的極致實驗
 * 核心概念：
 * - Euclidean rhythm 模擬細胞自動機的規則
 * - Perlin noise 創造有機的演化感
 * - 機率性變化確保每次播放都不同
 * - Random walk 生成不可預測但連貫的旋律
 * - 系統性混沌產生複雜但有結構的音樂
 *
 * 聆聽建議：
 * 讓它循環播放，觀察模式如何演化
 * 每 16-32 個循環會出現新的結構
 * 適合作為生成音樂、裝置藝術、冥想音樂
 */
