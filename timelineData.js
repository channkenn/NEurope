export const MASTER_DATA = {
  stats: [
    {
      label: "Girl Age",
      value: "8歳 (冬期)",
      icon: "Heart",
      color: "bg-red-900",
    },
    {
      label: "Net Grain",
      value: "558kg",
      icon: "Wheat",
      color: "bg-emerald-900",
    },
    {
      label: "Infrastructure",
      value: "柳要塞・大型木臼",
      icon: "Home",
      color: "bg-amber-700",
    },
    {
      label: "Survival Potential",
      value: "Highest",
      icon: "Shield",
      color: "bg-blue-900",
    },
  ],
  health: [
    { label: "Caloric Reserve", progress: 98, color: "bg-emerald-500" },
    { label: "Micro-Nutrients", progress: 85, color: "bg-blue-400" },
    { label: "Tool Utility", progress: 75, color: "bg-amber-600" },
    { label: "Fuel/Warmth", progress: 40, color: "bg-orange-600" },
  ],
  startingConditions: {
    fieldSize: "30a (再生) + 90a (未開拓計画)",
    seeds: [
      {
        name: "冬の主食：モルト粥",
        status: "安定供給",
        logic: "麦芽の酵素でデンプンを糖化。消化吸収を最大化。",
      },
      {
        name: "保存食：アルキラード",
        status: "壺詰め保管",
        logic: "灰のアルカリで精製。塩なしでも酸化に強い。",
      },
      {
        name: "次期種籾 (エリート)",
        status: "貯蔵中",
        logic: "収穫から厳選した45kg。2年次の拡張用。",
      },
    ],
    priorities: [
      "【継続】モルト加工。発芽させた小麦を粥に混ぜ、少ない熱量で高い栄養吸収を実現",
      "【完遂】100kgイノシシの脱臭。灰（アルカリ）と炭（吸着）で野生の臭みを化学的に除去",
      "【完遂】大型木臼。火入れで製作したインフラにより、冬の間の加工労働を機械化",
      "【循環】完全回収。茹で汁は家畜へ、残渣は堆肥へ。拠点のバイオマス密度を濃縮",
      "【備え】燃料の再集積。肉の加工で消費した薪を、冬の晴れ間に森で枝拾いして補填",
    ],
  },
  logsYear1: [
    {
      title: "転生お兄さんのポップ",
      season: "春（初動）",
      description:
        "両親の死。絶望する少女の前に出現。煮沸消毒した水を与え、脱水症状を改善させる。",
      wisdom:
        "煮沸は最強の生存術。水系感染症を物理的に封殺し、免疫リソースを他へ回す。",
      impact: "感染症リスクをゼロに圧縮。",
      resources: {
        area: "30a (荒地)",
        harvest: "野草 (微量)",
        tools: "石・古い土器",
      },
    },
    {
      title: "柳の生垣と口腔衛生",
      season: "春（基盤）",
      description:
        "家の周囲に柳を挿し木。枝を噛んで歯を磨く習慣を確立し、消炎効果を得る。",
      wisdom:
        "柳のサリシンで歯周病を予防。口腔衛生の崩壊は寿命の崩壊。早期習慣化が必須。",
      impact: "生活拠点の防御力向上。",
      resources: {
        area: "30a (再生中)",
        harvest: "柳の若枝",
        tools: "柳の歯ブラシ",
      },
    },
    {
      title: "水圏資源と泥土の移送",
      season: "夏（日常）",
      description:
        "川で淡水資源を回収。獲物がいない日は川底の泥を持ち帰り、30aの痩せた畑へ投入する。",
      wisdom:
        "川の泥は天然の複合肥料。動物性タンパク質の摂取と同時に、地力の流亡を補填する。",
      impact: "発育を支えるミネラル補給。",
      resources: {
        area: "30a (再生中)",
        harvest: "淡水貝・川泥",
        tools: "泥掻き棒",
      },
    },
    {
      title: "害虫を食料に（バッタ食）",
      season: "夏（畑仕事）",
      description:
        "畑に現れるバッタを捕獲し食用粉末へ。緑肥の混植間で発生する競合雑草を選択的に抜根。",
      wisdom:
        "害虫を食料に変換。畑のエネルギー収支をプラスにするスカベンジャー戦略。",
      impact: "高密度タンパク質の獲得。",
      resources: {
        area: "30a (完全稼働)",
        harvest: "バッタ粉・夏野菜",
        tools: "乾燥用筵",
      },
    },
    {
      title: "次年度の布石：小麦の秋まき",
      season: "秋（農作業）",
      description:
        "収穫した小麦（種籾の40%から増やした全量）から厳選した種籾を播種。連作障害を回避。",
      wisdom:
        "農業はサイクル。区画移動（ローテーション）で土壌病害を科学的に防ぐ。",
      impact: "2年次収穫の予約。",
      resources: {
        area: "30a (播種完了)",
        harvest: "約800kg収穫済",
        tools: "種籾選別皿",
      },
    },
    {
      title: "野生の脂質：ナッツ総力戦",
      season: "秋（採集）",
      description: "どんぐり、くるみを大量確保。灰のアルカリで渋を抜く。",
      wisdom:
        "穀物だけでは冬の脂質が足りない。野生のナッツは冬を越すための貴重な核燃料となる。",
      impact: "脂質欠乏リスクを払拭。",
      resources: {
        area: "採集圏拡張",
        harvest: "ナッツ類 200kg",
        tools: "石の粉砕器",
      },
    },
    {
      title: "インフラ革命：火入れの木臼",
      season: "晩秋（工作）",
      description:
        "巨大倒木を火入れで焼き切り。加工労働を少女の筋力から重力へとシフトさせる。",
      wisdom: "鉄器不足を火で補う。加工自動化が少女の教育時間を生み出す。",
      impact: "穀物加工能力の劇的向上。",
      resources: {
        area: "拠点工房",
        harvest: "大量の薪",
        tools: "大型木臼(火入れ加工)",
      },
    },
    {
      title: "野生を文明に：100kg肉加工",
      season: "冬（初頭）",
      description:
        "灰（中和）と炭（吸着）の三段階煮込みで獣臭を除去。完全な食料へ。",
      wisdom:
        "野生肉の有機酸を灰のアルカリで中和。食べられない肉を資源に変える化学の力。",
      impact: "冬期の動物性タンパク質確保。",
      resources: {
        area: "30a (雪下)",
        harvest: "イノシシ肉 100kg",
        tools: "大釜・炭・灰",
      },
    },
    {
      title: "脂質の錬金術：精製ラード",
      season: "冬（加工）",
      description:
        "灰と煮込み、酸化の原因となる成分を石鹸化させて除去。純粋な中性脂肪を抽出。",
      wisdom: "純白のラードは冬の生存保証。酸化に強く長期保存が可能。",
      impact: "高効率なエネルギー貯蔵。",
      resources: {
        area: "拠点内",
        harvest: "精製ラード 15kg",
        tools: "濾過用布",
      },
    },
    {
      title: "最適化食事：小麦モルト粥",
      season: "冬（統合）",
      description:
        "小麦を糖化させ、かぶ、まめ、ラード、保存肉と共に食す。少女の顔色が見違えるほど良くなる。",
      wisdom:
        "アミラーゼで粥を分解。少女の未熟な消化器負担を減らし吸収率を最大化。",
      impact: "生存可能性 98% 到達。",
      resources: {
        area: "30a (休耕)",
        harvest: "558kg (可処分)",
        tools: "発芽用トレイ",
      },
    },
  ],
};
