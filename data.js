/**
 * DATABASE HUB
 * 設計原則：単一責任に基づき分割された各データモジュールを統合する。
 * 外部のscript.jsからは、このファイルを通じてのみデータにアクセスする。
 */

import { config } from "./data/config.js";
import { villagers } from "./data/villagers.js";
import { logs_y1 } from "./data/logs_y1.js";
import { logs_y2 } from "./data/logs_y2.js";
import { logs_y3 } from "./data/logs_y3.js";
import { logs_y4 } from "./data/logs_y4.js";
import { logs_y5 } from "./data/logs_y5.js";
import { logs_y6 } from "./data/logs_y6.js";

export const DATABASE = {
  // 基本設定（起源、健康指標など）
  ...config,

  // 全ての年のログを一つの配列に統合
  logs: [
    ...logs_y1,
    ...logs_y2,
    ...logs_y3,
    ...logs_y4,
    ...logs_y5,
    ...logs_y6,
  ],

  // 登場人物データ
  villagers: villagers,
};

console.log("DATABASE Initialized: System architecture optimized.");
