
export const DATABASE = {
  // 0. プロジェクト起源
  origins: {
    timeline: "8世紀フランク王国・入植地（初年度春）",
    situation:
      "両親の死亡直後。8歳の少女が一人残された。生き残るための科学的介入を開始する。",
    assets: [
      { id: "livestock", label: "家畜（瀕死）", value: "雌羊1, 雌鶏3", status: "Critical" },
      { id: "seeds", label: "種籾（40%）", value: "小麦, 大麦, 燕麦", status: "Low" },
      { id: "land_30", label: "既開墾地", value: "30a (痩せ地)", status: "Active" },
      { id: "land_90", label: "開墾予定地", value: "90a(未開墾)", status: "Active" },
      { id: "mission", label: "最終勝利条件", value: "少女の生存と社会的地位の確立", status: "Primary" },
    ],
    missionDescription:
      "一人の少女を生存させ、村の衛生・農業水準を引き上げることで、彼女が「異端」として排除されない安全な環境を構築する。",
  },

  // 1. 生存健全性メトリクス
  healthMetrics: [
    { label: "栄養摂取（カロリー）", progress: 98, color: "bg-emerald-500" },
    { label: "衛生・免疫状態", progress: 95, color: "bg-blue-400" },
    { label: "社会的受容度", progress: 65, color: "bg-amber-600" },
    { label: "生産インフラ", progress: 85, color: "bg-stone-500" },
  ],

  // 2. 時系列改善ログ (省略なし)
  logs: [
    { year: 1, season: "春", title: "社会的プロトコルの遂行", event: "少女の両親を埋葬。居住権を確立。", wisdom: "心理的障壁の解消。", tags: ["社会工学・心理学", "リスク管理"] },
    { year: 1, season: "春", title: "煮沸プロトコル", event: "飲料水の加熱殺菌。", wisdom: "感染症の遮断。", tags: ["公衆衛生"] },
    { year: 1, season: "秋", title: "収穫最適化", event: "穀物収穫と納税。", wisdom: "生存リソースの確定。", tags: ["農業工学・農学", "リスク管理"] },
    { year: 2, season: "春", title: "資本投資", event: "余剰穀物で羊・塩を購入。", wisdom: "資産のポートフォリオ組み換え。", tags: ["投資工学", "保存科学"] },
    { year: 3, season: "初春", title: "『弔いの儀』による地域救済", event: "食糧配布と引き換えの石材収集。", wisdom: "社会の安定化とリソース獲得。", tags: ["社会工学・心理学"] },
    { year: 4, season: "初春", title: "非製粉型リソース運用", event: "共同石臼の利用拒否。", wisdom: "情報の非対称性による防衛。", tags: ["リスク管理"] }
  ],

  // 3. 住民リスト（年度別スナップショット）
  villagers: [
    { year: 1, name: "少女 (妹)", role: "保護対象", age: "8歳", status: "回復中", evaluation: "衰弱状態から回復中。", health: 45, social: 10, traits: ["衰弱"] },
    { year: 1, name: "ギセベルト", role: "村長", age: "52歳", status: "警戒", evaluation: "異邦人を監視中。", health: 60, social: 90, traits: ["土地管理者"] },
    { year: 4, name: "少女 (妹)", role: "パートナー", age: "11歳", status: "最高", evaluation: "最も健康的で知的。", health: 96, social: 60, traits: ["精密射撃", "公衆衛生"] },
    { year: 4, name: "ギセベルト", role: "村長", age: "55歳", status: "強い信頼", evaluation: "公式に賢者と認定。", health: 68, social: 95, traits: ["政治的防護壁"] }
  ],

  // 4. 年度別リソース・タイムライン
  resourceTimeline: [
    // --- Year 1 春 (初期資産) ---
    { year: 1, season: "春", category: "食糧・種子", label: "種籾（小麦）", value: 15, unit: "kg", status: "Critical" },
    { year: 1, season: "春", category: "食糧・種子", label: "種籾（大麦）", value: 15, unit: "kg", status: "Critical" },
    { year: 1, season: "春", category: "食糧・種子", label: "種籾（燕麦）", value: 15, unit: "kg", status: "Critical" },
    { year: 1, season: "春", category: "食糧・種子", label: "カブ・豆の種", value: 1, unit: "袋", status: "Low" },
    { year: 1, season: "春", category: "家畜", label: "雌羊", value: 1, unit: "頭", status: "Critical" },
    { year: 1, season: "春", category: "家畜", label: "雌鶏", value: 3, unit: "羽", status: "Low" },
    { year: 1, season: "春", category: "土地", label: "既開墾地", value: 30, unit: "a", status: "Active" },
    { year: 1, season: "春", category: "土地", label: "開墾予定地", value: 90, unit: "a", status: "Planning" },

    // --- Year 1 秋 ---
    { year: 1, season: "秋", category: "食糧・種子", label: "小麦備蓄", value: 165, unit: "kg", status: "Stable" },
    { year: 1, season: "秋", category: "食糧・種子", label: "大麦備蓄", value: 165, unit: "kg", status: "Stable" },
    { year: 1, season: "秋", category: "食糧・種子", label: "燕麦備蓄", value: 165, unit: "kg", status: "Stable" },
    { year: 1, season: "秋", category: "調味料・保存料", label: "灰汁石鹸", value: 10, unit: "L", status: "New" },

    // --- Year 2 春 ---
    { year: 2, season: "春", category: "食糧・種子", label: "穀物残量", value: 495, unit: "kg", status: "Excess" },
    { year: 2, season: "春", category: "家畜", label: "羊（つがい）", value: 2, unit: "頭", status: "Growing" },
    { year: 2, season: "春", category: "調味料・保存料", label: "精製塩", value: 15, unit: "kg", status: "High" },

    // --- Year 4 春 ---
    { year: 4, season: "春", category: "食糧・種子", label: "穀物備蓄（余剰）", value: 1450, unit: "kg", status: "Security" },
    { year: 4, season: "春", category: "家畜", label: "羊群", value: 5, unit: "頭", status: "Stable" },
    { year: 4, season: "春", category: "インフラ", label: "緩速ろ過装置", value: 1, unit: "基", status: "Active" },
    { year: 4, season: "春", category: "インフラ", label: "活性炭生成窯", value: 1, unit: "基", status: "Active" }
  ],

  // 5. 統計サマリ
  stats: {
    grainNet: 1450,
    survivalProb: 99.8,
    infraLevel: 5,
    analysisNote: "エネルギー効率が現地の10倍以上に達し、余剰リソースによる高度な防衛・教育フェーズを維持。"
  }
};
