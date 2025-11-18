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
