# Strudel 音色設計與樂器模擬指南

完整的音色設計參考，教你如何在 Strudel 中創造各種樂器音色和氛圍。

## 📚 目錄
1. [基礎波形](#基礎波形)
2. [鼓組音色](#鼓組音色)
3. [貝斯音色](#貝斯音色)
4. [吉他音色](#吉他音色)
5. [鍵盤與合成器](#鍵盤與合成器)
6. [氛圍與效果](#氛圍與效果)
7. [台灣樂團風格模擬](#台灣樂團風格模擬)
8. [混音技巧](#混音技巧)

---

## 基礎波形

### Sine Wave (正弦波)
- **特性**: 純淨、柔和、無泛音
- **適合**: 貝斯、Pad、鐘聲、柔和旋律
- **範例**: `note("c4").sound("sine").gain(0.3)`
- **使用場景**: 抒情歌曲、環境音樂、Sub Bass

### Triangle Wave (三角波)
- **特性**: 比 sine 稍亮，少量奇次泛音
- **適合**: 木吉他模擬、柔和合成器、貝斯
- **範例**: `note("c4").sound("triangle").lpf(1500).gain(0.35)`
- **使用場景**: 民謠、Lo-Fi、Chill

### Square Wave (方波)
- **特性**: 厚實、空心、奇次泛音豐富
- **適合**: 主音、電吉他、Chiptune、貝斯
- **範例**: `note("c4").sound("square").lpf(1200).gain(0.3)`
- **使用場景**: 電子音樂、搖滾、龐克

### Sawtooth Wave (鋸齒波)
- **特性**: 最明亮、最豐富的泛音
- **適合**: 合成器、弦樂、電吉他、厚重貝斯
- **範例**: `note("c4").sound("sawtooth").lpf(1000).gain(0.35)`
- **使用場景**: EDM、Techno、搖滾、流行

---

## 鼓組音色

### Kick Drum (大鼓)
```javascript
// 深沉 Kick
s("bd").gain(0.9).lpf(200).hpf(40)

// 打擊感 Kick
s("bd").gain(0.85).lpf(400).distort(0.1)

// 電子 Kick
s("bd").gain(0.9).lpf(300).delay(0.0625)
```

### Snare Drum (小鼓)
```javascript
// 自然小鼓
s("sd").gain(0.5).room(0.6)

// 電子小鼓
s("sd").gain(0.6).hpf(200).delay(0.125)

// 帶尾音小鼓
s("sd").gain(0.5).room(0.8).delay(0.25)
```

### Hi-Hat
```javascript
// 清脆 Hi-Hat
s("hh*8").gain(0.3).hpf(3000)

// 開放 Hi-Hat
s("oh").gain(0.4).room(0.5).degradeBy(0.3)

// 搖擺 Hi-Hat
s("hh ~ hh ~ hh ~ hh ~").gain(0.35).delay(0.0625)
```

### Cymbals & Percussion
```javascript
// Crash
s("crash").gain(0.5).room(0.8).lpf(8000)

// Ride
s("ride*4").gain(0.3).pan(sine.slow(4))

// Clap
s("cp ~ cp ~").gain(0.35).room(0.5)

// Shaker
s("shaker*8").gain(0.2).hpf(4000).pan(perlin.range(0.3, 0.7))
```

---

## 貝斯音色

### Sub Bass (超低音)
```javascript
note("c1").sound("sine")
  .lpf(120)
  .hpf(30)
  .gain(0.8)
  .decay(0.8)
```
**用途**: EDM, Trap, Hip-Hop

### Synth Bass (合成貝斯)
```javascript
note("c2").sound("sawtooth")
  .lpf(600)
  .gain(0.6)
  .room(0.3)
  .distort(0.1)
```
**用途**: Pop, Rock, Techno

### Wobble Bass (搖擺貝斯)
```javascript
note("c2").sound("sawtooth")
  .lpf(sine.fast(8).range(200, 1200))
  .gain(0.65)
  .distort(0.3)
```
**用途**: Dubstep, Bass Music

### Acoustic Bass (木貝斯模擬)
```javascript
note("c2").sound("triangle")
  .lpf(500)
  .gain(0.45)
  .decay(0.4)
  .room(0.5)
```
**用途**: Jazz, Folk, Ballad

### Funk Bass (放克貝斯)
```javascript
note("c2 ~ c2 ~ e2 ~ ~ g2").sound("square")
  .lpf(700)
  .gain(0.5)
  .decay(0.2)
  .hpf(80)
```
**用途**: Funk, Disco, Groove

---

## 吉他音色

### Acoustic Guitar (木吉他)
```javascript
// 指彈
note("c3 e3 g3 c4").sound("triangle")
  .lpf(1800)
  .gain(0.35)
  .decay(0.4)
  .room(0.6)

// 刷弦
note("[c3,e3,g3,c4]").sound("triangle")
  .lpf(2000)
  .gain(0.4)
  .decay(0.3)
  .degradeBy(0.2)
```

### Electric Guitar (電吉他)
```javascript
// Clean
note("c4 e4 g4").sound("triangle")
  .lpf(2000)
  .gain(0.3)
  .room(0.5)
  .delay(0.125)

// Distortion
note("c4 e4 g4").sound("sawtooth")
  .lpf(1000)
  .gain(0.4)
  .distort(0.35)
  .room(0.4)

// Power Chord
note("[c3,c4,g4]").sound("sawtooth")
  .lpf(900)
  .gain(0.5)
  .distort(0.4)
```

### Lead Guitar (主音吉他)
```javascript
note("c5 d5 e5 g5").sound("square")
  .lpf(1400)
  .gain(0.35)
  .delay(0.25)
  .room(0.5)
  .distort(0.25)
  .sometimes(x => x.add(note("2")))  // 推弦效果
```

---

## 鍵盤與合成器

### Piano (鋼琴模擬)
```javascript
// 明亮鋼琴
note("[c4,e4,g4]").sound("sine")
  .lpf(3000)
  .gain(0.35)
  .decay(0.5)
  .room(0.6)

// 柔和鋼琴
note("[c4,e4,g4]").sound("sine")
  .lpf(1200)
  .gain(0.3)
  .decay(0.7)
  .room(0.8)
```

### Organ (風琴)
```javascript
note("[c4,e4,g4]").sound("sine")
  .add(note("[c5,e5,g5]"))  // 高八度
  .lpf(2000)
  .gain(0.3)
  .room(0.5)
```

### Synth Pad
```javascript
// 溫暖 Pad
note("c4 e4 g4").sound("sine")
  .slow(4)
  .gain(0.25)
  .lpf(1000)
  .room(0.9)
  .delay(0.5)

// 明亮 Pad
note("c4 e4 g4").sound("sawtooth")
  .slow(2)
  .gain(0.3)
  .lpf(sine.range(800, 1600))
  .room(0.8)
```

### Synth Lead
```javascript
// Square Lead
note("c5 d5 e5 g5").sound("square")
  .lpf(1200)
  .gain(0.35)
  .delay(0.125)
  .room(0.4)

// Saw Lead
note("c5 d5 e5 g5").sound("sawtooth")
  .lpf(sine.range(1000, 2000))
  .gain(0.3)
  .room(0.5)
  .delay(0.125)
```

### Supersaw (超級鋸齒波)
```javascript
stack(
  note("c4").sound("sawtooth").gain(0.25),
  note("c4").add(note("0.1")).sound("sawtooth").gain(0.25).pan(0.3),
  note("c4").add(note("-0.1")).sound("sawtooth").gain(0.25).pan(0.7)
).lpf(1400)
```

---

## 氛圍與效果

### Ambient Pad
```javascript
note("c3 e3 g3").sound("sine")
  .slow(8)
  .gain(perlin.range(0.1, 0.3))
  .lpf(perlin.range(400, 1200))
  .room(0.95)
  .delay(0.5)
```

### Reverb Wash (殘響沖刷)
```javascript
note("c5").sound("sine")
  .gain(0.2)
  .room(sine.slow(16).range(0.8, 0.98))
  .lpf(3000)
  .delay(0.375)
```

### Shimmer (閃爍)
```javascript
note(sine.range(60, 96).segment(128)).sound("sine")
  .lpf(4000)
  .hpf(2000)
  .gain(0.1)
  .degradeBy(0.6)
  .room(0.95)
  .pan(perlin.range(0, 1))
```

### Noise Elements
```javascript
// 白噪音
note(rand.range(36, 96).segment(64)).sound("sine")
  .lpf(2000)
  .gain(0.15)
  .degradeBy(0.7)

// 粉紅噪音 (用於氛圍)
note(perlin.range(40, 80).segment(128)).sound("sine")
  .lpf(1000)
  .gain(0.1)
  .room(0.9)
```

---

## 台灣樂團風格模擬

### 美秀集團 (Amazing Show) 風格

#### 特點
- 混合**搖滾、龐克與民謠**
- 自製樂器般的實驗音色
- 高能量、厚重低頻
- 賽博台客精神

#### 音色配置
```javascript
// 龐克鼓組
stack(
  s("bd*4").gain(0.95),
  s("hh*8").gain(0.45).degradeBy(0.15),
  s("sd sd sd sd").gain(0.65)
)

// 失真電吉他
note("e4 g4 a4 g4").sound("sawtooth")
  .lpf(1100)
  .gain(0.45)
  .distort(0.35)
  .room(0.45)

// 實驗性噪音
note(rand.range(36, 60).segment(32)).sound("square")
  .lpf(700)
  .gain(0.18)
  .degradeBy(0.75)
  .distort(0.4)
  .pan(rand.range(0, 1))

// 自製樂器感 (金屬打擊)
note(perlin.range(60, 84).segment(16)).sound("triangle")
  .gain(0.25)
  .hpf(2000)
  .room(0.7)
  .degradeBy(0.6)
  .pan(rand.range(0, 1))
  .decay(0.1)
```

### 告五人 (Accusefive) 風格

#### 特點
- 多元風格：獨立搖滾、民謠搖滾、流行搖滾、合成器流行
- 雙主唱對唱
- 流行易懂的旋律
- 情感豐富的編曲

#### 音色配置
```javascript
// 流行搖滾鼓組
stack(
  s("bd ~ bd ~ bd ~ bd ~").gain(0.85),
  s("hh*8").gain(0.35).pan(sine.slow(8)),
  s("~ sd ~ sd").gain(0.5)
)

// 清音吉他
note("c4 e4 g4 c5").sound("triangle")
  .lpf(2000)
  .gain(0.35)
  .room(0.6)
  .delay(0.125)

// 主唱旋律 (第一主唱)
note("e5 d5 c5 d5 | e5 g5 a5 ~").sound("sine")
  .lpf(2500)
  .gain(0.32)
  .room(0.75)
  .delay(0.125)

// 和聲 (第二主唱)
note("c5 b4 a4 b4 | c5 e5 f5 ~").sound("sine")
  .lpf(2200)
  .gain(0.2)
  .room(0.85)
  .delay(0.25)
  .degradeBy(0.4)

// 合成器 Pad (合成器流行元素)
note("<c4 e4 g4 c5>!16").sound("sine")
  .slow(4)
  .gain(0.18)
  .lpf(perlin.range(600, 1200))
  .room(0.9)
```

### 五月天風格 (額外參考)
```javascript
// 大氣搖滾鼓組
stack(
  s("bd*4").gain(0.9),
  s("hh*8").gain(0.35),
  s("~ sd ~ sd").gain(0.6),
  s("~ ~ ~ crash").gain(0.5).every(8, x => x.degradeBy(0.5))
)

// 厚重吉他牆
stack(
  note("[c3,c4,e4,g4]").sound("sawtooth").lpf(1000).gain(0.4).distort(0.3).pan(0.3),
  note("[c3,c4,e4,g4]").sound("sawtooth").lpf(1000).gain(0.4).distort(0.3).pan(0.7)
)
```

---

## 混音技巧

### 頻率分配
```javascript
// 低頻 (20-250 Hz): 大鼓、貝斯
s("bd").lpf(200).hpf(40)
note("c2").sound("sine").lpf(120)

// 中低頻 (250-500 Hz): 小鼓、吉他低音
s("sd").lpf(500).hpf(200)

// 中頻 (500-2000 Hz): 人聲、吉他、鋼琴
note("c4").sound("triangle").lpf(1500).hpf(300)

// 高頻 (2000-20000 Hz): Hi-Hat、Cymbal、氛圍
s("hh").hpf(3000)
```

### 立體聲空間
```javascript
// 中央: 大鼓、貝斯、主唱
s("bd").gain(0.9)  // 不加 pan，自動居中
note("c2").sound("sine").lpf(200)

// 左右: Hi-Hat、吉他、和聲
s("hh*8").pan(sine.slow(4).range(0.3, 0.7))
note("c4 e4 g4").sound("triangle").pan(0.3)
note("c4 e4 g4").sound("triangle").pan(0.7)

// 動態移動: 特效、氛圍
note("c5").sound("sine").pan(sine.slow(2).range(0, 1))
```

### 深度層次 (Reverb & Delay)
```javascript
// 前景 (少殘響): 鼓組、貝斯
s("bd").room(0.2)
note("c2").sound("sine").room(0.3)

// 中景 (中殘響): 吉他、鍵盤
note("c4").sound("triangle").room(0.6).delay(0.125)

// 背景 (多殘響): Pad、氛圍
note("c4").sound("sine").room(0.9).delay(0.5)
```

### 動態對比
```javascript
// 主歌 (較靜)
stack(
  s("bd ~ ~ ~ bd ~ ~ ~").gain(0.6),
  note("c4 e4 g4").sound("sine").gain(0.25)
)

// 副歌 (較響)
stack(
  s("bd*4").gain(0.9),
  note("[c3,c4,e4,g4]").sound("sawtooth").gain(0.45)
)

// 使用動態變化
.gain(sine.slow(32).range(0.4, 0.7))  // 呼吸感
```

### 音色分層
```javascript
// 厚實的合成器: 多層鋸齒波
stack(
  note("c4").sound("sawtooth").gain(0.2),
  note("c4").add(note("0.05")).sound("sawtooth").gain(0.2).pan(0.3),
  note("c4").add(note("-0.05")).sound("sawtooth").gain(0.2).pan(0.7),
  note("c5").sound("sine").gain(0.15)  // 高八度 sine 增加亮度
).lpf(1400)

// 豐富的鼓組: 分層打擊
stack(
  s("bd").gain(0.8).lpf(200),          // 低頻
  s("bd").gain(0.3).hpf(1000),         // 高頻 click
  s("bd").gain(0.2).room(0.7)          // 殘響層
)
```

---

## 實用技巧總結

### 1. 使用 LPF (Low Pass Filter) 創造溫暖感
```javascript
.lpf(1000)  // 溫暖、復古
.lpf(2000)  // 明亮、清晰
.lpf(500)   // 黑暗、厚重
```

### 2. 使用 HPF (High Pass Filter) 避免泥濘
```javascript
.hpf(80)    // 去除低頻雜音
.hpf(200)   // 貝斯以外的樂器
.hpf(3000)  // 只保留高頻 (Hi-Hat)
```

### 3. 使用 Distort 增加能量
```javascript
.distort(0.1)   // 微微飽和
.distort(0.3)   // 搖滾失真
.distort(0.5)   // 重度失真
```

### 4. 使用 degradeBy 創造人性化
```javascript
.degradeBy(0.1)   // 偶爾掉音符
.degradeBy(0.5)   // 一半機率
.degradeBy(0.9)   // 極稀疏
```

### 5. 使用 perlin/sine 創造連續變化
```javascript
.lpf(perlin.range(400, 1200))      // 緩慢隨機變化
.gain(sine.slow(8).range(0.3, 0.6)) // 規律呼吸
.pan(sine.slow(4).range(0, 1))      // 立體聲移動
```

---

## 風格速查表

| 風格 | 鼓組 | 貝斯 | 主音色 | 效果 |
|------|------|------|--------|------|
| **流行** | 四四拍、清晰 | Synth Bass | Square/Saw Lead | Reverb, Delay |
| **搖滾** | 強勁、密集 | Distorted | Distorted Guitar | Room, Distort |
| **龐克** | 極快、重擊 | Square Bass | Power Chords | 少效果、直接 |
| **電子** | Kick*4 | Sub/Wobble | Supersaw, FM | Heavy Effects |
| **民謠** | 簡單、稀疏 | Triangle Bass | Acoustic Guitar | Room, Natural |
| **抒情** | 柔和、呼吸 | Sine Bass | Piano/Pad | Heavy Reverb |
| **Techno** | 工業、機械 | Minimal Bass | Clicks, Noise | Delay, Filter |

---

記住：**好的音色 = 正確的波形 + 適當的濾波 + 巧妙的效果！**

實驗、聆聽、調整，找到屬於你的聲音！🎵
