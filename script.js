
import { DATABASE } from './data.js';

/**
 * 8世紀フランク王国 生存戦略・制御スクリプト
 */

// ログ表示用ステート
const logState = {
    year: 'all',
    season: 'all',
    tag: 'all',
    sort: 'asc' // 'asc' (昇順) or 'desc' (降順)
};

const templates = {
    // 0. 起源
    origins: () => {
        const { origins } = DATABASE;
        return `
            <div class="animate-slide-in space-y-8">
                <div class="glass-panel p-10 rounded-3xl border-l-8 border-l-red-600 shadow-2xl">
                    <h2 class="text-3xl font-black text-stone-100 uppercase tracking-tighter mb-2">起源：プロジェクト・スタート</h2>
                    <p class="text-red-500 font-bold text-[10px] tracking-widest uppercase border-b border-stone-800 pb-4 mb-6">${origins.timeline}</p>
                    <p class="text-lg text-stone-300 italic mb-8 border-l-2 border-stone-700 pl-6 leading-relaxed">${origins.situation}</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${origins.assets.map(asset => `
                            <div class="p-5 bg-stone-950 rounded-xl border border-stone-800 shadow-inner group transition-all hover:border-stone-600">
                                <div class="flex justify-between items-center mb-1">
                                    <span class="text-[9px] font-black text-stone-600 uppercase tracking-widest">${asset.label}</span>
                                    <span class="text-[9px] font-black px-2 py-0.5 rounded ${asset.status === 'Critical' ? 'bg-red-950 text-red-500 border-red-900' : 'bg-stone-900 text-stone-500 border-stone-800'} border">${asset.status}</span>
                                </div>
                                <p class="text-sm font-bold text-stone-200 group-hover:text-emerald-500 transition-colors">${asset.value}</p>
                            </div>
                        `).join('')}
                    </div>

                    <div class="mt-8 p-6 bg-emerald-950/20 border border-emerald-900/30 rounded-2xl">
                        <h4 class="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">最終勝利条件 (Core Objective)</h4>
                        <p class="text-sm text-stone-300 leading-relaxed">${origins.missionDescription}</p>
                    </div>
                </div>
            </div>
        `;
    },

    // 1. サマリ
    status: () => `
        <div class="animate-slide-in space-y-6">
            <div class="p-8 bg-stone-900/40 border border-stone-800 rounded-3xl flex flex-col md:flex-row gap-8 items-center shadow-2xl">
                <div class="w-32 h-32 rounded-full border-8 border-emerald-900/30 flex items-center justify-center relative bg-stone-950 shrink-0">
                    <span class="text-3xl font-black text-emerald-500">Y2</span>
                    <div class="absolute inset-0 border-2 border-emerald-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <div class="flex-1 text-center md:text-left">
                    <h3 class="text-emerald-500 font-black uppercase text-xs tracking-widest mb-2">現在の戦略フェーズ：開拓拡張</h3>
                    <p class="text-stone-300 text-sm leading-relaxed mb-4">
                        1年次の生存サイクルを完遂。現代知介入により家畜と畑を再生。2年次は「社会防壁」の構築と、90aへの開墾拡張を並行して実施する。
                    </p>
                    <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                        <div class="px-3 py-1 bg-stone-950 border border-stone-800 rounded text-[9px] font-bold text-stone-500">柳要塞：構築済</div>
                        <div class="px-3 py-1 bg-stone-950 border border-stone-800 rounded text-[9px] font-bold text-emerald-500">大型木臼：稼働中</div>
                        <div class="px-3 py-1 bg-stone-950 border border-stone-800 rounded text-[9px] font-bold text-emerald-500">文字教育：進行中</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 2. 時系列ログ (フィルタ付き)
    logs: () => {
        // ユニークなタグを抽出
        const allTags = [...new Set(DATABASE.logs.flatMap(log => log.tags))];
        const seasons = ['春', '夏', '秋', '冬'];
        const years = [...new Set(DATABASE.logs.map(log => log.year))];

        return `
            <div class="animate-slide-in space-y-6">
                <header class="sticky top-0 z-20 bg-stone-950/90 backdrop-blur-xl border-b border-stone-800 pb-6">
                    <h2 class="text-2xl font-black uppercase text-stone-100 mb-6">時系列改善ログ・マトリクス</h2>
                    
                    <!-- フィルタバー -->
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <!-- 年度 -->
                        <div class="space-y-1.5">
                            <label class="text-[8px] font-black text-stone-600 uppercase tracking-widest block">Select Year</label>
                            <div class="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
                                <button onclick="window.updateLogFilter('year', 'all')" class="filter-chip ${logState.year === 'all' ? 'active' : ''}">ALL</button>
                                ${years.map(y => `<button onclick="window.updateLogFilter('year', ${y})" class="filter-chip ${logState.year === y ? 'active' : ''}">Y${y}</button>`).join('')}
                            </div>
                        </div>
                        <!-- 季節 -->
                        <div class="space-y-1.5">
                            <label class="text-[8px] font-black text-stone-600 uppercase tracking-widest block">Select Season</label>
                            <div class="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
                                <button onclick="window.updateLogFilter('season', 'all')" class="filter-chip ${logState.season === 'all' ? 'active' : ''}">ALL</button>
                                ${seasons.map(s => `<button onclick="window.updateLogFilter('season', '${s}')" class="filter-chip ${logState.season === s ? 'active' : ''}">${s}</button>`).join('')}
                            </div>
                        </div>
                        <!-- タグ (Dropdown風) -->
                        <div class="space-y-1.5">
                            <label class="text-[8px] font-black text-stone-600 uppercase tracking-widest block">Select Strategy</label>
                            <select onchange="window.updateLogFilter('tag', this.value)" class="w-full bg-stone-900 border border-stone-800 text-[10px] font-bold p-1.5 rounded outline-none focus:border-emerald-500 text-stone-300">
                                <option value="all">全ての戦略タグ</option>
                                ${allTags.map(t => `<option value="${t}" ${logState.tag === t ? 'selected' : ''}>${t}</option>`).join('')}
                            </select>
                        </div>
                        <!-- ソート -->
                        <div class="space-y-1.5">
                            <label class="text-[8px] font-black text-stone-600 uppercase tracking-widest block">Order</label>
                            <button onclick="window.toggleLogSort()" class="w-full bg-stone-900 border border-stone-800 text-[10px] font-black p-1.5 rounded flex items-center justify-between hover:bg-stone-800 transition-colors">
                                <span>${logState.sort === 'asc' ? '昇順（時系列）' : '降順（最新）'}</span>
                                <svg class="w-3 h-3 ${logState.sort === 'desc' ? 'rotate-180' : ''} transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </div>
                    </div>
                </header>

                <div id="logs-container" class="space-y-10 py-6 min-h-[400px]">
                    <!-- ここにフィルタ結果が描画されます -->
                </div>
            </div>
        `;
    },

    // 3. 住民リスト
    villagers: () => `
        <div class="animate-slide-in grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            ${DATABASE.villagers.map(v => `
                <div class="glass-panel p-6 rounded-2xl border-t border-stone-800 group hover:border-emerald-600/30 transition-all shadow-2xl bg-stone-900/30">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="text-lg font-black text-stone-100 group-hover:text-emerald-500 transition-colors">${v.name}</h3>
                            <p class="text-[10px] font-black text-stone-500 uppercase tracking-widest">${v.role} (${v.age})</p>
                        </div>
                        <span class="text-[9px] font-black px-2 py-1 bg-stone-950 border border-stone-800 rounded uppercase text-stone-400">${v.status}</span>
                    </div>
                    <p class="text-xs text-stone-400 mb-6 italic leading-relaxed h-12">"${v.evaluation}"</p>
                    
                    <div class="space-y-3 mb-6">
                        <div class="space-y-1">
                            <div class="flex justify-between text-[8px] font-black text-stone-600 uppercase"><span>生命力</span><span>${v.health}%</span></div>
                            <div class="h-1 bg-stone-950 rounded-full overflow-hidden"><div class="h-full bg-emerald-600" style="width: ${v.health}%"></div></div>
                        </div>
                        <div class="space-y-1">
                            <div class="flex justify-between text-[8px] font-black text-stone-600 uppercase"><span>社会的地位</span><span>${v.social}%</span></div>
                            <div class="h-1 bg-stone-950 rounded-full overflow-hidden"><div class="h-full bg-blue-600" style="width: ${v.social}%"></div></div>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        ${v.traits.map(t => `<span class="text-[8px] font-black uppercase px-2 py-0.5 bg-stone-900 border border-stone-800 text-stone-400 rounded-sm">${t}</span>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `,

    // 4. データ分析
    data: () => {
        const { stats } = DATABASE;
        return `
            <div class="animate-slide-in glass-panel p-10 rounded-3xl space-y-10 shadow-2xl">
                <h2 class="text-2xl font-black uppercase tracking-tighter text-stone-100">資源分析マトリクス</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div class="p-8 bg-stone-950 rounded-2xl border border-stone-900 shadow-xl group hover:border-emerald-600/30 transition-all">
                        <p class="text-[10px] text-stone-500 font-black uppercase mb-1 tracking-widest">可処分穀物量</p>
                        <p class="text-4xl font-black text-emerald-500">${stats.grainNet}<span class="text-sm ml-1 text-stone-500">kg</span></p>
                        <p class="mt-4 text-[9px] text-stone-600 leading-tight uppercase font-black">Y1冬期 備蓄量</p>
                    </div>
                    <div class="p-8 bg-stone-950 rounded-2xl border border-stone-900 shadow-xl group hover:border-blue-600/30 transition-all">
                        <p class="text-[10px] text-stone-500 font-black uppercase mb-1 tracking-widest">生存期待値</p>
                        <p class="text-4xl font-black text-blue-500">${stats.survivalProb}<span class="text-sm ml-1 text-stone-500">%</span></p>
                        <p class="mt-4 text-[9px] text-stone-600 leading-tight uppercase font-black">現代科学介入後の推定値</p>
                    </div>
                    <div class="p-8 bg-stone-950 rounded-2xl border border-stone-900 shadow-xl group hover:border-amber-600/30 transition-all">
                        <p class="text-[10px] text-stone-500 font-black uppercase mb-1 tracking-widest">インフラ段階</p>
                        <p class="text-xl font-black text-amber-500 uppercase">Level ${stats.infraLevel}</p>
                        <p class="mt-4 text-[9px] text-stone-600 leading-tight uppercase font-black">木臼・排水・柳要塞</p>
                    </div>
                </div>
                <div class="p-8 bg-stone-900/50 rounded-2xl border border-stone-800">
                    <h4 class="text-xs font-black uppercase text-emerald-500 mb-4 tracking-widest">Analysis Notes</h4>
                    <p class="text-xs text-stone-400 leading-relaxed italic">"${stats.analysisNote}"</p>
                </div>
            </div>
        `;
    }
};

/**
 * ログ描画エンジン
 */
function renderLogs() {
    const container = document.getElementById('logs-container');
    if (!container) return;

    // フィルタリング処理
    let filteredLogs = DATABASE.logs.filter(log => {
        const yearMatch = logState.year === 'all' || log.year === logState.year;
        const seasonMatch = logState.season === 'all' || log.season === logState.season;
        const tagMatch = logState.tag === 'all' || log.tags.includes(logState.tag);
        return yearMatch && seasonMatch && tagMatch;
    });

    // ソート処理
    const seasonOrder = { '春': 1, '夏': 2, '秋': 3, '冬': 4 };
    filteredLogs.sort((a, b) => {
        if (a.year !== b.year) {
            return logState.sort === 'asc' ? a.year - b.year : b.year - a.year;
        }
        const aS = seasonOrder[a.season] || 0;
        const bS = seasonOrder[b.season] || 0;
        return logState.sort === 'asc' ? aS - bS : bS - aS;
    });

    if (filteredLogs.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-20 border-2 border-dashed border-stone-900 rounded-3xl opacity-50">
                <p class="text-sm font-bold text-stone-600 uppercase tracking-widest">No logs match criteria</p>
                <button onclick="window.resetLogFilters()" class="mt-4 text-[10px] font-black text-emerald-500 hover:text-emerald-400 underline underline-offset-4 uppercase">Clear All Filters</button>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="relative border-l-2 border-stone-800 ml-4 pl-8 space-y-10 py-4">
            ${filteredLogs.map(log => `
                <div class="relative group animate-slide-in">
                    <div class="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-emerald-600 border-4 border-stone-950 transition-transform group-hover:scale-125 shadow-lg shadow-emerald-500/20"></div>
                    <div class="glass-panel p-6 rounded-2xl border border-stone-800/50 hover:border-emerald-900/40 hover:bg-stone-900/60 transition-all shadow-xl">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-[10px] font-black uppercase tracking-widest text-stone-500">Year ${log.year} / ${log.season}</span>
                            <span class="text-[9px] font-black text-emerald-500 uppercase border border-emerald-900/30 px-2 py-0.5 rounded tracking-tighter">IDENTIFIED</span>
                        </div>
                        <h3 class="text-lg font-black text-stone-100 mb-3 group-hover:text-emerald-500 transition-colors">${log.title}</h3>
                        <p class="text-xs text-stone-400 leading-relaxed mb-4">${log.event}</p>
                        <div class="p-3 bg-stone-950/80 border border-stone-800 rounded-lg mb-4">
                            <p class="text-[10px] text-emerald-500 font-bold uppercase mb-1 tracking-widest">設計思想 (Why)</p>
                            <p class="text-xs text-stone-300 italic leading-relaxed font-serif">${log.wisdom}</p>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            ${log.tags.map(tag => `<button onclick="window.updateLogFilter('tag', '${tag}')" class="text-[8px] font-black uppercase px-2 py-0.5 bg-stone-950 border border-stone-800 text-stone-600 rounded-sm hover:text-emerald-500 transition-colors">${tag}</button>`).join('')}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

/**
 * グローバル公開関数（インラインonclick用）
 */
window.updateLogFilter = (key, value) => {
    logState[key] = value;
    switchTab('logs'); // 再描画
};

window.toggleLogSort = () => {
    logState.sort = logState.sort === 'asc' ? 'desc' : 'asc';
    switchTab('logs');
};

window.resetLogFilters = () => {
    logState.year = 'all';
    logState.season = 'all';
    logState.tag = 'all';
    switchTab('logs');
};

/**
 * タブ切り替え
 */
function switchTab(tabId) {
    const mainContent = document.getElementById('main-content');
    const navButtons = document.querySelectorAll('.nav-btn');
    if (!mainContent || !templates[tabId]) return;

    navButtons.forEach(btn => {
        const target = btn.getAttribute('data-target');
        if (target === tabId) {
            btn.classList.add('bg-emerald-600', 'text-white', 'shadow-lg', 'scale-[1.02]');
            btn.classList.remove('text-stone-500', 'hover:bg-stone-900');
        } else {
            btn.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg', 'scale-[1.02]');
            btn.classList.add('text-stone-500', 'hover:bg-stone-900');
        }
    });

    mainContent.innerHTML = templates[tabId]();
    
    // ログタブの場合、サブ描画を実行
    if (tabId === 'logs') {
        renderLogs();
    }
}

/**
 * 初期化
 */
function init() {
    const healthBarContainer = document.getElementById('progress-bars');
    const navButtons = document.querySelectorAll('.nav-btn');

    if (healthBarContainer) {
        healthBarContainer.innerHTML = DATABASE.healthMetrics.map(item => `
            <div class="space-y-2">
                <div class="flex justify-between text-[9px] font-black uppercase text-stone-600 tracking-tighter">
                    <span>${item.label}</span>
                    <span class="text-stone-400">${item.progress}%</span>
                </div>
                <div class="h-1.5 bg-stone-900 rounded-full overflow-hidden shadow-inner">
                    <div class="h-full ${item.color} transition-all duration-1000 ease-out" style="width: ${item.progress}%"></div>
                </div>
            </div>
        `).join('');
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            if (target) switchTab(target);
        });
    });

    switchTab('origins');
}

document.addEventListener('DOMContentLoaded', init);
