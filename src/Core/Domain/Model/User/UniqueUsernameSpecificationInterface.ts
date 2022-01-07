export interface UniqueUsernameSpecificationInterface {
  isSatisfiedBy(userName: string): boolean;
}
