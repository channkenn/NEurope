import { infrastructureTech } from "./infrastructure.js";
import { agricultureTech } from "./agriculture.js";
import { engineeringTech } from "./engineering.js";
import { materialTech } from "./material.js";
import { systemsTech } from "./systems.js";

export const techStack = [
  ...infrastructureTech,
  ...agricultureTech,
  ...engineeringTech,
  ...materialTech,
  ...systemsTech,
];
