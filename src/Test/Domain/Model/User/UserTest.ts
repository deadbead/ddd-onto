import { User } from "../../../../Core/Domain/Model/User/User";
import { UniqueUsernameSpecificationInterface } from "../../../../Core/Domain/Model/User/UniqueUsernameSpecificationInterface";
import { TestCase } from "../../../Infrastructure/TestCase";
import { anyString, instance, mock, when } from "ts-mockito";

export class UserTest extends TestCase {
  run() {
    describe("Domain Model User Test", () => {
      it("throws exception when password to long", () => {
        //$this->expectException(InvalidInputDataException::class);
        //$this->expectDeprecationMessageMatches('/Password should contain at most/');

        new User(
          "admin",
          "x".repeat(User.MAX_PASSWORD_LENGTH + 1),
          this.getUniqueUsernameSpecification()
        );
      });

      it("return false when users are not equals", () => {
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

        this.assertFalse(
          userOne.equals(userTwo),
          "Equals records is not equal"
        );
        this.assertTrue(
          userOne.equals(userThree),
          "Not equals records is equal"
        );
      });
    });
  }

  private getUniqueUsernameSpecification(): UniqueUsernameSpecificationInterface {
    const mockedSpecification = mock<UniqueUsernameSpecificationInterface>();
    const mockInstance = instance(mockedSpecification);

    this.addRule(mockInstance.isSatisfiedBy(anyString())).thenReturn(true);

    return mockInstance;
  }

  private setUserId(user: User, id: number | string): void {
    user.id = id;
  }
}
