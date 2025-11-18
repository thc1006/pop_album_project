/*
 * ==============================================================================
 * MOTIFS LIBRARY - Contemporary Pop Album (Taiwan Indie Style)
 * ==============================================================================
 * 這個庫包含所有歌曲共用的和弦進行、節奏模板、音色設計和動態變化函式
 * 靈感來自美秀集團和告五人的多元音樂風格
 */

// ==============================================================================
// CHORD PROGRESSIONS - 和弦進行
// ==============================================================================

// Classic Pop Progressions (經典流行和弦)
const I_V_vi_IV = note("0 4 5 3").scale("C:major"); // C G Am F - 最經典的流行進行
const vi_IV_I_V = note("5 3 0 4").scale("C:major"); // Am F C G - 告五人常用
const I_vi_IV_V = note("0 5 3 4").scale("C:major"); // C Am F G - 50s 經典
const I_IV_vi_V = note("0 3 5 4").scale("C:major"); // C F Am G - 溫暖感

// J-Pop / Taiwan Indie Style (日式流行 / 台灣獨立音樂風格)
const vi_IV_V_I = note("5 3 4 0").scale("C:major"); // Am F G C - 情感豐富
const I_V_vi_iii_IV = note("0 4 5 2 3").scale("C:major"); // C G Am Em F - 複雜進行
const IV_V_iii_vi = note("3 4 2 5").scale("C:major"); // F G Em Am - 憂鬱感

// Rock / Punk Progressions (搖滾 / 龐克和弦)
const i_VI_III_VII = note("0 5 2 6").scale("A:minor"); // Am F C G - 小調搖滾
const i_iv_v = note("0 3 4").scale("A:minor"); // Am Dm Em - 簡單有力
const power_progression = note("0 3 4 3").scale("C:major"); // C F G F - 力量和弦

// Ballad / Emotional (抒情 / 情感豐富)
const vi_V_IV_iii = note("5 4 3 2").scale("C:major"); // Am G F Em - 下行抒情
const I_iii_vi_IV = note("0 2 5 3").scale("C:major"); // C Em Am F - 柔美
const i_VII_VI_V = note("0 6 5 4").scale("A:minor"); // Am G F Em - 憂傷

// Experimental / Homegrown (實驗性 / 自製感)
const chromatic_walk = note("0 1 2 3 4 5 6 7").scale("C:major"); // 半音上行
const pentatonic_hop = note("0 2 4 7 9").scale("C:major"); // 五聲音階跳躍

// ==============================================================================
// RHYTHM PATTERNS - 節奏模板
// ==============================================================================

// Basic Drums (基本鼓組)
const basic_drum = stack(
  s("bd*4").gain(0.8),           // 四四拍大鼓
  s("hh*8").gain(0.3),           // 八分音符 hi-hat
  s("sd*2").gain(0.4)            // 小鼓在 2, 4 拍
);

// Rock Drums (搖滾鼓組)
const rock_drum = stack(
  s("bd bd ~ bd bd ~ bd ~").gain(0.85),      // 搖滾節奏
  s("hh*8").gain(0.35).pan(sine.slow(8)),   // 立體 hi-hat
  s("sd ~ sd ~").gain(0.5),                  // 強力小鼓
  s("~ ~ ~ oh").gain(0.3).every(4, x => x.degradeBy(0.3)) // 偶爾的 open hi-hat
);

// Punk Drums (龐克鼓組 - 美秀集團風格)
const punk_drum = stack(
  s("bd*4").gain(0.9),                       // 重擊大鼓
  s("hh*8").gain(0.4).degradeBy(0.1),       // 略有混亂的 hi-hat
  s("sd sd sd sd").gain(0.6),                // 密集小鼓
  s("~ ~ oh ~").gain(0.4).sometimes(x => x.fast(2)) // 爆發性 cymbal
);

// Dance Drums (舞曲鼓組)
const dance_drum = stack(
  s("bd*4").gain(0.85),                      // 四四拍電子大鼓
  s("hh*16").gain(0.25).pan(sine.slow(4)),  // 十六分音符 hi-hat
  s("~ sd ~ sd").gain(0.5),                  // 電子小鼓
  s("~ ~ ~ cp").gain(0.3).every(8, x => x.add(note("12"))) // 拍手音效
);

// Techno Drums (科技舞曲鼓組)
const techno_drum = stack(
  s("bd*4").gain(0.9).hpf(40),              // 深沉電子大鼓
  s("hh*8").gain(0.3).degradeBy(0.2),       // 略帶故障感的 hi-hat
  s("sd ~ sd ~").gain(0.5).delay(0.25),     // 帶延遲的小鼓
  s("~ ~ click ~").gain(0.2).fast(perlin.range(1, 2)) // 實驗性 click
);

// Folk / Acoustic Drums (民謠 / 木吉他鼓組)
const folk_drum = stack(
  s("bd ~ bd ~").gain(0.5),                  // 輕柔大鼓
  s("hh*4").gain(0.2).hpf(2000),            // 清脆 hi-hat
  s("~ ~ sd ~").gain(0.3),                   // 溫柔小鼓
  s("~ ~ ~ ~").sometimes(x => s("tamb*4").gain(0.2)) // 偶爾的鈴鼓
);

// Ballad Drums (抒情鼓組)
const ballad_drum = stack(
  s("bd ~ ~ ~").gain(0.4),                   // 稀疏大鼓
  s("~ hh ~ hh").gain(0.2),                  // 簡單 hi-hat
  s("~ ~ sd ~").gain(0.3).room(0.8),         // 帶殘響的小鼓
  s("~ ~ ~ ~").every(8, x => s("~ ~ ~ crash").gain(0.4)) // 偶爾的鈸
);

// ==============================================================================
// BASS PATTERNS - 貝斯模板
// ==============================================================================

// Synth Bass (合成器貝斯)
const synth_bass = (notes) => note(notes)
  .sound("sawtooth")
  .lpf(600)
  .gain(0.5)
  .room(0.3);

// Deep Bass (深沉貝斯)
const deep_bass = (notes) => note(notes)
  .sound("triangle")
  .lpf(400)
  .gain(0.6)
  .hpf(40);

// Walking Bass (行走貝斯 - 爵士風格)
const walking_bass = note("c2 d2 e2 f2 g2 a2 b2 c3")
  .sound("triangle")
  .lpf(500)
  .gain(0.4)
  .every(4, x => x.slow(2));

// Funky Bass (放克貝斯)
const funky_bass = (notes) => note(notes)
  .sound("square")
  .lpf(800)
  .gain(0.45)
  .degradeBy(0.1)
  .sometimes(x => x.add(note("12")));

// ==============================================================================
// SYNTH SOUNDS - 合成器音色
// ==============================================================================

// Warm Pad (溫暖 Pad)
const warm_pad = (notes) => note(notes)
  .sound("sine")
  .gain(0.3)
  .lpf(1000)
  .room(0.8)
  .slow(2);

// Bright Lead (明亮主音)
const bright_lead = (notes) => note(notes)
  .sound("square")
  .gain(0.3)
  .lpf(1200)
  .delay(0.125)
  .room(0.4);

// Retro Synth (復古合成器)
const retro_synth = (notes) => note(notes)
  .sound("sawtooth")
  .gain(0.35)
  .lpf(sine.range(600, 1400))
  .room(0.5);

// Dreamy Pad (夢幻 Pad)
const dreamy_pad = (notes) => note(notes)
  .sound("sine")
  .gain(0.25)
  .lpf(perlin.range(400, 1200))
  .room(0.9)
  .delay(0.375);

// Pluck Synth (撥弦合成器)
const pluck_synth = (notes) => note(notes)
  .sound("triangle")
  .gain(0.3)
  .decay(0.1)
  .lpf(2000)
  .room(0.3);

// Aggressive Synth (激進合成器 - 美秀集團風格)
const aggressive_synth = (notes) => note(notes)
  .sound("square")
  .gain(0.4)
  .lpf(600)
  .distort(0.3)
  .sometimes(x => x.add(perlin.range(-2, 2)));

// ==============================================================================
// ARPEGGIOS - 琶音
// ==============================================================================

// Upward Arpeggio (上行琶音)
const arp_up = (scale_name) => note("0 2 4 7 4 2")
  .scale(scale_name)
  .sound("triangle")
  .gain(0.25)
  .lpf(2000);

// Downward Arpeggio (下行琶音)
const arp_down = (scale_name) => note("7 4 2 0 2 4")
  .scale(scale_name)
  .sound("sine")
  .gain(0.2)
  .lpf(1800);

// Complex Arpeggio (複雜琶音)
const arp_complex = (scale_name) => note("0 4 7 9 7 4 2 0")
  .scale(scale_name)
  .sound("square")
  .gain(0.2)
  .lpf(1600)
  .every(4, x => x.fast(2));

// ==============================================================================
// GUITAR SIMULATIONS - 吉他模擬
// ==============================================================================

// Acoustic Guitar (木吉他模擬)
const acoustic_guitar = (notes) => note(notes)
  .sound("triangle")
  .gain(0.35)
  .lpf(1500)
  .room(0.6)
  .decay(0.3);

// Electric Guitar (電吉他模擬)
const electric_guitar = (notes) => note(notes)
  .sound("sawtooth")
  .gain(0.4)
  .lpf(1000)
  .distort(0.2)
  .room(0.4);

// Clean Guitar (清音吉他)
const clean_guitar = (notes) => note(notes)
  .sound("triangle")
  .gain(0.3)
  .lpf(2000)
  .room(0.5)
  .delay(0.125);

// ==============================================================================
// PIANO SOUNDS - 鋼琴音色
// ==============================================================================

// Bright Piano (明亮鋼琴)
const bright_piano = (notes) => note(notes)
  .sound("sine")
  .gain(0.35)
  .lpf(3000)
  .room(0.6)
  .decay(0.5);

// Mellow Piano (柔和鋼琴)
const mellow_piano = (notes) => note(notes)
  .sound("sine")
  .gain(0.3)
  .lpf(1200)
  .room(0.8)
  .decay(0.7);

// ==============================================================================
// EFFECTS & DYNAMICS - 效果與動態
// ==============================================================================

// Filter Sweep (濾波器掃描)
const filter_sweep = () => lpf(sine.range(400, 2000));

// Breathing Effect (呼吸效果)
const breathing = () => gain(sine.slow(8).range(0.3, 0.6));

// Stereo Movement (立體聲移動)
const stereo_move = () => pan(sine.slow(4).range(0, 1));

// Perlin Modulation (Perlin 噪聲調制)
const perlin_mod = () => lpf(perlin.range(600, 1800));

// Random Glitch (隨機故障效果 - 實驗性)
const random_glitch = () => degradeBy(perlin.range(0, 0.3));

// Crescendo (漸強)
const crescendo = (cycles) => gain(sine.slow(cycles).range(0.2, 0.8));

// Reverb Wash (殘響沖刷)
const reverb_wash = () => room(sine.slow(16).range(0.5, 0.95));

// ==============================================================================
// COMMON TRANSFORMATIONS - 常用變化
// ==============================================================================

// Build Energy (能量堆疊)
const build_energy = (pattern) => pattern
  .every(8, x => x.fast(1.5))
  .every(16, x => x.gain(0.8));

// Add Variation (添加變化)
const add_variation = (pattern) => pattern
  .sometimes(x => x.add(note("7")))
  .every(4, x => x.degradeBy(0.1));

// Breakdown (段落分解)
const breakdown = (pattern) => pattern
  .slow(2)
  .lpf(400)
  .gain(0.4)
  .room(0.9);

// Climax (高潮)
const climax = (pattern) => pattern
  .fast(1.2)
  .gain(0.9)
  .room(0.7)
  .every(2, x => x.add(note("12")));

// Ambient Fade (環境音淡出)
const ambient_fade = (pattern) => pattern
  .slow(2)
  .lpf(perlin.range(300, 800))
  .gain(sine.slow(32).range(0.1, 0.3))
  .room(0.95);

// ==============================================================================
// SCALES - 常用音階
// ==============================================================================

// Major scales (大調音階)
const C_major = "C:major";
const F_major = "F:major";
const G_major = "G:major";

// Minor scales (小調音階)
const A_minor = "A:minor";
const E_minor = "E:minor";
const D_minor = "D:minor";

// Pentatonic (五聲音階 - 台灣風味)
const C_pentatonic = "C:pentatonic";
const A_pentatonic_minor = "A:minPent";

// Blues (藍調音階)
const C_blues = "C:blues";
const A_blues = "A:blues";

// ==============================================================================
// EXPORT NOTE
// ==============================================================================
/*
 * 使用方式：
 * 1. 在歌曲文件中直接複製需要的模板
 * 2. 根據歌曲調性調整 scale()
 * 3. 使用變化函式添加動態效果
 *
 * 例如：
 * const myPattern = stack(
 *   rock_drum,
 *   synth_bass("c2 e2 g2 a2")
 * ).pipe(add_variation);
 */

// ==============================================================================
// ADVANCED RHYTHM PATTERNS - 進階節奏模板
// ==============================================================================

// Breakbeat (斷拍)
const breakbeat = stack(
  s("bd ~ sd bd ~ sd bd ~").gain(0.8),
  s("hh*16").gain(0.25).degradeBy(0.2),
  s("~ ~ ~ ~ ~ ~ cp ~").gain(0.3)
);

// Half-time Feel (半拍感)
const halftime_drum = stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.85),
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.6),
  s("hh*8").gain(0.3).degradeBy(0.3)
);

// Double-time Feel (倍拍感)
const doubletime_drum = stack(
  s("bd*8").gain(0.75),
  s("hh*16").gain(0.3).pan(sine.slow(2)),
  s("sd ~ sd ~ sd ~ sd ~").gain(0.5).fast(2)
);

// Shuffle / Swing (搖擺節奏)
const shuffle_drum = stack(
  s("bd ~ ~ bd ~ ~ bd ~").gain(0.8),
  s("hh ~ hh ~ hh ~ hh ~").gain(0.35).delay(0.0625),  // 微延遲創造 swing 感
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.5)
);

// Afrobeat Pattern (非洲節奏)
const afrobeat = stack(
  s("bd ~ bd bd ~ bd ~ ~").gain(0.75),
  s("hh*16").gain(0.25).pan(perlin.range(0.3, 0.7)),
  s("~ cp ~ ~ cp ~ ~ cp").gain(0.3),
  s("~ ~ ~ shaker*4 ~").gain(0.2)
);

// Reggae / Dub Pattern (雷鬼節奏)
const reggae_drum = stack(
  s("~ bd ~ bd").gain(0.7),              // 後拍強調
  s("~ ~ hh ~ ~ ~ hh ~").gain(0.35),
  s("~ ~ ~ sd").gain(0.5).room(0.7)
);

// Bossa Nova Pattern (巴薩諾瓦)
const bossa_nova = stack(
  s("bd ~ ~ bd ~ bd ~ ~").gain(0.6),
  s("~ hh ~ hh ~ ~ hh ~").gain(0.3),
  s("~ ~ ~ ~ sd ~ ~ ~").gain(0.4),
  s("~ ~ shaker*2 ~ ~ shaker*2 ~").gain(0.15)
);

// Trap Hi-Hat Roll (Trap 風格快速 Hi-Hat)
const trap_hats = s("hh*32")
  .gain(0.3)
  .degradeBy(0.1)
  .pan(sine.slow(1).range(0, 1))
  .every(4, x => x.fast(2))
  .sometimes(x => x.hpf(4000));

// Triplet Feel (三連音)
const triplet_drum = stack(
  s("bd ~ ~ bd ~ ~ bd ~ ~").gain(0.8),
  s("hh ~ ~ hh ~ ~ hh ~ ~").gain(0.35).fast(1.5),
  s("~ ~ sd ~ ~ sd ~ ~ sd").gain(0.5)
);

// ==============================================================================
// MELODIC PATTERNS - 旋律模板
// ==============================================================================

// Step Sequencer Pattern (階梯音序器)
const step_melody = (scale_name) => note("0 2 4 5 7 5 4 2")
  .scale(scale_name)
  .sound("square")
  .gain(0.3)
  .lpf(1400);

// Octave Jump Melody (八度跳躍)
const octave_melody = (scale_name) => note("0 12 2 14 4 16 7 19")
  .scale(scale_name)
  .sound("triangle")
  .gain(0.3)
  .lpf(1600);

// Call and Response (呼應式旋律)
const call_response = (scale_name) => stack(
  note("0 2 4 7").scale(scale_name).sound("square").gain(0.3),
  note("7 4 2 0").scale(scale_name).sound("sine").gain(0.25).delay(0.5)
);

// Chromatic Run (半音階跑動)
const chromatic_run = note("c4 c#4 d4 d#4 e4 f4 f#4 g4")
  .sound("triangle")
  .lpf(2000)
  .gain(0.25)
  .fast(2);

// Pentatonic Riff (五聲音階 Riff)
const penta_riff = (root) => note(`${root}4 ${root}5 ${root}4 ${root}3`)
  .scale("C:pentatonic")
  .sound("sawtooth")
  .lpf(1200)
  .gain(0.35)
  .distort(0.2);

// Modal Interchange (調式交換)
const modal_melody = stack(
  note("0 2 4 7").scale("C:major").sound("sine").gain(0.25),
  note("0 3 5 7").scale("C:minor").sound("triangle").gain(0.2).delay(0.25)
);

// ==============================================================================
// BASS PATTERNS - 進階貝斯模板
// ==============================================================================

// Slap Bass Pattern (打板貝斯)
const slap_bass = (notes) => note(notes)
  .sound("square")
  .lpf(800)
  .hpf(80)
  .gain(0.55)
  .decay(0.15)
  .distort(0.1);

// Dubstep Wobble Bass (Dubstep 搖擺貝斯)
const wobble_bass = (notes) => note(notes)
  .sound("sawtooth")
  .lpf(sine.fast(8).range(200, 1200))    // 快速 LFO
  .gain(0.6)
  .distort(0.3)
  .room(0.3);

// Minimal Techno Bass (極簡科技貝斯)
const minimal_bass = (notes) => note(notes)
  .sound("sine")
  .lpf(300)
  .gain(0.65)
  .decay(0.3)
  .every(4, x => x.add(note("12")));

// Funk Bass Line (放克貝斯線)
const funk_bassline = note("c2 ~ c2 ~ e2 ~ ~ g2")
  .sound("square")
  .lpf(700)
  .gain(0.5)
  .decay(0.2)
  .sometimes(x => x.add(note("7")));

// Reggae Bass (雷鬼貝斯)
const reggae_bass = (notes) => note(notes)
  .sound("sine")
  .lpf(400)
  .gain(0.7)
  .decay(0.5)
  .delay(0.375)
  .room(0.5);

// Sub Bass (次低音)
const sub_bass = (notes) => note(notes)
  .sound("sine")
  .lpf(120)
  .gain(0.8)
  .decay(0.8)
  .hpf(30);

// ==============================================================================
// ADVANCED SYNTH PATTERNS - 進階合成器模板
// ==============================================================================

// PWM Synth (脈衝寬度調制)
const pwm_synth = (notes) => note(notes)
  .sound("square")
  .lpf(perlin.range(600, 1800))
  .gain(0.3)
  .room(0.6)
  .delay(0.25);

// FM Synth Style (FM 合成器風格)
const fm_synth = (notes) => note(notes)
  .sound("sine")
  .add(sine.fast(4).range(-2, 2))         // 頻率調制
  .lpf(1600)
  .gain(0.35)
  .room(0.5);

// Supersaw (超級鋸齒波)
const supersaw = (notes) => stack(
  note(notes).sound("sawtooth").gain(0.25),
  note(notes).add(note("0.1")).sound("sawtooth").gain(0.25).pan(0.3),
  note(notes).add(note("-0.1")).sound("sawtooth").gain(0.25).pan(0.7)
).lpf(1400);

// Detuned Oscillators (失諧振盪器)
const detuned_synth = (notes) => stack(
  note(notes).sound("sawtooth").gain(0.2),
  note(notes).add(note("0.05")).sound("sawtooth").gain(0.2),
  note(notes).add(note("-0.05")).sound("sawtooth").gain(0.2)
).lpf(1200);

// Rave Stabs (銳舞 Stabs)
const rave_stabs = (notes) => note(notes)
  .sound("sawtooth")
  .lpf(2000)
  .gain(0.5)
  .decay(0.1)
  .distort(0.2)
  .delay(0.125);

// Ambient Wash (環境音沖刷)
const ambient_wash = (notes) => note(notes)
  .sound("sine")
  .slow(8)
  .gain(perlin.range(0.1, 0.3))
  .lpf(perlin.range(400, 1200))
  .room(0.95)
  .delay(0.5);

// ==============================================================================
// RHYTHMIC VARIATIONS - 節奏變化
// ==============================================================================

// Polyrhythm (複節奏)
const polyrhythm = stack(
  s("bd*4").gain(0.7),                   // 4 拍
  s("hh*5").gain(0.3),                   // 5 拍
  s("sd*3").gain(0.4)                    // 3 拍
);

// Metric Modulation (節拍調制)
const metric_mod = (pattern) => pattern
  .every(8, x => x.fast(1.5))
  .every(16, x => x.slow(1.33));

// Euclidean Rhythm (歐幾里得節奏)
const euclidean_kick = s("bd(5,8)").gain(0.8);        // 8 拍中打 5 下
const euclidean_snare = s("sd(3,8)").gain(0.5);       // 8 拍中打 3 下
const euclidean_hats = s("hh(11,16)").gain(0.3);      // 16 拍中打 11 下

// ==============================================================================
// EFFECT CHAINS - 效果鏈
// ==============================================================================

// Dub Echo (Dub 回聲)
const dub_echo = (pattern) => pattern
  .delay(0.375)
  .delaytime(0.375)
  .delayfeedback(0.7)
  .room(0.8);

// Tape Stop Effect (磁帶停止效果)
const tape_stop = (pattern) => pattern
  .every(16, x => x.slow(4).lpf(400).gain(0.3));

// Reverse Effect (反轉效果)
const reverse_feel = (pattern) => pattern
  .every(8, x => x.rev());

// Stutter Effect (結巴效果)
const stutter = (pattern) => pattern
  .every(4, x => x.fast(4).cut(1));

// Lo-Fi Effect (Lo-Fi 效果)
const lofi = (pattern) => pattern
  .lpf(1200)
  .hpf(100)
  .degradeBy(0.2)
  .distort(0.1)
  .gain(0.6);

// Sidechain Compression (側鏈壓縮模擬)
const sidechain = (pattern, kick_pattern) => pattern
  .gain(sine.fast(4).range(0.3, 0.7));    // 模擬 pumping 效果

// ==============================================================================
// GENERATIVE PATTERNS - 生成式模板
// ==============================================================================

// Random Walk (隨機遊走)
const random_walk = note(perlin.range(0, 12).segment(32))
  .scale("C:major")
  .sound("triangle")
  .gain(0.25)
  .lpf(1600);

// Probability Gate (機率門)
const prob_gate = (pattern, probability) => pattern
  .degradeBy(1 - probability);

// Markov Chain Style (馬可夫鏈風格)
const markov_melody = note("<0 2 4> <2 4 7> <4 7 9> <7 9 12>")
  .scale("C:major")
  .sound("sine")
  .gain(0.3)
  .lpf(1800);

// Cellular Automata Rhythm (元胞自動機節奏)
const ca_rhythm = s("bd(5,8) sd(3,8) hh(7,8)")
  .gain(0.5)
  .every(8, x => x.rev());

// ==============================================================================
// GENRE-SPECIFIC PATTERNS - 特定風格模板
// ==============================================================================

// Lo-Fi Hip-Hop Beat
const lofi_hiphop = stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.7).lpf(400),
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.5).room(0.7),
  s("hh ~ hh ~ hh ~ hh ~").gain(0.25).hpf(3000).degradeBy(0.3),
  s("~ ~ ~ ~ ~ ~ ~ vinyl").gain(0.15)     // 黑膠噪音
);

// UK Garage Pattern
const uk_garage = stack(
  s("bd ~ ~ bd ~ bd ~ ~").gain(0.8),
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.6).delay(0.0625),
  s("hh*16").gain(0.3).pan(sine.slow(2)),
  s("~ ~ ~ ~ cp ~ ~ ~").gain(0.35)
);

// Drum and Bass
const dnb = stack(
  s("bd ~ bd bd ~ bd ~ bd").gain(0.85).fast(2),
  s("~ sd ~ sd ~ sd ~ sd").gain(0.6).fast(2).delay(0.125),
  s("hh*32").gain(0.25).degradeBy(0.2).pan(rand.range(0, 1))
);

// House 4/4
const house_beat = stack(
  s("bd*4").gain(0.9),
  s("~ ~ ~ ~ ~ ~ ~ oh").gain(0.4).every(2, x => x.degradeBy(0.5)),
  s("hh*8").gain(0.3).pan(sine.slow(4)),
  s("~ ~ cp ~").gain(0.35)
);

// Minimal Techno
const minimal_techno = stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.85),
  s("~ ~ ~ click ~ click ~ ~").gain(0.3).pan(perlin.range(0, 1)),
  s("~ ~ sd ~").gain(0.5).delay(0.25).room(0.6),
  s("hh*8").gain(0.25).degradeBy(0.4).hpf(4000)
);

// Future Bass
const future_bass = stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.85),
  s("~ ~ sd ~ ~ ~ sd ~").gain(0.6).room(0.7),
  s("hh*16").gain(0.3).degradeBy(0.2).pan(sine.slow(1)),
  note("c5 e5 g5 c6").sound("square").lpf(sine.range(1000, 3000)).gain(0.3).delay(0.125)
);

// ==============================================================================
// MICRO-TIMING & GROOVE - 微時序與律動
// ==============================================================================

// Swing Quantize (搖擺量化)
const swing_16 = (pattern) => pattern
  .every(2, x => x.early(0.0625));        // 每兩個音符提前一點

// Humanize (人性化)
const humanize = (pattern) => pattern
  .gain(perlin.range(0.4, 0.6))           // 音量隨機化
  .early(perlin.range(-0.02, 0.02))       // 時間微調
  .sometimes(x => x.degradeBy(0.05));     // 偶爾掉音符

// Groove Template (律動模板)
const groove_quantize = (pattern) => pattern
  .early("<0 -0.03 0 -0.02>")             // 特定的律動模式
  .gain("<0.5 0.55 0.45 0.6>");

// ==============================================================================
// SONG STRUCTURE HELPERS - 歌曲結構輔助
// ==============================================================================

// Build-up (能量累積)
const buildup = (pattern, bars) => pattern
  .gain(sine.slow(bars * 4).range(0.3, 0.8))
  .lpf(sine.slow(bars * 4).range(600, 2400))
  .every(Math.floor(bars / 2), x => x.fast(1.5));

// Drop (Drop 段落)
const drop = (pattern) => pattern
  .gain(0.9)
  .lpf(2400)
  .sometimes(x => x.add(note("12")))
  .delay(0.125);

// Breakdown (分解段)
const breakdown_section = (pattern) => pattern
  .slow(2)
  .lpf(800)
  .gain(0.5)
  .room(0.9)
  .degradeBy(0.3);

// Outro Fade (尾奏淡出)
const outro_fade = (pattern, bars) => pattern
  .gain(sine.slow(bars * 4).range(0.5, 0.1))
  .lpf(sine.slow(bars * 4).range(1200, 400))
  .room(sine.slow(bars * 4).range(0.7, 0.98));

// ==============================================================================
// ADVANCED TRANSFORMATIONS - 進階變換
// ==============================================================================

// Recursive Pattern (遞歸模式)
const recursive = (pattern, depth) => {
  let result = pattern;
  for (let i = 0; i < depth; i++) {
    result = result.every(Math.pow(2, i), x => x.fast(2));
  }
  return result;
};

// Pattern Morphing (模式變形)
const morph = (pattern1, pattern2, amount) => stack(
  pattern1.gain(1 - amount),
  pattern2.gain(amount)
);

// Granular Effect (顆粒效果)
const granular = (pattern) => pattern
  .fast(4)
  .cut(1)
  .pan(rand.range(0, 1))
  .gain(rand.range(0.3, 0.6));

// Time Stretch (時間伸縮)
const timestretch = (pattern, factor) => pattern
  .slow(factor)
  .speed(1 / factor);

/*
 * ==============================================================================
 * USAGE EXAMPLES - 使用範例
 * ==============================================================================
 *
 * // 基本組合
 * stack(
 *   house_beat,
 *   wobble_bass("c2 e2 g2 a2"),
 *   supersaw("c4 e4 g4 c5")
 * )
 *
 * // 添加效果
 * stack(dnb, fm_synth("c5 e5 g5"))
 *   .pipe(dub_echo)
 *   .pipe(lofi)
 *
 * // 生成式音樂
 * stack(
 *   euclidean_kick,
 *   random_walk,
 *   ambient_wash("c3 e3 g3")
 * ).pipe(humanize)
 *
 * // 歌曲結構
 * stack(
 *   future_bass,
 *   supersaw("c4 e4 g4 c5")
 * ).pipe(buildup, 8)  // 8 小節 buildup
 */
