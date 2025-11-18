# 🧪 EXPERIMENTS (實驗室)

這個目錄包含了五個前衛的音樂實驗，每一個都探索 Strudel 生成音樂的極限。

## 🎯 實驗目標

這些實驗作品不是為了商業發行，而是為了：
1. **技術探索** - 測試 Strudel 的極限能力
2. **美學實驗** - 挑戰傳統音樂形式
3. **概念驗證** - 展示生成音樂的哲學意義
4. **創意靈感** - 為正式作品提供創新方向

---

## 📂 實驗作品列表

### EXP01: Cellular Automata Rhythms (細胞自動機節奏)
**檔案**: `exp01_cellular_automata.js`
**概念**: 使用細胞自動機演算法生成演化的節奏模式
**BPM**: 128
**技術**:
- Euclidean rhythms 模擬細胞自動機規則
- Perlin noise 創造有機演化
- Random walk 生成不可預測旋律
- 系統性混沌產生複雜結構

**關鍵特色**:
```javascript
const ca_kick = s("bd(<5 7 9 11>,16)")  // Euclidean rhythm
const gen_bass = note(perlin.range(24, 36).segment(16))  // Random walk
```

**適合場景**: 生成音樂研究、裝置藝術、實驗電子音樂

---

### EXP02: Taiwan Garage (台灣車庫)
**檔案**: `exp02_taiwan_garage.js`
**概念**: 台灣五聲音階民謠 × UK Garage 的跨界融合
**BPM**: 130
**技術**:
- 五聲音階 (Pentatonic) 旋律
- UK Garage syncopated 節奏
- 二胡音色模擬
- Wobble bass + Future Bass 和聲

**關鍵特色**:
```javascript
const pentatonic_melody = note("g4 a4 c5 d5...").scale("G:pentatonic")
const garage_bass = note("g2!4 c3!4...").lpf(sine.fast(8).range(200, 1000))
```

**文化意義**: 尋找台灣音樂在全球電子音樂版圖中的位置

---

### EXP03: Markov Dreamscape (馬可夫夢境)
**檔案**: `exp03_markov_dreamscape.js`
**概念**: 使用 Markov chain 概念生成永不重複的夢幻音景
**BPM**: 72 (極慢)
**技術**:
- Perlin noise 模擬 Markov chain 狀態轉移
- 多層次 segment 創造不同時間尺度
- 機率性 degradeBy 確保每次不同
- 豐富殘響創造無限空間

**關鍵特色**:
```javascript
const markov_melody = note(perlin.range(60, 72).segment(16))
const prob_harmony = note("...").degradeBy(perlin.range(0.2, 0.5))
```

**哲學思考**: 決定論與隨機性的完美平衡

---

### EXP04: Granular Punk (顆粒龐克)
**檔案**: `exp04_granular_punk.js`
**概念**: Granular synthesis 遇見龐克搖滾的暴力美學
**BPM**: 165 (極快)
**技術**:
- 極短 decay (0.02-0.08) 創造顆粒感
- 高密度 segment (128-256) 模擬顆粒雲
- Degradation + randomness = 不可預測
- 多層 distortion 營造工業質感

**關鍵特色**:
```javascript
const granular_guitar = note(rand.range(36, 48).segment(128))
  .decay(0.05)  // 極短 decay = 顆粒感
  .degradeBy(0.3)
```

**美學宣言**: 破壞即創造，數位時代的龐克精神

---

### EXP05: Infinite Ambient (無限環境音樂)
**檔案**: `exp05_infinite_ambient.js`
**概念**: Brian Eno 式永不重複、永恆流動的聲音環境
**BPM**: 48 (極度緩慢)
**技術**:
- 質數循環 (5, 7, 11, 13, 17, 19...) 確保超長週期
- 最小公倍數極大，實際上永不重複
- 豐富殘響 (room 0.9-0.99) 創造無限空間
- 多層延遲 (0.5-5.0 秒) 增加深度

**關鍵特色**:
```javascript
const layer_1 = note("c4 e4 g4 a4 d4").slow(5)  // 5-note cycle
const layer_2 = note("...").slow(7)  // 7-note cycle
// 5 × 7 × 11 × 13 = 5005 cycles = 83.4 hours before repeat
```

**數學基礎**: 5 × 7 × 11 × 13 = 5005 個循環才重複 = 83.4 小時

---

## 🎨 藝術理念

### 生成音樂的哲學
> "作曲家不創造音樂，而是創造生成音樂的系統。音樂在時間中展開，永不固定。每次聆聽都是獨一無二的體驗。" — Brian Eno

這五個實驗完美體現了這個理念：
- **EXP01**: 系統演化 (Evolution)
- **EXP02**: 文化融合 (Fusion)
- **EXP03**: 機率生成 (Probability)
- **EXP04**: 破壞重組 (Destruction)
- **EXP05**: 永恆流動 (Infinity)

### 與主專輯的關係
主專輯 (01-10 tracks) 是精心編排的流行作品，而實驗室是完全自由的創作空間：

| 主專輯 | 實驗室 |
|--------|--------|
| 結構化 | 生成式 |
| 可預測 | 不可預測 |
| 商業導向 | 藝術導向 |
| 固定形式 | 流動形式 |
| 人類聆聽 | 系統聆聽 |

但兩者相互滋養：
- 實驗室的技術會反哺主專輯
- 主專輯的限制會激發實驗室的創新

---

## 🚀 使用方法

### 在 Strudel 中播放
1. 前往 https://strudel.cc
2. 複製任一實驗檔案的內容
3. 貼上編輯器
4. 按 `Ctrl+Enter` 播放

### 實驗建議
這些作品不是「一聽即懂」的，建議：
- **EXP01**: 循環播放觀察模式演化
- **EXP02**: 注意東西方元素的融合點
- **EXP03**: 閉眼聆聽，進入夢境狀態
- **EXP04**: 接受不適感，這就是龐克
- **EXP05**: 24 小時低音量循環，成為空間的一部分

### 修改與再創作
所有實驗都鼓勵修改：
- 調整 BPM (setcpm 值)
- 改變音階 (scale 參數)
- 修改機率值 (degradeBy, sometimes)
- 實驗不同 waveform (sine, triangle, sawtooth, square)
- 調整時間尺度 (slow, fast 參數)

---

## 🎓 學習價值

### 技術學習
這些實驗展示了 Strudel 的進階技巧：
1. **Euclidean rhythms** - EXP01
2. **Genre fusion** - EXP02
3. **Probabilistic generation** - EXP03
4. **Granular synthesis simulation** - EXP04
5. **Prime number cycles** - EXP05

### 概念學習
同時也是生成音樂的重要概念：
1. **Cellular automata** - 自組織系統
2. **Cultural mashup** - 跨文化創新
3. **Markov chains** - 狀態機音樂
4. **Glitch aesthetics** - 錯誤美學
5. **Infinite music** - 永恆音樂

---

## 🔬 未來實驗方向

這只是開始，未來可以探索：
- **EXP06**: L-System 生成旋律 (植物生長演算法)
- **EXP07**: Chaos theory 混沌節奏
- **EXP08**: Spectral synthesis 頻譜合成
- **EXP09**: Polyrhythmic structures 複合節奏
- **EXP10**: Neural network-inspired patterns 神經網路音樂

---

## 📊 技術對照表

| 實驗 | 核心技術 | 難度 | 風格 |
|------|----------|------|------|
| EXP01 | Euclidean + Perlin | ⭐⭐⭐ | Techno |
| EXP02 | Scale mixing + Wobble bass | ⭐⭐⭐⭐ | Garage |
| EXP03 | Probabilistic + Slow BPM | ⭐⭐⭐ | Ambient |
| EXP04 | Granular + Distortion | ⭐⭐⭐⭐⭐ | Noise |
| EXP05 | Prime cycles + Infinite loops | ⭐⭐⭐⭐⭐ | Generative |

---

## 💡 創作啟示

這些實驗證明了：
1. **限制激發創造力** - Strudel 的限制反而帶來創新
2. **系統比內容重要** - 好的生成系統 > 預設的音符
3. **錯誤即美學** - degradeBy, rand 創造意外之美
4. **數學即音樂** - 質數、機率、演算法都是音樂
5. **永恆即當下** - 無限音樂的每一刻都是獨特的

---

## 🎵 致謝與影響

這些實驗受到以下先驅的啟發：
- **Brian Eno** - Generative music, Music for Airports
- **Autechre** - Algorithmic complexity
- **Aphex Twin** - Experimental electronics
- **Ryoji Ikeda** - Mathematical precision
- **Alva Noto** - Granular aesthetics
- **TidalCycles community** - Live coding culture

---

**記住：實驗的目的不是成功，而是探索。失敗的實驗往往比成功的更有價值。**

*Happy experimenting! 🧪🎶*
