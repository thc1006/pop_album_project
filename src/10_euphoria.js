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

// ==============================================================================
// DRUM LAYERS - 多層鼓組營造史詩感
// ==============================================================================

// Epic Drums - Main (主鼓組)
const epic_drums = stack(
  s("bd*4").gain(0.95).lpf(200),
  s("hh*8").gain(0.38).pan(sine.slow(4)).hpf(6000),
  s("~ sd ~ sd").gain(0.6).room(0.5),
  s("~ ~ ~ crash").gain(0.55).every(8, x => x.degradeBy(0.3)).hpf(4000),
  s("~ ~ cp ~").gain(0.32).hpf(2000)
);

// Build-up Percussion (累積打擊樂)
const buildup_perc = stack(
  s("~ ~ ~ oh").gain(0.35).every(4, x => x.fast(2)).hpf(5000),
  s("~ shaker*4 ~ shaker*4").gain(0.25).pan(sine.slow(2)).hpf(7000),
  s("~ ~ ~ ~").every(8, x => s("~ ~ ~ crash").gain(0.5).hpf(3500))
);

// Driving Tom Fills (推進的 Tom 過門)
const tom_fills = s("~ ~ ~ ~")
  .every(16, x => s("~ ~ lt mt").gain(0.45).lpf(800))
  .every(32, x => s("lt mt ht crash").gain(0.5));

// ==============================================================================
// BASS LAYERS - 多層低音營造厚度
// ==============================================================================

// Powerful Bass - Main (主力低音)
const powerful_bass = note("c2 c3 c2 e2 | g1 g2 g1 d2 | a1 a2 a1 e2 | f2 f3 f2 c3")
  .sound("sawtooth")
  .lpf(750)
  .gain(0.7)
  .room(0.45)
  .distort(0.15)
  .every(4, x => x.add(note("12")))
  .sometimes(x => x.add(note("7")));

// Sub Bass (次低音增強)
const sub_bass = note("<c1!4> <a0!4> <f1!4> <g1!4>")
  .sound("sine")
  .lpf(120)
  .gain(0.55)
  .room(0.3);

// Synth Bass (合成低音線)
const synth_bass = note("c3 ~ e3 g3 | g2 ~ d3 ~ | a2 ~ e3 ~ | f3 ~ c3 ~")
  .sound("triangle")
  .lpf(sine.fast(4).range(400, 1000))
  .gain(0.45)
  .room(0.4)
  .distort(0.1);

// ==============================================================================
// CHORD & HARMONY LAYERS - 和聲層次
// ==============================================================================

// Epic Chords - Full (飽滿和弦)
const epic_chords = note("<[c3,c4,e4,g4,c5]!4> <[a2,a3,c4,e4,a4]!4> <[f3,f4,a4,c5,f5]!4> <[g3,g4,b4,d5,g5]!4>")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.45)
  .room(0.6)
  .delay(0.125)
  .every(4, x => x.add(note("12")))
  .sometimes(x => x.add(note("7")));

// Supersaw Chords (超鋸齒波和弦 - EDM 感)
const supersaw_chords = note("<[c4,e4,g4]!4 [c4,e4,g4]!4> <[a3,c4,e4]!4 [a3,c4,e4]!4> <[f4,a4,c5]!4 [f4,a4,c5]!4> <[g4,b4,d5]!4 [g4,b4,d5]!4>")
  .sound("sawtooth")
  .lpf(perlin.range(1000, 1800))
  .gain(0.35)
  .room(0.65)
  .delay(0.25)
  .pan(sine.slow(3).range(0.3, 0.7))
  .every(2, x => x.add(perlin.range(-2, 2)));

// Stab Chords (突刺和弦)
const stab_chords = note("<~ [c4,e4,g4] ~ ~> <~ [a3,c4,e4] ~ ~> <~ [f4,a4,c5] ~ ~> <~ [g4,b4,d5] ~ ~>")
  .sound("square")
  .lpf(1400)
  .gain(0.4)
  .room(0.5)
  .decay(0.15)
  .distort(0.2)
  .hpf(600);

// ==============================================================================
// MELODIC ELEMENTS - 旋律元素
// ==============================================================================

// Soaring Arpeggio (翱翔琶音)
const soaring_arp = note("c5 e5 g5 c6 e5 g5 | a4 c5 e5 a5 c5 e5 | f5 a5 c6 f6 a5 c6 | g5 b5 d6 g6 b5 d6")
  .sound("triangle")
  .lpf(perlin.range(1800, 2800))
  .gain(0.35)
  .room(0.65)
  .delay(0.125)
  .pan(sine.slow(2).range(0, 1))
  .every(4, x => x.fast(2))
  .every(8, x => x.sometimes(y => y.add(note("12"))));

// Double-time Arpeggio (雙倍速琶音 - 高潮使用)
const fast_arp = note("c5 e5 g5 c6 e6 g6 c7 g6 e6 c6 g5 e5")
  .sound("sine")
  .fast(2)
  .lpf(3000)
  .gain(0.28)
  .room(0.7)
  .delay(0.0625)
  .degradeBy(0.4)
  .pan(sine.fast(4).range(0.2, 0.8));

// Epic Lead Melody (史詩主旋律)
const epic_lead = note("c6 c6 d6 e6 | g6 ~ g6 a6 | a6 g6 f6 e6 | f6 e6 d6 c6")
  .sound("square")
  .lpf(sine.range(1400, 2400))
  .gain(0.4)
  .room(0.7)
  .delay(0.25)
  .distort(0.05)
  .every(2, x => x.sometimes(y => y.add(note("12"))))
  .every(4, x => x.sometimes(y => y.add(note("7"))));

// Harmony Lead (和聲主音)
const harmony_lead = note("e6 e6 f6 g6 | b6 ~ b6 c7 | c7 b6 a6 g6 | a6 g6 f6 e6")
  .sound("sine")
  .lpf(2200)
  .gain(0.25)
  .room(0.75)
  .delay(0.375)
  .pan(sine.slow(4).range(0.6, 1));

// ==============================================================================
// PAD & ATMOSPHERE - 氛圍層
// ==============================================================================

// Euphoric Pad (狂喜音墊)
const euphoric_pad = note("<c4 e4 g4 c5>!8 <a3 c4 e4 a4>!8 <f4 a4 c5 f5>!8 <g4 b4 d5 g5>!8")
  .sound("sine")
  .slow(2)
  .gain(0.28)
  .lpf(perlin.range(700, 1500))
  .room(0.9)
  .delay(0.5)
  .every(2, x => x.add(perlin.range(-2, 2)))
  .sometimes(x => x.add(note("12")));

// Lush Strings Pad (豐沛弦樂墊)
const strings_pad = note("<[c3,e3,g3,c4]!16> <[a2,c3,e3,a3]!16> <[f3,a3,c4,f4]!16> <[g3,b3,d4,g4]!16>")
  .sound("triangle")
  .slow(4)
  .gain(0.22)
  .lpf(perlin.range(800, 1400))
  .room(0.85)
  .delay(0.75)
  .decay(1.5);

// Atmospheric Shimmer (大氣閃爍)
const atmos_shimmer = note(sine.range(84, 108).segment(128))
  .sound("sine")
  .lpf(4500)
  .hpf(3000)
  .gain(sine.slow(32).range(0.1, 0.2))
  .degradeBy(0.6)
  .room(0.95)
  .decay(2.0)
  .pan(perlin.range(0, 1));

// Celestial Voices (天籟人聲)
const celestial_voices = note("c5 ~ e5 ~ g5 ~ c6 ~")
  .slow(4)
  .sound("sine")
  .lpf(2800)
  .gain(sine.slow(16).range(0.15, 0.25))
  .room(0.95)
  .delay(1.0)
  .degradeBy(0.5)
  .pan(sine.slow(8).range(0.3, 0.7));

// ==============================================================================
// BUILD & DROP ELEMENTS - 累積與釋放元素
// ==============================================================================

// Riser Effect (上升效果)
const riser = note(sine.range(36, 84).segment(8))
  .sound("square")
  .lpf(sine.range(200, 3000))
  .gain(sine.range(0.1, 0.4))
  .room(0.8)
  .degradeBy(0.7)
  .every(16, x => x.degradeBy(0.3));

// White Noise Sweep (白噪音掃描)
const noise_sweep = note(perlin.range(60, 96).segment(256))
  .sound("square")
  .lpf(perlin.range(1000, 4000))
  .hpf(perlin.range(500, 2000))
  .gain(0.15)
  .degradeBy(0.85)
  .room(0.7)
  .pan(rand.range(0, 1));

// Impact Hits (衝擊音效)
const impact_hits = s("~ ~ ~ ~")
  .every(16, x => s("~ ~ ~ crash").gain(0.6).distort(0.3).lpf(2000))
  .every(32, x => s("crash ~ ~ crash").gain(0.7).room(0.9));

// ==============================================================================
// TEXTURE & DETAILS - 質感與細節
// ==============================================================================

// Granular Sparkle (顆粒火花)
const granular_sparkle = note(rand.range(72, 108).segment(512))
  .sound("sine")
  .lpf(4000)
  .gain(0.08)
  .degradeBy(0.92)
  .room(0.95)
  .decay(0.1)
  .pan(rand.range(0, 1));

// Pluck Ornaments (撥弦裝飾)
const pluck_ornaments = note("c6 e6 g6 c7")
  .sound("triangle")
  .lpf(3500)
  .gain(0.18)
  .degradeBy(0.7)
  .room(0.8)
  .decay(0.3)
  .delay(0.125)
  .pan(sine.slow(3).range(0.2, 0.8));

// ==============================================================================
// FINAL COMPOSITION - 最終組合
// ==============================================================================

stack(
  // 節奏組 (Foundation)
  epic_drums.every(16, x => x.gain(0.98)),
  buildup_perc.degradeBy(0.3).every(8, x => x.degradeBy(0.1)),
  tom_fills,

  // 低音組 (Bass Foundation)
  powerful_bass.every(8, x => x.gain(0.75)),
  sub_bass,
  synth_bass.degradeBy(0.2),

  // 和弦組 (Harmonic Foundation)
  epic_chords.degradeBy(0.15).every(4, x => x.gain(0.48)),
  supersaw_chords.degradeBy(0.25),
  stab_chords.degradeBy(0.4).every(8, x => x.degradeBy(0.2)),

  // 旋律組 (Melodic Elements)
  soaring_arp.degradeBy(0.2).every(16, x => x.degradeBy(0.1)),
  fast_arp.degradeBy(0.5).every(32, x => x.degradeBy(0.3)),
  epic_lead.degradeBy(0.3).every(16, x => x.degradeBy(0.15)),
  harmony_lead.degradeBy(0.4).every(16, x => x.degradeBy(0.2)),

  // 氛圍組 (Atmospheric Layers)
  euphoric_pad,
  strings_pad.degradeBy(0.2),
  atmos_shimmer.degradeBy(0.5),
  celestial_voices.degradeBy(0.6),

  // 累積效果 (Build Elements)
  riser.degradeBy(0.7),
  noise_sweep.degradeBy(0.8),
  impact_hits,

  // 質感細節 (Texture Details)
  granular_sparkle.degradeBy(0.85),
  pluck_ornaments.degradeBy(0.65)
)
  // 全局動態 (Global Dynamics)
  .gain(sine.slow(128).range(0.65, 0.85))
  .lpf(sine.slow(256).range(1300, 2600))
  .room(sine.slow(96).range(0.65, 0.9))

  // 累積能量 (Build Energy)
  .every(8, x => x.gain(0.75))
  .every(16, x => x.gain(0.9).fast(1.08))
  .every(32, x => x.room(0.9).fast(1.1))
  .every(64, x => x.gain(0.95).lpf(2800))

  // 高潮變化 (Climax Variations)
  .sometimes(x => x.add(note("12")))
  .sometimes(x => x.add(note("7")))
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))
  .sometimes(x => x.lpf(perlin.range(1500, 2800)))
  .sometimes(x => x.fast(perlin.range(1, 1.15)))

  // 最終修飾 (Final Polish)
  .delay(0.25)
  .room(0.75)
  .distort(sine.slow(512).range(0, 0.05))

/*
 * ==============================================================================
 * 史詩級結尾，專輯最高潮
 * ==============================================================================
 * 技術特點：
 * - 20+ 層音軌堆疊營造豐富質感
 * - 多層低音 (Sub + Main + Synth) 創造厚度
 * - 雙層琶音 (Main + Fast) 營造翱翔感
 * - 和聲主音與主旋律形成對位
 * - Perlin 與 Sine 調製創造有機動態
 * - 每 16/32/64 小節的漸進式能量累積
 * - Degradation 控制各層出現時機
 * - 豐富的空間效果 (reverb, delay, stereo)
 * - Riser 和 Impact 營造 EDM Drop 感
 * - 顆粒質感與細節裝飾增加精緻度
 *
 * 混音策略：
 * - 低頻：Sub bass (< 120Hz) + Main bass (200-750Hz)
 * - 中頻：Chords (400-1200Hz) + Synth bass (400-1000Hz)
 * - 中高頻：Arpeggios (1800-2800Hz) + Leads (1400-2400Hz)
 * - 高頻：Shimmer (3000-4500Hz) + Sparkle (> 4000Hz)
 * - 空間：漸進式 room (0.65 -> 0.9) 營造開闊感
 *
 * 這是專輯的終極高潮 - 狂喜、釋放、希望
 */
