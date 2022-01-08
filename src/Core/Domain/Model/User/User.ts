import { InvalidInputDataException } from "../../../../Shared/Domain/Exception/InvalidInputDataException";
import { Aggregate } from "../../../../Shared/Domain/Model/Aggregate";
import { DateTimeImmutable } from "../../../../Shared/Domain/Type/DateTimeImmutable";
import { UniqueUsernameSpecificationInterface } from "./UniqueUsernameSpecificationInterface";

export class User extends Aggregate {
  public static DEFAULT_USER_ROLE = "ROLE_USER";
  public static MAX_USER_NAME_LENGTH = 180;
  public static MAX_PASSWORD_LENGTH = 255;

  /**
   * @ORM\Id()
   * @ORM\GeneratedValue()
   * @ORM\Column(type="integer", options={"unsigned"=true})
   */
  private id: number | string;

  /**
   * @ORM\Column(type="string", length=180, unique=true)
   */
  private username: string;

  /**
   * @var array<int, string>
   *
   * @ORM\Column(type="json", nullable=false)
   */
  private roles: Set<string>;

  /**
   * @ORM\Column(type="string", nullable=false)
   */
  private password: string;

  /**
   * @ORM\Column(type="datetime_immutable", options={"default"="CURRENT_TIMESTAMP"}, nullable=false)
   */
  private createdAt: DateTimeImmutable;

  /**
   * @param string $username
   * @param string $password
   * @param UniqueUsernameSpecificationInterface $uniqueUsernameSpecification
   * @param array|string[] $roles
   */
  constructor(
    username: string,
    password: string,
    uniqueUsernameSpecification: UniqueUsernameSpecificationInterface,
    roles?: Set<string>
  ) {
    super();

    if (typeof roles === "undefined") {
      roles = new Set([User.DEFAULT_USER_ROLE]);
    }
    console.log("uniqueUsernameSpecification=", uniqueUsernameSpecification);
    if (!uniqueUsernameSpecification.isSatisfiedBy(username)) {
      throw new InvalidInputDataException(
        `Username ${username} already exists`
      );
    }

    this.setUsername(username);
    this.setPassword(password);
    this.setRoles(roles);
    this.setCreatedAt(new Date());
  }

  public eraseCredentials(): void {
    //dont need
  }

  public equals(user: User): boolean {
    return user.getId() === this.getId();
  }

  // Getters

  public getId(): number | string {
    return this.id;
  }

  public getUsername(): string {
    return this.username;
  }

  public getRoles(): Set<string> {
    return this.roles;
  }

  public getPassword(): string {
    return this.password;
  }

  public getSalt(): string {
    return "";
  }

  public getCreatedAt(): DateTimeImmutable {
    return this.createdAt;
  }

  // Setters

  private setPassword(password: string): void {
    //Assert::maxLength($password, self::MAX_PASSWORD_LENGTH, 'Password should contain at most %2$s characters. Got: %s');
    this.password = password;
  }

  private setUsername(username: string): void {
    //Assert::maxLength($username, self::MAX_USER_NAME_LENGTH, 'Username should contain at most %2$s characters. Got: %s');
    this.username = username;
  }

  private setCreatedAt(createdAt: DateTimeImmutable): void {
    this.createdAt = createdAt;
  }

  private setRoles(roles: Set<string>): void {
    if (!roles.has(User.DEFAULT_USER_ROLE)) {
      roles.add(User.DEFAULT_USER_ROLE);
    }

    this.roles = roles;
  }
}
