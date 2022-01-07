import { Context } from "..";
import { BusinessFunction } from "../Business/Function";
import { Person } from "../Person";

export type Direction = Context & {
  director: Person;
  functions: BusinessFunction[];
};
