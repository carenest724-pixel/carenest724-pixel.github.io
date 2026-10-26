# 照顧攏底家長照查詢站

網站網址：**https://carenest724-pixel.github.io/**

個管師皓皓 × 社工師小陳的長照查詢網站：長照政策、照顧技巧、補助申請三大專區，加上照顧技巧研究室、懶人包書架與長照額度速查。

## 在 GitHub 上直接改內容
1. 在這個頁面點 `data.js` → 右上角鉛筆圖示（Edit）。
2. 改完按綠色的 **Commit changes**。
3. 大約 1–2 分鐘後，網站會自動更新。

新增圖片或 PDF：進到 `assets/` 裡對應的資料夾，按 **Add file → Upload files** 上傳。

---

# 使用說明

更新日期：2026-10-26（新增照顧技巧研究室、YouTube 封面）

## 資料夾內容
- `index.html`：網站版面、樣式、程式（平常不用動）
- `data.js`：**全站內容資料，之後只改這個檔**（影片、懶人包、常見問題、額度表、社群連結）
- `assets/`：Logo、皓皓與小陳的去背照、懶人包 PDF 與封面縮圖、分享縮圖 og.jpg
- `assets/yt/`：從頻道抓下來的 YouTube 影片封面（檔名就是影片的 11 碼 youtubeId）

## 在自己電腦預覽
直接用瀏覽器開 `index.html` 就能看。自己架站版本會多兩個功能：影片可以在網站上直接播放、懶人包有「下載」鍵。

## 最常做的更新
1. **影片清單**：已依「照顧攏底家」頻道正式影片整理 57 支（2026-10-26），其中 3 支腳本已寫、還沒上架，標「即將上架」。新增影片時，把網址 `youtube.com/watch?v=` 後面那 11 碼填進 `youtubeId`。封面會先找 `assets/yt/<11碼>.webp`；找不到時，自架網站會自動改用 YouTube 縮圖，所以新影片不放封面檔也可以。影片可在網站上直接播放。
2. **精選與人氣**：`featured: true` 會變成該專區最上面的大卡；`popular: true` 會出現在「大家最常看」。
3. **新增懶人包**：PDF 放進 `assets/guides/`（建議 5MB 以下），在 `data.js` 的 `guides` 加一筆。
4. **社群連結與信箱**：YouTube、Facebook、Instagram、Threads、Podcast、LINE 社團、合作信箱都已填好，在 `data.js` 的 `meta`。
5. **皓皓貼圖**：`assets/stickers/` 裡 `hh-` 開頭是全身、`hhb-` 是半身。影片和情境卡用哪張，改 `data.js` 裡的 `sticker`（可用：ok、no、panic、think、point、cheer、please、shrug、wait、wow、smile）。
6. **嚴選照顧用品**：改 `data.js` 的 `shop`；商品圖放 `assets/shop/`（正方形最好看）。價格會變動，請定期對照商城。
7. **照顧技巧研究室**：改 `data.js` 的 `lab`。
   - `situations`：「長輩現在的狀況」按鈕（臥床、坐輪椅、有氣切管⋯）。
   - `skills`：技巧分類（抽痰護理、移位技巧、沐浴洗頭、導尿管照護、氣切管照護、吞嚥・餵食・更多）；`medical: true` 的分類會顯示粉紅色安全提醒（`warn`）。
   - `videos`：已經在上面 `videos` 裡的影片，填 `ref:"v24"` 這種編號就能沿用；研究室專用的系列影片（移位 EP.1–6、沐浴 EP.1–4）直接填 `title`、`youtubeId`。`for` 填適合哪些狀況、`fit` 是卡片上「適合：」那一行。
   - 「看完整照顧技巧播放清單」按鈕連到 `lab.playlist`。
8. **上架後**：「長照第4級額度」「有額度卻用不到」「居家傷口照護」這 3 支上架後，填上 `youtubeId`，並把 `status` 從 `"soon"` 改成 `"published"`。

## 上線
- 網站架在 GitHub Pages（這個 repo 的 main 分支），網址 https://carenest724-pixel.github.io/ 。
- `.nojekyll` 這個檔案不要刪：有些封面檔名是底線開頭，沒有它會讀不到。
- 換網址時，記得一起改 `data.js` 的 `meta.siteUrl`，和 `index.html` 裡 og:image、og:url 的完整網址。

## 上線前再確認
- 額度表（`quota`）請到衛福部長照專區 1966.gov.tw 逐項核對。
- 以下檔案名稱叫「懶人包」，內容其實是拍攝腳本，**沒有放上網站**：家庭照顧者津貼懶人包.pdf、長期照顧特別扣除額 260421 .pdf、住宿式服務機構使用者補助方案懶人包.pdf、敬老愛心卡.pdf、中低收入老人生活津貼懶人包.pdf。
- 小陳的去背照是從 YouTube 橫幅裁切去背的；有正式去背照時，換掉 `assets/xiaochen.webp` 即可。
