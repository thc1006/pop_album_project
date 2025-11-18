# Project: Contemporary Pop Album (Taiwan Indie Style)

## Project Description

這是一個使用 Strudel live coding 語言的音樂專案，目標是打造一張充滿當代流行風格、融合「美秀集團」和「告五人」等台灣新興樂團精神的專輯。專案會包含十首歌曲，每一首都是用 Strudel pattern 語法寫成的程式碼檔案，可在瀏覽器中的 Strudel 編輯器播放。流行曲調結合搖滾、民謠、龐克、合成器流行、舞曲等多種元素；同時也有溫柔抒情的慢板，呈現台灣樂團的多元面貌。

### 創作靈感
- **美秀集團 (Amazing Show)** 的音樂以混合搖滾、龐克、民謠並搭配自製樂器的高能現場著稱【24083556543710†L118-L124】。我們會藉鑑這種「自製樂器 + 高能量」的元素，在某些歌曲中加入具有野性與科技感的節奏與合成器聲響。
- **告五人 (Accusefive)** 以獨立搖滾、民謠搖滾、流行搖滾、合成器流行、流行舞曲、謠曲、電子音樂等多元曲風著稱【784024295954952†L129-L137】。因此本專輯也會包含柔美的流行旋律、富感情的雙主唱對唱與多樣風格的曲調。

## Tech Stack

- **Strudel**（https://strudel.cc/）：TidalCycles 移植到 JavaScript 的瀏覽器 live coding 環境。
- 語法：使用 `setcpm()`, `stack()`, `note()`, `s()`, `scale()` 等關鍵函式編寫 pattern。
- 循環速度：本專輯的 BPM 範圍大多在 100–145 之間，對應流行音樂與舞曲的一般節奏；可依歌曲情緒調整。

## Project Structure

以下是專案的主要資料夾與檔案：

```
.
├── CLAUDE.md                  # 給 Claude 的開發指南
├── README.md                  # 人類閱讀用的專案介紹
├── ALBUM_CONCEPT.md           # 專輯概念與故事背景
├── DISCOGRAPHY.md             # 歌曲列表與基本資訊
├── LINER_NOTES.md             # 每首歌的創作心得與樂器說明
├── MANIFESTO.md               # 創作宣言與理念
├── ALBUM_ART.txt              # 簡易文字封面設計
├── src/
│   ├── 01_intro.js
│   ├── 02_city_pulse.js
│   ├── 03_retro_future.js
│   ├── 04_island_dreamers.js
│   ├── 05_midnight_lovers.js
│   ├── 06_starlit_overpass.js
│   ├── 07_homegrown_techno.js
│   ├── 08_sunset_boulevard.js
│   ├── 09_heartstrings.js
│   ├── 10_euphoria.js
│   └── motifs_library.js      # 共用 chord progression 與節奏模組
└── reference/
    ├── pop_chord_progressions.md     # 常見流行和弦進行範例
    └── instrumentation_guidelines.md # 模仿樂團風格的聲音設計建議
```

## Code Conventions

### 檔案命名
- 主作品檔以兩位數編號開頭，例如 `01_intro.js`、`02_city_pulse.js`。檔名應反映歌曲主題。
- 共用動機與和弦進行放在 `motifs_library.js`。

### Pattern 設計
- 每首歌建議拆成多個常數：`intro`, `verse`, `chorus`, `bridge` 等，最後用 `stack()` 組合。
- 使用 `setcpm()` 設定歌曲 tempo，例如 `setcpm(120/4)` 對應約 120 BPM。
- 節奏部分可利用 `s("bd sd hh")` 定義鼓組，旋律使用 `note()` 搭配 `scale("C:major")` 或 `scale("A:minor")` 等調性。
- 彈性變化透過 `.every()`、`.sometimes()`、`.degradeBy()` 等函式，例如 `every(8, x => x.slow(2))` 讓旋律在某段放慢。
- 使用 `perlin`, `sine` 等連續訊號函式做細微動態，例如 `lpf(perlin.range(400, 1200))` 或 `gain(sine.range(0.3,0.5))`。

### 音階與和弦
- 流行曲多使用大調 (major)、小調 (minor) 和自然 / 和聲小調，常見和弦進行如 I–V–vi–IV、vi–IV–I–V 等可參考 `reference/pop_chord_progressions.md`。
- 為呼應台灣樂團的多元性，可適度採用五聲音階或藍調音階作旋律點綴。

### 音色與效果
- **搖滾 / 龐克**：使用 `sound("sawtooth")` 或 `sound("square")` 產生厚實的吉他合成音；加入 `lpf(800)` 模擬破音；鼓點重擊、速度較快。
- **民謠 / 抒情**：使用 `sound("sine")` 或 `sound("triangle")` 搭配較低的 cutoff，並加 `room(0.7)` 產生柔和殘響。
- **合成器流行 / 舞曲**：使用 `sound("sawtooth")` 或 `sound("triangle")` 搭配 `lpf(sine.range(...))` 做 filter sweep；增加 `delay()`、`pan()` 增強立體感。
- **高能量**：可參考美秀集團的自製樂器精神，在 pattern 中加入 `rand` 或 `perlin` 生成的噪音調制。

### 工作流程
1. 以 `src/` 下的 JS 檔案開發歌曲，每首歌皆包含完整 pattern。
2. 在瀏覽器開啟 https://strudel.cc ，貼上某一檔案的內容，按 Ctrl+Enter 播放。
3. 調整 pattern 後保存至對應檔案，並在 `LINER_NOTES.md` 更新對應說明。
4. 若日後接入 Strudel MCP server，可用工具直接在 Claude Code 觸發播放、停寫 pattern。

## Inspirations & References
- 美秀集團於 2016 年起以混合搖滾、龐克和民謠的樂風著稱，並且使用自製樂器與華麗服裝營造高能量表演【24083556543710†L118-L124】。
- 告五人則集結了獨立搖滾、民謠搖滾、流行搖滾、合成器流行、流行舞曲、謠曲及電子音樂等多元元素【784024295954952†L129-L137】。

---
