/* ============================================================
   照顧攏底家｜長照查詢網站　內容資料區（之後只改這裡）
   ------------------------------------------------------------
   ・新增影片：在 videos 加一筆；youtubeId 填網址 watch?v= 後面那 11 碼
   ・新增懶人包：PDF 放進 assets/guides/，在 guides 加一筆
   ・空字串 "" ＝待填；網站會自動顯示「待補」或改用替代按鈕
   ・status："published" 已上架／"soon" 即將上架、製作中
   ・quota 額度表：上線前請到衛福部長照專區 1966.gov.tw 逐項核對
   ============================================================ */
const SITE_DATA = {
  meta: {
    updated: "2026-10-26",
    youtube: "https://www.youtube.com/@carenest724",
    line: "https://line.me/ti/g2/N8jr_py19IJugwF2OqFxw9G7WYFPoq1x1_2fPg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    facebook: "https://www.facebook.com/carenest724",
    instagram: "https://www.instagram.com/carenest724/",
    threads: "https://www.threads.com/@carenest724",
    podcast: "https://open.spotify.com/show/4JM1Silqyl2vLaCRgG0RUj",
    shop: "https://www.carenest724.com/",
    email: "carenest724@gmail.com",
    siteUrl: "https://carenest724-pixel.github.io/"      // 【網站正式網址】（LINE 分享時附上）
  },

  hosts: [
    { name: "皓皓", role: "長照個管師", tag: "個管師｜服務超過一萬家庭", photo: "assets/host-haohao.webp",
      bio: "長照實務 16 年，服務超過一萬個家庭。中華仁仁關懷協會理事長、台中市長照 A 個管講師。" },
    { name: "小陳", role: "社工師", tag: "社工師｜臺大健管所", photo: "assets/host-xiaochen.webp",
      bio: "高考社會工作師、照顧服務員單一級技術士，就讀臺大健康政策與管理研究所。專欄「社工師小陳的長照筆記」作者。" }
  ],

  zones: [
    { id: "policy",  name: "長照政策", color: "#1E6FD9", icon: "landmark",
      desc: "新制度、新規定，白話講給你聽",
      topics: ["長照3.0重點","怎麼申請長照","長照等級與額度","外籍看護家庭","出院銜接長照","健康幣"] },
    { id: "skills",  name: "照顧技巧", color: "#1F9D6B", icon: "hand-heart",
      desc: "在家照顧的實用方法，一步一步做",
      topics: ["移位與防跌","日常照顧","皮膚與傷口照護","管路照護","失智照顧","中風照顧","照顧者自我照顧"] },
    { id: "subsidy", name: "補助申請", color: "#FF7F00", icon: "wallet",
      desc: "誰能申請、能拿多少、去哪裡辦",
      topics: ["長照四包錢","輔具與居家無障礙","喘息服務","住宿機構","經濟補助與津貼","身心障礙福利","稅務","敬老愛心卡"] }
  ],

  scenarios: [
    { title: "第一次申請長照，從哪裡開始？", desc: "電話打給誰、評估怎麼準備", query: "申請長照", icon: "phone-call", sticker: "point" },
    { title: "評估結果出來了，額度怎麼用？", desc: "長照等級、四包錢一次看懂", query: "額度", icon: "calculator", sticker: "think" },
    { title: "家裡有外籍看護，還能用長照嗎？", desc: "能用哪些、看護休假怎麼辦", query: "外籍看護", icon: "users", sticker: "please" },
    { title: "長輩走路不穩，想申請輔具", desc: "先評估再買，補助才拿得到", query: "輔具", icon: "accessibility", sticker: "no", say: "先評估！" },
    { title: "想找住宿機構，費用有補助嗎？", desc: "怎麼選、每月最高補多少", query: "住宿機構", icon: "building-2", sticker: "ok" },
    { title: "照顧到快撐不住了", desc: "喘息服務與照顧者支持", query: "喘息", icon: "heart-pulse", sticker: "panic" }
  ],

  hotKeywords: ["長照3.0","怎麼申請長照","長照額度","喘息服務","輔具補助","外籍看護","住宿機構補助","長照扣除額","健康幣"],

  synonyms: {
    "外籍看護": ["外看","移工","看護工","家庭看護","外籍家庭看護工"],
    "喘息": ["喘息服務","臨托","短照","照顧者休息"],
    "壓傷": ["褥瘡","壓瘡","傷口"],
    "輔具": ["輪椅","氣墊床","助行器","扶手","電動床","無障礙"],
    "住宿機構": ["機構","養護中心","安養","護理之家","長照機構","養生村"],
    "申請長照": ["長照申請","1966","照管中心","長照評估","長照3.0","長照2.0"],
    "額度": ["四包錢","給付","補助","長照等級","CMS"],
    "失智": ["失智症","認知","健忘"],
    "個管": ["個案管理","A個管","照專","照管專員"],
    "扣除額": ["報稅","所得稅","長照扣除額","特別扣除額"],
    "照顧者": ["家屬","家庭照顧者","照顧者倦怠"],
    "居家服務": ["居服","居服員","到府"],
    "日照": ["日照中心","日間照顧"],
    "交通接送": ["交通車","接送","復康巴士"],
    "管路照護": ["鼻胃管","尿管","導尿管","氣切","抽痰"],
    "中風": ["腦中風","中風復健"],
    "移位": ["移位技巧","轉位","上下車","下床","輪椅移位","地面移位"],
    "沐浴": ["洗澡","洗頭","擦澡","洗澡椅","沐浴洗頭"],
    "抽痰": ["抽痰護理","化痰","排痰","拍背","痰"],
    "吞嚥": ["嗆咳","嗆到","餵食","吞嚥困難"]
  },

  // 影片：依「照顧攏底家」YouTube 頻道正式上架影片整理（2026-10-26）。status "soon"＝腳本已寫、尚未上架
  // youtubeId：網址 watch?v= 後面那 11 碼；featured＝專區精選大卡；popular＝「大家最常看」
  // 封面：自動使用 assets/yt/<youtubeId>.webp（從頻道抓下來的 YouTube 封面）；新影片沒有這張圖時，自架網站會改抓 YouTube 縮圖
  videos: [
    { id:"v01", zone:"policy", topic:"怎麼申請長照", title:"【長照3.0】破解長照3大迷思，有外籍看護也能申請？申請資格、補助費用、1966申請流程一次看！", host:"", guest:"", tags:["申請長照", "外籍看護", "1966"], youtubeId:"GgZLgyC2cZw", duration:"18:02", views:"14萬", featured:true, status:"published", sticker:"point" },
    { id:"v02", zone:"policy", topic:"怎麼申請長照", title:"【長照A個管】第一次申請1966必看！家訪時這幾句話最重要", host:"皓皓", guest:"", tags:["申請長照", "長照評估", "個管"], youtubeId:"zbXTl6RS-To", duration:"13:37", views:"6,562", status:"published", sticker:"smile" },
    { id:"v03", zone:"policy", topic:"長照等級與額度", title:"【長照3.0】網友十大常見問題一次解答！申請資格、失能等級、四大補助全攻略", host:"", guest:"", tags:["長照等級", "四包錢", "額度"], youtubeId:"tbADYUs3Gug", duration:"10:43", views:"4,427", status:"published", sticker:"think" },
    { id:"v04", zone:"policy", topic:"長照3.0重點", title:"【長照3.0】五大重點一次看｜醫照整合、租賃智慧輔具、PAC適用對象、預立醫療照護諮商、擴大夜間喘息及失智照顧", host:"", guest:"", tags:["長照3.0", "智慧輔具", "喘息"], youtubeId:"2UHEnYb52Sw", duration:"8:29", views:"1.6萬", status:"published", sticker:"point" },
    { id:"v05", zone:"policy", topic:"長照3.0重點", title:"【長照3.0】政策重點！誰能受惠？三大政策一次搞懂", host:"", guest:"", tags:["長照3.0", "政策"], youtubeId:"28Cm1gCAlmM", duration:"7:57", views:"2.5萬", status:"published", sticker:"wow" },
    { id:"v06", zone:"policy", topic:"長照3.0重點", title:"【在宅急症照護】在家住院可行嗎？認識長照3.0新政策", host:"", guest:"王用亨醫師", tags:["在宅急症照護", "長照3.0"], youtubeId:"ZkWSmf--Eps", duration:"4:59", views:"4,070", status:"published", sticker:"think" },
    { id:"v07", zone:"policy", topic:"出院銜接長照", title:"【住宿機構】醫院說下週出院怎麼辦？住宿機構怎麼找、一個月多少錢、補助18萬全攻略", host:"", guest:"", tags:["出院", "住宿機構", "補助"], youtubeId:"VEcdWIYyT1A", duration:"28:20", views:"2.6萬", status:"published", sticker:"panic" },
    { id:"v08", zone:"policy", topic:"外籍看護家庭", title:"【長照補助】9/1起聘有外看也能使用日照！長照3.0新制上路，補助再升級！", host:"", guest:"", tags:["外籍看護", "日照"], youtubeId:"dJvIQYbfc9s", duration:"16:20", views:"4萬", status:"published", sticker:"ok" },
    { id:"v09", zone:"policy", topic:"外籍看護家庭", title:"【外看申請】懶人包！申請流程、外看費用、步驟流程", host:"", guest:"外看仲介專家", tags:["外籍看護", "申請"], youtubeId:"6fAmdBZGuU8", duration:"19:35", views:"1萬", status:"published", sticker:"please" },
    { id:"v10", zone:"policy", topic:"外籍看護家庭", title:"【長照3.0】好怕外看請假？申請外看也能去日照中心！", host:"", guest:"", tags:["外籍看護", "日照", "喘息"], youtubeId:"FbXV1pVNCEQ", duration:"11:39", views:"1,194", status:"published", sticker:"wow" },
    { id:"v11", zone:"policy", topic:"健康幣", title:"【健康幣】最高1.3萬幣！打疫苗、做健檢就能賺｜12/1開放兌換前必做3步驟", host:"", guest:"", tags:["健康幣", "健保快易通", "健康夠 Health GO"], youtubeId:"vf934CsITUQ", duration:"13:05", views:"3,226", status:"published", sticker:"cheer" },
    { id:"v12", zone:"policy", topic:"長照等級與額度", title:"【長照3.0】評到長照第4級，這些額度怎麼安排？", host:"皓皓", guest:"", tags:["長照等級", "額度", "四包錢"], youtubeId:"", duration:"", views:"", status:"soon", sticker:"think" },
    { id:"v13", zone:"policy", topic:"怎麼申請長照", title:"【長照3.0】有額度，卻用不到？家屬最常卡住的3關", host:"皓皓", guest:"", tags:["申請長照", "個管", "排不到人"], youtubeId:"", duration:"", views:"", status:"soon", sticker:"shrug" },
    { id:"v14", zone:"skills", topic:"失智照顧", title:"【失智症】家人有這五種情況要小心！認識失智症與精神行為症狀BPSD，失智症長輩該如何照顧？", host:"", guest:"王用亨醫師", tags:["失智", "BPSD"], youtubeId:"8HX60LLkHS8", duration:"17:18", views:"32萬", featured:true, status:"published", sticker:"think" },
    { id:"v15", zone:"skills", topic:"失智照顧", title:"【失智症】不會照顧？老師教你生活復能訓練！職能治療延緩失智症", host:"", guest:"楊宗達治療師", tags:["失智", "復能"], youtubeId:"06x1n9jXmis", duration:"10:33", views:"926", status:"published", sticker:"point" },
    { id:"v16", zone:"skills", topic:"移位與防跌", title:"【20分鐘居家運動】預防肌少症、增肌減脂、降三高！簡單又有效", host:"", guest:"徐棟英教官", tags:["防跌", "肌少症", "運動"], youtubeId:"sdUyBT_2VyY", duration:"23:01", views:"47萬", popular:true, status:"published", sticker:"cheer" },
    { id:"v17", zone:"skills", topic:"移位與防跌", title:"【移位技巧】省力不受傷！護腰秘訣大公開", host:"", guest:"", tags:["移位", "護腰"], youtubeId:"WPp9EPYu56c", duration:"13:28", views:"2.2萬", status:"published", sticker:"ok" },
    { id:"v18", zone:"skills", topic:"移位與防跌", title:"【輔具怎麼選】長輩常跌倒，可能是拐杖選錯！單拐、四腳拐、助行器一次搞懂", host:"", guest:"職能治療師陳仁彰", tags:["輔具", "拐杖", "助行器", "防跌"], youtubeId:"iUHvKaM4jLw", duration:"10:33", views:"1.5萬", status:"published", sticker:"no" },
    { id:"v19", zone:"skills", topic:"移位與防跌", title:"【物理治療】照顧到腰痠背痛？物理治療師教你安全移位、疼痛改善與中風復健", host:"", guest:"", tags:["移位", "物理治療"], youtubeId:"dwWXuSjuDjs", duration:"16:44", views:"1,101", status:"published", sticker:"smile" },
    { id:"v20", zone:"skills", topic:"皮膚與傷口照護", title:"【傷口照護】褥瘡、燙傷、割傷、撞傷｜傷口正確處理與照顧方式", host:"", guest:"黃煌洲醫師", tags:["壓傷", "褥瘡", "傷口"], youtubeId:"ca7taNZ5LU4", duration:"17:02", views:"3,753", status:"published", sticker:"wow", medicalNote:true },
    { id:"v21", zone:"skills", topic:"皮膚與傷口照護", title:"【翻身拍背全攻略】褥瘡、痰咳不出？都是因為沒做這件事！", host:"", guest:"", tags:["翻身", "拍背", "褥瘡"], youtubeId:"CuIZXDnPB-U", duration:"11:42", views:"2.2萬", status:"published", sticker:"point" },
    { id:"v22", zone:"skills", topic:"皮膚與傷口照護", title:"居家傷口照護", host:"", guest:"杜宥瑄護理師", tags:["傷口", "換藥"], youtubeId:"", duration:"", views:"", status:"soon", sticker:"smile", medicalNote:true },
    { id:"v23", zone:"skills", topic:"管路照護", title:"【導尿管照護】導尿管護理怎麼做？護理師手把手教學", host:"", guest:"", tags:["尿管", "管路照護"], youtubeId:"9z5SwmI9-0I", duration:"9:47", views:"1.2萬", status:"published", sticker:"point", medicalNote:true },
    { id:"v24", zone:"skills", topic:"管路照護", title:"【抽痰護理】氣切造口如何抽痰？護理師教你居家化痰與抽痰技巧！", host:"", guest:"", tags:["抽痰", "氣切", "管路照護"], youtubeId:"zvs5QbBiZzk", duration:"11:14", views:"4,100", status:"published", sticker:"think", medicalNote:true },
    { id:"v25", zone:"skills", topic:"管路照護", title:"【氣切照護】氣切護理怎麼做？護理師手把手教學", host:"", guest:"", tags:["氣切", "管路照護"], youtubeId:"wqipL9yuFOw", duration:"5:19", views:"2,386", status:"published", sticker:"ok", medicalNote:true },
    { id:"v26", zone:"skills", topic:"管路照護", title:"【鼻胃管灌食】管灌營養品怎麼選？管灌技巧、反抽檢查、腹瀉原因一次看懂", host:"", guest:"", tags:["鼻胃管", "灌食", "管路照護"], youtubeId:"DEwhCSnoUQM", duration:"11:42", views:"1,142", status:"published", sticker:"please", medicalNote:true },
    { id:"v27", zone:"skills", topic:"中風照顧", title:"【中風復健】家人中風後怎麼辦？把握復健黃金期", host:"", guest:"", tags:["中風", "復健"], youtubeId:"e_OMefN0suU", duration:"11:36", views:"1,699", status:"published", sticker:"cheer" },
    { id:"v28", zone:"skills", topic:"中風照顧", title:"【腦中風】復健全記錄，從病倒到康復。", host:"", guest:"", tags:["中風", "復健"], youtubeId:"7mZAZdTocsg", duration:"17:54", views:"3,261", status:"published", sticker:"wow" },
    { id:"v29", zone:"skills", topic:"日常照顧", title:"【老人洗澡全攻略】床上擦澡、床上洗頭、洗澡椅教學", host:"", guest:"", tags:["洗澡", "居家服務"], youtubeId:"NeIXoZI2rsU", duration:"19:34", views:"2.4萬", status:"published", sticker:"smile" },
    { id:"v30", zone:"skills", topic:"日常照顧", title:"【吞嚥困難】語言治療師教你鍛鍊口腔肌肉，遠離嗆咳與肺炎", host:"", guest:"", tags:["吞嚥", "嗆咳"], youtubeId:"E0xBTAZwkXs", duration:"14:32", views:"1.5萬", status:"published", sticker:"wait" },
    { id:"v31", zone:"skills", topic:"日常照顧", title:"家人吃飯常嗆到、拿不穩？輔助餐具挑選＋正確餵食技巧一次學", host:"", guest:"職能治療師陳仁彰", tags:["餵食", "輔助餐具", "吞嚥"], youtubeId:"jzUDhzAPX5k", duration:"13:49", views:"2,753", status:"published", sticker:"please" },
    { id:"v32", zone:"skills", topic:"日常照顧", title:"【成人紙尿褲】怎麼穿？怎麼選？1分鐘教你正確包法！", host:"", guest:"", tags:["紙尿褲"], youtubeId:"mY2-h1GMW3k", duration:"9:34", views:"1.9萬", status:"published", sticker:"ok" },
    { id:"v33", zone:"skills", topic:"照顧者自我照顧", title:"【長期照顧】照顧者的5個倦怠訊號，快速自我壓力檢測，你過勞了嗎？", host:"", guest:"", tags:["照顧者", "照顧者倦怠", "喘息"], youtubeId:"iHCLAkwUT80", duration:"8:37", views:"1,786", status:"published", sticker:"panic" },
    { id:"v34", zone:"subsidy", topic:"長照四包錢", title:"【居家服務】長輩洗澡不用家屬硬撐！居服員到府一次只要52元？長照3.0申請、補助一次看", host:"", guest:"", tags:["居家服務", "居服", "四包錢"], youtubeId:"j4n462HEfyE", duration:"19:48", views:"28萬", featured:true, status:"published", sticker:"ok" },
    { id:"v35", zone:"subsidy", topic:"長照四包錢", title:"【長照四包錢】到底是什麼？費用教你算！一次搞懂補助、服務與申請流程", host:"", guest:"麥格講堂 香香會計師", tags:["四包錢", "額度", "部分負擔"], youtubeId:"1w_kSy0vRBw", duration:"32:44", views:"5.3萬", status:"published", sticker:"point" },
    { id:"v36", zone:"subsidy", topic:"長照四包錢", title:"【日照中心】失智家人待在家退化更快！補助後每月不到3,000元？申請方式＋參觀4大重點一次看", host:"", guest:"", tags:["日照", "失智"], youtubeId:"13APCYnrYV4", duration:"24:09", views:"3.5萬", status:"published", sticker:"think" },
    { id:"v37", zone:"subsidy", topic:"長照四包錢", title:"【長照交通車】怎麼申請？費用補助一次看懂！照顧者必看接送攻略", host:"", guest:"", tags:["交通接送", "四包錢"], youtubeId:"jvq-m1mIpWw", duration:"4:24", views:"5,604", status:"published", sticker:"cheer" },
    { id:"v38", zone:"subsidy", topic:"喘息服務", title:"【短照喘息】外看返鄉？臨時出差？「短期照顧、喘息服務」幫你補上照顧空窗期", host:"", guest:"衛生局照管專員 Alisa", tags:["喘息", "短照", "外籍看護"], youtubeId:"fYsrTp04Hg0", duration:"6:45", views:"2,566", status:"published", sticker:"panic" },
    { id:"v39", zone:"subsidy", topic:"輔具與居家無障礙", title:"【輔具補助】長照 vs 身障差在哪？長照3.0輔具租賃「3年6萬」一次搞懂！", host:"", guest:"", tags:["輔具", "補助", "智慧輔具"], youtubeId:"n-O-vfxzsHs", duration:"16:51", views:"1.7萬", status:"published", sticker:"wait" },
    { id:"v40", zone:"subsidy", topic:"輔具與居家無障礙", title:"【居家無障礙改善】廠商挑選、報價陷阱、長照3.0智慧輔具全解析", host:"", guest:"若晨室內裝修", tags:["居家無障礙", "扶手"], youtubeId:"rOLzIr8WEIg", duration:"18:25", views:"3,181", status:"published", sticker:"no" },
    { id:"v41", zone:"subsidy", topic:"輔具與居家無障礙", title:"【樓梯升降椅】家裡不能裝電梯？政府補助最高8萬！窄樓梯、轉角多、結構會受影響嗎？", host:"", guest:"羅布森 汪世旭", tags:["輔具", "樓梯升降椅"], youtubeId:"YEZLKrSp-f8", duration:"13:54", views:"1萬", status:"published", sticker:"wow" },
    { id:"v42", zone:"subsidy", topic:"住宿機構", title:"【長庚養生村開箱】月租不到4萬？現在入住還要等1年半？80億打造的退休生活，房型、費用、入住條件全公開", host:"", guest:"", tags:["養生村", "住宿機構", "開箱"], youtubeId:"ah95v9k0Xew", duration:"41:31", views:"81萬", popular:true, status:"published", sticker:"wow" },
    { id:"v43", zone:"subsidy", topic:"住宿機構", title:"【住宿式機構補助】一年最高18萬！誰能領？怎麼申請？一次看懂", host:"", guest:"", tags:["住宿機構", "補助"], youtubeId:"_LSPFA8CHtw", duration:"12:33", views:"1.2萬", status:"published", sticker:"ok" },
    { id:"v44", zone:"subsidy", topic:"住宿機構", title:"【好好園館開箱】高齡宅佔地3600坪只住67戶？退休教授打造的理想老後生活，房型、生活、費用全公開", host:"", guest:"", tags:["住宿機構", "高齡宅", "開箱"], youtubeId:"UkBihtDepiU", duration:"56:12", views:"11萬", status:"published", sticker:"think" },
    { id:"v45", zone:"subsidy", topic:"住宿機構", title:"【失智症照顧】最適合失智症家人的長照機構｜資格、費用、補助大公開！", host:"", guest:"樹仔腳團體家屋社工 雅惠", tags:["團體家屋", "失智", "住宿機構"], youtubeId:"rePYllMZjmo", duration:"18:39", views:"5,292", status:"published", sticker:"please" },
    { id:"v46", zone:"subsidy", topic:"經濟補助與津貼", title:"【中低收入老人生活津貼】懶人包｜資格、流程、金額一次看懂！", host:"", guest:"", tags:["中低收入", "生活津貼"], youtubeId:"6jjmSz3ISek", duration:"12:54", views:"25萬", status:"published", sticker:"point" },
    { id:"v47", zone:"subsidy", topic:"經濟補助與津貼", title:"【照顧津貼】每月最高5000元！中低收老人+身心障礙補助怎麼領？金額、資格、流程一次看", host:"", guest:"", tags:["照顧者", "津貼", "中低收入"], youtubeId:"Vcn4z9BJTsc", duration:"10:07", views:"1.3萬", status:"published", sticker:"please" },
    { id:"v48", zone:"subsidy", topic:"經濟補助與津貼", title:"【六大社福津貼】2026最新！調升項目、金額、受惠對象一次看！", host:"", guest:"", tags:["津貼", "社福"], youtubeId:"rWflVWb5tDQ", duration:"10:21", views:"4.5萬", status:"published", sticker:"cheer" },
    { id:"v49", zone:"subsidy", topic:"經濟補助與津貼", title:"【低收入戶證明】懶人包！申請資格、流程、津貼一次看懂！", host:"", guest:"", tags:["低收入", "津貼"], youtubeId:"1N_TrV82-PY", duration:"12:02", views:"25萬", status:"published", sticker:"smile" },
    { id:"v50", zone:"subsidy", topic:"經濟補助與津貼", title:"【中低收失能老人安置補助】懶人包｜資格、流程、金額一次看懂！", host:"", guest:"", tags:["中低收入", "安置補助", "住宿機構"], youtubeId:"0o8iK6IojBo", duration:"8:23", views:"4,258", status:"published", sticker:"ok" },
    { id:"v51", zone:"subsidy", topic:"身心障礙福利", title:"【身心障礙證明】懶人包！申請資格、鑑定流程、補助與福利一次看懂！", host:"", guest:"", tags:["身心障礙", "身障證明"], youtubeId:"agEyatbQT8s", duration:"12:10", views:"40萬", status:"published", sticker:"point" },
    { id:"v52", zone:"subsidy", topic:"身心障礙福利", title:"【身心障礙證明2】補助篇！生活補助、福利、減免金額一次看懂！", host:"", guest:"", tags:["身心障礙", "補助"], youtubeId:"mxBBmdVdgNI", duration:"21:15", views:"31萬", status:"published", sticker:"ok" },
    { id:"v53", zone:"subsidy", topic:"身心障礙福利", title:"【國民年金】身心障礙年金給付差很多？能不能和身障補助一起領，一次搞懂！", host:"", guest:"", tags:["身心障礙", "國民年金"], youtubeId:"2m8TIX0Y0JM", duration:"12:10", views:"2.3萬", status:"published", sticker:"think" },
    { id:"v54", zone:"subsidy", topic:"身心障礙福利", title:"【日間照顧及住宿式機構補助】懶人包｜申請資格、流程、補助額度一次看懂！（原身障托育補助）", host:"", guest:"", tags:["身心障礙", "日照", "住宿機構"], youtubeId:"SbpuHtEykQs", duration:"13:16", views:"9,624", status:"published", sticker:"please" },
    { id:"v55", zone:"subsidy", topic:"稅務", title:"【長照扣除額】照顧家人竟能省稅18萬？長照扣除額申報條件與常見錯誤一次看", host:"", guest:"麥格講堂 香香會計師", tags:["扣除額", "報稅"], youtubeId:"LKLiNcDW5ZA", duration:"18:32", views:"2.7萬", status:"published", sticker:"wow" },
    { id:"v56", zone:"subsidy", topic:"稅務", title:"【遺產稅】懶人包！申報教學、免稅額、扣除額怎麼算？", host:"", guest:"麥格講堂 香香會計師", tags:["遺產稅", "報稅"], youtubeId:"KnN8x49LOYg", duration:"21:03", views:"1.1萬", status:"published", sticker:"think" },
    { id:"v57", zone:"subsidy", topic:"敬老愛心卡", title:"【敬老愛心卡】隱藏用法你知道嗎？申請資格、點數、使用範圍一次看懂！", host:"", guest:"", tags:["敬老愛心卡", "交通優惠"], youtubeId:"oAK9l2IaBqU", duration:"10:36", views:"40萬", popular:true, status:"published", sticker:"cheer" }
  ],

  // type："照顧攏底家懶人包"｜"官方資料"
  guides: [
    { id:"g01", zone:"policy", topic:"健康幣", type:"照顧攏底家懶人包", title:"健康幣懶人包（2026 最新版）",
      audience:"家庭照顧者、中高齡朋友、長輩", pages:14, date:"2026-10-24（資料查核）",
      points:["10/1 開始累積、12/1 開放兌換","滿 1,000 幣可兌換","手把手下載、綁定兩個 App"],
      file:"assets/guides/guide-healthcoin-2026.pdf", cover:"assets/covers/guide-healthcoin-2026.webp", status:"published" },
    { id:"g02", zone:"subsidy", topic:"輔具與居家無障礙", type:"照顧攏底家懶人包", title:"2026 輔具申請全攻略",
      audience:"長照家庭、身障者家庭", pages:11, date:"2026-02-04",
      points:["長照輔具：第一組每 3 年最高 4 萬元","第二組 115 年 7 月 1 日起施行","資格、流程、文件一次整理"],
      file:"assets/guides/guide-assistive-2026.pdf", cover:"assets/covers/guide-assistive-2026.webp", status:"published" },
    { id:"g03", zone:"subsidy", topic:"住宿機構", type:"照顧攏底家懶人包", title:"2026 住宿機構補助懶人包",
      audience:"入住或準備入住機構的家庭", pages:11, date:"2026",
      points:["115–117 年適用，最高每月補助 15,000 元","長照 4 級以上或中度以上身障：每月 15,000 元","30 秒判斷你符合哪一種補助"],
      file:"assets/guides/guide-residential-2026.pdf", cover:"assets/covers/guide-residential-2026.webp", status:"published" },
    { id:"g04", zone:"subsidy", topic:"經濟補助與津貼", type:"照顧攏底家懶人包", title:"中低收入老人生活津貼",
      audience:"65 歲以上經濟弱勢長輩", pages:5, date:"2026-03-13",
      points:["申請制，不是普發","年滿 65 歲、最近 1 年居住國內超過 183 日","家庭收入、財產需符合標準"],
      file:"assets/guides/guide-lowincome-elder.pdf", cover:"assets/covers/guide-lowincome-elder.webp", status:"published" },
    { id:"g05", zone:"subsidy", topic:"身心障礙福利", type:"照顧攏底家懶人包", title:"身心障礙福利大全",
      audience:"持身心障礙證明者與家屬", pages:9, date:"",
      points:["領證後即可申請的一般福利","需要時自行申請評估的資源","須經需求評估才轉介的服務"],
      file:"assets/guides/guide-disability.pdf", cover:"assets/covers/guide-disability.webp", status:"published" },
    { id:"g06", zone:"subsidy", topic:"敬老愛心卡", type:"照顧攏底家懶人包", title:"敬老愛心卡完整懶人包",
      audience:"65 歲以上長輩、身心障礙者", pages:12, date:"",
      points:["誰能申請、可以用在哪裡","各縣市補助點數","10 個常見問題"],
      file:"assets/guides/guide-senior-card.pdf", cover:"assets/covers/guide-senior-card.webp", status:"published" },
    { id:"g07", zone:"subsidy", topic:"稅務", type:"官方資料", title:"長期照顧特別扣除額問答集（財政部）",
      audience:"家中有長照需要者的報稅人", pages:12, date:"",
      points:["每人每年 18 萬元","2025 年度所得起適用（2026 年 5 月報稅）","適用條件以財政部規定為準"],
      file:"assets/guides/official-ltc-deduction-qa.pdf", cover:"assets/covers/official-ltc-deduction-qa.webp", status:"published" },
    { id:"g08", zone:"subsidy", topic:"經濟補助與津貼", type:"照顧攏底家懶人包", title:"家庭照顧者可以申請哪些補助？",
      audience:"家庭照顧者", pages:null, date:"", points:[], file:"", cover:"", status:"soon" },
    { id:"g09", zone:"subsidy", topic:"稅務", type:"照顧攏底家懶人包", title:"長期照顧特別扣除額懶人包",
      audience:"家中有長照需要者的報稅人", pages:null, date:"", points:[], file:"", cover:"", status:"soon" }
  ],

  // 照顧技巧研究室：依長輩狀況找照顧技巧
  // situations＝「長輩現在的狀況」按鈕；skills＝技巧分類（medical:true 會顯示安全提醒）
  // videos：ref 填上面 videos 的 id 就直接沿用那支影片；研究室專用影片則填 title、youtubeId 等
  //         for＝適合哪些狀況（填 situations 的 id）；fit＝卡片上「適合」那一行；ep＝系列集數
  lab: {
    playlist: "https://www.youtube.com/watch?v=jzUDhzAPX5k&list=PLp4D1lHT27LRalaYuxJxOougij-1DqWmz",
    situations: [
      { id:"bed",        label:"長期臥床" },
      { id:"wheelchair", label:"坐輪椅" },
      { id:"bath",       label:"能坐，但洗澡要人幫" },
      { id:"floor",      label:"跌坐地上起不來" },
      { id:"phlegm",     label:"痰多、咳不出來" },
      { id:"trach",      label:"有氣切管" },
      { id:"catheter",   label:"有導尿管" },
      { id:"swallow",    label:"吃飯容易嗆到" }
    ],
    skills: [
      { id:"suction", name:"抽痰護理", icon:"wind", sticker:"think", medical:true,
        desc:"痰卡著咳不出來，先用翻身拍背幫忙把痰排出來；有氣切或痰真的很多，才需要抽痰。",
        fit:"痰多咳不出、長期臥床、有氣切管的長輩",
        warn:"抽痰要先由醫護人員示範，確認你做得到再自己來。出現呼吸很喘、嘴唇發紫、痰帶血或發燒，請立即就醫。" },
      { id:"transfer", name:"移位技巧", icon:"accessibility", sticker:"ok",
        desc:"床到輪椅、輪椅到馬桶、上下車，照顧者最容易在移位時閃到腰。先學省力原則，再照情境一集一集練。",
        fit:"臥床、坐輪椅、腳沒力的長輩" },
      { id:"bath", name:"沐浴洗頭", icon:"bath", sticker:"smile",
        desc:"長輩能不能坐穩，決定要在床上擦澡、洗頭，還是坐洗澡椅洗。",
        fit:"臥床、坐輪椅、能坐但站不穩的長輩",
        tip:"家裡人手不夠，也可以申請長照居家服務，請居服員到府協助洗澡。", tipQuery:"居家服務" },
      { id:"catheter", name:"導尿管照護", icon:"droplet", sticker:"point", medical:true,
        desc:"每天清潔、管子固定好、尿袋放在比膀胱低的位置，可以減少感染和管子滑脫。",
        fit:"有留置導尿管的長輩",
        warn:"尿液混濁、有血、發燒，或尿管滑出、尿不出來，請聯絡居家護理師或就醫。" },
      { id:"trach", name:"氣切管照護", icon:"stethoscope", sticker:"wait", medical:true,
        desc:"氣切造口要每天清潔、更換紗布，也要學會抽痰。",
        fit:"有氣切管的長輩",
        warn:"呼吸困難、氣切管脫出、造口出血或發燒，請立即就醫或撥 119。" },
      { id:"more", name:"吞嚥・餵食・更多", icon:"utensils", sticker:"please",
        desc:"吃飯常嗆到、拿不穩餐具、用鼻胃管灌食，還有紙尿褲怎麼包。",
        fit:"吞嚥退化、用鼻胃管、需要包紙尿褲的長輩",
        warn:"吃飯常嗆咳，先請醫師或語言治療師評估吞嚥功能，再調整食物質地。" }
    ],
    videos: [
      { skill:"suction", ref:"v21", step:"先學", for:["phlegm","bed"], fit:"痰咳不出、長期躺床，先用翻身拍背排痰" },
      { skill:"suction", ref:"v24", step:"再學", for:["phlegm","trach"], fit:"有氣切造口、痰很多，需要抽痰" },

      { skill:"transfer", ref:"v17", step:"先學", for:["bed","wheelchair","floor"], fit:"所有移位都適用的省力、護腰原則" },
      { skill:"transfer", ep:"EP.1", title:"【移位技巧 EP.1】平躺起身到輪椅", youtubeId:"XTafgInTrgo", duration:"4:15", views:"1,479", for:["bed","wheelchair"], fit:"從床上坐起來，再移到輪椅" },
      { skill:"transfer", ep:"EP.2", title:"【移位技巧 EP.2】從輪椅到床上", youtubeId:"aWD8MYeBj9s", duration:"1:02", views:"2,923", for:["wheelchair","bed"], fit:"從輪椅回到床上休息" },
      { skill:"transfer", ep:"EP.3", title:"【移位技巧 EP.3】從輪椅上廁所", youtubeId:"r1RgMtQg_jM", duration:"0:35", views:"1,019", for:["wheelchair"], fit:"坐輪椅的長輩要上馬桶" },
      { skill:"transfer", ep:"EP.4", title:"【移位技巧 EP.4】從輪椅到車內", youtubeId:"Cb2obyHHpJg", duration:"1:42", views:"2,448", for:["wheelchair"], fit:"回診、出門要上車" },
      { skill:"transfer", ep:"EP.5", title:"【移位技巧 EP.5】從車內到輪椅", youtubeId:"toT24II0AAw", duration:"1:55", views:"2,036", for:["wheelchair"], fit:"到了目的地，下車坐回輪椅" },
      { skill:"transfer", ep:"EP.6", title:"【移位技巧 EP.6】地面移位", youtubeId:"OBO8xNP-e7g", duration:"1:22", views:"1,335", for:["floor"], fit:"長輩跌坐在地上，安全扶起來" },
      { skill:"transfer", ref:"v19", step:"進階", for:["wheelchair","bed"], fit:"中風、行動不便，物理治療師教安全移位" },

      { skill:"bath", ref:"v29", step:"總整理", for:["bed","bath","wheelchair"], fit:"床上擦澡、床上洗頭、洗澡椅一次看" },
      { skill:"bath", ep:"EP.1", title:"【沐浴技巧 EP.1】床上擦澡", youtubeId:"u0s96RNdSNA", duration:"6:50", views:"5,973", for:["bed"], fit:"長輩不能下床，在床上擦澡" },
      { skill:"bath", ep:"EP.2", title:"【沐浴技巧 EP.2】床上洗頭", youtubeId:"cZifnZwlhfY", duration:"2:28", views:"1,581", for:["bed"], fit:"長輩不能下床，在床上洗頭" },
      { skill:"bath", ep:"EP.3", title:"【沐浴技巧 EP.3】洗澡椅洗澡", youtubeId:"mXmcgzlfKgg", duration:"4:46", views:"1,560", for:["bath","wheelchair"], fit:"能坐穩的長輩，坐洗澡椅洗澡" },
      { skill:"bath", ep:"EP.4", title:"【沐浴技巧 EP.4】洗澡椅洗頭", youtubeId:"mfUj-HRl7S8", duration:"2:45", views:"2,162", for:["bath","wheelchair"], fit:"能坐穩的長輩，坐洗澡椅洗頭" },

      { skill:"catheter", ref:"v23", for:["catheter"], fit:"清潔、固定、倒尿袋的日常照護" },

      { skill:"trach", ref:"v25", step:"先學", for:["trach"], fit:"氣切造口清潔、換紗布" },
      { skill:"trach", ref:"v24", step:"再學", for:["trach","phlegm"], fit:"氣切造口抽痰與居家化痰" },

      { skill:"more", ref:"v30", for:["swallow"], fit:"吃飯常嗆咳，練口腔肌肉預防肺炎" },
      { skill:"more", ref:"v31", for:["swallow"], fit:"手拿不穩、容易嗆，挑輔助餐具與餵食" },
      { skill:"more", ref:"v26", for:["swallow","bed"], fit:"用鼻胃管灌食的長輩" },
      { skill:"more", ref:"v32", for:["bed"], fit:"臥床或失禁，紙尿褲怎麼選、怎麼包" }
    ]
  },

  // 皓皓表情包貼圖：full＝全身、bust＝半身（小位置用）
  stickers: {
    ok:{label:"OK！"}, no:{label:"不行！"}, panic:{label:"崩潰⋯"}, think:{label:"嗯⋯"}, point:{label:"重點！"}, cheer:{label:"衝！"},
    please:{label:"請收下"}, shrug:{label:"怎麼辦"}, wait:{label:"等一下！"}, wow:{label:"哇！"}, smile:{label:"交給我"}
  },

  // 嚴選照顧用品商城（價格以商城頁面為準）
  shop: [
    { id:"s01", name:"安心照護防漏墊｜床中單｜看護墊｜保潔墊", price:590, original:690,
      points:["3M 專利防汙表層、TPU 防水透氣膜","0.6mm 輕薄，親膚低敏","拆裝容易，一拉即換（W70 × L150 cm）"],
      image:"assets/shop/shop-pad.webp", url:"https://www.carenest724.com/products/安心照護防漏墊", tag:"臥床照護" },
    { id:"s02", name:"孝親首選分離式止滑助行拐杖傘（台灣製）", price:1180, original:1380,
      points:["拐杖、雨傘一體兩用","三段高度可調","耐磨止滑橡膠腳墊、木紋握把"],
      image:"assets/shop/shop-cane.webp", imageAlt:"皓皓和奶奶在雨天撐著拐杖傘合照", url:"https://www.carenest724.com/products/分離式止滑助行拐杖傘", tag:"行動與防跌" },
    { id:"s03", name:"安心出行｜助行車（一般款）輪徑 F8″／R6″", price:7880, original:9800,
      points:["鋁合金車身 7.3 kg，最大荷重 120 kg","附座椅，走累了可以坐","適用身高 150–175 cm"],
      image:"assets/shop/shop-walker.webp", url:"https://www.carenest724.com/products/助行車一般款-輪徑-f8”-r6”", tag:"行動與防跌" }
  ],

  faqs: [
    { zone:"policy", q:"長照補助是直接發現金嗎？",
      a:"不是。長照補助是「服務額度」：先和個管討論照顧計畫，再由特約單位提供服務，用多少算多少，並依福利身分可能有部分負擔。額度沒用完也不能換成現金。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"policy", q:"家裡有請外籍看護，還能用長照嗎？",
      a:"可以，但能用的項目和額度跟一般家庭不同。照顧及專業服務是原額度的三成，可依規定安排專業服務、日照等；輔具、符合條件的交通接送，以及看護休假時的喘息服務，也都可以詢問。先把家裡實際狀況說清楚，請個管或照管中心確認。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"policy", q:"遇到問題，要找個管還是照管中心？",
      a:"資格、評估結果、核定有疑問，找照管中心。服務計畫、調整需求、追媒合進度，先找個管。服務開始後，當天出勤或排班有問題，找服務單位督導。不知道窗口或一直沒處理，撥 1966。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"policy", q:"核定了，卻一直排不到人怎麼辦？",
      a:"先問清楚卡在人力、時段，還是照顧需求。請個管協助確認其他特約單位、最急的服務能不能先排，最後約好下次確認進度的日期。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"policy", q:"長照評估時，要怎麼說才準確？",
      a:"照實說，不誇大也不客氣：哪些事長輩能自己做、哪些要提醒、哪些一定要有人協助，以及多常發生。失智的半夜往外走、忘記關火等狀況，也要具體描述。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"subsidy", q:"長照「四包錢」是哪四包？",
      a:"照顧及專業服務（每月）、交通接送（每月，依居住地分區 1,680～2,400 元）、輔具及居家無障礙環境改善（每 3 年）、喘息服務（每年）。四類用途不同，不能互相挪用。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"subsidy", q:"輔具第二組 6 萬元，是加在原本的 4 萬元上面嗎？",
      a:"不是。第一組每 3 年 4 萬元，第二組（115 年 7 月起）每 3 年 6 萬元，兩組項目不同、只能擇一。也請先評估、核定後再購買，不要先買了才問能不能補助。",
      source:"照顧攏底家節目查核（2026-10-15）" },
    { zone:"subsidy", q:"住宿機構補助每個月最多多少？",
      a:"115–117 年適用的住宿式服務機構使用者補助方案：長照需要等級 4 級以上，或持中度以上身心障礙證明者，最高每月 15,000 元；另有既有住民與身障加碼等不同路線。實際資格以地方政府核定為準。",
      source:"照顧攏底家 2026 住宿機構補助懶人包" },
    { zone:"subsidy", q:"長期照顧特別扣除額可以扣多少？",
      a:"每位符合條件的長照需要者，每年 18 萬元，自 2025 年度所得開始適用（2026 年 5 月報稅）。適用條件以財政部規定為準。",
      source:"財政部長期照顧特別扣除額問答集" },
    { zone:"skills", q:"抽痰、管路照護，看影片就能自己學嗎？",
      a:"影片可以幫你先了解步驟和注意事項，但實際操作前，請先由醫護人員示範並確認你做得到。出現發燒、出血、呼吸困難等狀況，請立即就醫。",
      source:"照顧攏底家" },
    { zone:"skills", q:"長輩走路不穩，家裡要先改哪裡？",
      a:"先申請長照評估，由專業人員評估適合的輔具和居家無障礙改善（例如扶手、防滑），再依核定項目申請補助。平常也可以跟著「20分鐘居家運動」影片練習。",
      source:"照顧攏底家" },
    { zone:"skills", q:"照顧到快撐不住了，有什麼資源？",
      a:"把「我需要休息」說出來：可以詢問喘息服務（居家、社區或機構式）和日照，也可以撥家庭照顧者關懷專線 0800-507-272，或撥 1966 詢問長照資源。",
      source:"照顧攏底家" }
  ],

  // 上線前請到衛福部長照專區（1966.gov.tw）逐項核對
  quota: {
    checked: "2026-10-15",
    source: "長照給付及支付基準（照顧攏底家節目查核；上線前再核對 1966.gov.tw）",
    careMonthly: { 2:10020, 3:15460, 4:18580, 5:24100, 6:28070, 7:32090, 8:36180 },
    foreignCaregiverRatio: 0.3,
    respiteYearly: { 2:32340, 3:32340, 4:32340, 5:32340, 6:32340, 7:48510, 8:48510 },
    transportMonthly: { min:1680, max:2400, tiers:[1680,1840,2000,2400], note:"依居住地分區" },
    assistive: [
      { group:"第一組", amount:40000, period:"每 3 年", note:"傳統輔具與居家環境改善" },
      { group:"第二組", amount:60000, period:"每 3 年", note:"115 年 7 月起；含智慧科技輔具租賃等，與第一組擇一" }
    ],
    copayCare: { "一般戶":0.16, "中低收入戶":0.05, "低收入戶":0 }
  }
};
