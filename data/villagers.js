/**
 * VILLAGERS DATA
 * 降臨元年 (Year 1) = AD 750 を基準とする。
 * birthYearOffset: 降臨年を0とした誕生年
 */

export const villagers = [
  // --- 第1章からの主要人物 ---
  {
    id: "oni-san",
    name: "お兄さん",
    birthYearOffset: -24, // 降臨(AD750)時に25歳と仮定
    history: [
      {
        year: 1,
        role: "守護者",
        status: "転生者",
        evaluation:
          "異世界から転生してきた謎の青年。両親の骸の横で死を待つ少女の前にポップした",
        health: 85,
        social: 100,
        traits: ["現代知識を持つ"],
      },
      {
        year: 70,
        role: "村の始祖 / 守護聖人",
        status: "隠居(現役)",
        evaluation:
          "70歳近くなお背筋は伸び、眼鏡（自作）越しに村の行く末を見守る。彼が淹れる「ただの白湯」は、今や村の聖水扱い。",
        health: 85,
        social: 100,
        traits: ["衛生の父", "生ける神話", "ログの執筆者"],
      },
    ],
  },
  {
    id: "bertha",
    name: "ベルタ",
    birthYearOffset: -7, // Year 1に8歳
    spouse: "eliyah", // 少年（エリヤ）と結婚
    history: [
      {
        year: 1,
        role: "保護対象",
        status: "回復中",
        evaluation: "両親を失い衰弱。煮沸水とスープによる栄養補填を開始。",
        health: 45,
        social: 10,
        traits: ["衰弱", "柳の歯ブラシ"],
      },
      {
        year: 4,
        role: "パートナー",
        status: "最高",
        evaluation: "村の防衛の要。兄の技術を一部継承。",
        health: 96,
        social: 60,
        traits: ["精密射撃", "公衆衛生"],
      },
      {
        year: 27,
        role: "村の賢女",
        status: "安定",
        evaluation: "エルザとヨシュアの門出を見守る。村の精神的支柱。",
        health: 85,
        social: 98,
        traits: ["薬草学の権威", "慈愛"],
      },
    ],
  },
  {
    id: "joseph", // 新規追加：ヨセフ
    name: "ヨセフ",
    birthYearOffset: -8,
    father: "hanse", //
    spouse: "maria", // 2年後にマリアと結婚
    history: [
      {
        year: 1,
        role: "婿候補",
        status: "訓練中",
        evaluation: "お兄さんのパニアに感動しLv.5に到達。",
        traits: ["運搬工学", "パニア使い"],
      },
    ],
  },
  {
    id: "hanse",
    name: "ハンス",
    birthYearOffset: -38, // 1年目に39歳。働き盛りからベテランへの移行期
    history: [
      {
        year: 1,
        role: "熟練農夫",
        status: "懐疑的",
        evaluation:
          "ヨセフの父。先祖代々の農法を信じているが、息子のパニア（背負子）の効率を見て腰の負担軽減に興味を持つ。",
        health: 70,
        social: 80,
        traits: ["伝統的知恵", "腰痛持ち"],
      },
      {
        year: 5,
        role: "資材運搬主任",
        status: "感服",
        evaluation:
          "お兄さんの設計した『大八車プロトタイプ』の試験運用を担当。人力の限界を機械で超える喜びを知る。",
        health: 75, // 衛生改善と負担軽減により健康度アップ
        social: 85,
        traits: ["物流の先駆者", "ヨセフの師"],
      },
    ],
  }, // --- マリア（ヨセフの妻・食品化学） ---
  {
    id: "maria",
    name: "マリア",
    birthYearOffset: -9,
    spouse: "joseph",
    history: [
      {
        year: 5,
        role: "食品工学主任",
        status: "Lv.5",
        evaluation:
          "遠心分離機を使いこなし、透明スープと精製油脂を量産。村の食生活を革命した。",
        health: 90,
        social: 85,
        traits: ["比重分離の魔術師", "油脂精製"],
      },
    ],
  },
  // --- エリヤ（ベルタの夫・狩猟防衛） ---
  {
    id: "eliyah",
    name: "エリヤ",
    birthYearOffset: 1,
    spouse: "bertha", // 少女（ベルタ）と結婚
    history: [
      {
        year: 4,
        role: "防衛隊長",
        status: "精強",
        evaluation:
          "ベルタの射撃と連携し、村の安全を確保。お兄さんの道具を最も使いこなす一人。",
        health: 95,
        social: 80,
        traits: ["蛇紋岩手斧使い", "トラップマスター"],
      },
    ],
  }, // --- ニコ（エルザの父） ---
  {
    id: "nico",
    name: "ニコ",
    birthYearOffset: -12, // 1年目に13歳。お兄さんの最初の「弟子」世代
    father: "karl", // カールはニコの父でエルザの祖父
    spouse: "ilse",
    history: [
      {
        year: 4,
        role: "見習い工員",
        status: "熱心",
        evaluation:
          "お兄さんの指導下で木工と簡易鍛冶を学ぶ。エルザ村設立に向けた資材製作の主力。",
        health: 90,
        social: 70,
        traits: ["基礎工作", "体力自慢"],
      },
      {
        year: 27,
        role: "エルザ村建設主任",
        status: "誇らしい",
        evaluation:
          "娘エルザの村設立を技術面で支える。お兄さんの設計図を現場の資材で実現する男。",
        health: 85,
        social: 88,
        traits: ["現場監督", "構造理解"],
      },
    ],
  },
  // --- イルゼ（エルザの母） ---
  {
    id: "ilse",
    name: "イルゼ",
    birthYearOffset: -10, // 1年目に11歳。ベルタに近い世代
    spouse: "nico",
    history: [
      {
        year: 4,
        role: "生活改善班",
        status: "活発",
        evaluation:
          "ベルタの織機技術とマリアの衛生知識をいち早く習得。村の少女たちのリーダー的存在。",
        health: 92,
        social: 75,
        traits: ["生活ハック", "組織力"],
      },
      {
        year: 31,
        role: "エルザ村長老代行",
        status: "厳格",
        evaluation:
          "アウローラが生まれた際、お兄さんの衛生ログを元に『聖域（産室）』の管理を徹底した。",
        health: 88,
        social: 92,
        traits: ["衛生管理", "育児のベテラン"],
      },
    ],
  }, // --- カール（ニコの父 / エルザの祖父） ---
  {
    id: "karl",
    name: "カール",
    birthYearOffset: -42, // 降臨(Year 1)時に43歳
    history: [
      {
        year: 1,
        role: "ベテラン猟師",
        status: "静かな観察",
        evaluation:
          "ニコの父。森の境界を知る男。行き倒れの少女を救った『お兄さん』の所作に、ただならぬ合理性を感じて注視している。",
        health: 75,
        social: 85,
        traits: ["森の知識", "現実主義"],
      },
      {
        year: 10,
        role: "村の長老衆",
        status: "隠居",
        evaluation:
          "孫娘エルザの誕生を喜ぶ。お兄さんが推奨する『冬の乾布摩擦と換気』を長老会で支持し、老人の冬越し成功率を上げた立役者。",
        health: 65,
        social: 90,
        traits: ["伝統と革新の橋渡し", "孫煩悩"],
      },
    ],
  },
  {
    id: "aldric",
    name: "アルドリック",
    role: "村長",
    birthYearOffset: -51, // 1年目に52歳
    history: [
      {
        year: 1,
        role: "村長",
        status: "警戒",
        evaluation:
          "異邦人の若者を疑いの目で見ている。埋葬の代行により一時的な居住を許可。",
        health: 60,
        social: 90,
        traits: ["現実主義", "土地管理者"],
      },
      {
        year: 2,
        role: "村長",
        status: "関心",
        evaluation:
          "お兄さんの農具に関心を持ち始める。かまどの提供により恩義を感じている。",
        health: 62,
        social: 92,
        traits: ["熱効率かまど所有", "交渉相手"],
      },
      {
        year: 4,
        role: "村長",
        status: "強い信頼",
        evaluation:
          "お兄さんを「村の守護的な賢者」として公式に認定。政治的な盾として機能する。",
        health: 68,
        social: 95,
        traits: ["現実主義", "政治打点"],
      },
    ],
  },
  {
    id: "hildegard",
    name: "ヒルデガルド",
    role: "村長の妻",
    birthYearOffset: -45, // 1年目に46歳
    history: [
      {
        year: 2,
        role: "村長夫人",
        status: "満足",
        evaluation:
          "精製ラードの白さと石鹸の洗浄力に驚愕。家政の負担が減り、好意的。",
        health: 65,
        social: 85,
        traits: ["家政実利重視", "噂のハブ"],
      },
      {
        year: 4,
        role: "村長夫人",
        status: "満足",
        evaluation:
          "石鹸と清潔な衣類を村の女性社会に広める。お兄さん一家を強力に支持。",
        health: 72,
        social: 90,
        traits: ["技術の理解者", "強力な支持層"],
      },
    ],
  },
  {
    id: "priest",
    name: "司祭",
    birthYearOffset: -58,
    history: [
      {
        year: 3,
        role: "宗教的権威",
        status: "敬意",
        evaluation:
          "献上された精製塩とヘンプ糸に驚く。「神の知恵を預かる者」と認め始める。",
        health: 58,
        social: 98,
        traits: ["知識のハブ", "宗教的正当性"],
      },
      {
        year: 4,
        role: "宗教的権威",
        status: "敬意",
        evaluation:
          "「神に愛された知恵者」と定義。技術の宗教的正当性を完全に担保。",
        health: 60,
        social: 98,
        traits: ["宗教的正当性", "外部協力者"],
      },
    ],
  },

  // --- 第2章・第3章の主要人物 (エルザ村) ---
  {
    id: "joshua",
    name: "ヨシュア",
    birthYearOffset: 7, // Year 8誕生
    father: "joseph",
    mother: "maria",
    spouse: "elsa",
    history: [
      {
        year: 8,
        role: "乳児",
        status: "健康",
        evaluation: "村の次世代として誕生。お兄さんの衛生管理下で育つ。",
        health: 100,
        social: 5,
        traits: ["次世代の希望"],
      },
      {
        year: 27,
        role: "エルザの夫",
        status: "高揚",
        evaluation: "エルザと共に新村を設立。ヨシュアは主に技術・設備担当。",
        health: 92,
        social: 85,
        traits: ["エンジニアリング見習い", "エルザの夫"],
      },
    ],
  },
  {
    id: "elsa",
    name: "エルザ",
    father: "nico",
    mother: "ilse", // 追加
    spouse: "joshua",
    birthYearOffset: 10, // Year 11誕生
    history: [
      {
        year: 11,
        role: "乳児",
        status: "極めて頑健",
        evaluation: "後の「女傑」。誕生時から並外れた生命力を見せる。",
        health: 100,
        social: 5,
        traits: ["天性の生命力"],
      },
      {
        year: 27,
        role: "新村村長",
        status: "不屈",
        evaluation:
          "お兄さんに教育され新村を設立。圧倒的な現場指揮能力を持つ。",
        health: 98,
        social: 90,
        traits: ["女傑", "開拓者", "ヨシュアの妻"],
      },
      {
        year: 31,
        role: "母・村長",
        status: "充実",
        evaluation: "アウローラを出産。母となり、さらにその威厳を増す。",
        health: 95,
        social: 95,
        traits: ["村の母", "不敗の指揮官"],
      },
    ],
  },

  // --- 第4章の主要人物 (領主・次世代) ---
  {
    id: "roderich",
    name: "ローデリヒ",
    birthYearOffset: 22, // Year 23誕生
    father: "sigibert",
    mother: "gisela",
    spouse: "gerda", // 8年後にゲルダと結婚
    history: [
      {
        year: 23,
        role: "領主嫡男",
        status: "高貴",
        evaluation: "領主の息子として誕生。後にエルザ村のベルタに求婚する。",
        health: 80,
        social: 50,
        traits: ["貴族の血統"],
      },
      {
        year: 37,
        role: "次期領主",
        status: "情熱的",
        evaluation:
          "ベルタに求婚し結婚。エルザ村の技術力を領地経営に取り込む。",
        health: 88,
        social: 92,
        traits: ["ベルタの夫", "技術革新の理解者"],
      },
    ],
  },
  {
    id: "sigibert",
    name: "ジギベルト",
    spouse: "gisela",
    role: "領主",
    status: "伝統重視",
    evaluation:
      "6haの直営地を持つ地域領主。お兄さんの『異常な高収益』を、最初は単なる幸運（神の恩寵）と誤認するが、次第にその技術的優位性に気づき、システムの統合（婚姻）を画策する。",
    history: [
      {
        year: 23, // ローデリヒ誕生時
        health: 75,
        social: 85,
        traits: ["保守的経営", "物理的武力"],
      },
      {
        year: 37, // 求婚時
        health: 60,
        social: 80,
        traits: ["技術への畏怖", "賢明な譲歩"],
      },
    ],
  },
  {
    id: "gisela",
    name: "ギゼラ",
    spouse: "sigibert",
    role: "領主夫人",
    status: "合理的・契約重視",
    evaluation:
      "ゲルダ（嫁）に対しても『契約』に基づいたドライな関係を維持する、非常に現代的な（お兄さんに近い）ロジックの持ち主。無駄な虚飾を嫌い、実利的なアルカリ処理リネンや脱脂ウールを愛用する。",
    history: [
      {
        year: 23,
        health: 82,
        social: 90,
        traits: ["家政管理の最適化", "冷徹な洞察"],
      },
      {
        year: 37,
        health: 78,
        social: 95,
        traits: ["技術的被服の愛好者", "エルザ村のバックエンド支持"],
      },
    ],
  },
  {
    id: "gerda", // idをberthaからgerdaに変更
    name: "ゲルダ", // 名前をベルタからゲルダに変更
    birthYearOffset: 28, // Year 29誕生
    spouse: "roderich", // ローデリヒと結婚
    history: [
      {
        year: 29,
        role: "村娘",
        status: "才色兼備",
        evaluation:
          "エルザ村で誕生。お兄さんの教育を受ける。エルザの娘アウローラと共に次世代を担う。",
        health: 95,
        social: 30,
        traits: ["エルザ村の至宝"],
      },
      {
        year: 37,
        role: "領主夫人",
        status: "幸福",
        evaluation:
          "ローデリヒと結婚。村の外（貴族社会）への影響力の象徴となる。エルザ村の技術と精神を貴族社会へ繋ぐ架け橋。",
        health: 94,
        social: 95,
        traits: ["才女", "外交の要"],
      },
    ],
  },
  {
    id: "aurora",
    name: "アウローラ",
    birthYearOffset: 30, // Year 31誕生
    father: "joshua",
    mother: "elsa",

    history: [
      {
        year: 31,
        role: "エルザの娘",
        status: "健康",
        evaluation: "エルザとヨシュアの間に誕生。村の未来を担う。",
        health: 100,
        social: 5,
        traits: ["開拓地の申し子"],
      },
    ],
  }, // --- 第4章以降：広域統治・歴史的上位存在 ---
  {
    id: "charlemagne",
    name: "カール大帝 (Carolus Magnus)",
    birthYearOffset: -8, // AD742誕生(定説) 降臨Year1(AD750)で8歳
    role: "フランク国王 / 西ローマ皇帝",
    history: [
      {
        year: 18, // AD768 国王即位
        role: "フランク国王",
        status: "拡大",
        evaluation:
          "移動宮廷（プファルツ）を率いて各地を転戦。識字率向上とキリスト教化を推進。",
        health: 95,
        social: 100,
        traits: ["文教政策", "軍事的天才", "法典編纂者"],
      },
      {
        year: 50, // AD800 皇帝戴冠
        role: "西ローマ皇帝",
        status: "頂点",
        evaluation:
          "「お兄さん」が記した『農園管理ログ』の写本が、巡回査察使の手を経て宮廷に到達。その合理性に驚愕し、後の『領地勅令（Capitulare de villis）』の着想を得る。",
        health: 80,
        social: 100,
        traits: ["ヨーロッパの父", "技術の蒐集者"],
      },
    ],
  },
  {
    id: "count-eberhard",
    name: "エバーハルト広域伯",
    birthYearOffset: -30,
    role: "広域行政官（伯）",
    status: "実利主義",
    evaluation:
      "ジギベルトの上位領主。複数の村を統括し、王への徴税義務を負う。ジギベルトの領地から届く「異常に白く不純物のない塩」と「腐らない石鹸」に、新たな徴税源としての可能性を見出す。",
    history: [
      {
        year: 37, // ローデリヒ求婚時
        role: "広域伯",
        health: 75,
        social: 95,
        traits: ["冷徹な徴税官", "物流網の支配者"],
      },
    ],
  },
  {
    id: "anselm",
    name: "アンセルム",
    birthYearOffset: -75,
    father: null, // ジギベルトの父
    role: "先代領主（故人）",
    history: [
      {
        year: 1,
        role: "隠居領主",
        status: "伝統死守",
        evaluation:
          "ジギベルトの父。「土地は血と鉄で守るもの」という旧来の騎士道精神の塊。お兄さんの活動初期、彼が健在であったら「妖術師」として排除されていた可能性が高い。",
        health: 40,
        social: 80,
        traits: ["頑固一徹", "戦士の誇り"],
      },
    ],
  },
];
