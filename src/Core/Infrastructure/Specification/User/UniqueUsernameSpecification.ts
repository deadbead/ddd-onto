import { EntityManagerInterface } from "doctrine/orm";
import { UniqueUsernameSpecificationInterface } from "../../../Domain/Model/User/UniqueUsernameSpecificationInterface";

export class UniqueUsernameSpecification
  implements UniqueUsernameSpecificationInterface {
  private em: EntityManagerInterface;

  constructor(em: EntityManagerInterface) {
    this.em = em;
  }

  public isSatisfiedBy(username: string): boolean {
    console.log("isSatisfiedBy=", username, this);
    return true; //TODO check async:  this.em.query.findBy({name: username})
  }
}
