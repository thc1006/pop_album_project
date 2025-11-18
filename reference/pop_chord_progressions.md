# 流行情歌常見和弦進行

以下列出幾個常見的流行音樂和弦進行，以及如何用 Strudel 表達。

| 和弦進行 | 範例鍵 | 特色 | Strudel 範例 |
| --- | --- | --- | --- |
| I–V–vi–IV | C 大調: C–G–Am–F | 最常見的流行進行，明亮且帶有情感起伏。 | `note("0 4 5 3").scale("C:major")` |
| vi–IV–I–V | A 小調: Am–F–C–G | 以平行小調開場，感覺更柔和。 | `note("5 3 0 4").scale("C:major")` |
| I–vi–IV–V | C–Am–F–G | 經典老歌進行，適合抒情與復古感。 | `note("0 5 3 4").scale("C:major")` |
| I–V–ii–IV | C–G–Dm–F | 具有藍調感。 | `note("0 4 1 3").scale("C:major")` |
| 五聲音階節奏型 | C 五聲音階 | 適合具有東方或民謠色彩的旋律。 | `note("0 1 2 4 5 4 2 1").scale("C:major:pentatonic")` |

若要在其他調使用，只需修改 `scale()` 中的根音與調性。
