/*
 * ==============================================================================
 * EXPERIMENT 02: TAIWAN GARAGE (台灣車庫)
 * ==============================================================================
 * 台灣五聲音階民謠 × UK Garage 的跨界融合
 * 傳統與現代、東方與西方的碰撞
 *
 * 風格：Taiwan Folk + UK Garage + Future Bass
 * BPM: 130
 * 調性：G Pentatonic (五聲音階)
 */

setcpm(130/4)

// UK Garage Drum Pattern
const garage_drums = stack(
  // Syncopated Kick
  s("bd ~ ~ bd ~ bd ~ ~").gain(0.8).lpf(200),

  // Signature UK Garage Snare
  s("~ ~ sd ~ ~ ~ sd(3,8)").gain(0.65).room(0.6),

  // Shuffled Hi-Hats (Swing groove)
  s("hh*16")
    .gain(0.3)
    .hpf(5000)
    .degradeBy(0.2)
    .every(2, x => x.fast(1.33)), // Swing feel

  // Rim shots
  s("~ ~ ~ ~ ~ ~ cp ~").gain(0.35).hpf(2000),

  // Crashes on drops
  s("~ ~ ~ ~ ~ ~ ~ crash").gain(0.4).every(8, x => x.degradeBy(0.5))
);

// Taiwan Pentatonic Melody (五聲音階主旋律)
const pentatonic_melody = note("g4 a4 c5 d5 | e5 d5 c5 a4 | g4 a4 c5 e5 | d5 ~ ~ ~")
  .scale("G:pentatonic")
  .sound("sine")
  .lpf(2400)
  .gain(0.32)
  .room(0.75)
  .delay(0.125)
  .every(8, x => x.add(note("12")))
  .sometimes(x => x.rev());

// Wobble Bass (Garage style)
const garage_bass = note("g2!4 c3!4 | d3!4 e3!4")
  .scale("G:pentatonic")
  .sound("sawtooth")
  .lpf(sine.fast(8).range(200, 1000))
  .gain(0.55)
  .distort(0.25)
  .room(0.35)
  .every(4, x => x.add(note("12")));

// Traditional Erhu Simulation (二胡音色模擬)
const erhu_sim = note("d5 e5 g5 a5 | g5 e5 d5 ~")
  .scale("G:pentatonic")
  .slow(2)
  .sound("sawtooth")
  .lpf(1800)
  .gain(0.28)
  .room(0.8)
  .delay(0.25)
  .distort(0.05) // Slight distortion for string buzz
  .every(8, x => x.sometimes(y => y.add(note("2")))); // Vibrato simulation

// Future Bass Chords (和聲層)
const future_chords = note("<[g3,b3,d4,g4]!4> <[c4,e4,g4,c5]!4> <[d4,f#4,a4,d5]!4> <[e4,g4,b4,e5]!4>")
  .sound("sawtooth")
  .lpf(perlin.range(800, 1600))
  .gain(0.3)
  .room(0.65)
  .delay(0.375)
  .decay(0.5)
  .every(4, x => x.add(note("7"))); // Add 7th for richness

// Gong Texture (鑼聲質感)
const gong_texture = note("g2")
  .sound("triangle")
  .slow(8)
  .gain(sine.slow(32).range(0.15, 0.25))
  .lpf(400)
  .room(0.95)
  .decay(2.0)
  .distort(0.1);

// Rave Stabs (UK Garage signature sound)
const rave_stabs = note("<~ ~ [g4,b4,d5] ~> <~ ~ [c5,e5,g5] ~>")
  .sound("square")
  .lpf(1400)
  .gain(0.35)
  .room(0.5)
  .decay(0.15)
  .distort(0.2)
  .hpf(800);

// Vinyl Crackle (Lo-Fi texture)
const vinyl = s("~ ~ ~ ~")
  .sometimes(x => s("vinyl*4").gain(0.08).hpf(4000).degradeBy(0.5));

// Bamboo Flute Ornament (竹笛裝飾音)
const bamboo_ornament = note(perlin.range(72, 96).segment(64))
  .scale("G:pentatonic")
  .sound("sine")
  .lpf(3000)
  .gain(0.12)
  .degradeBy(0.85)
  .room(0.9)
  .decay(0.3)
  .pan(sine.slow(4).range(0.2, 0.8));

stack(
  garage_drums.degradeBy(0.15),
  pentatonic_melody.degradeBy(0.25),
  garage_bass,
  erhu_sim.degradeBy(0.3),
  future_chords.degradeBy(0.2),
  gong_texture,
  rave_stabs.degradeBy(0.4),
  vinyl,
  bamboo_ornament
)
  .gain(sine.slow(64).range(0.55, 0.75))
  .lpf(sine.slow(128).range(1200, 2200))
  .room(0.65)
  .every(16, x => x.gain(0.8))
  .every(32, x => x.room(0.85))
  .sometimes(x => x.delay(perlin.range(0.125, 0.375)))

/*
 * 東西文化的聲音碰撞
 * 創新點：
 * - 五聲音階 + UK Garage 節奏 = 前所未有的融合
 * - 二胡音色模擬帶來東方韻味
 * - Wobble bass 與傳統鑼聲的對話
 * - Future Bass 和聲豐富層次
 * - Swing groove 營造 UK Garage 的搖擺感
 *
 * 文化意義：
 * 這不是簡單的混搭，而是尋找台灣音樂在全球電子音樂版圖中的位置
 * 五聲音階的旋律性 + 車庫樂的節奏性 = 新的可能性
 */
