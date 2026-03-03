export const config = {
  origins: {
    timeline: "8世紀フランク王国・入植地（初年度春）",
    situation:
      "両親の死亡直後。8歳の少女が一人残された。生き残るための科学的介入を開始する。",
    assets: [
      {
        id: "livestock",
        label: "家畜（瀕死）",
        value: "雌羊1, 雌鶏3",
        status: "Critical",
      },
      {
        id: "seeds",
        label: "種籾（40%）",
        value: "小麦, 大麦, 燕麦",
        status: "Low",
      },
      {
        id: "land_30",
        label: "既開墾地",
        value: "30a (痩せ地)",
        status: "Active",
      },
      {
        id: "land_90",
        label: "開墾予定地",
        value: "90a(未開墾)",
        status: "Active",
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
  healthMetrics: [
    {
      id: "sanitation",
      label: "公衆衛生・免疫",
      progress: 85,
      color: "bg-blue-600",
    },
    {
      id: "nutrition",
      label: "栄養・体組成",
      progress: 78,
      color: "bg-emerald-600",
    },
    {
      id: "social",
      label: "社会的受容度",
      progress: 62,
      color: "bg-amber-600",
    },
    {
      id: "production",
      label: "生産資本・技術",
      progress: 55,
      color: "bg-purple-600",
    },
  ],
  enforcedRules: [
    {
      id: "agricultural_cycle",
      label: "二圃制・強制耕作の義務",
      rule: "村の全耕作地を二分割し、全戸一斉に休耕と作付けを切り替える。個別のサイクル変更は厳禁。",
      oni_san_strategy:
        "休耕期に生じる『空白時間』を、微生物リアクター（土中発酵）の稼働に最大活用する。",
    },
    {
      id: "new_land_right",
      label: "新規開墾地の私有権",
      rule: "既存の共有地外で自力開墾した土地は、開墾者の管理・所有物と認める。",
      oni_san_strategy: "90aの開拓予定地の森があるのでそこを開墾する。",
    },
    {
      id: "communal_plowing",
      label: "共同プラウ（重犂）の供出",
      rule: "深耕時には村の牛と労働力を集約する。家畜を持たぬ者は、人力による重労働を提供せねばならない。",
      oni_san_strategy: "労働は提供するが耕地のプラウ自体は辞退する。",
    },
    {
      id: "gleaning_rights",
      label: "落穂・野草の採集権（貧者の権利）",
      rule: "収穫後の耕作地や未利用の林・野において、誰でも落穂や野草、薪を採集して良い。",
      oni_san_strategy:
        "この権利を隠れ蓑に、有用な窒素固定植物（緑肥）の種子や、発酵に必要な菌床を村中から回収する。",
    },
    {
      id: "mandatory_tax",
      label: "二重徴収（領主・教会）",
      rule: "領主へ収穫の10%＋賦役。教会へ収穫の10%（十分の一税）。合計20%の定率負担。",
      oni_san_status:
        "システムの維持コストとして、最優先で『最高品質』を分離・確保。",
    },
  ],
};
