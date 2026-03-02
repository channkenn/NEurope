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
    id: "sister",
    name: "少女",
    birthYearOffset: -7, // Year 1に8歳
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
    id: "bertha",
    name: "ベルタ",
    birthYearOffset: 28, // Year 29誕生
    history: [
      {
        year: 29,
        role: "村娘",
        status: "才色兼備",
        evaluation: "エルザ村で誕生。お兄さんの教育を受ける。",
        health: 95,
        social: 30,
        traits: ["エルザ村の至宝"],
      },
      {
        year: 37,
        role: "領主夫人",
        status: "幸福",
        evaluation:
          "ローデリヒと結婚。村の外（貴族社会）への影響力の象徴となる。",
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
  },
];
