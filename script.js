import { DATABASE } from "./data.js";

/**
 * 8世紀フランク王国 生存戦略・制御スクリプト
 * 設計原則: 関数の極小化、単一責任、自己説明的な命名
 */

const state = {
  log: { year: "all", season: "all", tag: "all", sort: "asc" },
  villager: { year: 4, sort: "social" },
  resource: { year: 1, season: "春", sort: "category" },
};

/**
 * 外部から呼び出し可能なフィルタリング・インターフェース
 * 表示されているタグをクリックした際に実行される
 */
window.filterByTag = (tagName) => {
  state.log.tag = tagName;

  // UI側のセレクトボックスの状態を同期
  const tagSelect = document.getElementById("filter-tag");
  if (tagSelect) {
    tagSelect.value = tagName;
  }

  renderLogs();
};

const templates = {
  origins: () => {
    const { origins } = DATABASE;
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
            </div>
        `;
  },

  logs: () => {
    return `
    <div class="animate-slide-in space-y-6">
        <div class="flex flex-wrap gap-4 items-end bg-stone-900/50 p-6 rounded-2xl border border-stone-800">
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">時間軸</label>
                <select id="filter-year" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-28 p-2.5 focus:ring-emerald-500 outline-none"></select>
            </div>
            
            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">季節</label>
                <select id="filter-season" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-28 p-2.5 focus:ring-emerald-500 outline-none">
                    <option value="all">全て</option>
                    <option value="春">春</option><option value="夏">夏</option><option value="秋">秋</option><option value="冬">冬</option>
                </select>
            </div>

            <div class="space-y-2">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">技術・専門領域</label>
                <select id="filter-tag" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-40 p-2.5 focus:ring-emerald-500 outline-none"></select>
            </div>

            <div class="space-y-2 ml-auto">
                <label class="text-[10px] font-black uppercase text-stone-500 tracking-widest">順序</label>
                <select id="filter-sort" class="bg-stone-950 border border-stone-700 text-stone-300 text-xs rounded-lg block w-28 p-2.5 focus:ring-emerald-500 outline-none">
                    <option value="asc">昇順</option><option value="desc">降順</option>
                </select>
            </div>
        </div>
        <div id="log-container" class="space-y-4"></div>
    </div>
    `;
  },

  villagers: () => {
    return `
            <div class="animate-slide-in space-y-6">
                <div class="flex gap-2 bg-stone-900/50 p-2 rounded-xl border border-stone-800 w-fit">
                    ${[1, 2, 3, 4].map((y) => `<button onclick="updateVillagerYear(${y})" class="filter-chip ${state.villager.year === y ? "active" : ""}">Year ${y}</button>`).join("")}
                </div>
                <div id="villager-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            </div>
        `;
  },
};

function renderLogs() {
  const container = document.getElementById("log-container");
  const yearSelect = document.getElementById("filter-year");
  const seasonSelect = document.getElementById("filter-season");
  const tagSelect = document.getElementById("filter-tag");
  const sortSelect = document.getElementById("filter-sort");

  if (!container) return;

  // 動的プルダウン生成 (初回のみ)
  if (yearSelect && yearSelect.innerHTML.trim() === "") {
    // 年次
    const years = [...new Set(DATABASE.logs.map((l) => l.year))].sort(
      (a, b) => a - b,
    );
    yearSelect.innerHTML =
      `<option value="all">全期間</option>` +
      years.map((y) => `<option value="${y}">Year ${y}</option>`).join("");

    // タグ
    const tags = [...new Set(DATABASE.logs.flatMap((l) => l.tags))].sort();
    tagSelect.innerHTML =
      `<option value="all">全技術領域</option>` +
      tags.map((t) => `<option value="${t}">${t}</option>`).join("");

    // 初期値セット
    yearSelect.value = state.log.year;
    seasonSelect.value = state.log.season;
    tagSelect.value = state.log.tag;
    sortSelect.value = state.log.sort;

    // イベント登録
    [yearSelect, seasonSelect, tagSelect, sortSelect].forEach((el) => {
      el.onchange = (e) => {
        const key = e.target.id.replace("filter-", "");
        state.log[key] = e.target.value;
        renderLogs();
      };
    });
  }

  // フィルタリング
  let filtered = DATABASE.logs.filter((log) => {
    const matchYear = state.log.year === "all" || log.year == state.log.year;
    const matchSeason =
      state.log.season === "all" || log.season === state.log.season;
    const matchTag =
      state.log.tag === "all" || log.tags.includes(state.log.tag);
    return matchYear && matchSeason && matchTag;
  });

  // ソート
  filtered.sort((a, b) =>
    state.log.sort === "asc" ? a.year - b.year : b.year - a.year,
  );

  // 描画
  container.innerHTML = filtered
    .map(
      (log) => `
    <div class="glass-panel p-6 rounded-2xl border-l-4 border-emerald-500 shadow-xl mb-4 animate-slide-in">
        <div class="flex justify-between items-start mb-4">
            <span class="text-[10px] font-black bg-stone-800 px-2 py-1 rounded text-emerald-500">YEAR ${log.year} / ${log.season}</span>
            <div class="flex gap-2">${log.tags.map((t) => `<button onclick="filterByTag('${t}')" class="text-[8px] text-stone-500 border border-stone-800 px-2 py-0.5 rounded-full hover:bg-emerald-900/20 hover:text-emerald-500 hover:border-emerald-800 transition-colors">${t}</button>`).join("")}</div>
        </div>
        <h3 class="text-lg font-bold text-stone-100 mb-2">${log.title}</h3>
        <p class="text-sm text-stone-400 leading-relaxed mb-4">${log.event}</p>
        <div class="bg-stone-950/50 p-4 rounded-xl border border-stone-800/50">
            <p class="text-[11px] text-emerald-400/80 italic leading-relaxed"><span class="font-bold mr-2">LOGIC:</span>${log.wisdom}</p>
        </div>
    </div>
  `,
    )
    .join("");
}

function renderVillagers() {
  const container = document.getElementById("villager-grid");
  if (!container) return;
  const filtered = DATABASE.villagers.filter(
    (v) => v.year === state.villager.year,
  );
  container.innerHTML = filtered
    .map(
      (v) => `
    <div class="glass-panel p-6 rounded-2xl border border-stone-800 flex gap-6">
        <div class="flex-1">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-black text-stone-100">${v.name}</h3>
                <span class="text-[10px] bg-emerald-900/30 text-emerald-500 px-2 py-1 rounded border border-emerald-800/50">${v.role}</span>
            </div>
            <p class="text-xs text-stone-400 mb-4 leading-relaxed">${v.evaluation}</p>
            <div class="flex flex-wrap gap-2">${v.traits.map((t) => `<span class="text-[9px] bg-stone-900 text-stone-500 px-2 py-1 rounded">${t}</span>`).join("")}</div>
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
    if (btn.dataset.target === tabId) {
      btn.classList.add(
        "bg-emerald-600",
        "text-white",
        "shadow-lg",
        "scale-[1.02]",
      );
      btn.classList.remove("text-stone-500", "hover:bg-stone-900");
    } else {
      btn.classList.remove(
        "bg-emerald-600",
        "text-white",
        "shadow-lg",
        "scale-[1.02]",
      );
      btn.classList.add("text-stone-500", "hover:bg-stone-900");
    }
  });
  mainContent.innerHTML = templates[tabId] ? templates[tabId]() : "";
  if (tabId === "logs") renderLogs();
  if (tabId === "villagers") renderVillagers();
}

window.updateVillagerYear = (year) => {
  state.villager.year = year;
  renderVillagers();
};

function init() {
  const healthBarContainer = document.getElementById("progress-bars");
  const navButtons = document.querySelectorAll(".nav-btn");
  if (healthBarContainer) {
    healthBarContainer.innerHTML = DATABASE.healthMetrics
      .map(
        (item) => `
        <div class="space-y-2">
            <div class="flex justify-between text-[9px] font-black uppercase text-stone-600 tracking-tighter">
                <span>${item.label}</span><span class="text-stone-400">${item.progress}%</span>
            </div>
            <div class="h-1.5 bg-stone-900 rounded-full overflow-hidden shadow-inner">
                <div class="h-full ${item.color} transition-all duration-1000 ease-out" style="width: ${item.progress}%"></div>
            </div>
        </div>
    `,
      )
      .join("");
  }
  navButtons.forEach(
    (btn) => (btn.onclick = () => switchTab(btn.dataset.target)),
  );
  switchTab("origins");
}

document.addEventListener("DOMContentLoaded", init);
