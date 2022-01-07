import { User } from "../../../../Core/Domain/Model/User/User";
import { UniqueUsernameSpecificationInterface } from "../../../../Core/Domain/Model/User/UniqueUsernameSpecificationInterface";
import { TestCase } from "../../../Infrastructure/TestCase";

export class UserTest extends TestCase {
  public test_it_return_false_when_users_are_not_equals(): void {
    const userOne = new User(
      "admin",
      "some_hash",
      this.getUniqueUsernameSpecification()
    );
    const userTwo = new User(
      "admin",
      "some_hash",
      this.getUniqueUsernameSpecification()
    );
    const userThree = new User(
      "admin",
      "some_hash",
      this.getUniqueUsernameSpecification()
    );

    this.setUserId(userOne, 1);
    this.setUserId(userTwo, 2);
    this.setUserId(userThree, 1);

    this.assertFalse(userOne.equals(userTwo));
    this.assertTrue(userOne.equals(userThree));
  }

  private getUniqueUsernameSpecification(): UniqueUsernameSpecificationInterface {
    const specification: UniqueUsernameSpecificationInterface = this.createMock<
      UniqueUsernameSpecificationInterface
    >();

    when(specification.isSatisfiedBy("")).thenReturn(true);
    //specification.method("isSatisfiedBy").willReturn(true);

    return specification;
  }

  private setUserId(user: User, id: number | string): void {
    //$reflection = new \ReflectionClass($user);
    //$property = $reflection->getProperty('id');
    //$property->setAccessible(true);
    //$property->setValue($user, $id);
    user.id = id;
  }
}
