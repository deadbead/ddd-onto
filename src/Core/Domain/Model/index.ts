import { Business } from "./Context/Business";
import { iBusinessOrg } from "./Context/Business/Org";
import * as organizations from "./Context/Business/Org";

const business: Business = {
  language: {
    terms: [
      { name: "направление", description: "описание бизнес-направления" },
      { name: "цель", description: "описание бизнес-цели" },
      { name: "функция", description: "описание бизнес-функции" }
    ]
  }
};

const businessOrg: iBusinessOrg = {
  name: "Организация",
  title: "Конкретное юридическое лицо",
  entries: organizations,
  language: {
    terms: [
      {
        name: "организация",
        description: "описание что такое организация",
        deprecatedTerms: ["компания"]
      },
      {
        name: "дирекция",
        description: "описание что такое дирекция",
        deprecatedTerms: ["направление"]
      },
      {
        name: "подразделение",
        description: "описание что такое подразделение",
        deprecatedTerms: ["отдел"]
      },
      { name: "должность", description: "описание что такое должность" }
    ]
  }
};

export { business, businessOrg };
