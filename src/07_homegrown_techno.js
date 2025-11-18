/*
 * ==============================================================================
 * 07. HOMEGROWN TECHNO (自製科技) - Experimental Techno
 * ==============================================================================
 * 向美秀集團「賽博台客」致敬
 * 結合自製樂器般的噪聲與台味節奏
 *
 * 調性: A Minor
 * BPM: 142
 * 風格: Techno, Experimental (美秀集團風格)
 * 情緒: 科技感、實驗性、賽博台客、高能量
 */

setcpm(142/4)

// Techno Drums
const techno_drums = stack(
  s("bd*4").gain(0.95).hpf(40),
  s("hh*8").gain(0.35).degradeBy(0.25),
  s("~ sd ~ sd").gain(0.55).delay(0.25),
  s("~ ~ click ~").gain(0.25).fast(perlin.range(1, 3))
);

// Random Bass
const random_bass = note(rand.range(0, 7).segment(64))
  .scale("A:minor")
  .sound("square")
  .lpf(650)
  .gain(0.5)
  .distort(0.2);

// Glitch Elements
const glitch = note(rand.range(0, 12).segment(16))
  .scale("C:minor")
  .sound("triangle")
  .lpf(1200)
  .gain(0.25)
  .degradeBy(0.5)
  .every(4, x => x.fast(2));

// Lead Synth
const lead = note("a4 c5 d5 e5 | g5 ~ e5 d5 | c5 ~ a4 ~ | ~ ~ ~ ~")
  .sound("sawtooth")
  .lpf(sine.range(800, 1800))
  .gain(0.28)
  .room(0.5)
  .every(2, x => x.add(perlin.range(-2, 2)));

// Industrial Noise
const industrial = note(rand.range(36, 60).segment(32))
  .sound("square")
  .lpf(700)
  .gain(0.18)
  .degradeBy(0.75)
  .distort(0.4)
  .pan(rand.range(0, 1));

// Pad
const techno_pad = note("<a2 c3 e3>!16 <a2 d3 f3>!16")
  .sound("sine")
  .slow(4)
  .gain(0.2)
  .lpf(perlin.range(500, 1100))
  .room(0.8);

stack(
  techno_drums,
  random_bass,
  glitch.degradeBy(0.4),
  lead.degradeBy(0.3),
  industrial,
  techno_pad
)
  .gain(sine.slow(128).range(0.6, 0.8))
  .lpf(sine.slow(256).range(900, 1700))
  .room(0.6)
  .every(16, x => x.gain(0.85))
  .every(32, x => x.degradeBy(0.3))
  .sometimes(x => x.add(perlin.range(-1, 1)))
  .sometimes(x => x.lpf(perlin.range(700, 1300)))

/*
 * 實驗性科技舞曲
 * 技術特點：
 * - 隨機音高生成 (rand, perlin)
 * - 故障美學 (glitch, degradeBy)
 * - 工業噪音質感
 * - 高密度節奏
 * - 美秀集團賽博台客精神
 */
