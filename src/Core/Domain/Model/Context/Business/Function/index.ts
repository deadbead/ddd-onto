import { Business } from "..";
import { Person } from "../../Person";

export type BusinessFunction = Business & {
  name: string;
  manager: Person;
};
