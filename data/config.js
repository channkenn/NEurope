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
};
