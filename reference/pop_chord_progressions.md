# 流行音樂和弦進行大全

這份文檔匯集了各種風格的流行音樂和弦進行，以及如何在 Strudel 中實現它們。

## 📚 目錄
1. [經典流行和弦](#經典流行和弦)
2. [日韓流行和弦](#日韓流行和弦)
3. [搖滾與龐克和弦](#搖滾與龐克和弦)
4. [爵士與藍調和弦](#爵士與藍調和弦)
5. [電子與舞曲和弦](#電子與舞曲和弦)
6. [民謠與抒情和弦](#民謠與抒情和弦)
7. [進階和弦技巧](#進階和弦技巧)

---

## 經典流行和弦

### I–V–vi–IV (最經典)
- **範例鍵**: C 大調: C–G–Am–F
- **特色**: 最常見的流行進行，明亮且帶有情感起伏
- **使用歌曲**: "Let It Be", "With Or Without You", "Someone Like You"
- **Strudel**: `note("0 4 5 3").scale("C:major")`
- **情緒**: 希望、溫暖、普遍共鳴

### vi–IV–I–V (抒情版)
- **範例鍵**: C 大調: Am–F–C–G
- **特色**: 以平行小調開場，感覺更柔和深情
- **使用歌曲**: "Don't Stop Believin'", "Poker Face"
- **Strudel**: `note("5 3 0 4").scale("C:major")`
- **情緒**: 憂鬱、思念、內省

### I–vi–IV–V (復古經典)
- **範例鍵**: C–Am–F–G
- **特色**: 50-60 年代經典老歌進行
- **使用歌曲**: "Stand By Me", "Every Breath You Take"
- **Strudel**: `note("0 5 3 4").scale("C:major")`
- **情緒**: 懷舊、浪漫、永恆

### I–IV–V (三和弦搖滾)
- **範例鍵**: C–F–G
- **特色**: 最基本的搖滾進行，簡單有力
- **使用歌曲**: "Wild Thing", "Louie Louie", "Twist and Shout"
- **Strudel**: `note("0 3 4").scale("C:major")`
- **情緒**: 原始、直接、能量

### I–V–ii–IV (藍調感)
- **範例鍵**: C–G–Dm–F
- **特色**: 加入 ii 級和弦增添藍調色彩
- **Strudel**: `note("0 4 1 3").scale("C:major")`
- **情緒**: 深沉、思慮、複雜

---

## 日韓流行和弦

### IV–V–iii–vi (日式抒情)
- **範例鍵**: F–G–Em–Am
- **特色**: J-Pop 常用，甜美且帶有憂鬱
- **Strudel**: `note("3 4 2 5").scale("C:major")`
- **情緒**: 甜美、傷感、動漫感

### vi–IV–V–I (K-Pop 經典)
- **範例鍵**: Am–F–G–C
- **特色**: K-Pop 超愛用，情感豐富
- **Strudel**: `note("5 3 4 0").scale("C:major")`
- **情緒**: 激昂、情感爆發

### I–V–vi–iii–IV–I–IV–V (複雜流行)
- **範例鍵**: C–G–Am–Em–F–C–F–G
- **特色**: 8 小節長進行，適合主歌副歌對比
- **Strudel**: `note("0 4 5 2 3 0 3 4").scale("C:major")`
- **情緒**: 層次豐富、史詩感

### bVII–IV–I (日式動漫)
- **範例鍵**: Bb–F–C (在 C 大調中)
- **特色**: 降七級和弦創造特殊色彩
- **Strudel**: `note("10 3 0").scale("C:major")`  // 需要手動調整
- **情緒**: 夢幻、非現實感

---

## 搖滾與龐克和弦

### i–VI–III–VII (小調搖滾)
- **範例鍵**: Am–F–C–G
- **特色**: 小調版本的經典搖滾進行
- **使用歌曲**: "Smells Like Teen Spirit", "Zombie"
- **Strudel**: `note("0 5 2 6").scale("A:minor")`
- **情緒**: 叛逆、憤怒、力量

### i–iv–v (龐克三和弦)
- **範例鍵**: Am–Dm–Em
- **特色**: 簡單有力的龐克進行
- **Strudel**: `note("0 3 4").scale("A:minor")`
- **情緒**: 直接、粗獷、純粹

### I–bVII–IV (力量和弦)
- **範例鍵**: C–Bb–F
- **特色**: 降七級和弦增添搖滾味
- **Strudel**: `note("0 -2 3").scale("C:major")` // 需調整
- **情緒**: 厚重、強勁

### I–III–IV–iv (同主音變化)
- **範例鍵**: C–E–F–Fm
- **特色**: 大小調交替創造張力
- **Strudel**: `note("0 2 3 3").scale("C:major")` 然後加入小調色彩
- **情緒**: 戲劇性、張力

---

## 爵士與藍調和弦

### ii–V–I (爵士經典)
- **範例鍵**: Dm7–G7–Cmaj7
- **特色**: 爵士最基本進行
- **Strudel**: `note("1 4 0").scale("C:major")` + 七和弦擴充
- **情緒**: 優雅、成熟、流暢

### I–vi–ii–V (Rhythm Changes)
- **範例鍵**: C–Am–Dm–G
- **特色**: 爵士標準曲進行
- **Strudel**: `note("0 5 1 4").scale("C:major")`
- **情緒**: 搖擺、即興、自由

### 12-Bar Blues (12 小節藍調)
- **範例鍵**: C7–C7–C7–C7–F7–F7–C7–C7–G7–F7–C7–G7
- **特色**: 藍調基礎結構
- **Strudel**: `note("0!4 3!2 0!2 4!1 3!1 0!1 4!1").scale("C:major")` + blues scale
- **情緒**: 憂鬱、靈魂、根源

### I–II7–ii–V (Backdoor Progression)
- **範例鍵**: C–D7–Dm–G
- **特色**: 爵士色彩豐富的進行
- **Strudel**: `note("0 1 1 4").scale("C:major")` + 七和弦
- **情緒**: 複雜、精緻

---

## 電子與舞曲和弦

### i–VII–VI–VII (Techno 循環)
- **範例鍵**: Am–G–F–G
- **特色**: 簡單重複，適合 Techno
- **Strudel**: `note("0 6 5 6").scale("A:minor")`
- **情緒**: 催眠、重複、機械

### I–V–vi–IV 變奏 (EDM)
- **範例鍵**: C–G–Am–F 但加入合成器音色
- **特色**: 經典進行 + 電子音色 = EDM
- **Strudel**: `note("0 4 5 3").scale("C:major").sound("sawtooth").lpf(sine.range(800,2400))`
- **情緒**: 能量、激昂、舞動

### i–bVII–bVI–V (Phrygian 色彩)
- **範例鍵**: Am–G–F–E
- **特色**: Phrygian 調式，黑暗電子音樂常用
- **Strudel**: `note("0 6 5 4").scale("A:phrygian")`
- **情緒**: 黑暗、神秘、異域

### I–I–I–I (Minimal Techno)
- **範例鍵**: C–C–C–C (同一和弦重複)
- **特色**: 極簡主義，透過音色變化創造興趣
- **Strudel**: `note("0!16").scale("C:major").lpf(perlin.range(400,2000))`
- **情緒**: 極簡、催眠、工業

---

## 民謠與抒情和弦

### I–V–vi–iii–IV–I–IV–V (Canon Progression)
- **範例鍵**: C–G–Am–Em–F–C–F–G
- **特色**: 卡農和弦，超級抒情
- **Strudel**: `note("0 4 5 2 3 0 3 4").scale("C:major")`
- **情緒**: 柔美、流暢、永恆

### vi–V–IV–iii (下行抒情)
- **範例鍵**: Am–G–F–Em
- **特色**: 下行和弦創造傷感
- **Strudel**: `note("5 4 3 2").scale("C:major")`
- **情緒**: 憂傷、下沈、失落

### I–iii–vi–IV (柔美進行)
- **範例鍵**: C–Em–Am–F
- **特色**: 加入 iii 級增添柔和色彩
- **Strudel**: `note("0 2 5 3").scale("C:major")`
- **情緒**: 溫柔、細膩、親密

### 五聲音階 (Pentatonic)
- **範例鍵**: C–D–E–G–A (C 五聲音階)
- **特色**: 東方/民謠色彩，台灣本土音樂常用
- **Strudel**: `note("0 1 2 4 5 4 2 1").scale("C:pentatonic")`
- **情緒**: 自然、樸實、本土

---

## 進階和弦技巧

### Modal Interchange (調式交換)
將大調和弦與同主音小調和弦混用：
```javascript
// C major 與 C minor 混用
note("<0 2 4 7> <0 3 5 7>")  // 大調 -> 小調
  .scale("C:major")
```

### Secondary Dominants (副屬和弦)
在目標和弦前加入其屬和弦：
```javascript
// 要到 ii (Dm)，前面加 A7 (V/ii)
note("4 1")  // A -> Dm (在 C major 中)
```

### Suspended Chords (掛留和弦)
創造懸浮感：
```javascript
note("[c4,f4,g4] [c4,e4,g4]")  // Csus4 -> C
```

### Chromatic Mediants (半音中音)
使用相距小三度的大調和弦：
```javascript
note("0 3").scale("C:major")  // C -> E (不在調內，創造驚喜)
```

### Pedal Point (持續音)
低音保持不變，上方和弦變化：
```javascript
stack(
  note("0!16").sound("sine").lpf(200),  // C 持續音
  note("0 3 4 5").scale("C:major")      // 和弦變化
)
```

---

## Strudel 實戰技巧

### 和弦發聲 (Voicing)
```javascript
// 密集和聲
note("[c4,e4,g4]")

// 開放和聲
note("[c3,e4,g4,c5]")

// 琶音
note("c4 e4 g4 c5")
```

### 節奏變化
```javascript
// 全音符
note("0!4")

// 切分
note("0 ~ 0 ~")

// 裝飾音
note("0 0.5 1 1.5")  // 半音裝飾
```

### 動態和弦
```javascript
// 隨機和弦選擇
note("<[c4,e4,g4] [c4,f4,a4] [c4,e4,g4,b4]>")

// 機率出現
note("[c4,e4,g4]").sometimes(x => x.add(note("7")))  // 50% 加七音
```

---

## 按風格選擇和弦

| 風格 | 推薦和弦進行 | 特色 |
|------|-------------|------|
| **告五人風格** | I–V–vi–IV, vi–IV–I–V | 流行易懂、情感豐富 |
| **美秀集團風格** | i–VI–III–VII, i–iv–v | 搖滾龐克、叛逆 |
| **Lo-Fi Hip-Hop** | ii–V–I, vi–IV–V–I | 爵士色彩、慵懶 |
| **EDM** | I–V–vi–IV 加合成器 | 能量、Drop |
| **民謠** | I–vi–IV–V, 五聲音階 | 樸實、本土 |
| **Techno** | i–VII–VI–VII | 重複、催眠 |

---

## 創作建議

1. **從經典開始**: I–V–vi–IV 永遠不會錯
2. **加入變化**: 用 sometimes(), every() 創造驚喜
3. **調式探索**: 嘗試不同的 scale (major, minor, dorian, phrygian, pentatonic)
4. **動態調制**: 用 perlin/sine 調制濾波器和音量
5. **不要過度複雜**: 簡單的和弦 + 好的音色設計 = 好聽的音樂

記住：**和弦進行只是骨架，音色設計和編曲才是靈魂！**
