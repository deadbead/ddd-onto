import { User } from ".";

export interface UserFetcherInterface {
  fetchRequiredUser(): User;
  fetchNullableUser(): User | null;
}
