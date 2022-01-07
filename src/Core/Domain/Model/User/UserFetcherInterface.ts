import { User } from "./User";

export interface UserFetcherInterface {
  fetchRequiredUser(): User;
  fetchNullableUser(): User | null;
}
