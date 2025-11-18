/*
 * ==============================================================================
 * 10. EUPHORIA (狂喜之終章) - Epic Finale
 * ==============================================================================
 * 專輯的最高潮，融合舞曲鼓組與華麗的琶音
 * 加上 perlin 噪聲調制的 pad，使情緒層層堆疊
 * 最後以空靈的殘響收尾——這是一場音樂的狂喜
 *
 * 調性: C Major
 * BPM: 130
 * 風格: Uplifting Pop, Dance, Epic
 * 情緒: 狂喜、釋放、高潮、希望
 */

setcpm(130/4)

// Epic Drums
const epic_drums = stack(
  s("bd*4").gain(0.95),
  s("hh*8").gain(0.38).pan(sine.slow(4)),
  s("~ sd ~ sd").gain(0.6),
  s("~ ~ ~ crash").gain(0.55).every(8, x => x.degradeBy(0.3)),
  s("~ ~ cp ~").gain(0.32)
);

// Powerful Bass
const powerful_bass = note("c2 c3 c2 e2 | g1 g2 g1 d2 | a1 a2 a1 e2 | f2 f3 f2 c3")
  .sound("sawtooth")
  .lpf(750)
  .gain(0.7)
  .room(0.45)
  .sometimes(x => x.add(note("12")));

// Epic Chords
const epic_chords = note("<[c3,c4,e4,g4]!4> <[a2,a3,c4,e4]!4> <[f3,f4,a4,c5]!4> <[g3,g4,b4,d5]!4>")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.45)
  .room(0.6)
  .every(4, x => x.add(note("12")));

// Soaring Arpeggio
const soaring_arp = note("c5 e5 g5 c6 e5 g5 | a4 c5 e5 a5 c5 e5 | f5 a5 c6 f6 a5 c6 | g5 b5 d6 g6 b5 d6")
  .sound("triangle")
  .lpf(perlin.range(1800, 2600))
  .gain(0.35)
  .room(0.65)
  .delay(0.125)
  .pan(sine.slow(2).range(0, 1))
  .every(4, x => x.fast(2));

// Epic Lead
const epic_lead = note("c6 c6 d6 e6 | g6 ~ g6 a6 | a6 g6 f6 e6 | f6 e6 d6 c6")
  .sound("square")
  .lpf(sine.range(1400, 2200))
  .gain(0.4)
  .room(0.7)
  .delay(0.25)
  .every(2, x => x.sometimes(y => y.add(note("12"))));

// Euphoric Pad
const euphoric_pad = note("<c4 e4 g4 c5>!8 <a3 c4 e4 a4>!8 <f4 a4 c5 f5>!8 <g4 b4 d5 g5>!8")
  .sound("sine")
  .slow(2)
  .gain(0.28)
  .lpf(perlin.range(700, 1500))
  .room(0.9)
  .delay(0.5)
  .every(2, x => x.add(perlin.range(-2, 2)));

// Atmospheric Shimmer
const atmos_shimmer = note(sine.range(84, 108).segment(128))
  .sound("sine")
  .lpf(4500)
  .hpf(3000)
  .gain(0.15)
  .degradeBy(0.6)
  .room(0.95)
  .pan(perlin.range(0, 1));

// Build Energy Elements
const build_elements = stack(
  s("~ ~ ~ ~").every(8, x => s("~ ~ ~ oh").gain(0.4)),
  note(perlin.range(60, 96).segment(64)).sound("sine").lpf(2500).gain(0.12).degradeBy(0.7).room(0.9)
);

stack(
  epic_drums,
  powerful_bass,
  epic_chords.degradeBy(0.15),
  soaring_arp.degradeBy(0.2),
  epic_lead.degradeBy(0.3).every(16, x => x.degradeBy(0.15)),
  euphoric_pad,
  atmos_shimmer.degradeBy(0.5),
  build_elements
)
  // Climactic dynamics
  .gain(sine.slow(128).range(0.65, 0.85))
  .lpf(sine.slow(256).range(1300, 2400))
  .room(sine.slow(96).range(0.65, 0.85))

  // Build energy
  .every(16, x => x.gain(0.9))
  .every(16, x => x.fast(1.08))
  .every(32, x => x.room(0.9))

  // Epic variations
  .sometimes(x => x.add(note("12")))
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))
  .sometimes(x => x.lpf(perlin.range(1500, 2500)))

  // Final touch
  .delay(0.25)
  .room(0.75)

/*
 * 史詩級結尾，專輯最高潮
 * 技術特點：
 * - 多層次堆疊 (鼓組、貝斯、和弦、琶音、主音、Pad)
 * - Perlin 噪聲創造連續動態變化
 * - 每 16 小節微加速營造衝刺感
 * - 豐富的殘響與延遲營造空間感
 * - 狂喜的情緒表達
 */
