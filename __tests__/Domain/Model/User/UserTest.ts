import { User } from "../../../../src/Core/Domain/Model/User";
import { UniqueUsernameSpecificationInterface } from "../../../../src/Core/Domain/Model/User/UniqueUsernameSpecificationInterface";
import { TestCase } from "../../../Infrastructure/TestCase";

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
    const specification = this.createMock<UniqueUsernameSpecificationInterface>();
    
    this.addRule(specification.isSatisfiedBy).thenReturn(() => true);

    return specification;
  }

  private setUserId(user: User, id: number | string): void {
    user.id = id;
  }
}

const userTest = new UserTest();
userTest.run();
