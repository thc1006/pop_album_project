/*
 * ==============================================================================
 * 06. STARLIT OVERPASS (星光天橋) - Dance Pop Anthem
 * ==============================================================================
 * 星光與霓虹交織，這是一首以合成器和強勁鼓組構成的舞曲
 * 天橋上的夜晚，城市的脈動達到高潮
 *
 * 調性: C Major
 * BPM: 140
 * 風格: Dance Pop, Synth Pop
 * 情緒: 興奮、自由、舞動、霓虹
 */

setcpm(140/4)

// Dance Drums
const dance_drums = stack(
  s("bd*4").gain(0.9).hpf(45),
  s("hh*16").gain(0.28).pan(sine.slow(4)),
  s("~ sd ~ sd").gain(0.55),
  s("~ ~ ~ crash").gain(0.45).every(8, x => x.degradeBy(0.4))
);

// Synth Bass
const synth_bass = note("c2 c3 c2 g2 | f2 f3 f2 c3 | g2 g3 g2 d3 | a2 a3 a2 e3")
  .sound("sawtooth")
  .lpf(700)
  .gain(0.65)
  .room(0.4);

// Filter Sweep Pad
const filter_pad = note("<c4 e4 g4 c5>!8 <f4 a4 c5 f5>!8 <g4 b4 d5 g5>!8 <a4 c5 e5 a5>!8")
  .sound("sawtooth")
  .lpf(sine.range(600, 2400))
  .gain(0.25)
  .room(0.7)
  .delay(0.375);

// Arpeggiator
const arpeggio = note("c5 e5 g5 c6 e5 g5 | f5 a5 c6 f6 a5 c6 | g5 b5 d6 g6 b5 d6 | a5 c6 e6 a6 c6 e6")
  .sound("triangle")
  .lpf(perlin.range(1600, 2400))
  .gain(0.3)
  .room(0.5)
  .delay(0.125)
  .pan(sine.slow(2).range(0.2, 0.8))
  .every(8, x => x.fast(2));

// Lead Synth
const lead_synth = note("c6 ~ g5 a5 | c6 ~ d6 e6 | g6 ~ e6 d6 | c6 ~ ~ ~")
  .sound("square")
  .lpf(sine.range(1200, 2000))
  .gain(0.35)
  .room(0.6)
  .delay(0.25)
  .every(4, x => x.fast(1.5));

// Stabs
const stabs = note("<[c4,e4,g4,c5]!2> <[f4,a4,c5,f5]!2> <[g4,b4,d5,g5]!2> <[a4,c5,e5,a5]!2>")
  .sound("square")
  .lpf(1400)
  .gain(0.4)
  .room(0.5)
  .degradeBy(0.3)
  .distort(0.1);

// High Energy Elements
const energy = stack(
  s("~ ~ cp ~").gain(0.3).room(0.4),
  note(perlin.range(84, 108).segment(64)).sound("sine").lpf(4000).hpf(3000).gain(0.12).degradeBy(0.6).pan(rand.range(0, 1))
);

stack(
  dance_drums,
  synth_bass,
  filter_pad,
  arpeggio.degradeBy(0.2),
  lead_synth.degradeBy(0.4).every(16, x => x.degradeBy(0.2)),
  stabs.degradeBy(0.5),
  energy
)
  .gain(sine.slow(128).range(0.6, 0.8))
  .lpf(sine.slow(256).range(1200, 2400))
  .room(0.6)
  .every(16, x => x.gain(0.85))
  .every(32, x => x.fast(1.05))
  .sometimes(x => x.delay(0.125))

/*
 * 高能量舞曲風格
 * 技術特點：
 * - 四四拍電子舞曲節奏
 * - 動態濾波器掃描 (filter sweep)
 * - 快速琶音器營造科技感
 * - 合成器 stabs 增強節奏感
 */
