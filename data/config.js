/**
 * config.js
 * 設計原則：物理制約（トポロジー）と社会ルール（エ enforcedRules）を定義。
 */
export const config = {
  origins: {
    timeline:
      "8世紀フランク王国ドイツ内陸あたりバイエルン北部・フランケン地方（現在のオーバーフランケン近傍）の農村・入植地（1年目春）",
    situation:
      "少女（8歳）を生存させ、村の衛生・農業水準を引き上げることで、彼女が「異端」として排除されない社会的基盤を構築する。",
    assets: [
      // --- 領地全体のデータ（マクロ） ---
      {
        id: "domain_sigibert",
        label: "ジギベルト領主領（広域）",
        value: "総人口：約1000人 (200世帯) / 8つの散在村 + 領主町",
        status: "Stagnant", // 収穫倍率3倍以下の低迷状態
        description:
          "典型的な8世紀の小領主領。各村の連携はなく、資源は垂れ流し状態。",
      },
      {
        id: "domain_land_total",
        label: "領内総耕地面積",
        value: "200マンス (約2000-3000ha)",
        status: "Depleted",
        description:
          "面積は広いが、窒素・リン酸の欠乏により単位面積あたりの収穫は極めて低い。",
      },
      {
        id: "population_data",
        label: "村の総人口",
        value: "100人 (20世帯)",
        status: "At-Risk", // 衛生・食糧事情により変動
      },
      {
        id: "livestock",
        label: "家畜（冬開け弱っている）",
        value: "雌羊（1匹、妊娠）, 雌鶏（3羽）",
        status: "Stable",
      },
      {
        id: "land_active",
        label: "実耕作地",
        value:
          "150a (150a小麦がすでにまかれている。まともな範囲は30a程度しかない)",
        status: "bad",
      },
      {
        id: "land_fallow",
        label: "休耕・開放放牧地",
        value: "150a（放置。基本的な雑草が生えている）",
        status: "bad",
      },
      {
        id: "land_forest",
        label: "開墾割当（森）",
        value: "90a (巨木リソース・未開墾領域)",
        status: "Resource-Rich",
      },
      {
        id: "mission",
        label: "最終勝利条件",
        value: "少女の生存と社会的地位の確立",
        status: "Primary",
      },
    ],
    missionDescription:
      "一人の少女を生存させ、村の衛生・農業水準を引き上げることで、彼女が「異端」として排除されない社会的基盤を構築する。",
  },

  // ここが重要：script.jsが参照する新しいセクション
  locationData: {
    villageStructure: "塊村（住居集中型）",
    region: "バイエルン北部・フランケン地方（現在のオーバーフランケン近傍）",
    geology: {
      bedrock: "ミュンヒベルク塊（Münchberg Massif）由来の変成岩帯",
      availableMaterials: [
        {
          id: "serpentinite",
          label: "蛇紋岩",
          usage: "精密研磨石斧（三面摺り定盤による完全平面刃）",
        },
        {
          id: "limestone",
          label: "石灰岩",
          usage: "消石灰による土壁補強・厩舎床の硬化・酸性土壌中和",
        },
        {
          id: "bentonite",
          label: "ベントナイト粘土",
          usage: "住宅の防水シーリング・遮水層構築",
        },
        {
          id: "flint",
          label: "燧石（フリント）",
          usage: "火起こし・精密スクレイパー",
        },
        {
          id: "obsidian",
          label: "黒曜石",
          status: "Unavailable",
          note: "地質学的に存在せず",
        },
      ],
      soilType: "褐色森林土（針葉樹により酸性化傾向）",
    },
    climate: {
      type: "内陸性気候（大陸性混合）",
      phenomena: "厳冬期の積雪、晩春の霜、秋のドングリ落葉サイクル",
    },
    coordinates: [
      {
        label: "150a小麦セクター",
        value: "300m",
        note: "秋の収穫後は休耕地に切り替わる",
      },
      {
        label: "150a休耕・放牧地",
        value: "800m",
        note: "秋に小麦耕地に切り替わる",
      },
      { label: "河川（水場）", value: "450m", note: "物理的ボトルネック" },
      {
        label: "開墾割当の森",
        value: "1.2km",
        note: "巨木ハック・熱源ストレージ",
      },
      { label: "教会ノード", value: "2.5km", note: "社会的同期バッチ処理" },
      {
        label: "領主の町",
        value: "12km",
        note: "年次デプロイ・納税ルート",
      },
    ],
  },

  healthMetrics: [
    {
      id: "sanitation",
      label: "公衆衛生・免疫（漆喰）",
      progress: 92,
      color: "bg-blue-600",
    },
    {
      id: "nutrition",
      label: "栄養・体組成（リン循環）",
      progress: 88,
      color: "bg-emerald-600",
    },
    {
      id: "social",
      label: "社会的受容度（納税完了）",
      progress: 65,
      color: "bg-amber-600",
    },
    {
      id: "production",
      label: "生産資本・技術（旋盤）",
      progress: 75,
      color: "bg-purple-600",
    },
  ],

  enforcedRules: [
    {
      id: "agricultural_cycle",
      label: "二圃制・強制耕作の義務",
      rule: "全戸一斉に休耕と作付けを切り替える。個別のサイクル変更は厳禁。",
      oni_san_strategy:
        "休耕期に6科混合播種を行い家畜を誘引。土壌のリン酸貯蓄を最大化する。",
    },
    {
      id: "new_land_right",
      label: "新規開墾地の私有権",
      rule: "既存の共有地外で自力開墾した土地は、開墾者の管理・所有物と認める。",
      oni_san_strategy:
        "1.2km地点にある90aの森をハックし、ドメインを拡張する。",
    },
    {
      id: "communal_plowing",
      label: "共同プラウ（重犂）の供出",
      rule: "深耕時には村の労働力を集約。家畜を持たぬ者は労働を提供せねばならない。",
      oni_san_strategy:
        "労働は提供するが自地のプラウは辞退。不耕起と菌根菌ネットワークを保護する。",
    },
    {
      id: "gleaning_rights",
      label: "落穂・野草の採集権",
      rule: "収穫後の耕作地や林において、誰でも落穂や薪を採集して良い。",
      oni_san_strategy:
        "これをシールドに村中の『家畜の骨』を回収、骨灰としてリンを還元する。",
    },
    {
      id: "mandatory_tax",
      label: "二重徴収（領主・教会）",
      rule: "領主へ40%、週3回の賦役、教会へ10%。合計50%の定率負担。",
      oni_san_status:
        "1/4マンス(3ha)割当のため、耕地1.5haあたり750kg/年の納税が期待されている",
    },
  ],
};
