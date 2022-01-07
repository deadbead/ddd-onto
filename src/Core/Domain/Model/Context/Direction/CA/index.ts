/** Central Accounting */

import { Direction } from "..";

export type DirectionCA = Direction & {};

const ca: DirectionCA = {
  director: { name: "Виолетта Руденко" },
  functions: [
    {
      manager: { name: "Исайкина Елена" },
      name:
        "Начисление заработной платы, премий, налогов, предоставление справок"
    }
  ]
};

export { ca };
