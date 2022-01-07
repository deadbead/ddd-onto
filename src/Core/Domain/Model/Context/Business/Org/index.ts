/**   */

import { Business } from "..";

export interface iBusinessOrg extends Business {
  name: string;
  title: string;
}

class BusinessOrgEntity implements iBusinessOrg {
  name: string;
  title: string;

  constructor(init: iBusinessOrg) {
    this.name = init.name;
    this.title = init.title;
  }
}

const rsv = new BusinessOrgEntity({
  name: "РСВ",
  title: "ООО Русский Cтандарт Водка"
});

const bsz = new BusinessOrgEntity({
  name: "БСЗ",
  title: "Буинский спиртозавод"
});

export { rsv, bsz };
