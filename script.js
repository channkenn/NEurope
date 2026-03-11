import { DATABASE } from "./data.js";

/**
 * 8世紀フランク王国 生存戦略・制御スクリプト
 * 改修点：章（Phase）概念の導入とUI反映
 */

const state = {
  log: { phase: 1, year: "all", season: "all", tag: "all", sort: "asc" },
  villager: { year: 1, sort: "social" },
  resource: { category: "all", sort: "year_asc" }, // 絞り込みとソートの状態を追加
};
// 2. グローバル・インターフェースに更新用関数を追加
window.updateTechFilter = () => {
  state.resource.category = document.getElementById(
    "filter-tech-category",
  ).value;
  state.resource.sort = document.getElementById("filter-tech-sort").value;
  renderTech();
};
// --- グローバル・インターフェース ---

window.filterByTag = (tagName) => {
  state.log.tag = tagName;
  const tagSelect = document.getElementById("filter-tag");
  if (tagSelect) tagSelect.value = tagName;
  renderLogs();
};

window.updatePhase = (phaseNum) => {
  state.log.phase = phaseNum;
  state.log.year = "all"; // 章を切り替えたら年は全表示にリセット
  renderLogs();
  // タブの見た目を更新するために再描画
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = templates.logs();
  renderLogs();
};

window.updateVillagerYear = (year) => {
  state.villager.year = year;
  renderVillagers();
};

// --- UI テンプレート ---

const templates = {
  // script.js の templates.origins を拡張
  origins: () => {
    // locationDataを抽出リストに追加して、未定義エラーを防止します
    const { origins, enforcedRules, locationData } = DATABASE;

    return `
        <div class="animate-slide-in space-y-8">
            <div class="glass-panel p-10 rounded-3xl border-l-8 border-l-red-600 shadow-2xl">
                <h2 class="text-3xl font-black text-stone-100 uppercase tracking-tighter mb-2">起源：プロジェクト・スタート</h2>
                <p class="text-red-500 font-bold text-[10px] tracking-widest uppercase border-b border-stone-800 pb-4 mb-6">${origins.timeline}</p>
                <p class="text-lg text-stone-300 italic mb-8 border-l-2 border-stone-700 pl-6 leading-relaxed">${origins.situation}</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    ${origins.assets
                      .map(
                        (asset) => `
                        <div class="bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-[10px] font-black text-stone-500 uppercase tracking-widest">${asset.label}</span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700">${asset.status}</span>
                            </div>
                            <div class="text-xl font-bold text-stone-200">${asset.value}</div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>

            ${
              locationData
                ? `
            <div class="glass-panel p-10 rounded-3xl border-l-8 border-l-emerald-600 bg-stone-900/20 shadow-2xl">
                <h3 class="text-xl font-black text-stone-100 uppercase tracking-tighter mb-6 flex items-center gap-3">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Topology: 物理的拠点・資源配置
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${locationData.coordinates
                      .map(
                        (coord) => `
                        <div class="p-4 rounded-xl bg-stone-950/60 border border-stone-800 hover:border-emerald-900/50 transition-colors">
                            <span class="text-[9px] font-black text-stone-500 uppercase block mb-1">${coord.label}</span>
                            <div class="text-lg font-bold text-emerald-500">${coord.value}</div>
                            <div class="text-[10px] text-stone-600 italic mt-1 leading-tight">${coord.note}</div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
            `
                : ""
            }
            
            <div class="glass-panel p-10 rounded-3xl border-l-8 border-l-amber-600 shadow-2xl bg-stone-900/20">
                <h3 class="text-xl font-black text-stone-100 uppercase tracking-tighter mb-6">System Rules: 土地・社会の強制制約</h3>
                <div class="space-y-4">
                    ${enforcedRules
                      .map(
                        (rule) => `
                        <div class="p-4 rounded-xl bg-stone-950/50 border border-stone-800">
                            <div class="flex justify-between mb-1">
                                <span class="text-[10px] font-black text-amber-500 uppercase">${rule.label}</span>
                            </div>
                            <p class="text-sm text-stone-300 mb-2">${rule.rule}</p>
                            <div class="text-[11px] text-emerald-500 italic border-t border-stone-800 pt-2">
                                <span class="font-bold">STRATEGY:</span> ${rule.oni_san_strategy || rule.oni_san_note}
                            </div>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>
        </div>`;
  },
  logs: () => {
    return `
    <div class="animate-slide-in space-y-6">
        <div class="flex gap-2 bg-stone-900/50 p-2 rounded-xl border border-stone-800 w-fit">
            ${[1, 2, 3, 4]
              .map(
                (p) => `
                <button onclick="updatePhase(${p})" 
                        class="filter-chip ${state.log.phase === p ? "active" : ""}">
                    Phase ${p}
                </button>
            `,
              )
              .join("")}
        </div>

        <div class="flex flex-wrap gap-4 items-end bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">時間軸</label>
                <select id="filter-year" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-28 p-2.5 outline-none"></select>
            </div>
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">季節</label>
                <select id="filter-season" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-28 p-2.5 outline-none">
                    <option value="all">全て</option>
                    <option value="春">春</option><option value="夏">夏</option><option value="秋">秋</option><option value="冬">冬</option>
                </select>
            </div>
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">領域</label>
                <select id="filter-tag" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-40 p-2.5 outline-none"></select>
            </div>
            <div class="space-y-2 ml-auto">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">順序</label>
                <select id="filter-sort" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-28 p-2.5 outline-none">
                    <option value="asc">昇順</option><option value="desc">降順</option>
                </select>
            </div>
        </div>
        <div id="log-container" class="space-y-4"></div>
    </div>`;
  },

  villagers: () => {
    const BASE_AD = 750;
    const availableYears = [
      ...new Set(
        DATABASE.villagers.flatMap((v) => v.history.map((h) => h.year)),
      ),
    ].sort((a, b) => a - b);

    return `
      <div class="animate-slide-in space-y-6">
          <div class="flex flex-wrap gap-4 items-end bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
              <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">観測時期（降臨後）</label>
                  <select id="select-villager-year" onchange="updateVillagerYear(this.value)" 
                          class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-48 p-2.5 outline-none focus:border-emerald-500 transition-colors">
                      ${availableYears
                        .map(
                          (y) => `
                          <option value="${y}" ${state.villager.year == y ? "selected" : ""}>
                              Year ${y} (AD ${BASE_AD + (y - 1)})
                          </option>
                      `,
                        )
                        .join("")}
                  </select>
              </div>
              <p class="text-[10px] text-stone-600 font-bold uppercase mb-2 ml-auto">Population Data tracking active</p>
          </div>
          <div id="villager-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
      </div>`;
  },
  data: () => {
    const categories = [...new Set(DATABASE.techStack.map((t) => t.category))];
    return `
      <div class="animate-slide-in space-y-6">
          <div class="flex justify-between items-center mb-4">
              <h2 class="text-2xl font-black text-stone-100 uppercase tracking-tighter">Technology Tree</h2>
              <span class="text-[10px] text-emerald-500 font-bold border border-emerald-900 px-3 py-1 rounded-full uppercase">Engineering Log</span>
          </div>

          <div class="flex flex-wrap gap-4 items-end bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
              <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">領域カテゴリ</label>
                  <select id="filter-tech-category" onchange="updateTechFilter()" 
                          class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-48 p-2.5 outline-none focus:border-emerald-500 transition-colors">
                      <option value="all">全てのカテゴリ</option>
                      ${categories.map((cat) => `<option value="${cat}" ${state.resource.category === cat ? "selected" : ""}>${cat}</option>`).join("")}
                  </select>
              </div>
              <div class="space-y-2 ml-auto">
                  <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">ソート</label>
                  <select id="filter-tech-sort" onchange="updateTechFilter()" 
                          class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-40 p-2.5 outline-none focus:border-emerald-500 transition-colors">
                      <option value="year_asc" ${state.resource.sort === "year_asc" ? "selected" : ""}>達成年 (昇順)</option>
                      <option value="year_desc" ${state.resource.sort === "year_desc" ? "selected" : ""}>達成年 (降順)</option>
                      <option value="level_desc" ${state.resource.sort === "level_desc" ? "selected" : ""}>習得レベル (高)</option>
                  </select>
              </div>
          </div>

          <div id="tech-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>`;
  },
};

// --- 描画エンジン ---

function renderLogs() {
  const container = document.getElementById("log-container");
  const yearSelect = document.getElementById("filter-year");
  const tagSelect = document.getElementById("filter-tag");

  if (!container) return;

  // 選択されたPhase内のデータのみに絞り込む
  const phaseLogs = DATABASE.logs.filter((l) => l.phase === state.log.phase);

  // セレクトボックスの動的更新
  if (yearSelect && yearSelect.innerHTML.trim() === "") {
    const years = [...new Set(phaseLogs.map((l) => l.year))].sort(
      (a, b) => a - b,
    );
    yearSelect.innerHTML =
      `<option value="all">全期間</option>` +
      years.map((y) => `<option value="${y}">Year ${y}</option>`).join("");

    const tags = [...new Set(phaseLogs.flatMap((l) => l.tags))].sort();
    tagSelect.innerHTML =
      `<option value="all">全技術領域</option>` +
      tags.map((t) => `<option value="${t}">${t}</option>`).join("");

    // イベントリスナー
    ["year", "season", "tag", "sort"].forEach((id) => {
      const el = document.getElementById(`filter-${id}`);
      if (el)
        el.onchange = (e) => {
          state.log[id] = e.target.value;
          renderLogs();
        };
    });
  }

  // フィルタリング実行
  let filtered = phaseLogs.filter((log) => {
    const matchYear = state.log.year === "all" || log.year == state.log.year;
    const matchSeason =
      state.log.season === "all" || log.season === state.log.season;
    const matchTag =
      state.log.tag === "all" || log.tags.includes(state.log.tag);
    return matchYear && matchSeason && matchTag;
  });

  filtered.sort((a, b) =>
    state.log.sort === "asc" ? a.year - b.year : b.year - a.year,
  );

  container.innerHTML = filtered.length
    ? filtered
        .map(
          (log) => `
    <div class="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500 shadow-xl mb-4 animate-slide-in">
        <div class="flex justify-between items-start mb-4">
            <span class="text-[10px] font-black bg-stone-800 px-2 py-1 rounded text-emerald-500">YEAR ${log.year} / ${log.season}</span>
            <div class="flex gap-2">${log.tags.map((t) => `<button onclick="filterByTag('${t}')" class="text-[8px] text-stone-500 border border-stone-800 px-2 py-0.5 rounded-full hover:text-emerald-500 hover:border-emerald-800 transition-colors">${t}</button>`).join("")}</div>
        </div>
        <h3 class="text-lg font-bold text-stone-100 mb-2">${log.title}</h3>
        <p class="text-sm text-stone-400 leading-relaxed mb-4">${log.event}</p>
        <div class="bg-stone-950/50 p-4 rounded-xl border border-stone-800/50">
            <p class="text-[11px] text-emerald-400/80 italic leading-relaxed"><span class="font-bold mr-2">LOGIC:</span>${log.wisdom}</p>
        </div>
    </div>
  `,
        )
        .join("")
    : `<p class="text-stone-500 text-sm italic p-10 text-center">このフェーズのログは未記録です。</p>`;
}
// script.js の renderVillagers 関数を差し替え

// --- 描画エンジン ---
function renderVillagers() {
  const container = document.getElementById("villager-grid");
  if (!container) return;

  const targetYear = parseInt(state.villager.year);
  const BASE_AD = 750;

  const displayData = DATABASE.villagers
    .map((v) => {
      const record = [...v.history]
        .filter((h) => h.year <= targetYear)
        .sort((a, b) => b.year - a.year)[0];

      const fatherName = v.father
        ? DATABASE.villagers.find((p) => p.id === v.father)?.name
        : null;
      const motherName = v.mother
        ? DATABASE.villagers.find((p) => p.id === v.mother)?.name
        : null;
      const spouseName = v.spouse
        ? DATABASE.villagers.find((p) => p.id === v.spouse)?.name
        : null;

      if (!record) return null;

      return {
        name: v.name,
        family: { fatherName, motherName, spouseName },
        age: targetYear - v.birthYearOffset,
        ad: BASE_AD + (targetYear - 1),
        role: record.role,
        status: record.status,
        evaluation: record.evaluation,
        traits: record.traits,
      };
    })
    .filter((v) => v !== null);

  container.innerHTML = displayData
    .map(
      (v) => `
    <div class="glass-panel p-6 rounded-2xl border border-stone-800 flex gap-6 animate-slide-in shadow-xl relative overflow-hidden">
        <div class="flex-1 relative z-10">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-xl font-black text-stone-100 flex items-center gap-2">
                        ${v.name}
                        ${v.family.spouseName ? `<span class="text-[9px] px-2 py-0.5 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded-full font-bold tracking-tighter">♥ ${v.family.spouseName}</span>` : ""}
                    </h3>
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        <span class="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">${v.age}歳</span>
                        <span class="text-[10px] text-stone-600 font-bold">/</span>
                        <span class="text-[10px] text-stone-500 font-bold uppercase tracking-widest">${v.status}</span>
                        ${
                          v.family.fatherName || v.family.motherName
                            ? `
                            <span class="text-[10px] text-stone-600 font-bold">/</span>
                            <span class="text-[9px] text-stone-500 font-bold">Parents: ${[v.family.fatherName, v.family.motherName].filter(Boolean).join(" & ")}</span>
                        `
                            : ""
                        }
                    </div>
                </div>
                <span class="text-[10px] bg-emerald-900/30 text-emerald-500 px-2 py-1 rounded border border-emerald-800/50 font-black">${v.role}</span>
            </div>
            <p class="text-xs text-stone-400 mb-4 leading-relaxed border-l-2 border-stone-800 pl-4">${v.evaluation}</p>
            <div class="flex flex-wrap gap-2">
                ${v.traits.map((t) => `<span class="text-[9px] bg-stone-900 text-stone-500 px-2 py-1 rounded border border-stone-800/50">${t}</span>`).join("")}
            </div>
        </div>
    </div>`,
    )
    .join("");
}
// 4. renderTech 関数のロジック実装
function renderTech() {
  const container = document.getElementById("tech-grid");
  if (!container) return;

  let filtered = [...DATABASE.techStack];

  // フィルタリング
  if (state.resource.category !== "all") {
    filtered = filtered.filter((t) => t.category === state.resource.category);
  }

  // ソート
  filtered.sort((a, b) => {
    if (state.resource.sort === "year_asc")
      return a.achievedYear - b.achievedYear;
    if (state.resource.sort === "year_desc")
      return b.achievedYear - a.achievedYear;
    if (state.resource.sort === "level_desc") return b.level - a.level;
    return 0;
  });

  container.innerHTML = filtered
    .map(
      (tech) => `
    <div class="glass-panel p-6 rounded-2xl border border-stone-800 hover:border-emerald-500/50 transition-all group">
        <div class="flex justify-between items-start mb-4">
            <div class="space-y-1">
                <span class="text-[9px] font-black text-emerald-500 uppercase tracking-widest">${tech.category}</span>
                <h3 class="text-lg font-bold text-stone-200 group-hover:text-emerald-400 transition-colors">${tech.name}</h3>
            </div>
            <div class="text-right">
                <div class="text-[10px] font-black text-stone-500 uppercase">Year ${tech.achievedYear}</div>
                <div class="text-xl font-black text-stone-300">${tech.level}%</div>
            </div>
        </div>
        <p class="text-sm text-stone-400 mb-4 leading-relaxed line-clamp-2">${tech.description}</p>
        <div class="p-3 bg-stone-950/50 rounded-lg border border-stone-800/50">
            <span class="text-[9px] font-black text-stone-600 uppercase block mb-1">Logic / Why</span>
            <p class="text-[11px] text-stone-500 italic">${tech.logic}</p>
        </div>
    </div>
  `,
    )
    .join("");
}
function switchTab(tabId) {
  const mainContent = document.getElementById("main-content");
  const navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((btn) => {
    const isActive = btn.dataset.target === tabId;
    btn.classList.toggle("bg-emerald-600", isActive);
    btn.classList.toggle("text-white", isActive);
    btn.classList.toggle("text-stone-500", !isActive);
  });
  mainContent.innerHTML = templates[tabId] ? templates[tabId]() : "";
  if (tabId === "logs") renderLogs();
  if (tabId === "villagers") renderVillagers();
  if (tabId === "data") renderTech(); // 追加
}

function init() {
  const healthBarContainer = document.getElementById("progress-bars");
  if (healthBarContainer) {
    healthBarContainer.innerHTML = DATABASE.healthMetrics
      .map(
        (item) => `
        <div class="space-y-2">
            <div class="flex justify-between text-[9px] font-black uppercase text-stone-600 tracking-tighter">
                <span>${item.label}</span><span class="text-stone-400">${item.progress}%</span>
            </div>
            <div class="h-1.5 bg-stone-900 rounded-full overflow-hidden">
                <div class="h-full ${item.color} transition-all duration-1000" style="width: ${item.progress}%"></div>
            </div>
        </div>`,
      )
      .join("");
  }
  document
    .querySelectorAll(".nav-btn")
    .forEach((btn) => (btn.onclick = () => switchTab(btn.dataset.target)));
  switchTab("origins");
}

document.addEventListener("DOMContentLoaded", init);
